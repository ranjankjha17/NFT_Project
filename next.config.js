/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // hostname:"lh3.googleusercontent.com",
  images: {
    domains: ['lh3.googleusercontent.com', 'static-cse.canva.com', 'static-cse.canva.com', 'i.pinimg.com', 'cdn.dribble.com', 'cdn.dribbble.com', 'images.pexels.com','img.seadn.io','lh3.googleusercontent.com','media.istockphoto.com','i.seadn.io','expertphotography.b-cdn.net','pbs.twimg.com','pbs.twimg.com','img.icons8.com']

  },
}

module.exports = nextConfig
