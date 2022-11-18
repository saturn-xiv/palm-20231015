import * as grpcWeb from 'grpc-web';

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as nut_pb from './nut_pb';


export class UserClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  signIn(
    request: nut_pb.UserSignInRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.UserSignInResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.UserSignInResponse>;

  signUp(
    request: nut_pb.UserSignUpRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  confirmByEmail(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  confirmByToken(
    request: nut_pb.UserTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  unlockByEmail(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  unlockByToken(
    request: nut_pb.UserTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  forgotPassword(
    request: nut_pb.UserQueryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  resetPassword(
    request: nut_pb.UserResetPasswordRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  refresh(
    request: google_protobuf_duration_pb.Duration,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.UserSignInResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.UserSignInResponse>;

  logs(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.UserLogsResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.UserLogsResponse>;

  setProfile(
    request: nut_pb.UserSetProfileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  changePassword(
    request: nut_pb.UserChangePasswordRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  signOut(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  index(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.UserIndexResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.UserIndexResponse>;

  show(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.UserIndexResponse.Item) => void
  ): grpcWeb.ClientReadableStream<nut_pb.UserIndexResponse.Item>;

  disable(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  enable(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  lock(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  unlock(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  confirm(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setPassword(
    request: nut_pb.UserSetPasswordRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class AttachmentClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  index(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.AttachmentIndexResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.AttachmentIndexResponse>;

  destroy(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  show(
    request: nut_pb.AttachmentShowRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.AttachmentShowResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.AttachmentShowResponse>;

}

export class PolicyClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addRole(
    request: nut_pb.PolicyAddRoleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getAllRoles(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.PolicyRoleListResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.PolicyRoleListResponse>;

  deleteRole(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getRolesForUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.PolicyRolesForUserResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.PolicyRolesForUserResponse>;

  getUsersForRole(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.PolicyUsersForRoleResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.PolicyUsersForRoleResponse>;

  addRolesForUser(
    request: nut_pb.PolicyAddRolesForUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteRolesForUser(
    request: nut_pb.PolicyDeleteRolesForUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getImplicitRolesForUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.PolicyImplicitRolesForUserResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.PolicyImplicitRolesForUserResponse>;

  getImplicitUsersForRole(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.PolicyImplicitUsersForRoleResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.PolicyImplicitUsersForRoleResponse>;

  getPermissionsForUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.PolicyPermissionList) => void
  ): grpcWeb.ClientReadableStream<nut_pb.PolicyPermissionList>;

  getPermissionsForRole(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.PolicyPermissionList) => void
  ): grpcWeb.ClientReadableStream<nut_pb.PolicyPermissionList>;

  getImplicitPermissionsForUser(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.PolicyPermissionList) => void
  ): grpcWeb.ClientReadableStream<nut_pb.PolicyPermissionList>;

  getImplicitPermissionsForRole(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.PolicyPermissionList) => void
  ): grpcWeb.ClientReadableStream<nut_pb.PolicyPermissionList>;

  addPermissions(
    request: nut_pb.PolicyPermissionList,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deletePermissions(
    request: nut_pb.PolicyPermissionList,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class LocaleClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  set(
    request: nut_pb.LocaleSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  get(
    request: nut_pb.LocaleGetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.LocaleIndexResponse.Item) => void
  ): grpcWeb.ClientReadableStream<nut_pb.LocaleIndexResponse.Item>;

  byLang(
    request: nut_pb.LocaleByLangRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.LocaleByLangResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.LocaleByLangResponse>;

  index(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.LocaleIndexResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.LocaleIndexResponse>;

  destroy(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class NotificationClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  index(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.IndexNotificationResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.IndexNotificationResponse>;

}

export class LeaveWordClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: nut_pb.MediaContent,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  index(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.LeaveWordIndexResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.LeaveWordIndexResponse>;

  destroy(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class SiteClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  setMaintenanceMode(
    request: nut_pb.SiteMaintenanceModeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  install(
    request: nut_pb.SiteInstallRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  clearCache(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  layout(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.SiteLayoutResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.SiteLayoutResponse>;

  setAuthor(
    request: nut_pb.SiteLayoutResponse.Author,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setCopyright(
    request: nut_pb.SiteSetCopyrightRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setKeywords(
    request: nut_pb.SiteSetKeywordsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setInfo(
    request: nut_pb.SiteSetInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setLogo(
    request: nut_pb.SiteSetLogoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setMinio(
    request: nut_pb.MinioProfile,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getMinio(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.MinioProfile) => void
  ): grpcWeb.ClientReadableStream<nut_pb.MinioProfile>;

  testMinio(
    request: nut_pb.MinioProfile,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.SiteMinioTestResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.SiteMinioTestResponse>;

  setTwilio(
    request: nut_pb.TwilioProfile,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getTwilio(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.TwilioProfile) => void
  ): grpcWeb.ClientReadableStream<nut_pb.TwilioProfile>;

  testTwilio(
    request: nut_pb.SiteTwilioTestRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setSmtp(
    request: nut_pb.SmtpProfile,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getSmtp(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.SmtpProfile) => void
  ): grpcWeb.ClientReadableStream<nut_pb.SmtpProfile>;

  testSmtp(
    request: nut_pb.SiteSmtpTestRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setBing(
    request: nut_pb.BingProfile,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getBing(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.BingProfile) => void
  ): grpcWeb.ClientReadableStream<nut_pb.BingProfile>;

  setIndexNow(
    request: nut_pb.IndexNowProfile,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getIndexNow(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.IndexNowProfile) => void
  ): grpcWeb.ClientReadableStream<nut_pb.IndexNowProfile>;

  pingIndexNow(
    request: nut_pb.IndexNowPingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setGoogle(
    request: nut_pb.GoogleProfile,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getGoogle(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.GoogleProfile) => void
  ): grpcWeb.ClientReadableStream<nut_pb.GoogleProfile>;

  pingGoogle(
    request: nut_pb.SitemapPingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setBaidu(
    request: nut_pb.BaiduProfile,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getBaidu(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.BaiduProfile) => void
  ): grpcWeb.ClientReadableStream<nut_pb.BaiduProfile>;

  pingBaidu(
    request: nut_pb.SitemapPingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  status(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.SiteStatusResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.SiteStatusResponse>;

}

export class ShorterLinkClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: nut_pb.ShorterLinkCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  update(
    request: nut_pb.ShorterLinkUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  destroy(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  index(
    request: nut_pb.Pager,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.ShorterLinkIndexResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.ShorterLinkIndexResponse>;

}

export class TagClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: nut_pb.TagCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  update(
    request: nut_pb.TagUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  destroy(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  index(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.TagIndexResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.TagIndexResponse>;

}

export class CategoryClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: nut_pb.CategoryCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  update(
    request: nut_pb.CategoryUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  destroy(
    request: nut_pb.IdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  index(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: nut_pb.CategoryIndexResponse) => void
  ): grpcWeb.ClientReadableStream<nut_pb.CategoryIndexResponse>;

}

export class UserPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  signIn(
    request: nut_pb.UserSignInRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.UserSignInResponse>;

  signUp(
    request: nut_pb.UserSignUpRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  confirmByEmail(
    request: nut_pb.UserQueryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  confirmByToken(
    request: nut_pb.UserTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  unlockByEmail(
    request: nut_pb.UserQueryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  unlockByToken(
    request: nut_pb.UserTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  forgotPassword(
    request: nut_pb.UserQueryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  resetPassword(
    request: nut_pb.UserResetPasswordRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  refresh(
    request: google_protobuf_duration_pb.Duration,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.UserSignInResponse>;

  logs(
    request: nut_pb.Pager,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.UserLogsResponse>;

  setProfile(
    request: nut_pb.UserSetProfileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  changePassword(
    request: nut_pb.UserChangePasswordRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  signOut(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  index(
    request: nut_pb.Pager,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.UserIndexResponse>;

  show(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.UserIndexResponse.Item>;

  disable(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  enable(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  lock(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  unlock(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  confirm(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  setPassword(
    request: nut_pb.UserSetPasswordRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

export class AttachmentPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  index(
    request: nut_pb.Pager,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.AttachmentIndexResponse>;

  destroy(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  show(
    request: nut_pb.AttachmentShowRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.AttachmentShowResponse>;

}

export class PolicyPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addRole(
    request: nut_pb.PolicyAddRoleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getAllRoles(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.PolicyRoleListResponse>;

  deleteRole(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getRolesForUser(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.PolicyRolesForUserResponse>;

  getUsersForRole(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.PolicyUsersForRoleResponse>;

  addRolesForUser(
    request: nut_pb.PolicyAddRolesForUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deleteRolesForUser(
    request: nut_pb.PolicyDeleteRolesForUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getImplicitRolesForUser(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.PolicyImplicitRolesForUserResponse>;

  getImplicitUsersForRole(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.PolicyImplicitUsersForRoleResponse>;

  getPermissionsForUser(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.PolicyPermissionList>;

  getPermissionsForRole(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.PolicyPermissionList>;

  getImplicitPermissionsForUser(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.PolicyPermissionList>;

  getImplicitPermissionsForRole(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.PolicyPermissionList>;

  addPermissions(
    request: nut_pb.PolicyPermissionList,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deletePermissions(
    request: nut_pb.PolicyPermissionList,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

export class LocalePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  set(
    request: nut_pb.LocaleSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  get(
    request: nut_pb.LocaleGetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.LocaleIndexResponse.Item>;

  byLang(
    request: nut_pb.LocaleByLangRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.LocaleByLangResponse>;

  index(
    request: nut_pb.Pager,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.LocaleIndexResponse>;

  destroy(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

export class NotificationPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  index(
    request: nut_pb.Pager,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.IndexNotificationResponse>;

}

export class LeaveWordPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: nut_pb.MediaContent,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  index(
    request: nut_pb.Pager,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.LeaveWordIndexResponse>;

  destroy(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

export class SitePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  setMaintenanceMode(
    request: nut_pb.SiteMaintenanceModeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  install(
    request: nut_pb.SiteInstallRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  clearCache(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  layout(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.SiteLayoutResponse>;

  setAuthor(
    request: nut_pb.SiteLayoutResponse.Author,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  setCopyright(
    request: nut_pb.SiteSetCopyrightRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  setKeywords(
    request: nut_pb.SiteSetKeywordsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  setInfo(
    request: nut_pb.SiteSetInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  setLogo(
    request: nut_pb.SiteSetLogoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  setMinio(
    request: nut_pb.MinioProfile,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getMinio(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.MinioProfile>;

  testMinio(
    request: nut_pb.MinioProfile,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.SiteMinioTestResponse>;

  setTwilio(
    request: nut_pb.TwilioProfile,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getTwilio(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.TwilioProfile>;

  testTwilio(
    request: nut_pb.SiteTwilioTestRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  setSmtp(
    request: nut_pb.SmtpProfile,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getSmtp(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.SmtpProfile>;

  testSmtp(
    request: nut_pb.SiteSmtpTestRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  setBing(
    request: nut_pb.BingProfile,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getBing(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.BingProfile>;

  setIndexNow(
    request: nut_pb.IndexNowProfile,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getIndexNow(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.IndexNowProfile>;

  pingIndexNow(
    request: nut_pb.IndexNowPingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  setGoogle(
    request: nut_pb.GoogleProfile,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getGoogle(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.GoogleProfile>;

  pingGoogle(
    request: nut_pb.SitemapPingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  setBaidu(
    request: nut_pb.BaiduProfile,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getBaidu(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.BaiduProfile>;

  pingBaidu(
    request: nut_pb.SitemapPingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  status(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.SiteStatusResponse>;

}

export class ShorterLinkPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: nut_pb.ShorterLinkCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  update(
    request: nut_pb.ShorterLinkUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  destroy(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  index(
    request: nut_pb.Pager,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.ShorterLinkIndexResponse>;

}

export class TagPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: nut_pb.TagCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  update(
    request: nut_pb.TagUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  destroy(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  index(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.TagIndexResponse>;

}

export class CategoryPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: nut_pb.CategoryCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  update(
    request: nut_pb.CategoryUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  destroy(
    request: nut_pb.IdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  index(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<nut_pb.CategoryIndexResponse>;

}

