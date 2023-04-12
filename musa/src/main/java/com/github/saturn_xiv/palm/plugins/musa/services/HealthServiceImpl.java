package com.github.saturn_xiv.palm.plugins.musa.services;

import com.github.saturn_xiv.palm.plugins.musa.helpers.JwtHelper;
import com.github.saturn_xiv.palm.plugins.musa.interceptors.TokenServerInterceptor;
import com.github.saturn_xiv.palm.plugins.musa.v1.HealthGrpc;
import com.google.protobuf.Empty;
import com.google.rpc.Code;
import com.google.rpc.Status;
import io.grpc.protobuf.StatusProto;
import io.grpc.stub.StreamObserver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("palm.musa.service.health")
public class HealthServiceImpl extends HealthGrpc.HealthImplBase {


    @Override
    public void check(Empty request, StreamObserver<Empty> responseObserver) {
        try {
            var token = TokenServerInterceptor.TOKEN.get();
            logger.debug("get token {}", token);
            var subject = jwt.verify(token);

            logger.info("health check from {}", subject);

            responseObserver.onNext(Empty.newBuilder().build());
            responseObserver.onCompleted();
        } catch (Exception e) {
            Status status = Status.newBuilder().setCode(Code.INTERNAL.getNumber()).setMessage(e.getMessage()).build();
            responseObserver.onError(StatusProto.toStatusException(status));
            logger.error("health check", e);
        }
    }

    @Autowired
    JwtHelper jwt;
    private final static Logger logger = LoggerFactory.getLogger(HealthServiceImpl.class);
}
