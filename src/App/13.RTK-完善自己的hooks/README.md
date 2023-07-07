> 安装 rtk包 与 react-redux
```shell
yarn add react-redux @reduxjs/toolkit
```
### 在 Redux Toolkit (RTK) 中，Reducer 切片 和传统 Reducer 区别。

**Reducer:**
- 在传统的 Redux 中，Reducer 是一个纯函数，接收当前状态和一个 action，并返回一个新的状态。Reducer 负责根据不同的 action 类型来更新应用程序的状态。

**Reducer 切片（Slice）:**
- Reducer 切片是 RTK 中的一个概念，它是一个包含了 `Reducer 函数`、`Action Creators` 和 `Action Types` 的集合。
- Reducer 切片可以通过 `createSlice` 函数来创建，该函数会自动生成相应的 Reducer 函数和相关的 Action Creators 和 Action Types。
- 使用 Reducer 切片可以更加简化和组织 Redux 的代码结构，将相关的逻辑封装到一个切片中，提高可读性和可维护性。
- Reducer 切片还提供了一种方便的方式来处理常见的操作，如生成带有自动命名的 Action Types、自动创建 Action Creators 等。

下面是一个使用 Reducer 切片的示例代码：

```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

在上面的例子中，`createSlice` 函数创建了一个名为 `counter` 的 Reducer 切片。它定义了初始状态 `initialState` 和两个自动生成的 Action Creators `increment` 和 `decrement`，以及相应的 Reducer 函数。通过导出这些 Action Creators 和 Reducer，可以在其他地方使用它们来更新和处理状态。

总结起来，在 RTK 中，Reducer 是传统 Redux 中的概念，而 Reducer 切片是 RTK 提供的一种更高级别、更便捷的方式来组织和管理 Redux 的代码。Reducer 切片将相关的逻辑封装到一个切片中，减少了样板代码，并提供了一些工具函数来简化开发过程。
