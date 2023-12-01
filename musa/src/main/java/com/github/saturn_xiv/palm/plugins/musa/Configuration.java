package com.github.saturn_xiv.palm.plugins.musa;

import org.springframework.context.annotation.Bean;

import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

@org.springframework.context.annotation.Configuration
public class Configuration {
    @Bean(destroyMethod = "shutdown")
    public Executor taskExecutor() {
        return Executors.newScheduledThreadPool(20);
    }

}
