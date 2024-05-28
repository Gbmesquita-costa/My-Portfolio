/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "adeewxjxvwhapmirexnn.supabase.co"
            }
        ]
    }
}

export default nextConfig