# vue-cli

## 安装
```js
npm i @vue/cli -g
```
- 更新
  ```js
  npm updata @vue/cli -g
  ```

## 创建项目
```js
vue create testvuecli
```

## vue-cli 原理
- 执行命令：npm run server
- 工具会找到package.json者serve：vue-cli-service serve
- 执行node_modules中的.bin下的vue-cli-service
- vue-cli-service中会使用node执行@vue/cli-service/bin/vue-cli-service.js文件
- ...

