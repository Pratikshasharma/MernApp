import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import TextField from 'material-ui/TextField';
import PageBase from '../home/PageBase/PageBase';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import {grey400} from 'material-ui/styles/colors';
import Styles from  'react-select/dist/react-select.css';
import DropDownMenu from 'material-ui/DropDownMenu';


const vendor_options = [
  { value: 'f', label: 'vendor1' },
  { value: 'r', label: 'vendor2' },
  { value: 'B', label: 'vendor3' }
]

const ingredient_options = [
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' }
]
const package_options = [
  { value: 'sack', label: 'sack' },
  { value: 'pail', label: 'pail' },
  { value: 'drum', label: 'drum' },
  { value: 'supersack', label: 'supersack' }
]

const temperature_options = [
  { value: 'freezer', label: 'freezer' },
  { value: 'room temperature', label: 'room temperature' },
  { value: 'refrigerator', label: 'refrigerator' },
]

const styles = {
    buttons: {
      marginTop: 30,
      float: 'center'
    },
    saveButton: {
      marginLeft: 5
    }
  };

const INGREDIENT = "ingredient";
const PACKAGE = "package";




// var AddIngredientFormOld = createClass({
//   displayName: 'AddIngredientFormOld',
// 	propTypes: {
// 		hint: PropTypes.string,
// 		label: PropTypes.string
// 	},
// 	getInitialState () {
// 		return {
// 			multi: false,
// 			multiValue: [],
// 			options: [
// 				{ value: 'R', label: 'Red' },
// 				{ value: 'G', label: 'Green' },
// 				{ value: 'B', label: 'Blue' }
// 			],
// 			value: undefined,
//       package:'',
// 		};
// 	},

class AddIngredientFormOld extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
  		multi: false,
  		multiValue: [],
  		options:[],
  		value: '',
      ingredient:'',
      // name:''
      // package:''
      // temperature:''
      // vendors:[]
      // multi:false
  }
  this.handleOnChange = this.handleOnChange.bind(this);
  this.handleChangeFor= this.handleChangeFor.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChangeFor = (propertyName) => (value) => {
  const { ingredient } = this.state;
  console.log(ingredient.name);
  const  newIngredient= {
    ...ingredient,
    [propertyName]: value
  };
  this.setState({ ingredient: newIngredient });
}

handleOnChange (value) {
  console.log("Vendors ");
		const {multi} = this.state;
		// if (multi) {
			this.setState({ vendors: value });
		// } else {
		// 	this.setState({value:value});
		// };
	};

  handleSubmit(event){
    console.log("HERE");
    // Create a const object and call Update Ingredients

      // name: {this.state.ingredient.name},
      // package: {this.state.ingredient.package},
      // temperature: {this.state.ingredient.temperature},
      // vendors: {this.state.multi ? multiValue : this.state.ingredient.name}

    console.log(this.state.ingredient.name);
    console.log(this.state.ingredient.package);
    console.log(this.state.ingredient.temperature);

  }

  render (){
		 const { multi, multiValue, options, value,ingredient } = this.state;
		return (
      <PageBase title = ''
                navigation = '/Application Form'>
			 <div className="section">
				<h4 className="section-heading">{this.props.label}</h4>
        <form>
          <Select.Creatable
            className = "name"
            ingredient = {this.state.ingredient}
  					multi={false}
  					options={ingredient_options}
  					onChange={this.handleChangeFor('name')}
  					value={multi ? multiValue : this.state.ingredient.name}
  				/>

          <Select
            className = "package"
            ingredient = {this.state.ingredient}
            multi={false}
            options={package_options}
            onChange={this.handleChangeFor('package')}
            value={multi ? multiValue : this.state.ingredient.package}
          />

          <Select
            className = "temperature"
            ingredient = {this.state.ingredient}
            multi={false}
            options={temperature_options}
            onChange={this.handleChangeFor('temperature')}
            value={multi ? multiValue : this.state.ingredient.temperature}
          />
          <Select.Creatable
            multi={true}
            options={vendor_options}
            onChange={this.handleOnChange}
            value={multi ? multiValue : value}
        />
      <Divider/>
        <div style={styles.buttons}>
          <Link to="/">
            <RaisedButton label="Cancel"/>
          </Link>

          <RaisedButton label="Save"
                        // style={styles.saveButton}
                        type="submit"
                        onClick = {this.handleSubmit()}
                        primary={true}/>
          </div>
    </form>
  </div>
  </PageBase>
    )
	}
};

AddIngredientFormOld.propTypes = {
  hint: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

//
// AddIngredientFormOld.defaultProps = {
//   hint: React.PropTypes.string.isRequired,
//   label: React.PropTypes.string.isRequired
// };

export default AddIngredientFormOld;
