package com.github.saturn_xiv.palm.plugins.musa.interceptors;

import com.wechat.pay.java.core.exception.ServiceException;
import io.grpc.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component("palm.musa.interceptor.exception")
public class ExceptionServerInterceptor implements ServerInterceptor {
    @Override
    public <ReqT, RespT> ServerCall.Listener<ReqT> interceptCall(ServerCall<ReqT, RespT> call, Metadata headers, ServerCallHandler<ReqT, RespT> next) {
        var delegate = next.startCall(call, headers);
        return new ForwardingServerCallListener.SimpleForwardingServerCallListener<>(delegate) {
            @Override
            public void onHalfClose() {
                try {
                    super.onHalfClose();
                } catch (IllegalArgumentException e) {
                    call.close(Status.INVALID_ARGUMENT.withCause(e).withDescription(e.getMessage()), new Metadata());
                } catch (ServiceException e) {
                    logger.error("{} {}", e.getErrorCode(), e.getErrorMessage());
                    call.close(Status.INTERNAL.withCause(e).withDescription(e.getErrorMessage()), new Metadata());
                }
            }
        };
    }

    private final static Logger logger = LoggerFactory.getLogger(ExceptionServerInterceptor.class);
}
