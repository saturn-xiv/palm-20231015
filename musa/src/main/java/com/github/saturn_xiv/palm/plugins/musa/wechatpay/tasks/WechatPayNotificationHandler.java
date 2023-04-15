package com.github.saturn_xiv.palm.plugins.musa.wechatpay.tasks;

import com.samskivert.mustache.Mustache;
import org.apache.ibatis.jdbc.ScriptRunner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.nio.file.Paths;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class WechatPayNotificationHandler {
    public WechatPayNotificationHandler(String name, String tpl) {
        this.name = name;
        this.tpl = tpl;
    }

    public <T> void execute(T context) throws IOException, SQLException {
        final var root = Paths.get("wechatpay", name);
        logger.info("load from {}", root);
        final var sql = this.sql(root.resolve(this.tpl + "-sql.mustache").toFile(), context);


        final var props = new Properties();
        {
            final var config = root.resolve("datasource.properties").toFile();
            logger.debug("load datasource from {}", config);
            try (var file = new FileInputStream(config)) {
                props.load(file);
            }
        }

        final var url = props.getProperty("url");
        logger.debug("open {}", url);
        try (var db = DriverManager.getConnection(
                url,
                props.getProperty("username"),
                props.getProperty("password"))
        ) {
            logger.debug("{}", sql);
            var script = new ScriptRunner(db);
            script.runScript(new StringReader(sql));
        }
    }

    private <T> String sql(File file, T context) throws IOException {
        logger.debug("load sql template {} for {}", file, context.getClass().getCanonicalName());
        try (var reader = new BufferedReader(new FileReader(file))) {
            var tpl = Mustache.compiler().compile(reader);
            return tpl.execute(context).trim();
        }
    }

    private final String name;
    private final String tpl;
    private final static Logger logger = LoggerFactory.getLogger(WechatPayNotificationHandler.class);
}
