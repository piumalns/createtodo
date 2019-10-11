import React, { Component ,useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class CardView extends Component {
    state = { 
        index:this.props.index
     }
     
    render() { 
        return ( 
        <Card style={{marginBottom:5 , width:400 }} >
            <div>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    Title
                    </Typography>
                    <Typography  color="textSecondary">
                    due date
                    </Typography>
                    <Typography variant="body2" component="p">
                    discription
                    </Typography>
                </CardContent>
            </div>
            <div style={{margin:5}}>
            <Button style={{margin:5}} variant="outlined" color="primary" >
                Complete
            </Button>
            <Button variant="outlined" color="secondary" >
                Close
            </Button>
            </div>
        </Card>
         );
    }
}
 
export default CardView;
