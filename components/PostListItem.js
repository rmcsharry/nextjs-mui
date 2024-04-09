import React from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'

const PostListItem = ({post}) => {
  return (
    <Box key={post.id} sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
      <Typography variant='h6' gutterBottom>{post.title}</Typography>
      <Typography gutterBottom>{post.body}</Typography>
      <Typography variant='caption' gutterBottom>Created: {post.createdAt}</Typography>
      <br></br>
      <br></br>
      <Button variant="contained" sx={{ mr: 2 }}>Edit Post</Button>
      <Button variant="outlined" color="error">Delete Post</Button>
    </Box>
  )
}

export default PostListItem