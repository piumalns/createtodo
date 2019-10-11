import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function TextFields() {


  return (
    <form class={{display: 'flex', flexWrap: 'wrap',margin:30}} noValidate autoComplete="off">
        <Typography variant="h5" component="h3">
          new To do
        </Typography>
      
      <TextField
        id="standard-password-input"
        label="title"
        type="text"
        style={{
          marginLeft: 1,
          marginRight: 1,
          width: 400,
        }}
        autoComplete="current-password"
        margin="normal"
      />
      <br/>
      <TextField
        id="standard-with-placeholder"
        label="Discription"
        placeholder="Discription"
        multiline
        rows="3"
       style={{
        marginLeft: 1,
        marginRight: 1,
        width: 400,
      }}
        margin="normal"
      />
      <div >
        <Button variant="outlined" color="primary" style={{margin: 1}}>
            Create
        </Button>
        <Button variant="outlined" color="secondary" style={{margin: 1}}>
            Close
        </Button>
      </div>
    </form>
  );
}
