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

        String auth = headers.get(AUTHORIZATION);
        if (auth != null && auth.startsWith(BEARER)) {
            var token = auth.substring(BEARER.length());
            Context context = Context.current().withValue(TOKEN, token);
            return Contexts.interceptCall(context, call, headers, next);
        }
        return next.startCall(call, headers);
    }


    public static final Context.Key<String> TOKEN = Context.key("token");

    // https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md
    private static final Metadata.Key<String> AUTHORIZATION =
            Metadata.Key.of("authorization", Metadata.ASCII_STRING_MARSHALLER);
    private final static String BEARER = "Bearer ";

    private final static Logger logger = LoggerFactory.getLogger(TokenServerInterceptor.class);


}
