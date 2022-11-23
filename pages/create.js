import axios from "axios";
import { set } from "mongoose";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Create.module.css";

const Create = () => {
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const router = useRouter();

   const createPost = async (e) => {
      e.preventDefault();
      try {
         const res = await axios.post(
            `https://demo-nextjs-mongodb.vercel.app/api/posts`,
            { title: title, content: content }
         );
         // router.push("/");
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <form className={styles.form} onSubmit={createPost}>
         <div>
            <lable htmlFor="title">Title</lable>
            <input
               type="text"
               id="title"
               name="title"
               onChange={(e) => {
                  setTitle(e.target.value);
               }}
            />
         </div>
         <div>
            <lable htmlFor="content">Content</lable>
            <textarea
               type="text"
               id="content"
               rows="10"
               cols="30"
               name="content"
               onChange={(e) => {
                  setContent(e.target.value);
               }}
            ></textarea>
         </div>
         <button type="submit">Create</button>
      </form>
   );
};

export default Create;
