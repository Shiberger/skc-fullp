/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    // The domains property specifies an array of domains from which the application allows loading images. 
    // In this case, it lists three domains: "lh3.googleusercontent.com," "res.cloudinary.com," and "task.com." 
    // These domains are whitelisted, meaning images from these domains can be displayed in the application without cross-origin restrictions.
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com", "task.com"],
    },
    experimental: {
    // serverComponentsExternalPackages specifies an array of external packages that are used in conjunction with Next.js server components.
    // these packages, "cloudinary" and "graphql-request," are likely to be used in the server components of the application.
    serverComponentsExternalPackages: ["cloudinary", "graphql-request"],
    },
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
