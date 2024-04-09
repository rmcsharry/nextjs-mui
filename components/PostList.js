import React from 'react'
import { Paper, Typography } from '@mui/material'
import PostListItem from './PostListItem'

const PostList = ({posts}) => {

  return (
    <Paper sx={{ width: '100%', height: '80vh', overflow: 'auto' }}>
      {posts.length > 0 ? posts.map(post => (
        <PostListItem key={post.id} post={post} />
      )) : (
        <Typography sx={{ p: 2 }}>
          <h2>No Posts</h2>
        </Typography>
      )}
    </Paper>
  )
}

export default PostList