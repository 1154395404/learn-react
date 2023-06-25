import {createStore} from "redux";
import reducer from './count.reducer'
const store=createStore(reducer)
export default store
