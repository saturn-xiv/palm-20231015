import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  hash: true,
  base: '/my/',
  publicPath: '/my/',
  favicon: '/favicon.png',
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
