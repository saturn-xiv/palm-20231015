package com.github.saturn_xiv.palm.plugins.musa.helpers;

import org.apache.thrift.TException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.Period;
import java.util.Arrays;
import java.util.concurrent.TimeUnit;

@Component("palm.musa.helper.jwt")
public class JwtHelper {

    public String verify(final String auth) throws TException {
        if (auth.startsWith(BEARER)) {
            var token = auth.substring(BEARER.length());
            var jwt = loquat.jwt();
            var subject = jwt.verify(loquat.token, token, AUDIENCE);
            if (Arrays.asList(clients).contains(subject)) {
                return subject;
            }
            logger.error("invalid client {}", subject);
        }
        throw new TException("bad jwt token");
    }

    public String sign(final String subject, final int years) throws TException {
        var jwt = loquat.jwt();
        var ttl = TimeUnit.SECONDS.convert(Period.ofYears(years).getDays(), TimeUnit.DAYS);
        return jwt.sign(loquat.token, subject, AUDIENCE, ttl);
    }

    @Value("${app.clients}")
    String[] clients;

    @Autowired
    LoquatClient loquat;

    private final static String BEARER = "Bearer ";
    public final String AUDIENCE = getClass().getPackage().getImplementationTitle();
    private final static Logger logger = LoggerFactory.getLogger(JwtHelper.class);
}
