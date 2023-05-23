import * as jspb from 'google-protobuf'



export class Order extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
  }

  export enum Status { 
    VOIDED = 0,
    PENDING = 1,
    PROCESSING = 2,
    SHIPED = 3,
    COMPLETE = 4,
    CANCELED = 5,
    DENIED = 6,
    CANCELEDREVERSAL = 7,
    FAILED = 8,
    REFUNDED = 9,
    REVERSED = 10,
    CHARGEBACK = 11,
    EXPIRED = 12,
    PROCESSED = 13,
  }
}

