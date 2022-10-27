import * as jspb from 'google-protobuf'



export class IdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): IdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IdRequest): IdRequest.AsObject;
  static serializeBinaryToWriter(message: IdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdRequest;
  static deserializeBinaryFromReader(message: IdRequest, reader: jspb.BinaryReader): IdRequest;
}

export namespace IdRequest {
  export type AsObject = {
    id: number,
  }
}

export class Pager extends jspb.Message {
  getPage(): number;
  setPage(value: number): Pager;

  getSize(): number;
  setSize(value: number): Pager;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pager.AsObject;
  static toObject(includeInstance: boolean, msg: Pager): Pager.AsObject;
  static serializeBinaryToWriter(message: Pager, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pager;
  static deserializeBinaryFromReader(message: Pager, reader: jspb.BinaryReader): Pager;
}

export namespace Pager {
  export type AsObject = {
    page: number,
    size: number,
  }
}

export class Pagination extends jspb.Message {
  getPage(): number;
  setPage(value: number): Pagination;

  getSize(): number;
  setSize(value: number): Pagination;

  getTotal(): number;
  setTotal(value: number): Pagination;

  getHasNext(): boolean;
  setHasNext(value: boolean): Pagination;

  getHasPrevious(): boolean;
  setHasPrevious(value: boolean): Pagination;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pagination.AsObject;
  static toObject(includeInstance: boolean, msg: Pagination): Pagination.AsObject;
  static serializeBinaryToWriter(message: Pagination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pagination;
  static deserializeBinaryFromReader(message: Pagination, reader: jspb.BinaryReader): Pagination;
}

export namespace Pagination {
  export type AsObject = {
    page: number,
    size: number,
    total: number,
    hasNext: boolean,
    hasPrevious: boolean,
  }
}

export class MediaContent extends jspb.Message {
  getEditor(): MediaContent.Editor;
  setEditor(value: MediaContent.Editor): MediaContent;

  getBody(): string;
  setBody(value: string): MediaContent;

  getStatus(): MediaContent.Status;
  setStatus(value: MediaContent.Status): MediaContent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaContent.AsObject;
  static toObject(includeInstance: boolean, msg: MediaContent): MediaContent.AsObject;
  static serializeBinaryToWriter(message: MediaContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaContent;
  static deserializeBinaryFromReader(message: MediaContent, reader: jspb.BinaryReader): MediaContent;
}

export namespace MediaContent {
  export type AsObject = {
    editor: MediaContent.Editor,
    body: string,
    status: MediaContent.Status,
  }

  export enum Editor { 
    TEXTAREA = 0,
    QUILL = 1,
  }

  export enum Status { 
    PUBLISH = 0,
    DRAFT = 1,
    PENDING = 2,
    PRIVATE = 3,
    FUTURE = 4,
    TRASH = 99,
  }
}

export class SmtpProfile extends jspb.Message {
  getHost(): string;
  setHost(value: string): SmtpProfile;

  getPort(): number;
  setPort(value: number): SmtpProfile;

  getUser(): string;
  setUser(value: string): SmtpProfile;

  getPassword(): string;
  setPassword(value: string): SmtpProfile;

  getCc(): string;
  setCc(value: string): SmtpProfile;

  getBcc(): string;
  setBcc(value: string): SmtpProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmtpProfile.AsObject;
  static toObject(includeInstance: boolean, msg: SmtpProfile): SmtpProfile.AsObject;
  static serializeBinaryToWriter(message: SmtpProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmtpProfile;
  static deserializeBinaryFromReader(message: SmtpProfile, reader: jspb.BinaryReader): SmtpProfile;
}

export namespace SmtpProfile {
  export type AsObject = {
    host: string,
    port: number,
    user: string,
    password: string,
    cc: string,
    bcc: string,
  }
}

export class SmsTask extends jspb.Message {
  getFrom(): string;
  setFrom(value: string): SmsTask;

  getToList(): Array<string>;
  setToList(value: Array<string>): SmsTask;
  clearToList(): SmsTask;
  addTo(value: string, index?: number): SmsTask;

  getBody(): string;
  setBody(value: string): SmsTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsTask.AsObject;
  static toObject(includeInstance: boolean, msg: SmsTask): SmsTask.AsObject;
  static serializeBinaryToWriter(message: SmsTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsTask;
  static deserializeBinaryFromReader(message: SmsTask, reader: jspb.BinaryReader): SmsTask;
}

export namespace SmsTask {
  export type AsObject = {
    from: string,
    toList: Array<string>,
    body: string,
  }
}

export class EmailTask extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): EmailTask;

  getBody(): string;
  setBody(value: string): EmailTask;

  getContentType(): EmailTask.ContentType;
  setContentType(value: EmailTask.ContentType): EmailTask;

  getTo(): string;
  setTo(value: string): EmailTask;

  getCcList(): Array<string>;
  setCcList(value: Array<string>): EmailTask;
  clearCcList(): EmailTask;
  addCc(value: string, index?: number): EmailTask;

  getBccList(): Array<string>;
  setBccList(value: Array<string>): EmailTask;
  clearBccList(): EmailTask;
  addBcc(value: string, index?: number): EmailTask;

  getAttachmentsList(): Array<EmailTask.Attachment>;
  setAttachmentsList(value: Array<EmailTask.Attachment>): EmailTask;
  clearAttachmentsList(): EmailTask;
  addAttachments(value?: EmailTask.Attachment, index?: number): EmailTask.Attachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailTask.AsObject;
  static toObject(includeInstance: boolean, msg: EmailTask): EmailTask.AsObject;
  static serializeBinaryToWriter(message: EmailTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailTask;
  static deserializeBinaryFromReader(message: EmailTask, reader: jspb.BinaryReader): EmailTask;
}

export namespace EmailTask {
  export type AsObject = {
    subject: string,
    body: string,
    contentType: EmailTask.ContentType,
    to: string,
    ccList: Array<string>,
    bccList: Array<string>,
    attachmentsList: Array<EmailTask.Attachment.AsObject>,
  }

  export class Attachment extends jspb.Message {
    getName(): string;
    setName(value: string): Attachment;

    getContentType(): EmailTask.ContentType;
    setContentType(value: EmailTask.ContentType): Attachment;

    getPayload(): Uint8Array | string;
    getPayload_asU8(): Uint8Array;
    getPayload_asB64(): string;
    setPayload(value: Uint8Array | string): Attachment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Attachment.AsObject;
    static toObject(includeInstance: boolean, msg: Attachment): Attachment.AsObject;
    static serializeBinaryToWriter(message: Attachment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Attachment;
    static deserializeBinaryFromReader(message: Attachment, reader: jspb.BinaryReader): Attachment;
  }

  export namespace Attachment {
    export type AsObject = {
      name: string,
      contentType: EmailTask.ContentType,
      payload: Uint8Array | string,
    }
  }


  export enum ContentType { 
    TEXT_PLAIN = 0,
    TEXT_HTML = 1,
  }
}

export class MinioProfile extends jspb.Message {
  getRegion(): string;
  setRegion(value: string): MinioProfile;
  hasRegion(): boolean;
  clearRegion(): MinioProfile;

  getHost(): string;
  setHost(value: string): MinioProfile;

  getSecure(): boolean;
  setSecure(value: boolean): MinioProfile;

  getAccessKeyId(): string;
  setAccessKeyId(value: string): MinioProfile;

  getSecretAccessKey(): string;
  setSecretAccessKey(value: string): MinioProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinioProfile.AsObject;
  static toObject(includeInstance: boolean, msg: MinioProfile): MinioProfile.AsObject;
  static serializeBinaryToWriter(message: MinioProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinioProfile;
  static deserializeBinaryFromReader(message: MinioProfile, reader: jspb.BinaryReader): MinioProfile;
}

export namespace MinioProfile {
  export type AsObject = {
    region?: string,
    host: string,
    secure: boolean,
    accessKeyId: string,
    secretAccessKey: string,
  }

  export enum RegionCase { 
    _REGION_NOT_SET = 0,
    REGION = 1,
  }
}

