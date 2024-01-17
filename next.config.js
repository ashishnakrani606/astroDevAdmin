/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: {
        'Access-Control-Allow-Origin': ['http://localhost:3001/'],
      },
}

module.exports = nextConfig
