import {connect} from 'react-redux';
import Login from '../components/Login/Login';
import {loginSuccess} from '../actions/authAction';

const mapStateToProps = (state) => ({
   auth: state.auth
});

const mapActionToProps = {
    loginSuccess
}

export default connect(mapStateToProps, mapActionToProps)(Login);