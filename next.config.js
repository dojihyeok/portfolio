/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/creator',
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;
