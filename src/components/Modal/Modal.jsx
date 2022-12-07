// import PropTypes from 'prop-types';
import { Component } from 'react';
import { Overlay, ModalBox } from './Modal.styled';

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
    const { imageUrl, tag, onClick } = this.props;
    return (
      <Overlay onClick={onClick}>
        <ModalBox>
          <img src={imageUrl} alt={tag} />
        </ModalBox>
      </Overlay>
    );
  }
}

Modal.propTypes = {};

export default Modal;
