package com.github.saturn_xiv.palm.plugins.musa;

import org.apache.poi.openxml4j.util.ZipSecureFile;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class Application implements CommandLineRunner {

    @Override
    public void run(String... args) throws Exception {

    }

    public static void main(String[] args) {
        ZipSecureFile.setMinInflateRatio(0);

        SpringApplication.run(Application.class, args);
    }

}
