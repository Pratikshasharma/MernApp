import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';


import data from './testIngredients';


/**
 * With the `maxHeight` property set, the Select Field will be scrollable
 * if the number of items causes the height to exceed this limit.
 */

 const styles = {
   toggleDiv: {
     maxWidth: 300,
     marginTop: 40,
     marginBottom: 5
   },
   toggleLabel: {
     color: grey400,
     fontWeight: 100
   },
   buttons: {
     marginTop: 30,
     float: 'right'
   },
   saveButton: {
     marginLeft: 5
   }
 };

export default class AddIngredientsForm extends Component {
  state = {
    value: 10,
  };

  handleChange = (event, index, value) => {
    this.setState({value});
  };

  render() {
    return (
    <form>
      <TextField
        hintText="Name"
        floatingLabelText="Name"
        fullWidth={true}
      />
      <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          maxHeight={200} >
          {data.ingredient_options}
        </SelectField>

      <Divider/>

      <div style={styles.buttons}>
        <Link to="/">
          <RaisedButton label="Cancel"/>
        </Link>

        <RaisedButton label="Save"
                      style={styles.saveButton}
                      type="submit"
                      primary={true}/>
      </div>
    </form>
    );
  }
};
