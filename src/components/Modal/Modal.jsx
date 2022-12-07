import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalBox } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModalOnKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModalOnKeyDown);
  }
  closeModalOnKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  closeM;
  render() {
    const { children, onClick } = this.props;
    return createPortal(
      <Overlay onClick={onClick}>
        <ModalBox>{children}</ModalBox>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;