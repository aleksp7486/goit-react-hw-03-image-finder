import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SearchBarBoard,
  SearchForm,
  Button,
  ButtonLabel,
  Input,
} from './SearchBar.styled';

class SearchBar extends Component {
  state = {
    inputValue: '',
  };

  onInputChange = evt => {
    this.setState({
      inputValue: evt.target.value,
    });
  };

  onSubmit = evt => {
    evt.preventDefault();
    if (this.state.inputValue === '') {
      return;
    }
    this.props.onSubmit(this.state.inputValue.trim());
    // evt.target.reset();
  };
  render() {
    return (
      <SearchBarBoard>
        <SearchForm onSubmit={this.onSubmit}>
          <Button type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </Button>
          <Input
            onChange={this.onInputChange}
            type="text"
            value={this.state.value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBarBoard>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
