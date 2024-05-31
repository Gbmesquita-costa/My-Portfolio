import { NextRequest, NextResponse } from "next/server";
import prisma from "@/services/database";

export const revalidate = 0

export async function GET(req: NextRequest): Promise<NextResponse> {
    const getDonations = await prisma.donations.findMany({
        select: {
            message: true,
            amount: true,
            name: true,
            currency: true
        },
        orderBy: {
            updated_at: "desc"
        },
        take: 4
    })

    if (!getDonations) {
        return NextResponse.json({ message: "Unable to retrieve recent donations" }, {
            status: 400
        })
    }

    return NextResponse.json({ donations: getDonations }, {
        status: 200
    })
}