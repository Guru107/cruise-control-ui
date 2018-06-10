import { createMuiTheme } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'

const theme = createMuiTheme({
	palette:{
		primary: {
			light:'#4f5b62',
			main:'#263238',
			dark:'#000a12',
			contrastText:'#ffffff'
		},
		secondary: {
			light:'#ffffff',
			main:'#eceff1',
			dark:'#babdbe',
			contrastText:'#000000'
		},
		text: {
			primary:'#ffffff',
			secondary:'#000000'
		}
	}
})