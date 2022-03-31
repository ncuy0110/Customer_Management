import {connect} from 'react-redux';
import SignUp from '../components/SignUp/SignUp';
import {loginSuccess} from '../actions/authAction';
const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapActionToProps = {
    loginSuccess
}

export default connect(mapStateToProps, mapActionToProps)(SignUp);