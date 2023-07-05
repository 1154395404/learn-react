import store from "../../redux/4.react-redux/store";
import Count from "./components/Count";
import {Provider} from "react-redux";
function App() {
    return <Provider store={store}>
        provider自动注入
        <Count />
        <Count />
        <Count />
        <Count />
        <Count />
    </Provider>
}

export default App;
