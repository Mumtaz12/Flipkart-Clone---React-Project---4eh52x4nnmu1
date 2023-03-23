// Mui imports
import { AppBar, Drawer, IconButton, List, ListItem, Toolbar } from '@mui/material';
import styled from '@emotion/styled';
import { Box } from '@mui/system';

// Mui icon imports
import MenuIcon from '@mui/icons-material/Menu';

// components imports
import Search from './Search';
import CustomButtons from './CustomButtons';

// react-router-dom imports
import { Link } from 'react-router-dom';
import { useState } from 'react';

//-------------mui custom css styles-----------------//
const StyledHeader = styled(AppBar)({
  backgroundColor: '#2874f0',
  height: '56px',
});

const Component = styled(Box)({
  margin: '12%',
  marginRight: '0px',
  color: 'inherit',
  textDecoration: 'none',
});

const CustomButtonWrapper = styled(Box)(({theme}) => ({
  margin: '0 5% 0 auto',
  [theme.breakpoints.down('md')]:{
    display: 'none'
  }
}))


const MenuButton = styled(IconButton)(({theme}) => ({
  display: 'none',
  [theme.breakpoints.down('md')]:{
    display: 'block'
  }
}))
//-------xxx------mui custom css styles---------xxx--------//

export default function Header() {
  // state for opening and closing header dreawer
  const [open,setOpen] = useState(false);
  
  // function for closing drawer
  const handleOpen = () => {
      setOpen(true)
  }

  // function for opening drewer
  const handleClose = () => {
      setOpen(false)
  }

  // function for showing list. here list & listItems act as an ul & li in html.
  // giving button variable inside ListItem to act as an Button.
  const list = () => (
    <Box sx={{width: 200}} onClick={handleClose}>
      <List>
        <ListItem button>
          <CustomButtons />
        </ListItem>
      </List>
    </Box>
  )

  const logoUrl =
    'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png';
  return (
    <div>
      <StyledHeader>
        <Toolbar style={{ minHeight: 56 }}>
          <MenuButton>
            <MenuIcon sx={{color: 'white'}} onClick={handleOpen}/>
          </MenuButton>
          <Drawer open={open} onClose={handleClose}>
            {list()}
          </Drawer>
          <Link to='/'>
            <Component>
              <img src={logoUrl} alt='flipkart logo' style={{ width: 75 }} />
            </Component>
          </Link>
          <Search />
          <CustomButtonWrapper>
            <CustomButtons />
          </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    </div>
  );
}
