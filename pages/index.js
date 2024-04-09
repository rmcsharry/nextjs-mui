import React, { useState } from 'react'
import { Box, Grid, Button, Container, Dialog } from '@mui/material'
import PostList from '@/components/PostList'
import FormDialog from '@/components/FormDialog'
import { useFormik } from 'formik'
import * as yup from 'yup';

const validationSchema = yup.object({
  title: yup.string().required('Please enter value'),
  body: yup.string().required('Please enter value'),
});

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
  const [toggleFormDialog, setToggleFormDialog] = useState(false);
  const formik = useFormik({
    initialValues: {
      title: '',
      body: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  });

  return (
    <Box sx={(theme) => ({
      minHeight: '100vh',
      backgroundColor: theme.palette.grey[300]
    })}>
      <Container maxWidth="md" sx={{ py: 2}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Button variant="contained" fullWidth onClick={() => setToggleFormDialog(true)}>Add Post</Button>
          </Grid>
          <Grid item xs={12} md={9}>
            <PostList posts={POSTS} />
          </Grid>
        </Grid>
      </Container>

      <FormDialog
        open={toggleFormDialog}
        onClose={() => setToggleFormDialog(false)}
        formik={formik}
      />
    </Box>
  )
}

export default HomePage