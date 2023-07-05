// Count 的容器组件
import {connect} from "react-redux";
import UI from "./UI";
import {
    createDecrementAction,
    createDecrementAsyncAction,
    createIncrementAction
} from "../../../../redux/4.react-redux/count.action";

const mapStateToProps = (action) => action

// 写法1
// const mapDispatchToProps = (dispatch) => ({
//     increment:()=>dispatch(createIncrementAction(1)),
//     incrementAsync:()=>dispatch(createDecrementAsyncAction(1,1000)),
//     decrement:()=>dispatch(createDecrementAction(1))
// })


// 写法1
// export default connect(mapStateToProps,mapDispatchToProps)(UI)

// 写法2 这种写法 react-redux 会自动dispatch
export default connect(mapStateToProps,{
    increment:createIncrementAction,
    incrementAsync:createDecrementAsyncAction,
    decrement:createDecrementAction
})(UI)
