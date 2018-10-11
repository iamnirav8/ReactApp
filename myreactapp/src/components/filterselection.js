// this component will have a dropdown list and searchbox. Once user select an item from thhe dropdown 
// Data table component will display the data

import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    padding:0,
    margin:0
  }
  
});

class FilterSelection extends React.Component{
    state={
     name:''
    };
    // OnChange Event Handler
    changeEvent = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    // Now render element
    render(){
        const { classes } = this.props;
        return (
          <React.Fragment>
                  <form className={classes.form} noValidate autoComplete="off">
                  <Button variant="contained" id="ownmattersId" className={classes.button}>
                       My Matters
                   </Button>
                   
                    <TextField
                        id="searchTextId"
                        className={classes.textField}
                        defaultValue=""
                        margin="normal"
                        variant="outlined"
                     />
                     <label></label>
                     <Button variant="contained" id="resetLookupId"  className={classes.button}>
                       Reset Lookup
                   </Button>
                   
                  </form>
        </React.Fragment>
        )
    }
}
FilterSelection.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(FilterSelection);