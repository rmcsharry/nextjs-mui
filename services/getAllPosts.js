// import baseApi from './baseApi';

async function getAllPosts() {
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
    // const res = await baseApi.get('/posts');
    return POSTS
}

export default getAllPosts;