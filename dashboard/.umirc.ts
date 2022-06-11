import { defineConfig } from 'umi';

const BASE_PATH = '/my/';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  hash: true,
  base: BASE_PATH,
  publicPath: BASE_PATH,
  favicon: `${BASE_PATH}favicon.png`,
  dynamicImport: {
    loading: '@/Loading',
  },
  locale: {
    default: 'en-US',
    antd: true,
    baseNavigator: false,
    useLocalStorage: true,
  },
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8080/',
      changeOrigin: true,
    },
  },
});
