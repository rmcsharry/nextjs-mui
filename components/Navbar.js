import React from 'react'
import Link from 'next/link'
import { AppBar, Typography, List, ListItemButton, Toolbar } from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger';

const MENU_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

function ElevationScroll(props) {

  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });

}

const Navbar = (props) => {
  return (
    <ElevationScroll {...props}>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">POST.DEV</Typography>
          <List>
            {MENU_ITEMS.map((item) => (
              <Link href={item.href} key={item.label}>
                <ListItemButton>{item.label}</ListItemButton>
              </Link>
            ))}
          </List>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Navbar