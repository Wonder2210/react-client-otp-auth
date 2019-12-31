import React, { Component } from 'react';
import {TextField} from '@material-ui/core';
import ButtonsActions from './ButtonsActions';

class HomeForm extends Component {

  render() {
      const {next,back,current}=this.props;
    return (
    <form action="" onSubmit={console.log}>
      <TextField
        name="city"
        label="standard"
      />
      <TextField
        name="postal-code"
        label="postal code"
      />
      <ButtonsActions next={next} current={current} back={back}/>
    </form>
    );
  }

}

export default HomeForm;
