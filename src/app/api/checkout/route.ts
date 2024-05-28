import { NextRequest, NextResponse } from "next/server";

import { stripe } from "@/services/stripe";
import { DONATION_IN_CENTS } from "@/../config";

export async function POST(req: NextRequest): Promise<NextResponse> {
    const { quantity, message, name } = await req.json()

    try {
        const session = await stripe.checkout.sessions.create({
            metadata: {
                name: name || "Anonymous",
                message
            },
            payment_method_types: ["card"],
            mode: "payment",
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: "Donation"
                        },
                        unit_amount: DONATION_IN_CENTS
                    },
                    quantity: quantity
                }
            ],
            success_url: `${req.headers.get("origin")}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.get("origin")}/coffee`
        })

        const stripeUrl = session.url

        if (!stripeUrl) {
            return NextResponse.json({ message: "Something went wrong! Please try again" }, {
                status: 400
            })
        }

        return NextResponse.json({ stripeUrl }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong! Please try again" })
    }
}