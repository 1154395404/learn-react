import store from "./redux/store";
import Count from "./components/Count";
import {Provider} from "react-redux";
import Person from "./components/Person";
function App() {
    return <Provider store={store}>
        <Count />
        <Person/>
    </Provider>
}

export default App;
