import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";
import { stripe } from "@/services/stripe";

import prisma from "@/services/database";
import { revalidate } from "@/actions/revalidateTag";

export async function POST(req: NextRequest): Promise<NextResponse> {
    const signature = req.headers.get("stripe-signature")

    if (!signature) {
        return NextResponse.json({ message: "No stripe signature found!" }, {
            status: 400
        })
    }

    const rawBody = await req.text()
    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(
            rawBody,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET as string
        )
    } catch (error: any | undefined) {
        // console.log(`⚠️  Webhook signature verification failed.`, error.message)
        return NextResponse.json({ message: error.message }, {
            status: 400
        })
    }

    if (event.type !== "checkout.session.completed") {
        return NextResponse.json({ message: "Invalid event type" }, {
            status: 400
        })
    }

    const metadata = event.data.object.metadata as any

    const amount = (event.data.object as {
        amount_total: number
    }).amount_total / 100

    await prisma.donations.create({
        data: {
            message: metadata.message,
            name: metadata.name,
            amount: amount,
            currency: metadata.currency
        }
    })

    await revalidate("donations")

    return NextResponse.json({ message: "Success" }, {
        status: 200
    })
}