import React, {Component, Fragment} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Autorenew from '@material-ui/icons/Autorenew';
import {withStyles} from '@material-ui/core/styles';
import ButtonsActions from './ButtonsActions';
import {ClipLoader} from 'react-spinners';
import {css} from "@emotion/core";

const override = css `
  padding:15px;

`;
const styles = {
  snack: {
    position: 'absolute',
    bottom: '-85px'
  }
}

class ButtonsHoc extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      loading: false
    }
  }
  next = async () => {
    this.setState(lastState => ({loading: true}))

    try {
      const request = await this.props.submit();

      this.props.next();
    } catch (e) {
      this.setState({error: true});

    }

  };
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({loading: false, error: false});
  };
  retry = () => {
    this.setState({error: false});
    this.next();

  }
  render() {
    const {current, back} = this.props;
    const {error, loading} = this.state;
    if (loading) {
      return (<Fragment>
        <Snackbar anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }} open={this.state.error} className={this.props.classes.snack} onClose={this.handleClose} message={<span id = "message-id" > Fail Send Sms</span>} action={[
          <IconButton key="undo" color="secondary" size="small" onClick={this.retry}>
            <Autorenew/>
          </IconButton>,
          <IconButton key="close" aria-label="close" color="inherit" onClick={this.handleClose}>
            <CloseIcon/>
          </IconButton>
        ]}/>
        <ClipLoader color={"#F50057"} size={55} loading={loading} css={override}/>
      </Fragment>);
    }

    return (<ButtonsActions next={this.next} back={back} current={current}/>)
  }
}

export default withStyles(styles)(ButtonsHoc);
