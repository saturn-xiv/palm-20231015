import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  base: '/my/',
  favicon: '/assets/favicon.png',
  hash: true,
  dynamicImport: {
    loading: '@/Loading',
  },
  antd: false,
  locale: {
    default: 'en-US',
    title: true,
  },
});
