# jsx
以前的版本貌似不支持jsx，所以要配置babel

```js
npm i @vue/babel-plugin-jsx -D
```

```js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],

  plugins: [
    ' @vue/babel-plugin-jsx'
  ]
}

```