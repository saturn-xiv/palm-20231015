package com.github.saturn_xiv.palm.plugins.musa.helpers;

import com.github.saturn_xiv.palm.plugins.loquat.v1.Aes;
import com.github.saturn_xiv.palm.plugins.loquat.v1.Health;
import com.github.saturn_xiv.palm.plugins.loquat.v1.Hmac;
import com.github.saturn_xiv.palm.plugins.loquat.v1.Jwt;
import org.apache.thrift.protocol.TBinaryProtocol;
import org.apache.thrift.protocol.TMultiplexedProtocol;
import org.apache.thrift.protocol.TProtocol;
import org.apache.thrift.transport.TSSLTransportFactory;
import org.apache.thrift.transport.TTransport;
import org.apache.thrift.transport.TTransportException;
import org.apache.thrift.transport.layered.TFramedTransport;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component("palm.musa.helper.loquat")
public class LoquatClient {

    public Jwt.Client jwt() throws TTransportException {
        return new Jwt.Client(open(JWT));
    }

    public Aes.Client aes() throws TTransportException {
        return new Aes.Client(open(AES));
    }

    public Hmac.Client hmac() throws TTransportException {
        return new Hmac.Client(open(HMAC));
    }

    public Health.Client health() throws TTransportException {
        return new Health.Client(open(HEALTH));
    }

    private TProtocol open(String service) throws TTransportException {
        TSSLTransportFactory.TSSLTransportParameters parameters = new TSSLTransportFactory.TSSLTransportParameters();
        parameters.setTrustStore(trustStorePath, certPassword);
        TTransport transport = new TFramedTransport(TSSLTransportFactory.getClientSocket(host, port, 0, parameters));
        TProtocol protocol = new TBinaryProtocol(transport);
        transport.open();
        return new TMultiplexedProtocol(protocol, service);
    }


    @Value("${app.loquat.app-id}")
    String appId;
    @Value("${app.loquat.host}")
    String host;
    @Value("${app.loquat.port}")
    int port;
    @Value("${app.loquat.trust-store-path}")
    String trustStorePath;
    @Value("${app.loquat.cert-password}")
    String certPassword;

    private final static String JWT = "N6loquat10JwtHandlerE";
    private final static String AES = "N6loquat10AesHandlerE";
    private final static String HMAC = "N6loquat11HmacHandlerE";
    private final static String HEALTH = "N6loquat13HealthHandlerE";
}
