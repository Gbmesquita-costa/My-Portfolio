import { NextRequest, NextResponse } from "next/server";
import { stripe } from "./services/stripe";

const isThankYouRoute = (pathname: string) => {
    return pathname.startsWith("/thank-you")
}

export async function middleware(request: NextRequest) {
    const url = new URL(request.url)
    const sessionParam = url.searchParams.get("session_id") as string

    const signURL = new URL("/", request.url)
    const { pathname } = request.nextUrl

    try {
        const session = await stripe.checkout.sessions.retrieve(sessionParam)

        if (!session && isThankYouRoute(pathname)) {
            return NextResponse.redirect(signURL)
        }

        return NextResponse.next()
    } catch (error) {
        return NextResponse.redirect(signURL)
    }
}

export const config = {
    matcher: [
        "/thank-you"
    ]
}