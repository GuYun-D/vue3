# URL的hash
Url的hash也就是锚点（#），本质上时改变window.location的href属性
优势就是在低版本ie中也能运行，但是缺陷是有一个#
```html
<div id="app">
  <a href="#/home">home</a>
  <a href="#/about">about</a>
  <div class="content">
  </div>
</div>
<script>
  const contentEl = document.querySelector(".content")
  window.addEventListener("hashchange", () => {
    console.log("hash发生改变");
    switch (location.hash) {
      case "#/home":
        contentEl.innerHTML = "home"
        break;
      case "#/about":
        contentEl.innerHTML = "about"
        break;
      default:
        contentEl.innerHTML = "index"
        break
    }
  })
</script>
```

# HTML5的History
History接口是h5新增的，他有六种模式改变url而不刷新页面
- replaceState：替换原来的路径
- pushState：使用新的路径
- popState：路径的回退
- go：向前想后改变路径
- forword：向前改变路径
- back：向后改变路径

```html
<body>
  <div id="app">
    <a href="/home">home</a>
    <a href="/about">about</a>
    <div class="content">
    </div>
  </div>

  <script>
    const contentEl = document.querySelector(".content")
    const aEls = document.getElementsByTagName('a')
    const changeContent = () => {
      switch (location.pathname) {
        case "/home":
          contentEl.innerHTML = "home"
          break;
        case "/about":
          contentEl.innerHTML = "about"
          break;
      }
    }

    for (let aEl of aEls) {
      aEl.addEventListener('click', e => {
        e.preventDefault()
        // console.log("a click");
        const href = aEl.getAttribute("href")
        console.log(href);
        // push的方法相当于是压栈
        history.pushState({}, '', href)

        changeContent()
      })
    }

    window.addEventListener("popstate", changeContent)


  </script>
</body>
```