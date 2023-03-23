//context imports
import { DataProvider } from './context/DataProvider';

// react-router-dom imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// mui imports
import {
  Box,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material';

//components imports
import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailsView from './components/details/DetailsView';
import Cart from './components/cart/Cart';

// for responsive mui
let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider className='App'>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 56 }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<DetailsView />} />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
          </Box>
        </BrowserRouter>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
