import { checkError, client } from './client';


export async function fetchBlogs() {
  const resp = await client.from('blogs').select('*, author_id(*)');
  // const resp = await client.from('blogs').select('*');
  return (checkError(resp));
}
