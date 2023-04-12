package com.github.saturn_xiv.palm.plugins.musa.helpers;

import org.apache.thrift.TException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component("palm.musa.helper.jwt")
public class JwtHelper {

    public void verify(final String auth) throws TException {
        if (auth.startsWith(BEARER)) {
            var token = auth.substring(BEARER.length());
            var jwt = loquat.jwt();
            var subject = jwt.verify(loquat.token, token, null);
            if (Arrays.asList(clients).contains(subject)) {
                return;
            }
            logger.error("invalid client {}", subject);
        }
        throw new TException("bad jwt token");
    }

    @Value("${app.clients}")
    String[] clients;

    @Autowired
    LoquatClient loquat;

    private final static String BEARER = "Bearer ";
    private final static Logger logger = LoggerFactory.getLogger(JwtHelper.class);
}
