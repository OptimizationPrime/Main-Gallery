import React from 'react';
import Modal from './modal.jsx';
import styles from '../styles/gallery.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,

    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(event) {
    event.preventDefault();
    if (this.state.show) {
      document.querySelector('body').style.overflow = 'visible';
    } else {
      document.querySelector('body').style.overflow = 'hidden';
    }
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    const { images } = this.props.listing[0];
    return (
      <div className={styles['gallery-container']} onClick={this.toggleModal}>

        <div className={styles.zoom}>
          <div className={styles['left-main-gallery']}>
            <img className={styles['left-main-photo']} src={images[0]} />
          </div>
          <div className={styles['right-main-gallery']}>
            <img className={styles['right-top-main-photo']} src={images[1]} />
            <img className={styles['right-bottom-main-photo']} src={images[2]} />
          </div>
        </div>
        <div className={styles['gallery-btn-bar']}>
          <div className={styles['status-container']}>
            <p>For Sale</p>
          </div>
          <div className={styles['action-btns']}>
            <button className={styles['action-btn']}>
              <img className={styles['action-icon']} src="https://s3-us-west-1.amazonaws.com/hackreactor.fec.trulia.photos/icons/heart-outline.png" />
              <p>Save</p>
            </button>
            <button className={styles['action-btn']}>
              <img className={styles['action-icon']} src="https://s3-us-west-1.amazonaws.com/hackreactor.fec.trulia.photos/icons/share.png" />
              <p>Share</p>
            </button>
          </div>
        </div>
        <Modal
          show={this.state.show}
          handleClose={this.toggleModal}
          listing={this.props.listing[0]}
        />
      </div>

    );
  }
}

export default Gallery;
