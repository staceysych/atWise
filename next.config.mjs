// import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/atWise",
  output: "export",
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default nextConfig;
