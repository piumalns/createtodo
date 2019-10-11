import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import Form from './form'

export default function Appbar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div style={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"  style={{flexGrow: 1}}>
            Todo Detail
          </Typography>          
          <Fab variant="outlined" onClose={handleClose} onClick={handleClickOpen} color="secondary" aria-label="add" style={{margin: 1}}>
          </Fab>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <Form/>
          </Dialog>
        </Toolbar>
      </AppBar>
    </div>
  );
}