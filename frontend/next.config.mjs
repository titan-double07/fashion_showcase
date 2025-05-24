/** @type {import('next').NextConfig} */
// https://fashion-showcase.onrender.com
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: 'fashion-showcase.onrender.com',
            },

            
       ]
   } 
};

export default nextConfig;
