import {connect} from 'react-redux';
import {addCustomer} from '../../actions/customerAction';
import AddCustomer from '../../components/Customer/AddCustomer/AddCustomer';

const mapStateToProps = (state) => {
   return {
        auth: state.auth
   }
}

const mapActionToProps = {
    addCustomer
}

export default connect(mapStateToProps, mapActionToProps)(AddCustomer);