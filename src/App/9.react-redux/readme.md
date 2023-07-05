## react-redux 有 容器组件 与 UI组件 的概念

![图片](./static/截屏2023-06-25%2012.39.59%20(2).png)

### react-redux 会自动检测数值改变 从而不需要手动 在redux 里订阅事件

### 当多个 容器组件需要 store 可以在 index 或者 app 根组件 引入 Provider 他会识别容器组件 从而自动注入store
