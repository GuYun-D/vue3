
# vite

## vite的构造
- 一个开发服务器，它是基于原生es模块提供了丰富的内建功能，HRM的速度也很快
- 一套构建指令，它使用rollup打开我们的代码，并且他是预配置的，可以输出生成环境的优化过的静态资源

## 弊端
使用es module的方法，不打包也能在浏览器中使用，但是会耗费资源，性能不好

## 安装
```js
npm i vite -g
```

## 原理
vite搭建了一个服务器，vite1使用的是koa，vite2使用的是Connect

## vite对vue的支持
- vue3单文件组件：@vitejs/plugin-vue
- jsx: @vitejs/plugin-vue-jsx
- vue2： underfin/vite-plugin-vue2

还要下载@vue/compiler-sfc

## vite会对依赖进行预打包
存在于node_modules/.vite文件夹中
vite服务停掉，再启动时就不会进行预打包，提高了性能，速度快

## 打包
- npx vite build
- 预览打包后生成的文件运行：npx vite preview

## ESBuild
- 超快的构建速度
- 支持es6和commonJs模块化
- 支持es6的tree shaking
- 支持go js的api
- 支持ts。jsx语法
- 支持sourceMap
- 支持代码压缩
- 支持扩展其他插件
