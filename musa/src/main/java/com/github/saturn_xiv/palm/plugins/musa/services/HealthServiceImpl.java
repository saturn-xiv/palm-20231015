package com.github.saturn_xiv.palm.plugins.musa.services;

import com.github.saturn_xiv.palm.plugins.musa.v1.HealthGrpc;
import com.google.protobuf.Empty;
import io.grpc.stub.StreamObserver;
import org.springframework.stereotype.Component;

@Component("palm.musa.service.health")
public class HealthServiceImpl extends HealthGrpc.HealthImplBase {


    @Override
    public void check(Empty request, StreamObserver<Empty> responseObserver) {
        responseObserver.onCompleted();
    }
}
