import {connect} from 'react-redux';
import EditCustomer from '../../components/Customer/EditCustomer';
import {setCustomers} from '../../actions/customerAction';

const mapStateToProps = (state) => {
    return {
        currentCustomer: state.customer.current
    }
}

const mapActionToProps = {
    setCustomers
}

export default connect(mapStateToProps, mapActionToProps)(EditCustomer);