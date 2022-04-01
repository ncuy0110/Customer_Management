import {connect} from 'react-redux';
import {setCurrentCustomer, setCustomers} from '../../actions/customerAction';
import Customer from '../../components/Customer/Customer';

const mapStateToProps = (state) => {
    return {
        customers: state.customer.items,
        currentCustomer: state.customer.current
    }
}

const mapActionToProps = {
    setCustomers,
    setCurrentCustomer
}

export default connect(mapStateToProps, mapActionToProps)(Customer);

