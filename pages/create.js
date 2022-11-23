import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Create.module.css";

const Create = () => {
   const [form, setForm] = useState({ title: "", content: "" });
   const router = useRouter();

   const createPost = async (e) => {
      e.preventDefault();
      try {
         console.log(JSON.stringify(form));
         const res = await axios.post(
            `https://demo-nextjs-mongodb.vercel.app/api/posts`,
            {
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(form),
            }
         );
         // router.push("/");
      } catch (error) {
         console.log(error);
      }
   };

   const handleChange = (e) => {
      setForm({
         ...form,
         [e.target.name]: e.target.value,
      });
   };

   return (
      <form className={styles.form} onSubmit={createPost}>
         <div>
            <lable htmlFor="title">Title</lable>
            <input
               type="text"
               id="title"
               name="title"
               onChange={handleChange}
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
               onChange={handleChange}
            ></textarea>
         </div>
         <button type="submit">Create</button>
      </form>
   );
};

export default Create;
