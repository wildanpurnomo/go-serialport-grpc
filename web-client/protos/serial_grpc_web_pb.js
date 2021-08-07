/**
 * @fileoverview gRPC-Web generated client stub for protos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.protos = require('./serial_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.SerialClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.protos.SerialPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protos.Request,
 *   !proto.protos.Response>}
 */
const methodDescriptor_Serial_GetSerialData = new grpc.web.MethodDescriptor(
  '/protos.Serial/GetSerialData',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.protos.Request,
  proto.protos.Response,
  /**
   * @param {!proto.protos.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protos.Request,
 *   !proto.protos.Response>}
 */
const methodInfo_Serial_GetSerialData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protos.Response,
  /**
   * @param {!proto.protos.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protos.Response.deserializeBinary
);


/**
 * @param {!proto.protos.Request} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.protos.Response>}
 *     The XHR Node Readable Stream
 */
proto.protos.SerialClient.prototype.getSerialData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/protos.Serial/GetSerialData',
      request,
      metadata || {},
      methodDescriptor_Serial_GetSerialData);
};


/**
 * @param {!proto.protos.Request} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.protos.Response>}
 *     The XHR Node Readable Stream
 */
proto.protos.SerialPromiseClient.prototype.getSerialData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/protos.Serial/GetSerialData',
      request,
      metadata || {},
      methodDescriptor_Serial_GetSerialData);
};


module.exports = proto.protos;

