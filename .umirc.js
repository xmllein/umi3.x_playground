import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    immer: true,
    hmr: true,
  },
  antd: {},
  dynamicImport: {},
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index', title: '首页' },
        {
          path: '/class/component-old',
          component: '@/pages/class/component-old',
          title: '组件生命周期',
        },
        {
          path: '/class/component-new',
          component: '@/pages/class/component-new',
          title: '组件生命周期',
        },
        {
          path: '/class/lists',
          component: '@/pages/class/lists',
          title: '组件值传递',
        },
        {
          path: '/class/dva',
          component: '@/pages/class/dva',
          title: 'dva',
        },
        {
          path: '/class/context',
          component: '@/pages/class/context',
          title: 'context',
        },
        {
          path: '/class/lazy-load',
          component: '@/pages/class/lazy-load',
          title: 'lazy-load',
        },
        {
          path: '/class/modal',
          component: '@/pages/class/modal',
          title: 'modal',
        },
        {
          path: '/class/refs',
          component: '@/pages/class/refs',
          title: 'refs',
        },
        {
          path: '/function/index',
          component: '@/pages/function/index',
          title: 'hook',
        },
        {
          path: '/function/hook',
          component: '@/pages/function/hook',
          title: 'hook',
        },
        {
          path: '/function/context',
          component: '@/pages/function/context',
          title: 'context',
        },
        {
          path: '/function/customize',
          component: '@/pages/function/customize',
          title: 'customize',
        },
        {
          path: '/function/store',
          component: '@/pages/function/store',
          title: 'store',
        },
      ],
    },
  ],
  fastRefresh: {},

  // plugins: [
  //   // ref: https://umijs.org/plugin/umi-plugin-react.html
  //   [
  //     'umi-plugin-react',
  //     {
  //       antd: true,
  //       dva: true,
  //       dynamicImport: false,
  //       title: 'umi-app',
  //       dll: false,
  //       routes: {
  //         exclude: [/components\//],
  //       },
  //     },
  //   ],
  // ],
});
