
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? 'https://github.com/JoaqPareja/TestTomes' : '',
  basePath: isProd ? 'https://github.com/JoaqPareja/TestTomes' : '',
  output: 'export'
};


export default nextConfig;
