import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Post.module.css";
const Post = ({ post }) => {
   const router = useRouter();

   const deletePost = async () => {
      const postID = router.query.id;
      const baseURL = process.env.BASE_URL;
      try {
         const deleted = await axios.delete(
            `https://demo-nextjs-mongodb.vercel.app/api/posts/${postID}`
         );

         router.push("/");
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className={styles.container}>
         <Link href={`/`}>
            <div>Back to home</div>
         </Link>
         <div className={styles.post}>
            <div className={styles.title}>{post.title}</div>
            <div>{post.content}</div>
         </div>
         <button onClick={deletePost}>Delete this post</button>
      </div>
   );
};

Post.getInitialProps = async ({ query: { id } }) => {
   const res = await axios.get(
      `https://demo-nextjs-mongodb.vercel.app/api/posts/${id}`
   );

   return { post: res.data.data };
};

export default Post;
