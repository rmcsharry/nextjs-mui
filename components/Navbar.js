import React from 'react'
import Link from 'next/link'
import { AppBar, Box, Typography, List, ListItemButton, Toolbar } from '@mui/material'

const MENU_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h2">POST.DEV</Typography>
        <List>
          {MENU_ITEMS.map((item) => (
            <Link href={item.href} key={item.label}>
              <ListItemButton>{item.label}</ListItemButton>
            </Link>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar