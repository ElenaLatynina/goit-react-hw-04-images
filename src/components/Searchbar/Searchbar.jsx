import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Header, Searchform, Input, Label, Searchbutton } from './Searchbar.styled';
import { IconContext } from 'react-icons';
import { BiSearchAlt2 } from 'react-icons/bi';
// import { toast } from 'react-toastify';

export default class Searchbar extends Component{
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
               <IconContext.Provider
              value={{ style: { verticalAlign: 'middle' } }}
            >
              <BiSearchAlt2 size={24} />
            </IconContext.Provider>
              <Label >	
</Label>
            </Searchbutton>

            <Input
              // class="input"
              type="text"
              autocomplete="off"
              // autofocus
              placeholder="Search images and photos"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </Searchform>
        </Header>
      );
    }
}

// export default Searchbar;

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   onChange:PropTypes.func.isRequired
// };