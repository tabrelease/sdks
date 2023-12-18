/**
 * @fileoverview gRPC-Web generated client stub for evaluation_pb
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.20.3
// source: evaluation.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as evaluation_pb from './evaluation_pb'; // proto import: "evaluation.proto"


export class EvaluationClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorListEvaluationFlags = new grpcWeb.MethodDescriptor(
    '/evaluation_pb.Evaluation/ListEvaluationFlags',
    grpcWeb.MethodType.UNARY,
    evaluation_pb.EvaluationInput,
    evaluation_pb.EvaluationList,
    (request: evaluation_pb.EvaluationInput) => {
      return request.serializeBinary();
    },
    evaluation_pb.EvaluationList.deserializeBinary
  );

  listEvaluationFlags(
    request: evaluation_pb.EvaluationInput,
    metadata?: grpcWeb.Metadata | null): Promise<evaluation_pb.EvaluationList>;

  listEvaluationFlags(
    request: evaluation_pb.EvaluationInput,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: evaluation_pb.EvaluationList) => void): grpcWeb.ClientReadableStream<evaluation_pb.EvaluationList>;

  listEvaluationFlags(
    request: evaluation_pb.EvaluationInput,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: evaluation_pb.EvaluationList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/evaluation_pb.Evaluation/ListEvaluationFlags',
        request,
        metadata || {},
        this.methodDescriptorListEvaluationFlags,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/evaluation_pb.Evaluation/ListEvaluationFlags',
    request,
    metadata || {},
    this.methodDescriptorListEvaluationFlags);
  }

}
