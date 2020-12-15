import React from 'react';
import axios from 'axios';
import styles from '../styles/app.css';
import Redirect from './redirect.jsx';
import Navbar from './navbar.jsx';
import Details from './details.jsx';
import Gallery from './gallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: [],
    };
    this.nextListing = this.nextListing.bind(this);
    this.previousListing = this.previousListing.bind(this);
  }

  componentDidMount() {
    console.log(window.location.pathname);
    const path = window.location.pathname
    // udpate to axios get request to get the dummy data from the server side
    // this.setState({groceries: dummyData})
    axios.get(`localhost:8040${path}`)
    // http://localhost:8040/listings/1/
      .then((res) => {
        this.setState({ listing: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  nextListing(event) {
    const url = window.location.href.split('/');
    let id = parseInt(url[url.length - 2]);

    if (id === 100) {
      id = 1;
      url[url.length - 2] = id;
    } else {
      id++;
      url[url.length - 2] = id;
    }
    const prevListing = url.join('/');
    console.log('New for URL :', prevListing);
    window.location.assign(prevListing);
    axios.get(prevListing)
      .then((res) => {
        this.setState({ listing: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  previousListing(event) {
    const url = window.location.href.split('/');
    let id = parseInt(url[url.length - 2]);
    if (id === 1) {
      id = 100;
      url[url.length - 2] = id;
    } else {
      id -= 1;
      url[url.length - 2] = id;
    }
    const prevListing = url.join('/');
    window.location.assign(prevListing);
    axios.get(prevListing)
      .then((res) => {
        this.setState({ listing: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (this.state.listing.length === 0) {
      return <div><Redirect /></div>;
    }

    return (
      <div className={styles['responsive-div']}>
        <Navbar />
        <Details listing={this.state.listing} />
        <Gallery listing={this.state.listing} />
        {/* <div className={styles['navbar']}>
          <div className={styles['nav-btn-box']}>
          <button className={styles['nav-btn']} onClick={this.previousListing}>Previous</button>
          </div>
          <div className={styles['nav-btn-box']}>
            <button className={styles['nav-btn']} onClick={this.nextListing}>Next</button>
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;
