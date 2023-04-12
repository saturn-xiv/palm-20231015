package com.github.saturn_xiv.palm.plugins.musa.services;

import com.github.saturn_xiv.palm.plugins.musa.helpers.JwtHelper;
import com.github.saturn_xiv.palm.plugins.musa.interceptors.TokenServerInterceptor;
import com.github.saturn_xiv.palm.plugins.musa.v1.HealthGrpc;
import com.google.protobuf.Empty;
import io.grpc.stub.StreamObserver;
import org.apache.thrift.TException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("palm.musa.service.health")
public class HealthServiceImpl extends HealthGrpc.HealthImplBase {


    @Override
    public void check(Empty request, StreamObserver<Empty> responseObserver) {
        try {
            var auth = TokenServerInterceptor.AUTHORIZATION.get();
            var subject = jwt.verify(auth);
            logger.info("health check from {}", subject);
        } catch (TException e) {
            responseObserver.onError(e);
            return;
        }
        responseObserver.onCompleted();
    }


    @Autowired
    JwtHelper jwt;
    private final static Logger logger = LoggerFactory.getLogger(HealthServiceImpl.class);
}
