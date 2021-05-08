import React from 'react';
import Api from './api';
import Searchbar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';

class App extends React.Component {

    state = {
        images: [],
        searchQuery: '',
        currentPage: 1,
        isLoading: false,
        showModal: false,
        imageUrl: '',
    };

    componentDidUpdate(prevProps, prevState) {
        const { searchQuery } = this.state;
        if(searchQuery !== prevState.searchQuery) this.fetchImages();
    }

    hendleQueryChange = query => {
        this.setState({ images: [], searchQuery: query, currentPage: 1});
    };

    fetchImages = () => {
        const {currentPage, searchQuery} = this.state;
        const options = {query: searchQuery, page: currentPage};
        
        Api.fetchPhotos(options).then(({ hits }) => {
            this.setState(prevState => ({ images: [...prevState.images,...hits], currentPage: prevState.currentPage + 1 }));
        })
        .then(() => {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
          });
        })
        .catch(error => {
            alert('Error occured, please try again');
            console.log(error);
        })
        .finally(() => this.setState({ isLoading: false }));
    };
    openModal = event => {
        const { target } = event;
        if (target.nodeName === 'IMG') {
          this.setState({ showModal: true, imageUrl: target.dataset.source });
        }
    };
    
    closeModal = () => {
        this.setState({ showModal: false, imageUrl: '' });
    };
    
    render() {
        const { images, isLoading, showModal, imageUrl } = this.state;
        const existImagesToShow = images.length > 0;
    
        return (
          <>
            <Searchbar onSubmit={this.hendleQueryChange} />
            <ImageGallery images={images} onClick={this.openModal} />
            {showModal && (
              <Modal onClose={this.closeModal}>
                <img src={imageUrl} alt="" />
              </Modal>
            )}
            {isLoading && <Loader />}
            {existImagesToShow && !isLoading && (
              <Button onClick={this.fetchImages} />
            )}
          </>
        );
      }
    
}
export default App;
