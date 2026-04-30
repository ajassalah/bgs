import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "form-action 'self' https://docs.google.com",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://code.tidio.co https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://cdnjs.cloudflare.com https://unpkg.com https://code.tidio.co https://avatars.tidiochat.com https://tidio-images-messenger.s3.us-east-1.amazonaws.com https://cdn.sanity.io https://www.google-analytics.com https://www.googletagmanager.com",
      "font-src 'self' data: https://code.tidio.co",
      "connect-src 'self' https://*.api.sanity.io https://*.apicdn.sanity.io https://cdn.sanity.io https://registry.npmjs.org https://sentry-new.tidio.co https://socket.tidio.co wss://socket.tidio.co https://uploads.tidio.com https://www.google-analytics.com https://analytics.google.com",
      "media-src 'self' https://code.tidio.co https://kensleygraduateschool.com",
      "frame-src 'self' https://www.google.com https://docs.google.com",
    ].join("; "),
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), payment=()",
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async headers() {
    if (process.env.NODE_ENV === 'development') {
      return [];
    }
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
