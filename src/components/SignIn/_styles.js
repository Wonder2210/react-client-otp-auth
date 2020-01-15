export const useStyles= {
  paper: {
    width: '45%',
    margin: '10% 50%',
    transform: 'translateX(-50%)',
    minHeight:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    '& > div.inputs':{
      padding:'0 0 35px 0',

      '& > .MuiGrid-container':{
        paddingTop:'15px'
      }

    },
    '& > .header':{
      paddingTop:'15px'
    },
    '& > .link':{
      textAlign:'center'
    }

  },
  button:{
    width:'80%',
    marginBottom:'15px'
  },
  grow:{
    flexGrow:1
  }
};
