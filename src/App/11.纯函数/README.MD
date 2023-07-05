# 纯函数
1. 特殊纯函数 参数是什么 返回值就是什么 例如
```tsx
function pure(num) {
    return num
}
```
2. 纯函数必须遵守一下约束
    1. 不得改写参数的数据 
    2. 不会产生任何副作用 例如网络请求等
    3. 不得调用 Date.now() 或者 Math.random()等方法

3. redux 里的 reducer 必须是一个纯函数
