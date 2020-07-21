import MuiButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const FilledButton = withStyles(() => ({
  root: {
    backgroundColor: '#000a4a',
    color: 'white',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textTransform: 'inherit',
    '&:hover': {
      backgroundColor: '#3b004a',
    },
  },
}))(MuiButton);


const Button = withStyles(() => ({
  root: {
    backgroundColor: 'white',
    color: '#000a4a',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textTransform: 'inherit',
    '&:hover': {
      backgroundColor: '#eceef3',
    },
  },
}))(MuiButton);

export {
  Button,
  FilledButton
}