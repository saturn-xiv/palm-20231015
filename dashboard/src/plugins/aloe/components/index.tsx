export interface IEthernet {
  mac: string;
  device: string;
}

export const local_networks: string[] = Array.from(Array(255).keys()).map(
  (it) => `192.168.${it}.1/24`
);
