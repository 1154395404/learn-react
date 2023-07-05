import {applyMiddleware, createStore,combineReducers} from "redux";
import count_reducer from './reducers/count'
import person_reducer from './reducers/person'
// 这里 引入 redux thunk 才是执行异步action
import thunk from "redux-thunk";

const reducers=combineReducers({
    count_reducer,
    person_reducer,
})

const store=createStore(reducers,applyMiddleware(thunk))
export default store
