import React, { useState } from 'react'
import { Box, Grid, Button, Container, Dialog } from '@mui/material'
import PostList from '@/components/PostList'
import FormDialog from '@/components/FormDialog'
import { useFormik } from 'formik'
import * as yup from 'yup';
import getAllPosts from '@/services/getAllPosts'

const validationSchema = yup.object({
  title: yup.string().required('Please enter value'),
  body: yup.string().required('Please enter value'),
});


const HomePage = ({posts}) => {
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
            <Button
              variant="contained" fullWidth
              onClick={() => setToggleFormDialog(true)}
            >
              Add Post
            </Button>
          </Grid>
          <Grid item xs={12} md={9}>
            <PostList posts={posts} />
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

export async function getServerSideProps() {
  const posts = await getAllPosts();

  return {
      props: {
          posts
      },
  };
}