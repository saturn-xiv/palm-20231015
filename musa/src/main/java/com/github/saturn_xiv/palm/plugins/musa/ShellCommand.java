package com.github.saturn_xiv.palm.plugins.musa;


import com.github.saturn_xiv.palm.plugins.musa.helpers.JwtHelper;
import org.apache.thrift.TException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

@ShellComponent
public class ShellCommand {

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

    private final static Logger logger = LoggerFactory.getLogger(ShellCommand.class);

}
