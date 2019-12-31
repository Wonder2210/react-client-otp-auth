import React, { Component } from 'react';
import {TextField} from '@material-ui/core';
import ButtonsActions from './ButtonsActions';

class UserForm extends Component {

  render() {
    const {next,back,current}=this.props;
    return (
      <form onSubmit={console.log}>
        <div>
          <TextField name="name" label="Name"/>
        </div>
        <div>
          <TextField name="lastName" label="Last Name"/>
        </div>
        <ButtonsActions next={next} current={current} back={back}/>
      </form>
    );
  }

}

export default UserForm;
