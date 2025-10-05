'use strict'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const nrExternals = require('newrelic/load-externals')

module.exports = {
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    webpack: (config: any) => {
        nrExternals(config)
        return config
    },
}
