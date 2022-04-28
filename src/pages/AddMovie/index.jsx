import styles from './styles.module.scss'
import CreateCardForm from '../../components/CreateCardForm'
import Modal from '../../components/Modal'
import { useEffect, useState } from 'react';



function AddMovie () {

    const [isModalVisible, setModalVisibility] = useState(false);

    useEffect (() => {
        setTimeout(() => {
            setModalVisibility(false);
        },3000);

    },[isModalVisible]);

    return (
    <div className={styles.AddMovie}> 
    <CreateCardForm setModalVisibility={setModalVisibility}/> 
    <Modal text='Un nuovo film è stato aggiunto' isVisible={isModalVisible}/>
   

    
    </div>
    )
}

export default AddMovie