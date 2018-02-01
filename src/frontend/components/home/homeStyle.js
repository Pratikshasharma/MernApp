import {typography} from 'material-ui/styles';
// import {grey600} from 'material-ui/styles/colors';
import grey from 'material-ui/colors/grey';

const grey600 = grey[600];

const styles = {
  navigation: {
    fontSize: 15,
    // fontWeight: typography.fontWeightLight,
    color: grey600,
    paddingBottom: 15,
    display: 'block'
  },
  title: {
    fontSize: 24,
    // fontWeight: typography.fontWeightLight,
    marginBottom: 20
  },
  paper: {
    padding: 30
  },
  clear: {
    clear: 'both'
  }
};

export default styles;
