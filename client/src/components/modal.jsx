import React from 'react';
import styles from '../styles/modal.css';
import GalleryModal from './modalGallery.jsx';
import ModalCarousel from './modalCarousel.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      url: '',
      show: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  toggleModal(event) {
    event.preventDefault();
    this.setState({
      id: parseInt(event.target.id),
      url: event.target.src,
      show: !this.state.show,
    });
  }

  closeModal(event) {
    event.preventDefault();
    this.setState({
      show: !this.state.show,
    });
  }

  handlePrev(event) {
    event.preventDefault();
    let i = this.state.id;
    const { images } = this.props.listing;
    if (i === 0) {
      i = images.length - 1;
    } else {
      i -= 1;
    }
    this.setState({
      id: i,
      url: images[i],
    });
  }

  handleNext(event) {
    event.preventDefault();
    let i = this.state.id;
    const { images } = this.props.listing;
    if (i === images.length - 1) {
      i = 0;
    } else {
      i += 1;
    }
    this.setState({
      id: i,
      url: images[i],
    });
  }

  render() {
    const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';

    const { price } = this.props.listing;
    const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
      <div className={this.props.show ? `${styles.modal} ${styles['display-block']}` : `${styles.modal} ${styles['display-none']}`}>
        <div className={styles['modal-main']} onClick={(e) => e.stopPropagation()}>
          {' '}
          { /* stopPropagation on the main modal will stop closing when clicked with in the modal.  */ }
          <div className={styles['nav-bar']}>
            <button className={styles['photos-button']}>
              <p>Photos</p>
            </button>
            <button className={styles['navbar-buttons']}>
              <p>Map</p>
            </button>
            <button className={styles['navbar-buttons']}>
              <p>Schools</p>
            </button>
            <button className={styles['navbar-buttons']}>
              <p>Crime</p>
            </button>
            <button className={styles['navbar-buttons']}>
              <p>Commute</p>
            </button>
            <button className={styles['navbar-buttons']}>
              <p>Shop & Eat</p>
            </button>
            <div className={styles['action-btns']}>
              <button className={styles['action-btn']}>
                <img className={styles['action-icon']} src="https://s3-us-west-1.amazonaws.com/hackreactor.fec.trulia.photos/icons/heart-outline.png" />
                <p>Save</p>
              </button>
              <button className={styles['action-btn']}>
                <img className={styles['action-icon']} src="https://s3-us-west-1.amazonaws.com/hackreactor.fec.trulia.photos/icons/share.png" />
                <p>Share</p>
              </button>
              <button className={styles['exit-x-btn']} onClick={this.props.handleClose}>
                <p>X</p>
              </button>
            </div>
          </div>
          <div className={styles['listing-details']}>
            <p>
              {this.props.listing.address}
              {' '}
              | $
              {numberWithCommas(price)}
              {' '}
              |
              {' '}
              {this.props.listing.bed}
              {' '}
              Beds
              {' '}
              {this.props.listing.bath}
              {' '}
              Baths
            </p>
          </div>
          <GalleryModal
            listing={this.props.listing}
            carouselView={this.toggleModal}
          />
        </div>
        <ModalCarousel
          show={this.state.show}
          id={this.state.id}
          url={this.state.url}
          listing={this.props.listing}
          handleNext={this.handleNext}
          handlePrev={this.handlePrev}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}
export default Modal;
