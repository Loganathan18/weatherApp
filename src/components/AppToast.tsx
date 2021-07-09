import React from 'react';
import { IonToast, ToastButton } from '@ionic/react';
import * as Constants from '../common/Constants';

const AppToast: React.FC<{ isOpen: boolean, onDidDismiss: any, message: string, buttons?:(string|ToastButton)[] }> = (props) => {
    return (
        <IonToast
            isOpen={props.isOpen}
            onDidDismiss={props.onDidDismiss}
            message={props.message}
            duration={Constants.Configs.TOAST_DURATION}
            buttons={props.buttons}
            cssClass="toast-custom"
            position={"bottom"}
        />
    )
}

export default AppToast;