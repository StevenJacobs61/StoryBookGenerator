import { CssBaseline } from '@mui/material';
import {Typography, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route, Link } from 'react-router-dom'
import StoryGenerator from './pages/storyGenerator';
import Home from './pages/home';
import React, { useState } from 'react';

function App() {
  const style = {
    toolbar:{
      justifyContent: 'space-between',
      p: '1rem 0',
    },
    barHdr: {
      textTransform: "uppercase",
      letterSpacing: "0.2rem",
      fontWeight: '600',
      color: '#3333',
      background: 'linear-gradient(to right, #1976d2, #1939)',
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: 'transparent',
      flexGrow: '1',
      textAlign: 'center',
      fontStyle: 'italic'
  
    },
    iconButton: {
      ml: '2rem'
    },
    item: {
      textDecoration: 'none',
      color: '#101010'
    }
   }
 const [menuOpen, setMenuOpen] = useState(false);
 
 return (
   <>
   <CssBaseline/>
    <header>
    <Menu
    anchorEl={document.querySelector('#menu-button')}
    open={menuOpen}
    onClick={() => setMenuOpen(!menuOpen)}>
      <Link
      style={style.item} 
      to='/'>
      <MenuItem
      divider>
      Home
      </MenuItem>
      </Link>
      <Link to='storyGenerator'
      style={style.item}>
      <MenuItem
      divider>
      Story Book Generator
      </MenuItem >
      </Link>
      <MenuItem>
      Text Editor
      </MenuItem>
    </Menu>
      <AppBar
      color='inherit'
      elevation={1}>
      <Toolbar 
      sx={style.toolbar}
      >
        <IconButton
        size='small'
        edge='start'
        color='inherit'
        aria-label='menu'
        sx={style.iconButton} onClick={()=> setMenuOpen(!menuOpen)}>
          <MenuIcon id='menu-button'/>
        </IconButton>
        <Typography
        variant='h5'
        sx={style.barHdr}>
        AI Imagination
        </Typography>
      </Toolbar>
      </AppBar>
    </header>
    <main>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/storyGenerator' element={<StoryGenerator/>}/>
    </Routes>
    </main>
    </>
  );
}

export default App;
