/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    domains: ['cdn.prod.website-files.com', 'res.cloudinary.com', 'upload.wikimedia.org'], // <-- thêm domain này vào
  },
};

export default nextConfig;
