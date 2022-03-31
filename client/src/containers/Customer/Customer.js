import {connect} from 'react-redux';
import {setCustomers} from '../../actions/customerAction';
import Customer from '../../components/Customer/Customer';

const mapStateToProps = (state) => {
    return {
        customers: state.customer.items
    }
}

const mapActionToProps = {
    setCustomers
}

export default connect(mapStateToProps, mapActionToProps)(Customer);

