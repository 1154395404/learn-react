import {applyMiddleware, createStore} from "redux";
import reducer from './count.reducer'
// 这里 引入 redux thunk 才是执行异步action
import thunk from "redux-thunk";

const store=createStore(reducer,applyMiddleware(thunk))
export default store
