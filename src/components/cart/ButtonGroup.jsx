import { Box, Button, ButtonGroup, styled } from '@mui/material'
import React from 'react'

//---------Mui styles----------//
const Component = styled(ButtonGroup)({
    marginTop: 30,
})
const StyledButton = styled(Button)({
    borderRadius: '10%',
})
//-----xx----Mui styles----xx------//

function GroupedButton() {
  return (
    <Component>
        <StyledButton>-</StyledButton>
        <StyledButton disabled>1</StyledButton>
        <StyledButton>+</StyledButton>
    </Component>
  )
}

export default GroupedButton;