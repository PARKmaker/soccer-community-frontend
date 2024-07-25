/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    // return process.env.NODE_ENV === 'development'
    //   ? {
    //       fallback: [
    //         {
    //           source: '/api/:path*',
    //           destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
    //         },
    //       ],
    //     }
    //   : [];

    return {
      fallback: [
        {
          source: '/api/:path*',
          destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
        },
      ],
    };
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'crests.football-data.org',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
