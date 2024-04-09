import React from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'

const PostListItem = ({post, onDelete, onEdit}) => {
  return (
    <Box key={post.id} sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
      <Typography variant='h6' gutterBottom>{post.title}</Typography>
      <Typography gutterBottom>{post.body}</Typography>
      <Typography variant='caption' gutterBottom>Created: {post.createdAt}</Typography>
      <br></br>
      <br></br>
      <Button variant="contained" sx={{ mr: 2 }} onClick={onEdit}>Edit Post</Button>
      <Button variant="outlined" color="error" onClick={onDelete}>Delete Post</Button>
    </Box>
  )
}

export default PostListItem