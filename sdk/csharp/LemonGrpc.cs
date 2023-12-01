// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: lemon.proto
// </auto-generated>
#pragma warning disable 0414, 1591, 8981, 0612
#region Designer generated code

using grpc = global::Grpc.Core;

namespace Palm.Lemon.V1 {
  public static partial class Site
  {
    static readonly string __ServiceName = "palm.lemon.v1.Site";

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static void __Helper_SerializeMessage(global::Google.Protobuf.IMessage message, grpc::SerializationContext context)
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (message is global::Google.Protobuf.IBufferMessage)
      {
        context.SetPayloadLength(message.CalculateSize());
        global::Google.Protobuf.MessageExtensions.WriteTo(message, context.GetBufferWriter());
        context.Complete();
        return;
      }
      #endif
      context.Complete(global::Google.Protobuf.MessageExtensions.ToByteArray(message));
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static class __Helper_MessageCache<T>
    {
      public static readonly bool IsBufferMessage = global::System.Reflection.IntrospectionExtensions.GetTypeInfo(typeof(global::Google.Protobuf.IBufferMessage)).IsAssignableFrom(typeof(T));
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static T __Helper_DeserializeMessage<T>(grpc::DeserializationContext context, global::Google.Protobuf.MessageParser<T> parser) where T : global::Google.Protobuf.IMessage<T>
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (__Helper_MessageCache<T>.IsBufferMessage)
      {
        return parser.ParseFrom(context.PayloadAsReadOnlySequence());
      }
      #endif
      return parser.ParseFrom(context.PayloadAsNewBuffer());
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Palm.Lemon.V1.SiteLayoutRequest> __Marshaller_palm_lemon_v1_SiteLayoutRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Palm.Lemon.V1.SiteLayoutRequest.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Palm.Lemon.V1.SiteLayoutResponse> __Marshaller_palm_lemon_v1_SiteLayoutResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Palm.Lemon.V1.SiteLayoutResponse.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Google.Protobuf.WellKnownTypes.Duration> __Marshaller_google_protobuf_Duration = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Google.Protobuf.WellKnownTypes.Duration.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Palm.Lemon.V1.SiteRssResponse> __Marshaller_palm_lemon_v1_SiteRssResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Palm.Lemon.V1.SiteRssResponse.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Google.Protobuf.WellKnownTypes.Empty> __Marshaller_google_protobuf_Empty = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Google.Protobuf.WellKnownTypes.Empty.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Palm.Lemon.V1.SiteSitemapResponse> __Marshaller_palm_lemon_v1_SiteSitemapResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Palm.Lemon.V1.SiteSitemapResponse.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Palm.Lemon.V1.SiteShowPageRequest> __Marshaller_palm_lemon_v1_SiteShowPageRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Palm.Lemon.V1.SiteShowPageRequest.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Palm.Lemon.V1.SiteShowPageResponse> __Marshaller_palm_lemon_v1_SiteShowPageResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Palm.Lemon.V1.SiteShowPageResponse.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Palm.Lemon.V1.SiteHomePageRequest> __Marshaller_palm_lemon_v1_SiteHomePageRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Palm.Lemon.V1.SiteHomePageRequest.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Palm.Lemon.V1.SiteHomePageResponse> __Marshaller_palm_lemon_v1_SiteHomePageResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Palm.Lemon.V1.SiteHomePageResponse.Parser));

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::Palm.Lemon.V1.SiteLayoutRequest, global::Palm.Lemon.V1.SiteLayoutResponse> __Method_Layout = new grpc::Method<global::Palm.Lemon.V1.SiteLayoutRequest, global::Palm.Lemon.V1.SiteLayoutResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "Layout",
        __Marshaller_palm_lemon_v1_SiteLayoutRequest,
        __Marshaller_palm_lemon_v1_SiteLayoutResponse);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::Google.Protobuf.WellKnownTypes.Duration, global::Palm.Lemon.V1.SiteRssResponse> __Method_Rss = new grpc::Method<global::Google.Protobuf.WellKnownTypes.Duration, global::Palm.Lemon.V1.SiteRssResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "Rss",
        __Marshaller_google_protobuf_Duration,
        __Marshaller_palm_lemon_v1_SiteRssResponse);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::Google.Protobuf.WellKnownTypes.Empty, global::Palm.Lemon.V1.SiteSitemapResponse> __Method_Sitemap = new grpc::Method<global::Google.Protobuf.WellKnownTypes.Empty, global::Palm.Lemon.V1.SiteSitemapResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "Sitemap",
        __Marshaller_google_protobuf_Empty,
        __Marshaller_palm_lemon_v1_SiteSitemapResponse);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::Palm.Lemon.V1.SiteShowPageRequest, global::Palm.Lemon.V1.SiteShowPageResponse> __Method_ShowPage = new grpc::Method<global::Palm.Lemon.V1.SiteShowPageRequest, global::Palm.Lemon.V1.SiteShowPageResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "ShowPage",
        __Marshaller_palm_lemon_v1_SiteShowPageRequest,
        __Marshaller_palm_lemon_v1_SiteShowPageResponse);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::Palm.Lemon.V1.SiteHomePageRequest, global::Palm.Lemon.V1.SiteHomePageResponse> __Method_HomePage = new grpc::Method<global::Palm.Lemon.V1.SiteHomePageRequest, global::Palm.Lemon.V1.SiteHomePageResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "HomePage",
        __Marshaller_palm_lemon_v1_SiteHomePageRequest,
        __Marshaller_palm_lemon_v1_SiteHomePageResponse);

    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::Palm.Lemon.V1.LemonReflection.Descriptor.Services[0]; }
    }

    /// <summary>Base class for server-side implementations of Site</summary>
    [grpc::BindServiceMethod(typeof(Site), "BindService")]
    public abstract partial class SiteBase
    {
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::Palm.Lemon.V1.SiteLayoutResponse> Layout(global::Palm.Lemon.V1.SiteLayoutRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::Palm.Lemon.V1.SiteRssResponse> Rss(global::Google.Protobuf.WellKnownTypes.Duration request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::Palm.Lemon.V1.SiteSitemapResponse> Sitemap(global::Google.Protobuf.WellKnownTypes.Empty request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::Palm.Lemon.V1.SiteShowPageResponse> ShowPage(global::Palm.Lemon.V1.SiteShowPageRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::Palm.Lemon.V1.SiteHomePageResponse> HomePage(global::Palm.Lemon.V1.SiteHomePageRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

    }

    /// <summary>Client for Site</summary>
    public partial class SiteClient : grpc::ClientBase<SiteClient>
    {
      /// <summary>Creates a new client for Site</summary>
      /// <param name="channel">The channel to use to make remote calls.</param>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public SiteClient(grpc::ChannelBase channel) : base(channel)
      {
      }
      /// <summary>Creates a new client for Site that uses a custom <c>CallInvoker</c>.</summary>
      /// <param name="callInvoker">The callInvoker to use to make remote calls.</param>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public SiteClient(grpc::CallInvoker callInvoker) : base(callInvoker)
      {
      }
      /// <summary>Protected parameterless constructor to allow creation of test doubles.</summary>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      protected SiteClient() : base()
      {
      }
      /// <summary>Protected constructor to allow creation of configured clients.</summary>
      /// <param name="configuration">The client configuration.</param>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      protected SiteClient(ClientBaseConfiguration configuration) : base(configuration)
      {
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Palm.Lemon.V1.SiteLayoutResponse Layout(global::Palm.Lemon.V1.SiteLayoutRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return Layout(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Palm.Lemon.V1.SiteLayoutResponse Layout(global::Palm.Lemon.V1.SiteLayoutRequest request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_Layout, null, options, request);
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Palm.Lemon.V1.SiteLayoutResponse> LayoutAsync(global::Palm.Lemon.V1.SiteLayoutRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return LayoutAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Palm.Lemon.V1.SiteLayoutResponse> LayoutAsync(global::Palm.Lemon.V1.SiteLayoutRequest request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_Layout, null, options, request);
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Palm.Lemon.V1.SiteRssResponse Rss(global::Google.Protobuf.WellKnownTypes.Duration request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return Rss(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Palm.Lemon.V1.SiteRssResponse Rss(global::Google.Protobuf.WellKnownTypes.Duration request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_Rss, null, options, request);
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Palm.Lemon.V1.SiteRssResponse> RssAsync(global::Google.Protobuf.WellKnownTypes.Duration request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return RssAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Palm.Lemon.V1.SiteRssResponse> RssAsync(global::Google.Protobuf.WellKnownTypes.Duration request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_Rss, null, options, request);
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Palm.Lemon.V1.SiteSitemapResponse Sitemap(global::Google.Protobuf.WellKnownTypes.Empty request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return Sitemap(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Palm.Lemon.V1.SiteSitemapResponse Sitemap(global::Google.Protobuf.WellKnownTypes.Empty request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_Sitemap, null, options, request);
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Palm.Lemon.V1.SiteSitemapResponse> SitemapAsync(global::Google.Protobuf.WellKnownTypes.Empty request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return SitemapAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Palm.Lemon.V1.SiteSitemapResponse> SitemapAsync(global::Google.Protobuf.WellKnownTypes.Empty request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_Sitemap, null, options, request);
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Palm.Lemon.V1.SiteShowPageResponse ShowPage(global::Palm.Lemon.V1.SiteShowPageRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return ShowPage(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Palm.Lemon.V1.SiteShowPageResponse ShowPage(global::Palm.Lemon.V1.SiteShowPageRequest request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_ShowPage, null, options, request);
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Palm.Lemon.V1.SiteShowPageResponse> ShowPageAsync(global::Palm.Lemon.V1.SiteShowPageRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return ShowPageAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Palm.Lemon.V1.SiteShowPageResponse> ShowPageAsync(global::Palm.Lemon.V1.SiteShowPageRequest request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_ShowPage, null, options, request);
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Palm.Lemon.V1.SiteHomePageResponse HomePage(global::Palm.Lemon.V1.SiteHomePageRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return HomePage(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Palm.Lemon.V1.SiteHomePageResponse HomePage(global::Palm.Lemon.V1.SiteHomePageRequest request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_HomePage, null, options, request);
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Palm.Lemon.V1.SiteHomePageResponse> HomePageAsync(global::Palm.Lemon.V1.SiteHomePageRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return HomePageAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Palm.Lemon.V1.SiteHomePageResponse> HomePageAsync(global::Palm.Lemon.V1.SiteHomePageRequest request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_HomePage, null, options, request);
      }
      /// <summary>Creates a new instance of client from given <c>ClientBaseConfiguration</c>.</summary>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      protected override SiteClient NewInstance(ClientBaseConfiguration configuration)
      {
        return new SiteClient(configuration);
      }
    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static grpc::ServerServiceDefinition BindService(SiteBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder()
          .AddMethod(__Method_Layout, serviceImpl.Layout)
          .AddMethod(__Method_Rss, serviceImpl.Rss)
          .AddMethod(__Method_Sitemap, serviceImpl.Sitemap)
          .AddMethod(__Method_ShowPage, serviceImpl.ShowPage)
          .AddMethod(__Method_HomePage, serviceImpl.HomePage).Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static void BindService(grpc::ServiceBinderBase serviceBinder, SiteBase serviceImpl)
    {
      serviceBinder.AddMethod(__Method_Layout, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Palm.Lemon.V1.SiteLayoutRequest, global::Palm.Lemon.V1.SiteLayoutResponse>(serviceImpl.Layout));
      serviceBinder.AddMethod(__Method_Rss, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Google.Protobuf.WellKnownTypes.Duration, global::Palm.Lemon.V1.SiteRssResponse>(serviceImpl.Rss));
      serviceBinder.AddMethod(__Method_Sitemap, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Google.Protobuf.WellKnownTypes.Empty, global::Palm.Lemon.V1.SiteSitemapResponse>(serviceImpl.Sitemap));
      serviceBinder.AddMethod(__Method_ShowPage, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Palm.Lemon.V1.SiteShowPageRequest, global::Palm.Lemon.V1.SiteShowPageResponse>(serviceImpl.ShowPage));
      serviceBinder.AddMethod(__Method_HomePage, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Palm.Lemon.V1.SiteHomePageRequest, global::Palm.Lemon.V1.SiteHomePageResponse>(serviceImpl.HomePage));
    }

  }
}
#endregion
