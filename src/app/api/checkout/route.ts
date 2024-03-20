import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

import { DONATION_IN_CENTS } from "../../../../config";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-10-16"
})

export async function POST(req: NextRequest) {
    const { quantity, message, name }  = await req.json() 

    try {
        const session = await stripe.checkout.sessions.create({
            metadata: {
                name,
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
            success_url: `${req.headers.get("origin")}/thank-you`,
            cancel_url: `${req.headers.get("origin")}/coffee`
        })

        const stripeUrl = session.url

        if (!stripeUrl) {
            return NextResponse.json({ message: "Something went wrong" }, {
                status: 400
            })
        }

        return NextResponse.json({ stripeUrl }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" })
    }
}