/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
