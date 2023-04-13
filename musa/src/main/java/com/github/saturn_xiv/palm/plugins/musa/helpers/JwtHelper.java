package com.github.saturn_xiv.palm.plugins.musa.helpers;

import jakarta.validation.constraints.NotNull;
import org.apache.thrift.TException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.concurrent.TimeUnit;

@Component("palm.musa.helper.jwt")
public class JwtHelper {

    public String verify(@NotNull final String token) throws IllegalArgumentException {
//        var jwt = loquat.jwt();
//        var subject = jwt.verify(loquat.token, token, AUDIENCE);
//        if (Arrays.asList(clients).contains(subject)) {
//            return subject;
//        }
//        throw new IllegalArgumentException("invalid client " + subject);

        return "";
    }

    public String sign(final String subject, final int years) throws TException {
        var jwt = loquat.jwt();

        LocalDate today = LocalDate.now();
        LocalDate exp = today.plusYears(years);
        return jwt.sign(
                loquat.token,
                subject,
                AUDIENCE,
                TimeUnit.SECONDS.convert(ChronoUnit.DAYS.between(today, exp), TimeUnit.DAYS)
        );
    }

    @Value("${app.clients}")
    String[] clients;

    @Autowired
    LoquatClient loquat;


    public final String AUDIENCE = getClass().getPackage().getImplementationTitle();
    private final static Logger logger = LoggerFactory.getLogger(JwtHelper.class);
}
