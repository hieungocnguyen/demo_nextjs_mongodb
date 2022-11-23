import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
   return (
      <div className={styles.container}>
         <div className={styles.header}>
            <div>OURUM</div>
            {/* <div className={styles.signin}>Sign in</div> */}
            <Link href={`/create`}>
               <div className={styles.createButton}>Create new post</div>
            </Link>
         </div>
         <div className={styles.posts}>
            {posts.map((post) => (
               <div key={post._id}>
                  <Link href={`/posts/${post._id}`}>
                     <div className={styles.post}>
                        <div className={styles.title}>{post.title}</div>
                        <div className={styles.content}>{post.content}</div>
                     </div>
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
}

Home.getInitialProps = async () => {
   const res = await fetch("http://localhost:3000/api/posts");
   const { data } = await res.json();

   return { posts: data };
};