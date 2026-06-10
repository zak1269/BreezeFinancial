/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'smileypete.com' }
    ]
  }
};

export default nextConfig;
