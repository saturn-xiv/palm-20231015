package com.github.saturn_xiv.palm.plugins.musa.interceptors;

import io.grpc.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component("palm.musa.interceptor.token")
public class TokenServerInterceptor implements ServerInterceptor {


    @Override
    public <ReqT, RespT> ServerCall.Listener<ReqT> interceptCall(ServerCall<ReqT, RespT> call, Metadata headers, ServerCallHandler<ReqT, RespT> next) {
        logger.debug("receive following metadata: {}", headers);
        return next.startCall(call, headers);
    }

    // https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md
    public static final Context.Key<String> AUTHORIZATION = Context.key("authorization");

    private final static Logger logger = LoggerFactory.getLogger(TokenServerInterceptor.class);

}
