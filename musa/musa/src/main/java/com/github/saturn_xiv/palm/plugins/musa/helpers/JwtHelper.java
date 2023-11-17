package com.github.saturn_xiv.palm.plugins.musa.helpers;

import com.github.saturn_xiv.palm.plugins.loquat.v1.Jwt;
import com.google.gson.Gson;
import jakarta.validation.constraints.NotNull;
import org.apache.thrift.TException;
import org.apache.thrift.transport.TTransportException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.time.Duration;

@Component("palm.musa.helper.jwt")
public class JwtHelper {

    public <T> T verify(@NotNull final String token, final String subject, Class<T> clazz) throws TException {
        var payload = jwt.verify(loquat.appId, token, ISSUER, subject, AUDIENCE);
        return gson.fromJson(payload, clazz);
    }

    public <T> String sign(final String subject, final Duration ttl, T object) throws TException {
//        LocalDate today = LocalDate.now();
//        LocalDate exp = today.plusYears(years);
//        TimeUnit.SECONDS.convert(ChronoUnit.DAYS.between(today, exp), TimeUnit.DAYS)
        return jwt.sign(
                loquat.appId,
                ISSUER,
                subject,
                AUDIENCE,
                ttl.toSeconds(),
                gson.toJson(object)
        );
    }

    @PostConstruct
    void init() throws TTransportException {
        gson = new Gson();
        jwt = loquat.jwt();
    }

    @Autowired
    LoquatClient loquat;

    private Gson gson;
    private Jwt.Client jwt;

    private final static String AUDIENCE = "musa";
    private final static String ISSUER = "loquat";
    private final static Logger logger = LoggerFactory.getLogger(JwtHelper.class);
}
