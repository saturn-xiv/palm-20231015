package com.github.saturn_xiv.palm.plugins.musa;


import com.github.saturn_xiv.palm.plugins.musa.helpers.JwtHelper;
import com.github.saturn_xiv.palm.plugins.musa.helpers.QueueHelper;
import com.github.saturn_xiv.palm.plugins.musa.models.NginxConf;
import com.google.gson.Gson;
import com.samskivert.mustache.Mustache;
import com.wechat.pay.java.service.payments.model.Transaction;
import com.wechat.pay.java.service.refund.model.RefundNotification;
import com.wechat.pay.java.service.refund.model.Status;
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.thrift.TException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;
import org.springframework.shell.standard.ShellOption;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.time.Duration;
import java.util.stream.IntStream;

@ShellComponent
public class ShellCommand {

    @ShellMethod("Ping wechat-pay notification")
    public void pingWechatPayNotification(@ShellOption(defaultValue = "1") int count) {
        IntStream.range(1, count + 1).forEachOrdered(i -> {

            Gson gson = new Gson();
            try {
                Thread.sleep(Duration.ofSeconds(2));
            } catch (InterruptedException e) {
                logger.error("", e);
            }

            {
                logger.info("publish {} notification {}", Transaction.class, i);
                final var it = new Transaction();
                it.setOutTradeNo(RandomStringUtils.randomAlphabetic(32).toUpperCase());
                it.setTradeState(Transaction.TradeStateEnum.NOTPAY);
                final var resource = gson.toJson(it);
                queueHelper.publish(RabbitmqConfiguration.WECHAT_PAY_TRANSACTION,
                        MediaType.APPLICATION_JSON, resource.getBytes());
            }
            try {
                Thread.sleep(Duration.ofSeconds(2));
            } catch (InterruptedException e) {
                logger.error("", e);
            }
            {
                logger.info("publish {} notification {}", RefundNotification.class, i);
                final var it = new RefundNotification();
                it.setOutRefundNo(RandomStringUtils.randomAlphabetic(64).toUpperCase());
                it.setRefundStatus(Status.ABNORMAL);

                final var resource = gson.toJson(it);
                queueHelper.publish(RabbitmqConfiguration.WECHAT_PAY_REFUND,
                        MediaType.APPLICATION_JSON, resource.getBytes());
            }
        });
    }

    @ShellMethod("Generate nginx.conf")
    public void nginxConf(String domain) throws IOException {
        final var file = domain + ".conf";
        if (new File(file).exists()) {
            logger.error("file {} already exists", file);
            return;
        }
        logger.info("generate file {}", file);
        try (var writer = new BufferedWriter(new FileWriter(file))) {
            mustacheCompiler.loadTemplate("nginx-config").execute(new NginxConf(domain, httpPort), writer);
        }

    }

    @ShellMethod("Generate a token")
    public String generateToken(String subject, int years) throws TException {
        logger.info("generate token to {}@{} for {} years", subject, jwtHelper.AUDIENCE, years);
        return jwtHelper.sign(subject, years);
    }

    @ShellMethod("Start a gRPC server")
    public void rpc() throws InterruptedException {
        rpcServer.run();
    }

    @Autowired
    RpcServer rpcServer;
    @Autowired
    JwtHelper jwtHelper;
    @Autowired
    Mustache.Compiler mustacheCompiler;
    @Autowired
    QueueHelper queueHelper;
    @Value("${server.port}")
    int httpPort;

    private final static Logger logger = LoggerFactory.getLogger(ShellCommand.class);

}
