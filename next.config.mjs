import analyzer from "@next/bundle-analyzer";
import nextBuildId from "next-build-id";

import plugins from "next-compose-plugins";

const withBundleAnalyzer = analyzer({
    enabled: process.env.ANALYZE === "true"
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "adeewxjxvwhapmirexnn.supabase.co"
            }
        ]
    },
    generateBuildId: async () => nextBuildId(),
    logging: {
        fetches: {
            fullUrl: true
        }
    }
}

export default plugins([withBundleAnalyzer], nextConfig)