# silence.github.io

基于 React + React-router + ES6 前端项目

## 技术选型

* [React](https://github.com/facebook/react)
* [React-router](https://github.com/rackt/react-router)
* [Webpack](https://github.com/webpack/webpack)
* [Babel](https://github.com/babel/babel)
* [ESlint](http://eslint.org)

## 目录结构

```
src/
  |-assets/             # 静态文件
     |- fonts/          # 字体
     |- images/         # 图片
     |- plugins/        # 插件
     |- styles/         # 样式
     |- ...
  |-components/         # 全局可复用的 UI 组件（presentational component）
     |- content.js
     |- footer.js
     |- navbar.js
     |- siderbar.js
     |- ...
  |-containers/         # 全局可复用的容器组件（container component）
     |- empty.js
     |- main.js
     |- notfound.js
     |- ...
  |-routes/             # 主路由和异步分割点
     |- index.js
     |- ...
  |-utils/              # 工具方法
     |- resume.js
     |- ...
  |- app.js             # 入口文件
  |- ...
```

## 使用方法

```sh
$ git clone https://github.com/silence/silence.github.io.git
$ cd silence.github.io
```

## 贡献

有任何意见或建议都欢迎提 issue

## SILENCE

MIT
