import { createTheme } from '@material-ui/core/styles'
import { grey, indigo } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: '#f44336',
    },
  },
})

export default theme
