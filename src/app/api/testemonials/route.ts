import { NextRequest, NextResponse } from "next/server";
import prisma from "@/services/database";

export async function GET(req: NextRequest): Promise<NextResponse> {
    const getTestemonials = await prisma.testemonials.findMany({
        select: {
            name: true,
            description: true,
            position: true,
            client_image: true
        },
        orderBy: {
            created_at: "asc"
        }
    })

    if (!getTestemonials) {
        return NextResponse.json({ message: "Unable to get the testemonials" }, {
            status: 400
        })
    }

    return NextResponse.json({ testemonials: getTestemonials }, {
        status: 200
    })
}