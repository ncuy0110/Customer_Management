import {connect} from 'react-redux';
import App from '../App';
import {loginSuccess} from '../actions/authAction';
import {setCustomers} from '../actions/customerAction';

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapActionToProps = {
    loginSuccess,
    setCustomers
}

export default connect(mapStateToProps, mapActionToProps)(App);