import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Searchform, Input, Label, Searchbutton } from './Searchbar.styled';

class Searchbar extends Component{



    render() {
        return (
            <Header class="searchbar">
  <Searchform class="form">
    <Searchbutton type="submit" class="button">
      <Label class="button-label">Search</Label>
    </Searchbutton>

    <Input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </Searchform>
</Header>
        )
    }
}

export default Searchbar;