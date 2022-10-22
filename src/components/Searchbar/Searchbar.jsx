import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Header, Searchform, Input, Label, Searchbutton } from './Searchbar.styled';
// import { toast } from 'react-toastify';

export class Searchbar extends Component{
  state = {
    query :'',

  };

  handleChange = event => {
    const query = event.target.value.toLowerCase();
    this.setState({ query: query });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.query);
    // this.setState({ query: '' });

  };

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
              onChange={this.handleChange}
            />
          </Searchform>
        </Header>
      );
    }
}

export default Searchbar;

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   onChange:PropTypes.func.isRequired
// };