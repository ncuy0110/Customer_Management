import {connect} from 'react-redux';
import {setCustomers} from '../../actions/customerAction';
import TableCustomer from '../../components/Customer/TableCustomer';

const mapStateToProps = (state) => {
    return {
        customers: state.customer.items,
        auth: state.auth
    }
}

const mapActionToProps = {
    setCustomers
}

export default connect(mapStateToProps, mapActionToProps)(TableCustomer);