
import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import theme from './theme-default';

// import Header from '../home/Header/Header.js';
// import LeftDrawer from '../home/LeftDrawer/LeftDrawer.js';

import Data from '../Data/data';

import WelcomeCard from '../home/Welcome/Welcome.js'


import IngredientsTable from '../Ingredients/IngredientTable';



// import AddIngredientForm from '../Ingredients/AddIngredientForm';



const USERNAME_PLACEHOLDER = "User name ";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };

    return (
      <MuiThemeProvider muiTheme={theme}>
        <div>
          {/* <Header styles={styles.header}
                  handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/> */}

            {/* <LeftDrawer navDrawerOpen={navDrawerOpen}
                        menus={Data.menus}
                        username= {USERNAME_PLACEHOLDER} /> */}

            {/* <WelcomeCard /> */}

            <IngredientsTable/>
          {/* < AddIngredientForm/> */}


            <div style={styles.container}>
              {this.props.children}
            </div>
        </div>

      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

// export default withWidth()(App);
export default App;
