import React from 'react'
import { Box, Grid, Button, Container } from '@mui/material'
import PostList from '@/components/PostList'


const POSTS = [
  {
    id: 1,
    title: 'Post 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, ante nec vehicula lacinia, erat nunc ultrices turpis, nec luctus elit eros nec turpis. Vivamus nec nisl nec purus scelerisque ultricies. Nulla facilisi. Sed in eros nec sapien luctus suscipit. Donec nec sapien nec justo iaculis lacinia',
    createdAt: '2024-01-12'
  },
  {
    id: 2,
    title: 'Post 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, ante nec vehicula lacinia, erat nunc ultrices turpis, nec luctus elit eros nec turpis. Vivamus nec nisl nec purus scelerisque ultricies. Nulla facilisi. Sed in eros nec sapien luctus suscipit. Donec nec sapien nec justo iaculis lacinia',
    createdAt: '2024-02-12'
  },
  {
    id: 3,
    title: 'Post 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, ante nec vehicula lacinia, erat nunc ultrices turpis, nec luctus elit eros nec turpis. Vivamus nec nisl nec purus scelerisque ultricies. Nulla facilisi. Sed in eros nec sapien luctus suscipit. Donec nec sapien nec justo iaculis lacinia',
    createdAt: '2024-01-15'
  },  
]

const HomePage = () => {
  return (
    <Box sx={(theme) => ({
      minHeight: '100vh',
      backgroundColor: theme.palette.grey[300]
    })}>
      <Container maxWidth="md" sx={{ py: 2}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Button variant="contained" fullWidth>Add Post</Button>
          </Grid>
          <Grid item xs={12} md={9}>
            <PostList posts={POSTS} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomePage