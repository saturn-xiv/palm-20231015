package com.github.saturn_xiv.palm.plugins.musa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.io.IOException;

@SpringBootApplication
@EnableScheduling
public class Application {


    public static void main(String[] args) throws IOException, InterruptedException {
        var app = SpringApplication.run(Application.class, args);

        var server = app.getBean(RpcServer.class);
        server.run();
    }

}
