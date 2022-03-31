import {connect} from 'react-redux';
import EditCustomer from '../../components/Customer/EditCustomer';

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(EditCustomer);