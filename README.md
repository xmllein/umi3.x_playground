## umi3.x (playground)
- `yarn create @umijs/umi-app`
- node version: 14.16.1


## 内容
- class 组件
  - 组件生命周期 （`PureComponent`）
  - 组件新生命周期（`getDerivedStateFromProps`, `getSnapshotBeforeUpdate`）
  - 组件间通信（父子组件，兄弟组件）
  - `Dva`数据处理及数据`mock`
  - 基于`react context api` 实现数据流管理
  - `lazy` 与 `suspense` 实现组件懒加载
  - `ErrorBoundary` 错误边界
  - `Modal`组件开发，基于`createPortal`实现
  - 使用`ref api`操作 `dom` 与 组件开发

- hooks
  - react 函数式组件模式(`useMemo` 与 `useCallback` 优化性能)
  - `useContext` 与 `useReducer` 实现数据流管理
  - 自定义`hook`， `useTitleHook` 设置标题 `hook`
  - 自定义`hook`， `useHttpHook` 请求数据 `hook`
  - 使用 `think-react-store` 实现数据处理，`hook` 数据流解决方案（如果依赖出现报错，请删除`./src/.umi`临时文件夹，重新运行项目）
  - `fiber` 架构解析


## 命令
- `npx umi plugin list` 查看插件列表

## 参考资料
- [UmiJs3.x文档](https://v3.umijs.org/zh-CN)
- [千锋教育前端框架Umi3教程](https://www.bilibili.com/video/BV1pG411879j/?spm_id_from=333.337.search-card.all.click&vd_source=c5abf1ba032ca00c06ebba96e3ff445e)
- [React+React Hook+Egg造轮子 全栈开发旅游电商应用](https://coding.imooc.com/class/chapter/452.html#Anchor)
