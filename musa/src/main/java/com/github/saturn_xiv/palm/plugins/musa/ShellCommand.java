package com.github.saturn_xiv.palm.plugins.musa;


import com.github.saturn_xiv.palm.plugins.musa.helpers.JwtHelper;
import com.github.saturn_xiv.palm.plugins.musa.models.NginxConf;
import com.samskivert.mustache.Mustache;
import org.apache.thrift.TException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

@ShellComponent
public class ShellCommand {

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
    @Value("${server.port}")
    int httpPort;

    private final static Logger logger = LoggerFactory.getLogger(ShellCommand.class);

}
