"use client";
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography} from '@mui/material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { DarkMode, LightMode } from "@mui/icons-material";


const drawerWidth = 240;
const navItems = [
    {href:"/",title:'Home'},
    {href:"/posts",title:'posts'},
    {href:"/recipes",title:'recipes'},
    {href:"/users",title:'users'}];

function Header(props) {
 const{theme,setTheme}= useTheme();
    const path=usePathname();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
const toggleTheme=()=>{
  setTheme(theme==="dark"?"light":"dark");
}
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', display:"flex", mb:'4rem'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
        <Link href={item.href} key={item.title} style={{ color: "black", textDecoration: "none" }}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
      <Button onClick={toggleTheme} sx={{ mt: 2 }}>  {theme === "dark" ? "Light Mode ☀️" : "Dark Mode 🌙"}</Button>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', mb:"5rem" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) =>{
                const activestyle={textDecoration:path===item.href?"underline overline" : "none"}
            return (

              <Button key={item.href} sx={{ color: '#fff' }}>
              <Link href={item.href} style={{ ...activestyle, color: "white" }}>
                {item.title}
                </Link>
              </Button>
          
            )}
            )}
             <IconButton color="inherit" onClick={toggleTheme}>
              {theme === "dark" ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Header;