import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Searchform, Input, Label, Searchbutton } from './Searchbar.styled';
import { toast } from 'react-toastify';

class Searchbar extends Component{
  state = {
    query :'',

  };

  handleInput = event => {
    const query = event.currentTarget.value;
    this.setState({ query: query });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.search.query.trim() === '') return toast.error('There is no query to search');
    // if (this.search.query.trim() === '') return alert('There is no query to search');
    this.props.handleSubmit(this.state.query);
    this.setState({ query: '' });
  


  }



    render() {
        return (
      <Header >
        <Searchform onSubmit={this.handleSubmit}>
          <Searchbutton type="submit" >
            <Label >Search</Label>
          </Searchbutton>

          <Input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleInput}
          />
        </Searchform>
      </Header>
        )
    }
}

export default Searchbar;

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};