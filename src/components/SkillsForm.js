import React, { Component } from 'react';
import {TextField} from '@material-ui/core';
import ButtonsActions from './ButtonsActions';

class SkillsForm extends Component {

  render() {
      const {next,back,current}=this.props;
    return (
      <form onSubmit={console.log}>
        <TextField name="name" label="Programming language"/>
        <ButtonsActions next={next} current={current} back={back}/>
      </form>
    );
  }

}

export default SkillsForm;
