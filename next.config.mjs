/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/prj-nextjs-001",
    output: "export",  // <=== enables static exports
    distDir: 'build',
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
};

export default nextConfig;
