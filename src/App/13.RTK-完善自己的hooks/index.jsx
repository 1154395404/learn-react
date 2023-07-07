import School from "./components/School";
import Student from "./components/Student";
import {Provider} from "react-redux";
import store from "./store";

function App() {

    return <div>
        <Provider store={store}>
            <School/>
            <Student/>
        </Provider>

    </div>
}

export default App;
