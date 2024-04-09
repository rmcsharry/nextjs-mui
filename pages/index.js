import React, { useState } from 'react'
import { Box, Grid, Button, Container, Dialog } from '@mui/material'
import PostList from '@/components/PostList'
import FormDialog from '@/components/FormDialog'
import { useFormik } from 'formik'
import * as yup from 'yup';
import getAllPosts from '@/services/getAllPosts'
import DeleteDialog from '@/components/DeleteDialog'

const validationSchema = yup.object({
  title: yup.string().required('Please enter value'),
  body: yup.string().required('Please enter value'),
});



const HomePage = ({ posts }) => {
  const [allPosts, setAllPost] = useState(posts);
  const [toggleFormDialog, setToggleFormDialog] = useState(false);
  const [toggleDeleteDialog, setToggleDeleteDialog] = useState(false);
  const [deletePost, setDeletePost] = useState(null);
  const [editPost, setEditPost] = useState(null);

  function generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
          v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const formik = useFormik({
    initialValues: {
      id: null,
      title: '',
      body: ''
    },
    validationSchema,
    onSubmit: async (values, formikHelpers) => {
      try {
        console.log(values, formikHelpers);
        console.log(allPosts)
        if (values.id) {
          //await updatePostById(values);
          setAllPost((prev) => prev.map((post) => post.id === values.id ? values : post));
        } else {
          values.id = generateGUID();
          setAllPost((prev) => [{ ...values }, ...prev]);
        };
        formikHelpers.resetForm();
        setToggleFormDialog(false);
      } catch (error) {
        console.error(error)
      } finally {
        formikHelpers.setSubmitting(false);
       };
    }
  });

  const handleDelete = async () => {
    setToggleDeleteDialog(false);

    if (!deletePost) return;

    try {
      //await deletePostById(deletePost);
      setAllPost((prev) => prev.filter((post) => post.id !== deletePost));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={(theme) => ({
      minHeight: '100vh',
      backgroundColor: theme.palette.grey[300]
    })}>
      <Container maxWidth="md" sx={{ py: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Button
              variant="contained" fullWidth
              onClick={() => {
                setToggleFormDialog(true);
              }}
            >
              Add Post
            </Button>
          </Grid>
          <Grid item xs={12} md={9}>
            <PostList
              posts={allPosts}
              setDeletePost={setDeletePost}
              setEditPost={setEditPost}
              formik={formik}
              setToggleDeleteDialog={setToggleDeleteDialog}
              setToggleFormDialog={setToggleFormDialog}
            />
          </Grid>
        </Grid>
      </Container>

      <FormDialog
        open={toggleFormDialog}
        onClose={() => {
          setToggleFormDialog(false)
          formik.resetForm();
        }}
        formik={formik}
      />

      <DeleteDialog
        open={toggleDeleteDialog}
        onClose={() => {
          setToggleDeleteDialog(false);
          formik.resetForm();
        }}
        onDeleteHandler={handleDelete}
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