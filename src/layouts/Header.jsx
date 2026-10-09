import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Anillo Único
          </Typography>
          <Typography variant="h6" component="div" sx={{ ml: 1 }}>
            Uno para dominarlos a todos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
