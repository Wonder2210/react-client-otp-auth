import React, { Fragment} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Autorenew from '@material-ui/icons/Autorenew';
import {withStyles} from '@material-ui/core/styles';
import ButtonsActions from './ButtonsActions';
import {ClipLoader} from 'react-spinners';
import {css} from "@emotion/core";
import PropTypes from 'prop-types';

const override = css `
  padding:15px;
`;

const styles = {
  snack: {
    position: 'absolute',
    bottom: '-85px'
  }
}

const ButtonsContainer = ({
  submit,
  current,
  message,
  back,
  errorRequest,
  classes,
  loading,
  handleCloseSnackBar
}) => {

  if (errorRequest) {
    return (<Fragment>
      <Snackbar anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }} open={errorRequest} className={classes.snack} onClose={handleCloseSnackBar} message={<span id = "message-id" > {
          message
        }
        </span>} action={[
          <IconButton key="undo" color="secondary" size="small" onClick={submit}>
            <Autorenew/>
          </IconButton>,
          <IconButton key="close" aria-label="close" color="inherit" onClick={handleCloseSnackBar}>
            <CloseIcon/>
          </IconButton>
        ]}/>
      <ClipLoader color={"#F50057"} size={55} loading={loading} css={override}/>
    </Fragment>);
  }

  return (<ButtonsActions next={submit} back={back} current={current}/>)
}

ButtonsContainer.propTypes = {
  submit: PropTypes.func,
  current: PropTypes.number,
  message: PropTypes.func,
  handleCloseSnackBar: PropTypes.func,
  back: PropTypes.func,
  errorRequest: PropTypes.bool,
  classes: PropTypes.object,
  loading: PropTypes.bool
}

export default withStyles(styles)(ButtonsContainer);
