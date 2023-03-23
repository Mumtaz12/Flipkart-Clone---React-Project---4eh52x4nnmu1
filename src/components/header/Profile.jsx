import { useState } from 'react';

// mui imports
import styled from '@emotion/styled';
import { Menu, MenuItem, Typography } from '@mui/material'
import { Box } from '@mui/system'

//mui icon imports
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


//-----custom mui styles--------//
const Component = styled(Menu)`
margin-top: 5px;
`

const Logout = styled(Typography)`
margin-left: 10px;
font-size: 16x;
`
//---**---custom mui styles----**---//

// getting account & setAccount state from customButtons
function Profile({account,setAccount}) {
    const [open,setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }

    const handleClose = () => {
        setOpen(false);
    }

    const logoutUser = () => {
      // reseting the state to empty after user logout.(context initial state was empty string)
      setAccount('');
    }

  return (
    <Box>
      <Typography
        sx={{ marginTop: 0.4, cursor: 'pointer' }}
        onClick={handleClick}
      >
        {account}
      </Typography>
      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem onClick={() => {handleClose(); logoutUser()}} onClose={handleClose}>
          <PowerSettingsNewIcon color='primary' fontSize='small'/>
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </Box>
  );
}

export default Profile