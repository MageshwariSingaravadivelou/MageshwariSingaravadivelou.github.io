/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages
  output: "export",
  // Personal site (MageshwariSingaravadivelou.github.io) is served at the domain
  // root, so no basePath / assetPrefix is needed.
  images: {
    unoptimized: true, // next/image optimization is unavailable on static export
  },
  trailingSlash: true, // emit /about/index.html etc. so GitHub Pages routing works
  reactStrictMode: true,
};

export default nextConfig;
