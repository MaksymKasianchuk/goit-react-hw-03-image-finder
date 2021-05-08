import React from 'react';
import {createPortal} from 'react-dom';
import styles from './Modal.module.scss';

const modalRootRef = document.querySelector('#modal-root');

class Modal extends React.Component {

    componentDidMount(){
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = event => {
        const {keyCode} = event;
        if(keyCode === 27) this.props.onClose();
    };

    handleBackdropClick = event => {
        if(event.currentTarget === event.target) this.props.onClose();
    };

    render() {
        return createPortal(
            <div className={styles.overlay} onClick={this.handleBackdropClick}>
                <div className={styles.modal}>{this.props.children}</div>
            </div>,
            modalRootRef,
        );
    }
}

export default Modal;