import React,{Fragment} from 'react';
import {TextField} from '@material-ui/core';

import {Grid} from '@material-ui/core';

import {Select} from '@material-ui/core';

import {MenuItem} from '@material-ui/core';

import PhoneInput from 'react-phone-input-2';

import {InputLabel} from '@material-ui/core';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';

const Inputs = ({onChangeInput,onChangePhone,phone,classes}) => (
  <Fragment>
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item>
        <Email/>
      </Grid>
      <Grid item className={classes.grow}>
        <div className="grow">
          <TextField
            id="input-with-icon-grid"
            label="Email addres"
            name="email"
            onChange={onChangeInput}
            fullWidth={true}
          />
        </div>
      </Grid>
    </Grid>

    <Grid container spacing={1} alignItems="center">
      <Grid   item>
        <Phone />
      </Grid>
      <Grid item>
        <PhoneInput
          country={'us'}
          onChange={onChangePhone}
          value={phone}
        />
      </Grid>
    </Grid>
    <Grid container spacing={1} alignItems="center">
      <Grid   item>
        <InputLabel > Current Role :</InputLabel>

      </Grid>
      <Grid item>
        <div className="grow">
          <Select
            label="Role"
            name="role"
            onChange={onChangeInput}
            fullWidth={true}
          >
            <MenuItem value="Developer">Developer</MenuItem>
            <MenuItem value="Project Manager">Project Manager</MenuItem>

          </Select>
        </div>
      </Grid>
    </Grid>

  </Fragment>
);

export default Inputs;
