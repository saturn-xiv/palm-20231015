import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as orchid_pb from './orchid_pb';


export class AesClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  encrypt(
    request: orchid_pb.AesPlainMessage,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: orchid_pb.AesCodeMessage) => void
  ): grpcWeb.ClientReadableStream<orchid_pb.AesCodeMessage>;

  decrypt(
    request: orchid_pb.AesCodeMessage,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: orchid_pb.AesPlainMessage) => void
  ): grpcWeb.ClientReadableStream<orchid_pb.AesPlainMessage>;

}

export class HMacClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sign(
    request: orchid_pb.HMacSignRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: orchid_pb.HMacSignResponse) => void
  ): grpcWeb.ClientReadableStream<orchid_pb.HMacSignResponse>;

  verify(
    request: orchid_pb.HMacVerifyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class JwtClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sign(
    request: orchid_pb.JwtSignRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: orchid_pb.JwtSignResponse) => void
  ): grpcWeb.ClientReadableStream<orchid_pb.JwtSignResponse>;

  verify(
    request: orchid_pb.JwtVerifyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: orchid_pb.JwtVerifyResponse) => void
  ): grpcWeb.ClientReadableStream<orchid_pb.JwtVerifyResponse>;

}

export class AesPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  encrypt(
    request: orchid_pb.AesPlainMessage,
    metadata?: grpcWeb.Metadata
  ): Promise<orchid_pb.AesCodeMessage>;

  decrypt(
    request: orchid_pb.AesCodeMessage,
    metadata?: grpcWeb.Metadata
  ): Promise<orchid_pb.AesPlainMessage>;

}

export class HMacPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sign(
    request: orchid_pb.HMacSignRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<orchid_pb.HMacSignResponse>;

  verify(
    request: orchid_pb.HMacVerifyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

export class JwtPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sign(
    request: orchid_pb.JwtSignRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<orchid_pb.JwtSignResponse>;

  verify(
    request: orchid_pb.JwtVerifyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<orchid_pb.JwtVerifyResponse>;

}

