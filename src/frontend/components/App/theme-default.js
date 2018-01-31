// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {blue600, grey900} from 'material-ui/styles/colors';

// const blue600 = '#1e88e5';
// const grey900 = '#212121';
//
// const themeDefault = getMuiTheme({
//   palette: {
//   },
//   appBar: {
//     height: 57,
//     color: blue600
//   },
//   drawer: {
//     width: 230,
//     color: grey900
//   },
//   raisedButton: {
//     primaryColor: blue600,
//   }
// });
// export default themeDefault;


import { createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';
import { darken, lighten } from 'material-ui/styles/colorManipulator';

// All the following keys are optional.
// We try our best to provide a great default value.
// The following values illustrate the default logic when our users don't provide anything.
const theme = createMuiTheme({
  palette: {
   primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
   secondary: {
     light: pink[300],
     main: pink[500],
     dark: pink[700],
   },
    // type: theme.paletteType,
  },
});

export default theme;
