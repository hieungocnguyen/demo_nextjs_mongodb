/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   env: {
      MONGO_URI:
         "mongodb+srv://ngnohieu:Ngochieu2001@cluster0.gb71xpy.mongodb.net/?retryWrites=true&w=majority",
   },
};

module.exports = nextConfig;
