export const BASE_URL: string = import.meta.env.BASE_URL;
export const is_production = () => BASE_URL === "production";
export const RPC_HOST: string =
  typeof import.meta.env.VITE_GRPC_HOST === "string"
    ? import.meta.env.VITE_GRPC_HOST
    : "";
