import {connect} from "react-redux";
import UI from "./UI";
import {createAddPersonAction} from "../../redux/actions/person";

const mapStateToProps = (state) =>({person: state.person_reducer})
export default connect(mapStateToProps,{
    addPerson:createAddPersonAction
})(UI)
