import {connect} from 'react-redux';
import App from '../App';
import {loginSuccess} from '../actions/authAction';

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapActionToProps = {
    loginSuccess
}

export default connect(mapStateToProps, mapActionToProps)(App);