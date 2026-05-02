const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "tse1.mm.bing.net",
      },
    ],
  },
};

export default nextConfig;