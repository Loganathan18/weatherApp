import React from 'react';
import { IonLoading } from '@ionic/react';

const Preloader: React.FC<{ isOpen: boolean, onDidDismiss: any }> = (props) => {
    return (
        <IonLoading
            isOpen={props.isOpen}
            animated={false}
            spinner="crescent"
            onDidDismiss={props.onDidDismiss}
            message={'Loading...'}
            duration={10000}
        />
    )
}

export default Preloader;