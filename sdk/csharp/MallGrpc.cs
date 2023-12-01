// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: mall.proto
// </auto-generated>
#pragma warning disable 0414, 1591, 8981, 0612
#region Designer generated code

using grpc = global::Grpc.Core;

namespace Palm.Mall.V1 {
  public static partial class Sku
  {
    static readonly string __ServiceName = "palm.mall.v1.Sku";


    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::Palm.Mall.V1.MallReflection.Descriptor.Services[0]; }
    }

    /// <summary>Base class for server-side implementations of Sku</summary>
    [grpc::BindServiceMethod(typeof(Sku), "BindService")]
    public abstract partial class SkuBase
    {
    }

    /// <summary>Client for Sku</summary>
    public partial class SkuClient : grpc::ClientBase<SkuClient>
    {
      /// <summary>Creates a new client for Sku</summary>
      /// <param name="channel">The channel to use to make remote calls.</param>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public SkuClient(grpc::ChannelBase channel) : base(channel)
      {
      }
      /// <summary>Creates a new client for Sku that uses a custom <c>CallInvoker</c>.</summary>
      /// <param name="callInvoker">The callInvoker to use to make remote calls.</param>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public SkuClient(grpc::CallInvoker callInvoker) : base(callInvoker)
      {
      }
      /// <summary>Protected parameterless constructor to allow creation of test doubles.</summary>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      protected SkuClient() : base()
      {
      }
      /// <summary>Protected constructor to allow creation of configured clients.</summary>
      /// <param name="configuration">The client configuration.</param>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      protected SkuClient(ClientBaseConfiguration configuration) : base(configuration)
      {
      }

      /// <summary>Creates a new instance of client from given <c>ClientBaseConfiguration</c>.</summary>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      protected override SkuClient NewInstance(ClientBaseConfiguration configuration)
      {
        return new SkuClient(configuration);
      }
    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static grpc::ServerServiceDefinition BindService(SkuBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder().Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static void BindService(grpc::ServiceBinderBase serviceBinder, SkuBase serviceImpl)
    {
    }

  }
  public static partial class Spu
  {
    static readonly string __ServiceName = "palm.mall.v1.Spu";


    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::Palm.Mall.V1.MallReflection.Descriptor.Services[1]; }
    }

    /// <summary>Base class for server-side implementations of Spu</summary>
    [grpc::BindServiceMethod(typeof(Spu), "BindService")]
    public abstract partial class SpuBase
    {
    }

    /// <summary>Client for Spu</summary>
    public partial class SpuClient : grpc::ClientBase<SpuClient>
    {
      /// <summary>Creates a new client for Spu</summary>
      /// <param name="channel">The channel to use to make remote calls.</param>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public SpuClient(grpc::ChannelBase channel) : base(channel)
      {
      }
      /// <summary>Creates a new client for Spu that uses a custom <c>CallInvoker</c>.</summary>
      /// <param name="callInvoker">The callInvoker to use to make remote calls.</param>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public SpuClient(grpc::CallInvoker callInvoker) : base(callInvoker)
      {
      }
      /// <summary>Protected parameterless constructor to allow creation of test doubles.</summary>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      protected SpuClient() : base()
      {
      }
      /// <summary>Protected constructor to allow creation of configured clients.</summary>
      /// <param name="configuration">The client configuration.</param>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      protected SpuClient(ClientBaseConfiguration configuration) : base(configuration)
      {
      }

      /// <summary>Creates a new instance of client from given <c>ClientBaseConfiguration</c>.</summary>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      protected override SpuClient NewInstance(ClientBaseConfiguration configuration)
      {
        return new SpuClient(configuration);
      }
    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static grpc::ServerServiceDefinition BindService(SpuBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder().Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static void BindService(grpc::ServiceBinderBase serviceBinder, SpuBase serviceImpl)
    {
    }

  }
}
#endregion
