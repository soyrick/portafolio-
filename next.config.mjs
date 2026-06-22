/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // El render 3D y las animaciones viven en el cliente; no bloqueamos el build
  // por reglas de lint mientras iteramos el diseño.
  eslint: { ignoreDuringBuilds: true },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
