package com.github.saturn_xiv.palm.plugins.musa;

import io.grpc.*;
import io.grpc.health.v1.HealthCheckRequest;
import io.grpc.health.v1.HealthGrpc;
import io.grpc.stub.MetadataUtils;
import org.apache.commons.io.FileUtils;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.TimeUnit;

public class RpcTests {


    @Test
    void healthCheckPlain() throws InterruptedException {
        var channel = ManagedChannelBuilder.forAddress(host, port).usePlaintext().build();
        try {
            var stub = HealthGrpc.newBlockingStub(channel);
            var req = HealthCheckRequest.getDefaultInstance();
            Assertions.assertThrows(StatusRuntimeException.class, () -> stub.check(req), "connection as plain mode");

        } finally {
            channel.shutdownNow().awaitTermination(5, TimeUnit.SECONDS);
        }

    }

    @Test
    void healthCheckTls() throws InterruptedException, IOException {

        var credentials = TlsChannelCredentials.newBuilder()
                .keyManager(new File("tmp/dev.crt"), new File("tmp/dev.key"))
                .trustManager(new File("tmp/ca.crt"))
                .build();
        var channel = Grpc.newChannelBuilderForAddress(host, port, credentials)
                .overrideAuthority(FileUtils.readFileToString(
                        new File("tmp/dev.srv"),
                        StandardCharsets.UTF_8).trim())
                .build();
        var header = new Metadata();
        // TokenServerInterceptor.TOKEN.get()
        header.put(Metadata.Key.of("Authorization", Metadata.ASCII_STRING_MARSHALLER), "Bearer nil");
        var interceptor = MetadataUtils.newAttachHeadersInterceptor(header);
        try {
            var stub = HealthGrpc.newBlockingStub(channel).withInterceptors(interceptor);
            var req = HealthCheckRequest.getDefaultInstance();
            var res = stub.check(req);
            System.out.println("health check status: " + res.getStatus());
            res.getAllFields().forEach((k, v) -> System.out.println(k.getName() + " = " + v.toString()));
        } finally {
            channel.shutdownNow().awaitTermination(5, TimeUnit.SECONDS);
        }

    }

    final String host = "127.0.0.1";
    final int port = 18080;
}
