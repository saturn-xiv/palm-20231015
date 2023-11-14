package com.github.saturn_xiv.palm.plugins.musa.wechatpay.controllers;

import com.github.saturn_xiv.palm.plugins.musa.models.NginxConf;
import com.samskivert.mustache.Mustache;
import jakarta.validation.constraints.NotBlank;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController("palm.musa.controller.wechat-pay.nginx-conf")
@RequestMapping("/api/wechat-pay/nginx.conf")
@Validated
public class NginxConfigController {

    @GetMapping("/notification")
    public String notification(@NotBlank @RequestParam("domain") String domain) {
        return mustacheCompiler.loadTemplate("nginx-config").execute(new NginxConf(domain, httpPort));
    }

    @Autowired
    Mustache.Compiler mustacheCompiler;
    @Value("${server.port}")
    int httpPort;
}
