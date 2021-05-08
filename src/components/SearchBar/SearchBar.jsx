import React from 'react';
import styles from './SearchBar.module.scss';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    state = {
      query: '',
    };
  
    handleChange = event => {
      const { value } = event.target;
      this.setState({ query: value });
    };
  
    handleSubmit = event => {
      const { query } = this.state;
  
      event.preventDefault();
  
      this.props.onSubmit(query);
      this.reset();
    };
  
    reset = () => {
      this.setState({ query: '' });
    };
  
    render() {
      const { query } = this.state;
  
      return (
        <header className={styles.searchBar}>
          <form className={styles.searchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={styles.button}>
              Search
            </button>
  
            <input
              className={styles.input}
              type="text"
              value={query}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
            />
          </form>
        </header>
      );
    }
  }
  
  SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  
  export default SearchBar;