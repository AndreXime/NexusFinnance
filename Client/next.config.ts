import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',  // Permite redirecionar qualquer caminho dentro de /api
        destination: `${process.env.URL_Server||"http://localhost:4000/api/"}:path*`, // Destino real
      },
    ];
  },
};

export default nextConfig;
