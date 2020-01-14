import React from 'react';
import {Button} from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  holder:{
    bottom:0,
  '& > button':{
    margin:'15px' ,
  }
  }
}))


const ButtonsActions = ({next,current,back,form}) => {
    const styles=useStyles();
    return(

        <div className={styles.holder}>
          <Button
            variant="contained"
            color="primary"
            onClick={back}
            disabled={current===0}
          > &laquo; Back </Button>
          <Button

            variant="contained"
            color="secondary"
            onClick={next}
          > Next &raquo;</Button>

        </div>

    );
}

export default ButtonsActions;
