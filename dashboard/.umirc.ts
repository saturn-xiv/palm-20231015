import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  hash: true,
  base: '/my/',
  dynamicImport: {
    loading: '@/Loading',
  },
});
