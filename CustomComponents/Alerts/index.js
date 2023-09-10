import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

const Alerts = (props) => {
    const { showAlert, setShowAlert } = props;

    const hideAlertHandler = () => {
        setShowAlert('');
    };

    return (
        <AwesomeAlert
            show={showAlert ? true : false}
            showProgress={false}
            title="Alert"
            message={showAlert}
            showCancelButton={true}
            showConfirmButton={true}
            cancelText="cancel"
            confirmText="Ok"
            confirmButtonColor="#DD6B55"
            onCancelPressed={hideAlertHandler}
            onConfirmPressed={hideAlertHandler}
        />
    );
};

export default Alerts;
