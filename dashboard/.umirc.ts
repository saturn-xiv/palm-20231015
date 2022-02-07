import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  base: `${process.env.UMI_APP_BASE_PATH}/`,
  favicon: '/assets/favicon.png',
  hash: true,
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  locale: {
    default: 'en-US',
    title: true,
    antd: true,
  },
});
