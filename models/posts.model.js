const getAllPosts = () => {
    return db.query(' SELECT posts.*, authors.name AS author_name, authors.email AS author_email, authors.image AS author_image FROM posts LEFT JOIN authors ON posts.author_id = authors.id')
 }


const getPostsByAuthor = (authorId) => {
   return  db.query('SELECT posts.*, authors.name AS author_name, authors.email AS author_email, authors.image AS author_image FROM posts LEFT JOIN authors ON posts.author_id = authors.id WHERE posts.author_id = ?',
           [authorId],
       );
   };

 const createPost = (postData) => {
  const { title, description, category } = postData;
  const query = `INSERT INTO posts (title, description, category) VALUES ( ?, ?, ?)`;
  return new Promise((resolve, reject) => {
     db.query(query, [title, description, category], (err, result) => {
       if (err) {
         reject(err);
       } else {
         resolve(result);
       }
     });
 });
 };

const updatePost =(postsId, {title, description, category}) =>{
    return db.query('update posts set title= ?, description = ?, category = ? where id = ?',
        [title, description, category, postsId]
    );
}


const deletePosts = (postsId) => {
    return db.query('delete from posts where id = ?', [postsId]);
}


 module.exports = {
    getAllPosts, getPostsByAuthor, createPost, updatePost, deletePosts
 }
