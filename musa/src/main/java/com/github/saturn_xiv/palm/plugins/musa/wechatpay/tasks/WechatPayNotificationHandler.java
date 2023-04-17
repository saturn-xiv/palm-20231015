package com.github.saturn_xiv.palm.plugins.musa.wechatpay.tasks;

import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Properties;

public class WechatPayNotificationHandler<T> {
    public WechatPayNotificationHandler(String env, Class<T> clazz) {
        this.env = env;
        this.clazz = clazz;
    }

    public void execute(T context) throws IOException {
        final var props = new Properties();
        {
            final var file = Paths.get("wechatpay", "datasource", env + ".properties").toFile();
            logger.debug("load datasource from {}", file);
            try (var stream = new FileInputStream(file)) {
                props.load(stream);
            }
        }

        try (var config = new FileInputStream("mybatis-config.xml")) {
            var factory = new SqlSessionFactoryBuilder().build(config, props);
            try (var session = factory.openSession(false)) {
                final var statement = clazz.getCanonicalName() + "Mapper.callback";
                logger.debug("run statement {}", statement);
                session.update(statement, context);
                session.commit();
            }
        }
    }


    private final String env;
    private final Class<T> clazz;
    private final static Logger logger = LoggerFactory.getLogger(WechatPayNotificationHandler.class);
}
