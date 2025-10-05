import type { NextConfig } from 'next'
import nrExternals from 'newrelic/load-externals'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'books.google.com',
                port: '',
                pathname: '/books/content',
            },
        ],
    },
    experimental: {
        serverComponentsExternalPackages: ['newrelic'],
    },
    webpack: (config) => {
        nrExternals(config)
        return config
    },
}

export default nextConfig
