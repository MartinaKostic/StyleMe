/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
};
module.exports = {
  images: {
    //domains: ["localhost"],
    loader: "imgix",
  },
};
module.exports = nextConfig;
