import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Post.module.css";
const Post = ({ post }) => {
   const router = useRouter();

   const deletePost = async () => {
      const postID = router.query.id;
      try {
         const deleted = await fetch(
            `http://localhost:3000/api/posts/${postID}`,
            {
               method: "Delete",
            }
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
   const res = await fetch(`http://localhost:3000/api/posts/${id}`);
   const { data } = await res.json();

   return { post: data };
};

export default Post;
