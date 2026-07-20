/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/creator',
                permanent: false,
            },
            {
                source: '/blooduniverse.html',
                destination: '/creator/blooduniverse.html',
                permanent: false,
            },
            {
                source: '/blooduniverse',
                destination: '/creator/blooduniverse.html',
                permanent: false,
            },
            {
                source: '/bloodstar.html',
                destination: '/creator/bloodstar.html',
                permanent: false,
            },
            {
                source: '/bloodstar',
                destination: '/creator/bloodstar.html',
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;
