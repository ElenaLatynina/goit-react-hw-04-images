import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Header, Searchform, Input, Label, Searchbutton } from './Searchbar.styled';
import { IconContext } from 'react-icons';
import { BiSearchAlt2 } from 'react-icons/bi';
// import { toast } from 'react-toastify';
export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value.toLowerCase() });

  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.query);
  };

  render() {
    const { query } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <Header>
        <Searchform onSubmit={handleSubmit}>
          <Searchbutton type="submit">
            <IconContext.Provider
              value={{ style: { verticalAlign: 'middle' } }}
            >
              <BiSearchAlt2 size={24} />
            </IconContext.Provider>
            <Label>Searh</Label>
          </Searchbutton>
          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange} />
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