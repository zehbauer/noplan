import React from 'react';
import FileUpload from './components/PictureUpload';
import AppBar from './components/AppBar';
import AppContainer from './containers/AppContainer';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import cyan from 'material-ui/colors/cyan';

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: cyan
    }
});

const App = () => {
  return (
    <div>
        <MuiThemeProvider theme={theme}>
      <AppBar />
      <AppContainer />
        </MuiThemeProvider>
    </div>
  );
};

export default App;
