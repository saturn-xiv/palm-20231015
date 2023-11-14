import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as nut_pb from './nut_pb'; // proto import: "nut.proto"
import * as auth_pb from './auth_pb'; // proto import: "auth.proto"


export class IndexNotificationResponse extends jspb.Message {
  getItemsList(): Array<IndexNotificationResponse.Item>;
  setItemsList(value: Array<IndexNotificationResponse.Item>): IndexNotificationResponse;
  clearItemsList(): IndexNotificationResponse;
  addItems(value?: IndexNotificationResponse.Item, index?: number): IndexNotificationResponse.Item;

  getPagination(): nut_pb.Pagination | undefined;
  setPagination(value?: nut_pb.Pagination): IndexNotificationResponse;
  hasPagination(): boolean;
  clearPagination(): IndexNotificationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IndexNotificationResponse): IndexNotificationResponse.AsObject;
  static serializeBinaryToWriter(message: IndexNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexNotificationResponse;
  static deserializeBinaryFromReader(message: IndexNotificationResponse, reader: jspb.BinaryReader): IndexNotificationResponse;
}

export namespace IndexNotificationResponse {
  export type AsObject = {
    itemsList: Array<IndexNotificationResponse.Item.AsObject>,
    pagination?: nut_pb.Pagination.AsObject,
  }

  export class Item extends jspb.Message {
    getEmail(): EmailTask | undefined;
    setEmail(value?: EmailTask): Item;
    hasEmail(): boolean;
    clearEmail(): Item;

    getSms(): SmsTask | undefined;
    setSms(value?: SmsTask): Item;
    hasSms(): boolean;
    clearSms(): Item;

    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasCreatedAt(): boolean;
    clearCreatedAt(): Item;

    getMessageCase(): Item.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      email?: EmailTask.AsObject,
      sms?: SmsTask.AsObject,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum MessageCase { 
      MESSAGE_NOT_SET = 0,
      EMAIL = 1,
      SMS = 2,
    }
  }

}

export class LeaveWordIndexResponse extends jspb.Message {
  getItemsList(): Array<LeaveWordIndexResponse.Item>;
  setItemsList(value: Array<LeaveWordIndexResponse.Item>): LeaveWordIndexResponse;
  clearItemsList(): LeaveWordIndexResponse;
  addItems(value?: LeaveWordIndexResponse.Item, index?: number): LeaveWordIndexResponse.Item;

  getPagination(): nut_pb.Pagination | undefined;
  setPagination(value?: nut_pb.Pagination): LeaveWordIndexResponse;
  hasPagination(): boolean;
  clearPagination(): LeaveWordIndexResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveWordIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveWordIndexResponse): LeaveWordIndexResponse.AsObject;
  static serializeBinaryToWriter(message: LeaveWordIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveWordIndexResponse;
  static deserializeBinaryFromReader(message: LeaveWordIndexResponse, reader: jspb.BinaryReader): LeaveWordIndexResponse;
}

export namespace LeaveWordIndexResponse {
  export type AsObject = {
    itemsList: Array<LeaveWordIndexResponse.Item.AsObject>,
    pagination?: nut_pb.Pagination.AsObject,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getLang(): string;
    setLang(value: string): Item;

    getIp(): string;
    setIp(value: string): Item;

    getContent(): nut_pb.MediaContent | undefined;
    setContent(value?: nut_pb.MediaContent): Item;
    hasContent(): boolean;
    clearContent(): Item;

    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasUpdatedAt(): boolean;
    clearUpdatedAt(): Item;

    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasCreatedAt(): boolean;
    clearCreatedAt(): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      id: number,
      lang: string,
      ip: string,
      content?: nut_pb.MediaContent.AsObject,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class IndexNowProfile extends jspb.Message {
  getKey(): string;
  setKey(value: string): IndexNowProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexNowProfile.AsObject;
  static toObject(includeInstance: boolean, msg: IndexNowProfile): IndexNowProfile.AsObject;
  static serializeBinaryToWriter(message: IndexNowProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexNowProfile;
  static deserializeBinaryFromReader(message: IndexNowProfile, reader: jspb.BinaryReader): IndexNowProfile;
}

export namespace IndexNowProfile {
  export type AsObject = {
    key: string,
  }
}

export class IndexNowPingRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): IndexNowPingRequest;

  getHome(): string;
  setHome(value: string): IndexNowPingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexNowPingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IndexNowPingRequest): IndexNowPingRequest.AsObject;
  static serializeBinaryToWriter(message: IndexNowPingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexNowPingRequest;
  static deserializeBinaryFromReader(message: IndexNowPingRequest, reader: jspb.BinaryReader): IndexNowPingRequest;
}

export namespace IndexNowPingRequest {
  export type AsObject = {
    key: string,
    home: string,
  }
}

export class SitemapPingRequest extends jspb.Message {
  getHome(): string;
  setHome(value: string): SitemapPingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SitemapPingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SitemapPingRequest): SitemapPingRequest.AsObject;
  static serializeBinaryToWriter(message: SitemapPingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SitemapPingRequest;
  static deserializeBinaryFromReader(message: SitemapPingRequest, reader: jspb.BinaryReader): SitemapPingRequest;
}

export namespace SitemapPingRequest {
  export type AsObject = {
    home: string,
  }
}

export class SiteMaintenanceModeRequest extends jspb.Message {
  getTtl(): google_protobuf_duration_pb.Duration | undefined;
  setTtl(value?: google_protobuf_duration_pb.Duration): SiteMaintenanceModeRequest;
  hasTtl(): boolean;
  clearTtl(): SiteMaintenanceModeRequest;

  getReason(): string;
  setReason(value: string): SiteMaintenanceModeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteMaintenanceModeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteMaintenanceModeRequest): SiteMaintenanceModeRequest.AsObject;
  static serializeBinaryToWriter(message: SiteMaintenanceModeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteMaintenanceModeRequest;
  static deserializeBinaryFromReader(message: SiteMaintenanceModeRequest, reader: jspb.BinaryReader): SiteMaintenanceModeRequest;
}

export namespace SiteMaintenanceModeRequest {
  export type AsObject = {
    ttl?: google_protobuf_duration_pb.Duration.AsObject,
    reason: string,
  }
}

export class SiteInstallRequest extends jspb.Message {
  getUser(): auth_pb.UserSignUpRequest | undefined;
  setUser(value?: auth_pb.UserSignUpRequest): SiteInstallRequest;
  hasUser(): boolean;
  clearUser(): SiteInstallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteInstallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteInstallRequest): SiteInstallRequest.AsObject;
  static serializeBinaryToWriter(message: SiteInstallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteInstallRequest;
  static deserializeBinaryFromReader(message: SiteInstallRequest, reader: jspb.BinaryReader): SiteInstallRequest;
}

export namespace SiteInstallRequest {
  export type AsObject = {
    user?: auth_pb.UserSignUpRequest.AsObject,
  }
}

export class TwilioProfile extends jspb.Message {
  getFrom(): string;
  setFrom(value: string): TwilioProfile;

  getAccountSid(): string;
  setAccountSid(value: string): TwilioProfile;

  getAuthToken(): string;
  setAuthToken(value: string): TwilioProfile;

  getSmsStatusCallback(): string;
  setSmsStatusCallback(value: string): TwilioProfile;
  hasSmsStatusCallback(): boolean;
  clearSmsStatusCallback(): TwilioProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TwilioProfile.AsObject;
  static toObject(includeInstance: boolean, msg: TwilioProfile): TwilioProfile.AsObject;
  static serializeBinaryToWriter(message: TwilioProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TwilioProfile;
  static deserializeBinaryFromReader(message: TwilioProfile, reader: jspb.BinaryReader): TwilioProfile;
}

export namespace TwilioProfile {
  export type AsObject = {
    from: string,
    accountSid: string,
    authToken: string,
    smsStatusCallback?: string,
  }

  export enum SmsStatusCallbackCase { 
    _SMS_STATUS_CALLBACK_NOT_SET = 0,
    SMS_STATUS_CALLBACK = 9,
  }
}

export class SmtpProfile extends jspb.Message {
  getHost(): string;
  setHost(value: string): SmtpProfile;

  getPort(): number;
  setPort(value: number): SmtpProfile;

  getAuthMethod(): SmtpProfile.AuthMethod;
  setAuthMethod(value: SmtpProfile.AuthMethod): SmtpProfile;

  getCcList(): Array<EmailTask.Address>;
  setCcList(value: Array<EmailTask.Address>): SmtpProfile;
  clearCcList(): SmtpProfile;
  addCc(value?: EmailTask.Address, index?: number): EmailTask.Address;

  getBccList(): Array<EmailTask.Address>;
  setBccList(value: Array<EmailTask.Address>): SmtpProfile;
  clearBccList(): SmtpProfile;
  addBcc(value?: EmailTask.Address, index?: number): EmailTask.Address;

  getFrom(): EmailTask.Address | undefined;
  setFrom(value?: EmailTask.Address): SmtpProfile;
  hasFrom(): boolean;
  clearFrom(): SmtpProfile;

  getPassword(): string;
  setPassword(value: string): SmtpProfile;

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
    authMethod: SmtpProfile.AuthMethod,
    ccList: Array<EmailTask.Address.AsObject>,
    bccList: Array<EmailTask.Address.AsObject>,
    from?: EmailTask.Address.AsObject,
    password: string,
  }

  export enum AuthMethod { 
    NONE = 0,
    LOGIN = 1,
    STARTTLS = 2,
  }
}

export class EmailTask extends jspb.Message {
  getTo(): EmailTask.Address | undefined;
  setTo(value?: EmailTask.Address): EmailTask;
  hasTo(): boolean;
  clearTo(): EmailTask;

  getCcList(): Array<EmailTask.Address>;
  setCcList(value: Array<EmailTask.Address>): EmailTask;
  clearCcList(): EmailTask;
  addCc(value?: EmailTask.Address, index?: number): EmailTask.Address;

  getBccList(): Array<EmailTask.Address>;
  setBccList(value: Array<EmailTask.Address>): EmailTask;
  clearBccList(): EmailTask;
  addBcc(value?: EmailTask.Address, index?: number): EmailTask.Address;

  getSubject(): string;
  setSubject(value: string): EmailTask;

  getBody(): EmailTask.Body | undefined;
  setBody(value?: EmailTask.Body): EmailTask;
  hasBody(): boolean;
  clearBody(): EmailTask;

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
    to?: EmailTask.Address.AsObject,
    ccList: Array<EmailTask.Address.AsObject>,
    bccList: Array<EmailTask.Address.AsObject>,
    subject: string,
    body?: EmailTask.Body.AsObject,
    attachmentsList: Array<EmailTask.Attachment.AsObject>,
  }

  export class Address extends jspb.Message {
    getName(): string;
    setName(value: string): Address;

    getEmail(): string;
    setEmail(value: string): Address;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Address.AsObject;
    static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
    static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Address;
    static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
  }

  export namespace Address {
    export type AsObject = {
      name: string,
      email: string,
    }
  }


  export class Body extends jspb.Message {
    getText(): string;
    setText(value: string): Body;

    getHtml(): boolean;
    setHtml(value: boolean): Body;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Body.AsObject;
    static toObject(includeInstance: boolean, msg: Body): Body.AsObject;
    static serializeBinaryToWriter(message: Body, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Body;
    static deserializeBinaryFromReader(message: Body, reader: jspb.BinaryReader): Body;
  }

  export namespace Body {
    export type AsObject = {
      text: string,
      html: boolean,
    }
  }


  export class Attachment extends jspb.Message {
    getName(): string;
    setName(value: string): Attachment;

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
      payload: Uint8Array | string,
    }
  }

}

export class SiteTwilioPingRequest extends jspb.Message {
  getTo(): string;
  setTo(value: string): SiteTwilioPingRequest;

  getMessage(): string;
  setMessage(value: string): SiteTwilioPingRequest;

  getProfile(): TwilioProfile | undefined;
  setProfile(value?: TwilioProfile): SiteTwilioPingRequest;
  hasProfile(): boolean;
  clearProfile(): SiteTwilioPingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteTwilioPingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteTwilioPingRequest): SiteTwilioPingRequest.AsObject;
  static serializeBinaryToWriter(message: SiteTwilioPingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteTwilioPingRequest;
  static deserializeBinaryFromReader(message: SiteTwilioPingRequest, reader: jspb.BinaryReader): SiteTwilioPingRequest;
}

export namespace SiteTwilioPingRequest {
  export type AsObject = {
    to: string,
    message: string,
    profile?: TwilioProfile.AsObject,
  }
}

export class SiteSmtpPingRequest extends jspb.Message {
  getTo(): EmailTask.Address | undefined;
  setTo(value?: EmailTask.Address): SiteSmtpPingRequest;
  hasTo(): boolean;
  clearTo(): SiteSmtpPingRequest;

  getSubject(): string;
  setSubject(value: string): SiteSmtpPingRequest;

  getContent(): string;
  setContent(value: string): SiteSmtpPingRequest;

  getProfile(): SmtpProfile | undefined;
  setProfile(value?: SmtpProfile): SiteSmtpPingRequest;
  hasProfile(): boolean;
  clearProfile(): SiteSmtpPingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteSmtpPingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteSmtpPingRequest): SiteSmtpPingRequest.AsObject;
  static serializeBinaryToWriter(message: SiteSmtpPingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteSmtpPingRequest;
  static deserializeBinaryFromReader(message: SiteSmtpPingRequest, reader: jspb.BinaryReader): SiteSmtpPingRequest;
}

export namespace SiteSmtpPingRequest {
  export type AsObject = {
    to?: EmailTask.Address.AsObject,
    subject: string,
    content: string,
    profile?: SmtpProfile.AsObject,
  }
}

export class SiteSetLogoRequest extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): SiteSetLogoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteSetLogoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteSetLogoRequest): SiteSetLogoRequest.AsObject;
  static serializeBinaryToWriter(message: SiteSetLogoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteSetLogoRequest;
  static deserializeBinaryFromReader(message: SiteSetLogoRequest, reader: jspb.BinaryReader): SiteSetLogoRequest;
}

export namespace SiteSetLogoRequest {
  export type AsObject = {
    url: string,
  }
}

export class SiteSetCopyrightRequest extends jspb.Message {
  getPayload(): string;
  setPayload(value: string): SiteSetCopyrightRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteSetCopyrightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteSetCopyrightRequest): SiteSetCopyrightRequest.AsObject;
  static serializeBinaryToWriter(message: SiteSetCopyrightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteSetCopyrightRequest;
  static deserializeBinaryFromReader(message: SiteSetCopyrightRequest, reader: jspb.BinaryReader): SiteSetCopyrightRequest;
}

export namespace SiteSetCopyrightRequest {
  export type AsObject = {
    payload: string,
  }
}

export class SiteSetKeywordsRequest extends jspb.Message {
  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): SiteSetKeywordsRequest;
  clearItemsList(): SiteSetKeywordsRequest;
  addItems(value: string, index?: number): SiteSetKeywordsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteSetKeywordsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteSetKeywordsRequest): SiteSetKeywordsRequest.AsObject;
  static serializeBinaryToWriter(message: SiteSetKeywordsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteSetKeywordsRequest;
  static deserializeBinaryFromReader(message: SiteSetKeywordsRequest, reader: jspb.BinaryReader): SiteSetKeywordsRequest;
}

export namespace SiteSetKeywordsRequest {
  export type AsObject = {
    itemsList: Array<string>,
  }
}

export class SiteSetInfoRequest extends jspb.Message {
  getLang(): string;
  setLang(value: string): SiteSetInfoRequest;

  getTitle(): string;
  setTitle(value: string): SiteSetInfoRequest;

  getSubhead(): string;
  setSubhead(value: string): SiteSetInfoRequest;

  getDescription(): string;
  setDescription(value: string): SiteSetInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteSetInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteSetInfoRequest): SiteSetInfoRequest.AsObject;
  static serializeBinaryToWriter(message: SiteSetInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteSetInfoRequest;
  static deserializeBinaryFromReader(message: SiteSetInfoRequest, reader: jspb.BinaryReader): SiteSetInfoRequest;
}

export namespace SiteSetInfoRequest {
  export type AsObject = {
    lang: string,
    title: string,
    subhead: string,
    description: string,
  }
}

export class SiteLayoutResponse extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): SiteLayoutResponse;

  getSubhead(): string;
  setSubhead(value: string): SiteLayoutResponse;

  getKeywordsList(): Array<string>;
  setKeywordsList(value: Array<string>): SiteLayoutResponse;
  clearKeywordsList(): SiteLayoutResponse;
  addKeywords(value: string, index?: number): SiteLayoutResponse;

  getDescription(): string;
  setDescription(value: string): SiteLayoutResponse;

  getAuthor(): SiteLayoutResponse.Author | undefined;
  setAuthor(value?: SiteLayoutResponse.Author): SiteLayoutResponse;
  hasAuthor(): boolean;
  clearAuthor(): SiteLayoutResponse;

  getCopyright(): string;
  setCopyright(value: string): SiteLayoutResponse;

  getLogo(): string;
  setLogo(value: string): SiteLayoutResponse;

  getLanguagesList(): Array<string>;
  setLanguagesList(value: Array<string>): SiteLayoutResponse;
  clearLanguagesList(): SiteLayoutResponse;
  addLanguages(value: string, index?: number): SiteLayoutResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteLayoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SiteLayoutResponse): SiteLayoutResponse.AsObject;
  static serializeBinaryToWriter(message: SiteLayoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteLayoutResponse;
  static deserializeBinaryFromReader(message: SiteLayoutResponse, reader: jspb.BinaryReader): SiteLayoutResponse;
}

export namespace SiteLayoutResponse {
  export type AsObject = {
    title: string,
    subhead: string,
    keywordsList: Array<string>,
    description: string,
    author?: SiteLayoutResponse.Author.AsObject,
    copyright: string,
    logo: string,
    languagesList: Array<string>,
  }

  export class Author extends jspb.Message {
    getName(): string;
    setName(value: string): Author;

    getEmail(): string;
    setEmail(value: string): Author;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Author.AsObject;
    static toObject(includeInstance: boolean, msg: Author): Author.AsObject;
    static serializeBinaryToWriter(message: Author, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Author;
    static deserializeBinaryFromReader(message: Author, reader: jspb.BinaryReader): Author;
  }

  export namespace Author {
    export type AsObject = {
      name: string,
      email: string,
    }
  }

}

export class GoogleProfile extends jspb.Message {
  getSiteVerifyId(): string;
  setSiteVerifyId(value: string): GoogleProfile;
  hasSiteVerifyId(): boolean;
  clearSiteVerifyId(): GoogleProfile;

  getReCaptcha(): GoogleProfile.ReCaptcha | undefined;
  setReCaptcha(value?: GoogleProfile.ReCaptcha): GoogleProfile;
  hasReCaptcha(): boolean;
  clearReCaptcha(): GoogleProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleProfile.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleProfile): GoogleProfile.AsObject;
  static serializeBinaryToWriter(message: GoogleProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleProfile;
  static deserializeBinaryFromReader(message: GoogleProfile, reader: jspb.BinaryReader): GoogleProfile;
}

export namespace GoogleProfile {
  export type AsObject = {
    siteVerifyId?: string,
    reCaptcha?: GoogleProfile.ReCaptcha.AsObject,
  }

  export class ReCaptcha extends jspb.Message {
    getSiteKey(): string;
    setSiteKey(value: string): ReCaptcha;

    getSecret(): string;
    setSecret(value: string): ReCaptcha;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReCaptcha.AsObject;
    static toObject(includeInstance: boolean, msg: ReCaptcha): ReCaptcha.AsObject;
    static serializeBinaryToWriter(message: ReCaptcha, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReCaptcha;
    static deserializeBinaryFromReader(message: ReCaptcha, reader: jspb.BinaryReader): ReCaptcha;
  }

  export namespace ReCaptcha {
    export type AsObject = {
      siteKey: string,
      secret: string,
    }
  }


  export enum SiteVerifyIdCase { 
    _SITE_VERIFY_ID_NOT_SET = 0,
    SITE_VERIFY_ID = 1,
  }

  export enum ReCaptchaCase { 
    _RE_CAPTCHA_NOT_SET = 0,
    RE_CAPTCHA = 2,
  }
}

export class BaiduProfile extends jspb.Message {
  getSiteVerify(): BaiduProfile.SiteVerify | undefined;
  setSiteVerify(value?: BaiduProfile.SiteVerify): BaiduProfile;
  hasSiteVerify(): boolean;
  clearSiteVerify(): BaiduProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaiduProfile.AsObject;
  static toObject(includeInstance: boolean, msg: BaiduProfile): BaiduProfile.AsObject;
  static serializeBinaryToWriter(message: BaiduProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaiduProfile;
  static deserializeBinaryFromReader(message: BaiduProfile, reader: jspb.BinaryReader): BaiduProfile;
}

export namespace BaiduProfile {
  export type AsObject = {
    siteVerify?: BaiduProfile.SiteVerify.AsObject,
  }

  export class SiteVerify extends jspb.Message {
    getId(): string;
    setId(value: string): SiteVerify;

    getContent(): string;
    setContent(value: string): SiteVerify;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SiteVerify.AsObject;
    static toObject(includeInstance: boolean, msg: SiteVerify): SiteVerify.AsObject;
    static serializeBinaryToWriter(message: SiteVerify, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SiteVerify;
    static deserializeBinaryFromReader(message: SiteVerify, reader: jspb.BinaryReader): SiteVerify;
  }

  export namespace SiteVerify {
    export type AsObject = {
      id: string,
      content: string,
    }
  }


  export enum SiteVerifyCase { 
    _SITE_VERIFY_NOT_SET = 0,
    SITE_VERIFY = 1,
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

export class SiteStatusResponse extends jspb.Message {
  getPostgresql(): SiteStatusResponse.PostgreSql | undefined;
  setPostgresql(value?: SiteStatusResponse.PostgreSql): SiteStatusResponse;
  hasPostgresql(): boolean;
  clearPostgresql(): SiteStatusResponse;

  getMysql(): SiteStatusResponse.MySql | undefined;
  setMysql(value?: SiteStatusResponse.MySql): SiteStatusResponse;
  hasMysql(): boolean;
  clearMysql(): SiteStatusResponse;

  getRedis(): SiteStatusResponse.Redis | undefined;
  setRedis(value?: SiteStatusResponse.Redis): SiteStatusResponse;
  hasRedis(): boolean;
  clearRedis(): SiteStatusResponse;

  getRabbitmq(): SiteStatusResponse.RabbitMq | undefined;
  setRabbitmq(value?: SiteStatusResponse.RabbitMq): SiteStatusResponse;
  hasRabbitmq(): boolean;
  clearRabbitmq(): SiteStatusResponse;

  getOpensearch(): SiteStatusResponse.OpenSearch | undefined;
  setOpensearch(value?: SiteStatusResponse.OpenSearch): SiteStatusResponse;
  hasOpensearch(): boolean;
  clearOpensearch(): SiteStatusResponse;

  getSystem(): SiteStatusResponse.System | undefined;
  setSystem(value?: SiteStatusResponse.System): SiteStatusResponse;
  hasSystem(): boolean;
  clearSystem(): SiteStatusResponse;

  getHealthesList(): Array<SiteStatusResponse.Health>;
  setHealthesList(value: Array<SiteStatusResponse.Health>): SiteStatusResponse;
  clearHealthesList(): SiteStatusResponse;
  addHealthes(value?: SiteStatusResponse.Health, index?: number): SiteStatusResponse.Health;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SiteStatusResponse): SiteStatusResponse.AsObject;
  static serializeBinaryToWriter(message: SiteStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteStatusResponse;
  static deserializeBinaryFromReader(message: SiteStatusResponse, reader: jspb.BinaryReader): SiteStatusResponse;
}

export namespace SiteStatusResponse {
  export type AsObject = {
    postgresql?: SiteStatusResponse.PostgreSql.AsObject,
    mysql?: SiteStatusResponse.MySql.AsObject,
    redis?: SiteStatusResponse.Redis.AsObject,
    rabbitmq?: SiteStatusResponse.RabbitMq.AsObject,
    opensearch?: SiteStatusResponse.OpenSearch.AsObject,
    system?: SiteStatusResponse.System.AsObject,
    healthesList: Array<SiteStatusResponse.Health.AsObject>,
  }

  export class Database extends jspb.Message {
    getName(): string;
    setName(value: string): Database;

    getSize(): string;
    setSize(value: string): Database;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Database.AsObject;
    static toObject(includeInstance: boolean, msg: Database): Database.AsObject;
    static serializeBinaryToWriter(message: Database, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Database;
    static deserializeBinaryFromReader(message: Database, reader: jspb.BinaryReader): Database;
  }

  export namespace Database {
    export type AsObject = {
      name: string,
      size: string,
    }
  }


  export class PostgreSql extends jspb.Message {
    getVersion(): string;
    setVersion(value: string): PostgreSql;

    getNow(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setNow(value?: google_protobuf_timestamp_pb.Timestamp): PostgreSql;
    hasNow(): boolean;
    clearNow(): PostgreSql;

    getDatabasesList(): Array<SiteStatusResponse.Database>;
    setDatabasesList(value: Array<SiteStatusResponse.Database>): PostgreSql;
    clearDatabasesList(): PostgreSql;
    addDatabases(value?: SiteStatusResponse.Database, index?: number): SiteStatusResponse.Database;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostgreSql.AsObject;
    static toObject(includeInstance: boolean, msg: PostgreSql): PostgreSql.AsObject;
    static serializeBinaryToWriter(message: PostgreSql, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostgreSql;
    static deserializeBinaryFromReader(message: PostgreSql, reader: jspb.BinaryReader): PostgreSql;
  }

  export namespace PostgreSql {
    export type AsObject = {
      version: string,
      now?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      databasesList: Array<SiteStatusResponse.Database.AsObject>,
    }
  }


  export class MySql extends jspb.Message {
    getSize(): number;
    setSize(value: number): MySql;

    getVersion(): string;
    setVersion(value: string): MySql;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MySql.AsObject;
    static toObject(includeInstance: boolean, msg: MySql): MySql.AsObject;
    static serializeBinaryToWriter(message: MySql, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MySql;
    static deserializeBinaryFromReader(message: MySql, reader: jspb.BinaryReader): MySql;
  }

  export namespace MySql {
    export type AsObject = {
      size: number,
      version: string,
    }
  }


  export class Redis extends jspb.Message {
    getInfo(): string;
    setInfo(value: string): Redis;

    getItemsList(): Array<SiteStatusResponse.Redis.Item>;
    setItemsList(value: Array<SiteStatusResponse.Redis.Item>): Redis;
    clearItemsList(): Redis;
    addItems(value?: SiteStatusResponse.Redis.Item, index?: number): SiteStatusResponse.Redis.Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Redis.AsObject;
    static toObject(includeInstance: boolean, msg: Redis): Redis.AsObject;
    static serializeBinaryToWriter(message: Redis, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Redis;
    static deserializeBinaryFromReader(message: Redis, reader: jspb.BinaryReader): Redis;
  }

  export namespace Redis {
    export type AsObject = {
      info: string,
      itemsList: Array<SiteStatusResponse.Redis.Item.AsObject>,
    }

    export class Item extends jspb.Message {
      getNode(): string;
      setNode(value: string): Item;

      getKey(): string;
      setKey(value: string): Item;

      getTtl(): number;
      setTtl(value: number): Item;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Item.AsObject;
      static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
      static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Item;
      static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
    }

    export namespace Item {
      export type AsObject = {
        node: string,
        key: string,
        ttl: number,
      }
    }

  }


  export class RabbitMq extends jspb.Message {
    getProtocol(): string;
    setProtocol(value: string): RabbitMq;

    getHeartbeat(): number;
    setHeartbeat(value: number): RabbitMq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RabbitMq.AsObject;
    static toObject(includeInstance: boolean, msg: RabbitMq): RabbitMq.AsObject;
    static serializeBinaryToWriter(message: RabbitMq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RabbitMq;
    static deserializeBinaryFromReader(message: RabbitMq, reader: jspb.BinaryReader): RabbitMq;
  }

  export namespace RabbitMq {
    export type AsObject = {
      protocol: string,
      heartbeat: number,
    }
  }


  export class OpenSearch extends jspb.Message {
    getUrl(): string;
    setUrl(value: string): OpenSearch;

    getInfo(): string;
    setInfo(value: string): OpenSearch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenSearch.AsObject;
    static toObject(includeInstance: boolean, msg: OpenSearch): OpenSearch.AsObject;
    static serializeBinaryToWriter(message: OpenSearch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpenSearch;
    static deserializeBinaryFromReader(message: OpenSearch, reader: jspb.BinaryReader): OpenSearch;
  }

  export namespace OpenSearch {
    export type AsObject = {
      url: string,
      info: string,
    }
  }


  export class Health extends jspb.Message {
    getName(): string;
    setName(value: string): Health;

    getStatus(): string;
    setStatus(value: string): Health;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Health.AsObject;
    static toObject(includeInstance: boolean, msg: Health): Health.AsObject;
    static serializeBinaryToWriter(message: Health, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Health;
    static deserializeBinaryFromReader(message: Health, reader: jspb.BinaryReader): Health;
  }

  export namespace Health {
    export type AsObject = {
      name: string,
      status: string,
    }
  }


  export class System extends jspb.Message {
    getVersion(): string;
    setVersion(value: string): System;

    getCpu(): string;
    setCpu(value: string): System;

    getMemory(): string;
    setMemory(value: string): System;

    getBoot(): string;
    setBoot(value: string): System;

    getDisk(): string;
    setDisk(value: string): System;

    getLoad(): string;
    setLoad(value: string): System;

    getFs(): string;
    setFs(value: string): System;

    getSwap(): string;
    setSwap(value: string): System;

    getUptime(): string;
    setUptime(value: string): System;

    getNetwork(): string;
    setNetwork(value: string): System;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): System.AsObject;
    static toObject(includeInstance: boolean, msg: System): System.AsObject;
    static serializeBinaryToWriter(message: System, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): System;
    static deserializeBinaryFromReader(message: System, reader: jspb.BinaryReader): System;
  }

  export namespace System {
    export type AsObject = {
      version: string,
      cpu: string,
      memory: string,
      boot: string,
      disk: string,
      load: string,
      fs: string,
      swap: string,
      uptime: string,
      network: string,
    }
  }

}

export class ShorterLinkIndexResponse extends jspb.Message {
  getPagination(): nut_pb.Pagination | undefined;
  setPagination(value?: nut_pb.Pagination): ShorterLinkIndexResponse;
  hasPagination(): boolean;
  clearPagination(): ShorterLinkIndexResponse;

  getItemsList(): Array<ShorterLinkIndexResponse.Item>;
  setItemsList(value: Array<ShorterLinkIndexResponse.Item>): ShorterLinkIndexResponse;
  clearItemsList(): ShorterLinkIndexResponse;
  addItems(value?: ShorterLinkIndexResponse.Item, index?: number): ShorterLinkIndexResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShorterLinkIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShorterLinkIndexResponse): ShorterLinkIndexResponse.AsObject;
  static serializeBinaryToWriter(message: ShorterLinkIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShorterLinkIndexResponse;
  static deserializeBinaryFromReader(message: ShorterLinkIndexResponse, reader: jspb.BinaryReader): ShorterLinkIndexResponse;
}

export namespace ShorterLinkIndexResponse {
  export type AsObject = {
    pagination?: nut_pb.Pagination.AsObject,
    itemsList: Array<ShorterLinkIndexResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getUrl(): string;
    setUrl(value: string): Item;

    getDetails(): string;
    setDetails(value: string): Item;

    getCode(): string;
    setCode(value: string): Item;

    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasUpdatedAt(): boolean;
    clearUpdatedAt(): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      id: number,
      url: string,
      details: string,
      code: string,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class ShorterLinkCreateRequest extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): ShorterLinkCreateRequest;

  getDetails(): string;
  setDetails(value: string): ShorterLinkCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShorterLinkCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShorterLinkCreateRequest): ShorterLinkCreateRequest.AsObject;
  static serializeBinaryToWriter(message: ShorterLinkCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShorterLinkCreateRequest;
  static deserializeBinaryFromReader(message: ShorterLinkCreateRequest, reader: jspb.BinaryReader): ShorterLinkCreateRequest;
}

export namespace ShorterLinkCreateRequest {
  export type AsObject = {
    url: string,
    details: string,
  }
}

export class ShorterLinkUpdateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ShorterLinkUpdateRequest;

  getUrl(): string;
  setUrl(value: string): ShorterLinkUpdateRequest;

  getDetails(): string;
  setDetails(value: string): ShorterLinkUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShorterLinkUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShorterLinkUpdateRequest): ShorterLinkUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: ShorterLinkUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShorterLinkUpdateRequest;
  static deserializeBinaryFromReader(message: ShorterLinkUpdateRequest, reader: jspb.BinaryReader): ShorterLinkUpdateRequest;
}

export namespace ShorterLinkUpdateRequest {
  export type AsObject = {
    id: number,
    url: string,
    details: string,
  }
}

export class TagIndexResponse extends jspb.Message {
  getItemsList(): Array<TagIndexResponse.Item>;
  setItemsList(value: Array<TagIndexResponse.Item>): TagIndexResponse;
  clearItemsList(): TagIndexResponse;
  addItems(value?: TagIndexResponse.Item, index?: number): TagIndexResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TagIndexResponse): TagIndexResponse.AsObject;
  static serializeBinaryToWriter(message: TagIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagIndexResponse;
  static deserializeBinaryFromReader(message: TagIndexResponse, reader: jspb.BinaryReader): TagIndexResponse;
}

export namespace TagIndexResponse {
  export type AsObject = {
    itemsList: Array<TagIndexResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getCode(): string;
    setCode(value: string): Item;

    getPriority(): number;
    setPriority(value: number): Item;

    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasUpdatedAt(): boolean;
    clearUpdatedAt(): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      id: number,
      code: string,
      priority: number,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class TagCreateRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): TagCreateRequest;

  getPriority(): number;
  setPriority(value: number): TagCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TagCreateRequest): TagCreateRequest.AsObject;
  static serializeBinaryToWriter(message: TagCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagCreateRequest;
  static deserializeBinaryFromReader(message: TagCreateRequest, reader: jspb.BinaryReader): TagCreateRequest;
}

export namespace TagCreateRequest {
  export type AsObject = {
    code: string,
    priority: number,
  }
}

export class TagUpdateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): TagUpdateRequest;

  getCode(): string;
  setCode(value: string): TagUpdateRequest;

  getPriority(): number;
  setPriority(value: number): TagUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TagUpdateRequest): TagUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: TagUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagUpdateRequest;
  static deserializeBinaryFromReader(message: TagUpdateRequest, reader: jspb.BinaryReader): TagUpdateRequest;
}

export namespace TagUpdateRequest {
  export type AsObject = {
    id: number,
    code: string,
    priority: number,
  }
}

export class CategoryIndexResponse extends jspb.Message {
  getItemsList(): Array<CategoryIndexResponse.Item>;
  setItemsList(value: Array<CategoryIndexResponse.Item>): CategoryIndexResponse;
  clearItemsList(): CategoryIndexResponse;
  addItems(value?: CategoryIndexResponse.Item, index?: number): CategoryIndexResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryIndexResponse): CategoryIndexResponse.AsObject;
  static serializeBinaryToWriter(message: CategoryIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryIndexResponse;
  static deserializeBinaryFromReader(message: CategoryIndexResponse, reader: jspb.BinaryReader): CategoryIndexResponse;
}

export namespace CategoryIndexResponse {
  export type AsObject = {
    itemsList: Array<CategoryIndexResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    getId(): number;
    setId(value: number): Item;

    getCode(): string;
    setCode(value: string): Item;

    getLeft(): number;
    setLeft(value: number): Item;

    getRight(): number;
    setRight(value: number): Item;

    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Item;
    hasUpdatedAt(): boolean;
    clearUpdatedAt(): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      id: number,
      code: string,
      left: number,
      right: number,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class CategoryCreateRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): CategoryCreateRequest;

  getLeft(): number;
  setLeft(value: number): CategoryCreateRequest;

  getParent(): number;
  setParent(value: number): CategoryCreateRequest;

  getByCase(): CategoryCreateRequest.ByCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryCreateRequest): CategoryCreateRequest.AsObject;
  static serializeBinaryToWriter(message: CategoryCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryCreateRequest;
  static deserializeBinaryFromReader(message: CategoryCreateRequest, reader: jspb.BinaryReader): CategoryCreateRequest;
}

export namespace CategoryCreateRequest {
  export type AsObject = {
    code: string,
    left: number,
    parent: number,
  }

  export enum ByCase { 
    BY_NOT_SET = 0,
    LEFT = 2,
    PARENT = 3,
  }
}

export class CategoryUpdateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): CategoryUpdateRequest;

  getCode(): string;
  setCode(value: string): CategoryUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryUpdateRequest): CategoryUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: CategoryUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryUpdateRequest;
  static deserializeBinaryFromReader(message: CategoryUpdateRequest, reader: jspb.BinaryReader): CategoryUpdateRequest;
}

export namespace CategoryUpdateRequest {
  export type AsObject = {
    id: number,
    code: string,
  }
}

