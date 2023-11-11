import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"


export class SiteLayoutRequest extends jspb.Message {
  getLocale(): string;
  setLocale(value: string): SiteLayoutRequest;

  getTheme(): Theme;
  setTheme(value: Theme): SiteLayoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteLayoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteLayoutRequest): SiteLayoutRequest.AsObject;
  static serializeBinaryToWriter(message: SiteLayoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteLayoutRequest;
  static deserializeBinaryFromReader(message: SiteLayoutRequest, reader: jspb.BinaryReader): SiteLayoutRequest;
}

export namespace SiteLayoutRequest {
  export type AsObject = {
    locale: string,
    theme: Theme,
  }
}

export class SiteLayoutResponse extends jspb.Message {
  getCleanWhite(): CleanWhiteLayout | undefined;
  setCleanWhite(value?: CleanWhiteLayout): SiteLayoutResponse;
  hasCleanWhite(): boolean;
  clearCleanWhite(): SiteLayoutResponse;

  getDocsy(): DocsyLayout | undefined;
  setDocsy(value?: DocsyLayout): SiteLayoutResponse;
  hasDocsy(): boolean;
  clearDocsy(): SiteLayoutResponse;

  getGantry(): GantryLayout | undefined;
  setGantry(value?: GantryLayout): SiteLayoutResponse;
  hasGantry(): boolean;
  clearGantry(): SiteLayoutResponse;

  getHinode(): HinodeLayout | undefined;
  setHinode(value?: HinodeLayout): SiteLayoutResponse;
  hasHinode(): boolean;
  clearHinode(): SiteLayoutResponse;

  getUniversal(): UniversalLayout | undefined;
  setUniversal(value?: UniversalLayout): SiteLayoutResponse;
  hasUniversal(): boolean;
  clearUniversal(): SiteLayoutResponse;

  getXCorporation(): XCorporationLayout | undefined;
  setXCorporation(value?: XCorporationLayout): SiteLayoutResponse;
  hasXCorporation(): boolean;
  clearXCorporation(): SiteLayoutResponse;

  getLayoutCase(): SiteLayoutResponse.LayoutCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteLayoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SiteLayoutResponse): SiteLayoutResponse.AsObject;
  static serializeBinaryToWriter(message: SiteLayoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteLayoutResponse;
  static deserializeBinaryFromReader(message: SiteLayoutResponse, reader: jspb.BinaryReader): SiteLayoutResponse;
}

export namespace SiteLayoutResponse {
  export type AsObject = {
    cleanWhite?: CleanWhiteLayout.AsObject,
    docsy?: DocsyLayout.AsObject,
    gantry?: GantryLayout.AsObject,
    hinode?: HinodeLayout.AsObject,
    universal?: UniversalLayout.AsObject,
    xCorporation?: XCorporationLayout.AsObject,
  }

  export enum LayoutCase { 
    LAYOUT_NOT_SET = 0,
    CLEAN_WHITE = 1,
    DOCSY = 2,
    GANTRY = 3,
    HINODE = 4,
    UNIVERSAL = 5,
    X_CORPORATION = 6,
  }
}

export class SiteRssResponse extends jspb.Message {
  getItemsMap(): jspb.Map<string, Rss>;
  clearItemsMap(): SiteRssResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteRssResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SiteRssResponse): SiteRssResponse.AsObject;
  static serializeBinaryToWriter(message: SiteRssResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteRssResponse;
  static deserializeBinaryFromReader(message: SiteRssResponse, reader: jspb.BinaryReader): SiteRssResponse;
}

export namespace SiteRssResponse {
  export type AsObject = {
    itemsMap: Array<[string, Rss.AsObject]>,
  }
}

export class SiteSitemapResponse extends jspb.Message {
  getItemsMap(): jspb.Map<string, Sitemap>;
  clearItemsMap(): SiteSitemapResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteSitemapResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SiteSitemapResponse): SiteSitemapResponse.AsObject;
  static serializeBinaryToWriter(message: SiteSitemapResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteSitemapResponse;
  static deserializeBinaryFromReader(message: SiteSitemapResponse, reader: jspb.BinaryReader): SiteSitemapResponse;
}

export namespace SiteSitemapResponse {
  export type AsObject = {
    itemsMap: Array<[string, Sitemap.AsObject]>,
  }
}

export class SiteShowPageRequest extends jspb.Message {
  getSlug(): string;
  setSlug(value: string): SiteShowPageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteShowPageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteShowPageRequest): SiteShowPageRequest.AsObject;
  static serializeBinaryToWriter(message: SiteShowPageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteShowPageRequest;
  static deserializeBinaryFromReader(message: SiteShowPageRequest, reader: jspb.BinaryReader): SiteShowPageRequest;
}

export namespace SiteShowPageRequest {
  export type AsObject = {
    slug: string,
  }
}

export class SiteShowPageResponse extends jspb.Message {
  getPage(): Page | undefined;
  setPage(value?: Page): SiteShowPageResponse;
  hasPage(): boolean;
  clearPage(): SiteShowPageResponse;

  getRelatedList(): Array<SiteShowPageResponse.Link>;
  setRelatedList(value: Array<SiteShowPageResponse.Link>): SiteShowPageResponse;
  clearRelatedList(): SiteShowPageResponse;
  addRelated(value?: SiteShowPageResponse.Link, index?: number): SiteShowPageResponse.Link;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteShowPageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SiteShowPageResponse): SiteShowPageResponse.AsObject;
  static serializeBinaryToWriter(message: SiteShowPageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteShowPageResponse;
  static deserializeBinaryFromReader(message: SiteShowPageResponse, reader: jspb.BinaryReader): SiteShowPageResponse;
}

export namespace SiteShowPageResponse {
  export type AsObject = {
    page?: Page.AsObject,
    relatedList: Array<SiteShowPageResponse.Link.AsObject>,
  }

  export class Link extends jspb.Message {
    getSlug(): string;
    setSlug(value: string): Link;

    getTitle(): string;
    setTitle(value: string): Link;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Link.AsObject;
    static toObject(includeInstance: boolean, msg: Link): Link.AsObject;
    static serializeBinaryToWriter(message: Link, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Link;
    static deserializeBinaryFromReader(message: Link, reader: jspb.BinaryReader): Link;
  }

  export namespace Link {
    export type AsObject = {
      slug: string,
      title: string,
    }
  }

}

export class SiteHomePageRequest extends jspb.Message {
  getLocale(): string;
  setLocale(value: string): SiteHomePageRequest;

  getTheme(): Theme;
  setTheme(value: Theme): SiteHomePageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteHomePageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SiteHomePageRequest): SiteHomePageRequest.AsObject;
  static serializeBinaryToWriter(message: SiteHomePageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteHomePageRequest;
  static deserializeBinaryFromReader(message: SiteHomePageRequest, reader: jspb.BinaryReader): SiteHomePageRequest;
}

export namespace SiteHomePageRequest {
  export type AsObject = {
    locale: string,
    theme: Theme,
  }
}

export class SiteHomePageResponse extends jspb.Message {
  getCleanWhite(): CleanWhiteHomePage | undefined;
  setCleanWhite(value?: CleanWhiteHomePage): SiteHomePageResponse;
  hasCleanWhite(): boolean;
  clearCleanWhite(): SiteHomePageResponse;

  getDocsy(): DocsyHomePage | undefined;
  setDocsy(value?: DocsyHomePage): SiteHomePageResponse;
  hasDocsy(): boolean;
  clearDocsy(): SiteHomePageResponse;

  getGantry(): GantryHomePage | undefined;
  setGantry(value?: GantryHomePage): SiteHomePageResponse;
  hasGantry(): boolean;
  clearGantry(): SiteHomePageResponse;

  getHinode(): HinodeHomePage | undefined;
  setHinode(value?: HinodeHomePage): SiteHomePageResponse;
  hasHinode(): boolean;
  clearHinode(): SiteHomePageResponse;

  getUniversal(): UniversalHomePage | undefined;
  setUniversal(value?: UniversalHomePage): SiteHomePageResponse;
  hasUniversal(): boolean;
  clearUniversal(): SiteHomePageResponse;

  getXCorporation(): XCorporationHomePage | undefined;
  setXCorporation(value?: XCorporationHomePage): SiteHomePageResponse;
  hasXCorporation(): boolean;
  clearXCorporation(): SiteHomePageResponse;

  getPayloadCase(): SiteHomePageResponse.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteHomePageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SiteHomePageResponse): SiteHomePageResponse.AsObject;
  static serializeBinaryToWriter(message: SiteHomePageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteHomePageResponse;
  static deserializeBinaryFromReader(message: SiteHomePageResponse, reader: jspb.BinaryReader): SiteHomePageResponse;
}

export namespace SiteHomePageResponse {
  export type AsObject = {
    cleanWhite?: CleanWhiteHomePage.AsObject,
    docsy?: DocsyHomePage.AsObject,
    gantry?: GantryHomePage.AsObject,
    hinode?: HinodeHomePage.AsObject,
    universal?: UniversalHomePage.AsObject,
    xCorporation?: XCorporationHomePage.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    CLEAN_WHITE = 1,
    DOCSY = 2,
    GANTRY = 3,
    HINODE = 4,
    UNIVERSAL = 5,
    X_CORPORATION = 6,
  }
}

export class CleanWhiteLayout extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CleanWhiteLayout.AsObject;
  static toObject(includeInstance: boolean, msg: CleanWhiteLayout): CleanWhiteLayout.AsObject;
  static serializeBinaryToWriter(message: CleanWhiteLayout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CleanWhiteLayout;
  static deserializeBinaryFromReader(message: CleanWhiteLayout, reader: jspb.BinaryReader): CleanWhiteLayout;
}

export namespace CleanWhiteLayout {
  export type AsObject = {
  }
}

export class DocsyLayout extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocsyLayout.AsObject;
  static toObject(includeInstance: boolean, msg: DocsyLayout): DocsyLayout.AsObject;
  static serializeBinaryToWriter(message: DocsyLayout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocsyLayout;
  static deserializeBinaryFromReader(message: DocsyLayout, reader: jspb.BinaryReader): DocsyLayout;
}

export namespace DocsyLayout {
  export type AsObject = {
  }
}

export class GantryLayout extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GantryLayout.AsObject;
  static toObject(includeInstance: boolean, msg: GantryLayout): GantryLayout.AsObject;
  static serializeBinaryToWriter(message: GantryLayout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GantryLayout;
  static deserializeBinaryFromReader(message: GantryLayout, reader: jspb.BinaryReader): GantryLayout;
}

export namespace GantryLayout {
  export type AsObject = {
  }
}

export class HinodeLayout extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HinodeLayout.AsObject;
  static toObject(includeInstance: boolean, msg: HinodeLayout): HinodeLayout.AsObject;
  static serializeBinaryToWriter(message: HinodeLayout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HinodeLayout;
  static deserializeBinaryFromReader(message: HinodeLayout, reader: jspb.BinaryReader): HinodeLayout;
}

export namespace HinodeLayout {
  export type AsObject = {
  }
}

export class UniversalLayout extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UniversalLayout.AsObject;
  static toObject(includeInstance: boolean, msg: UniversalLayout): UniversalLayout.AsObject;
  static serializeBinaryToWriter(message: UniversalLayout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UniversalLayout;
  static deserializeBinaryFromReader(message: UniversalLayout, reader: jspb.BinaryReader): UniversalLayout;
}

export namespace UniversalLayout {
  export type AsObject = {
  }
}

export class XCorporationLayout extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): XCorporationLayout.AsObject;
  static toObject(includeInstance: boolean, msg: XCorporationLayout): XCorporationLayout.AsObject;
  static serializeBinaryToWriter(message: XCorporationLayout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): XCorporationLayout;
  static deserializeBinaryFromReader(message: XCorporationLayout, reader: jspb.BinaryReader): XCorporationLayout;
}

export namespace XCorporationLayout {
  export type AsObject = {
  }
}

export class CleanWhiteHomePage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CleanWhiteHomePage.AsObject;
  static toObject(includeInstance: boolean, msg: CleanWhiteHomePage): CleanWhiteHomePage.AsObject;
  static serializeBinaryToWriter(message: CleanWhiteHomePage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CleanWhiteHomePage;
  static deserializeBinaryFromReader(message: CleanWhiteHomePage, reader: jspb.BinaryReader): CleanWhiteHomePage;
}

export namespace CleanWhiteHomePage {
  export type AsObject = {
  }
}

export class DocsyHomePage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocsyHomePage.AsObject;
  static toObject(includeInstance: boolean, msg: DocsyHomePage): DocsyHomePage.AsObject;
  static serializeBinaryToWriter(message: DocsyHomePage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocsyHomePage;
  static deserializeBinaryFromReader(message: DocsyHomePage, reader: jspb.BinaryReader): DocsyHomePage;
}

export namespace DocsyHomePage {
  export type AsObject = {
  }
}

export class GantryHomePage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GantryHomePage.AsObject;
  static toObject(includeInstance: boolean, msg: GantryHomePage): GantryHomePage.AsObject;
  static serializeBinaryToWriter(message: GantryHomePage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GantryHomePage;
  static deserializeBinaryFromReader(message: GantryHomePage, reader: jspb.BinaryReader): GantryHomePage;
}

export namespace GantryHomePage {
  export type AsObject = {
  }
}

export class HinodeHomePage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HinodeHomePage.AsObject;
  static toObject(includeInstance: boolean, msg: HinodeHomePage): HinodeHomePage.AsObject;
  static serializeBinaryToWriter(message: HinodeHomePage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HinodeHomePage;
  static deserializeBinaryFromReader(message: HinodeHomePage, reader: jspb.BinaryReader): HinodeHomePage;
}

export namespace HinodeHomePage {
  export type AsObject = {
  }
}

export class UniversalHomePage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UniversalHomePage.AsObject;
  static toObject(includeInstance: boolean, msg: UniversalHomePage): UniversalHomePage.AsObject;
  static serializeBinaryToWriter(message: UniversalHomePage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UniversalHomePage;
  static deserializeBinaryFromReader(message: UniversalHomePage, reader: jspb.BinaryReader): UniversalHomePage;
}

export namespace UniversalHomePage {
  export type AsObject = {
  }
}

export class XCorporationHomePage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): XCorporationHomePage.AsObject;
  static toObject(includeInstance: boolean, msg: XCorporationHomePage): XCorporationHomePage.AsObject;
  static serializeBinaryToWriter(message: XCorporationHomePage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): XCorporationHomePage;
  static deserializeBinaryFromReader(message: XCorporationHomePage, reader: jspb.BinaryReader): XCorporationHomePage;
}

export namespace XCorporationHomePage {
  export type AsObject = {
  }
}

export class Rss extends jspb.Message {
  getHome(): string;
  setHome(value: string): Rss;

  getTitle(): string;
  setTitle(value: string): Rss;

  getDescription(): string;
  setDescription(value: string): Rss;

  getLinksList(): Array<Rss.Link>;
  setLinksList(value: Array<Rss.Link>): Rss;
  clearLinksList(): Rss;
  addLinks(value?: Rss.Link, index?: number): Rss.Link;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rss.AsObject;
  static toObject(includeInstance: boolean, msg: Rss): Rss.AsObject;
  static serializeBinaryToWriter(message: Rss, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rss;
  static deserializeBinaryFromReader(message: Rss, reader: jspb.BinaryReader): Rss;
}

export namespace Rss {
  export type AsObject = {
    home: string,
    title: string,
    description: string,
    linksList: Array<Rss.Link.AsObject>,
  }

  export class Link extends jspb.Message {
    getPath(): string;
    setPath(value: string): Link;

    getTitle(): string;
    setTitle(value: string): Link;

    getDescription(): string;
    setDescription(value: string): Link;

    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Link;
    hasUpdatedAt(): boolean;
    clearUpdatedAt(): Link;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Link.AsObject;
    static toObject(includeInstance: boolean, msg: Link): Link.AsObject;
    static serializeBinaryToWriter(message: Link, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Link;
    static deserializeBinaryFromReader(message: Link, reader: jspb.BinaryReader): Link;
  }

  export namespace Link {
    export type AsObject = {
      path: string,
      title: string,
      description: string,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class Sitemap extends jspb.Message {
  getHome(): string;
  setHome(value: string): Sitemap;

  getUrlset(): Sitemap.UrlSet | undefined;
  setUrlset(value?: Sitemap.UrlSet): Sitemap;
  hasUrlset(): boolean;
  clearUrlset(): Sitemap;

  getIndex(): Sitemap.Index | undefined;
  setIndex(value?: Sitemap.Index): Sitemap;
  hasIndex(): boolean;
  clearIndex(): Sitemap;

  getBodyCase(): Sitemap.BodyCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sitemap.AsObject;
  static toObject(includeInstance: boolean, msg: Sitemap): Sitemap.AsObject;
  static serializeBinaryToWriter(message: Sitemap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sitemap;
  static deserializeBinaryFromReader(message: Sitemap, reader: jspb.BinaryReader): Sitemap;
}

export namespace Sitemap {
  export type AsObject = {
    home: string,
    urlset?: Sitemap.UrlSet.AsObject,
    index?: Sitemap.Index.AsObject,
  }

  export class Link extends jspb.Message {
    getPath(): string;
    setPath(value: string): Link;

    getChangeFreq(): Sitemap.Link.ChangeFreq;
    setChangeFreq(value: Sitemap.Link.ChangeFreq): Link;

    getPriority(): number;
    setPriority(value: number): Link;

    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Link;
    hasUpdatedAt(): boolean;
    clearUpdatedAt(): Link;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Link.AsObject;
    static toObject(includeInstance: boolean, msg: Link): Link.AsObject;
    static serializeBinaryToWriter(message: Link, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Link;
    static deserializeBinaryFromReader(message: Link, reader: jspb.BinaryReader): Link;
  }

  export namespace Link {
    export type AsObject = {
      path: string,
      changeFreq: Sitemap.Link.ChangeFreq,
      priority: number,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum ChangeFreq { 
      NEVER = 0,
      ALWAYS = 1,
      HOURLY = 2,
      DAILY = 3,
      WEEKLY = 4,
      MONTHLY = 5,
      YEARLY = 6,
    }
  }


  export class UrlSet extends jspb.Message {
    getLinksList(): Array<Sitemap.Link>;
    setLinksList(value: Array<Sitemap.Link>): UrlSet;
    clearLinksList(): UrlSet;
    addLinks(value?: Sitemap.Link, index?: number): Sitemap.Link;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UrlSet.AsObject;
    static toObject(includeInstance: boolean, msg: UrlSet): UrlSet.AsObject;
    static serializeBinaryToWriter(message: UrlSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UrlSet;
    static deserializeBinaryFromReader(message: UrlSet, reader: jspb.BinaryReader): UrlSet;
  }

  export namespace UrlSet {
    export type AsObject = {
      linksList: Array<Sitemap.Link.AsObject>,
    }
  }


  export class Index extends jspb.Message {
    getLinksList(): Array<string>;
    setLinksList(value: Array<string>): Index;
    clearLinksList(): Index;
    addLinks(value: string, index?: number): Index;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Index.AsObject;
    static toObject(includeInstance: boolean, msg: Index): Index.AsObject;
    static serializeBinaryToWriter(message: Index, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Index;
    static deserializeBinaryFromReader(message: Index, reader: jspb.BinaryReader): Index;
  }

  export namespace Index {
    export type AsObject = {
      linksList: Array<string>,
    }
  }


  export enum BodyCase { 
    BODY_NOT_SET = 0,
    URLSET = 11,
    INDEX = 12,
  }
}

export class Page extends jspb.Message {
  getSlug(): string;
  setSlug(value: string): Page;

  getTitle(): string;
  setTitle(value: string): Page;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Page.AsObject;
  static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
  static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Page;
  static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
}

export namespace Page {
  export type AsObject = {
    slug: string,
    title: string,
  }
}

export enum Theme { 
  UNIVERSAL = 0,
  CLEANWHITE = 1,
  DOCSY = 2,
  GANTRY = 3,
  HINODE = 4,
  XCORPORATION = 5,
}
