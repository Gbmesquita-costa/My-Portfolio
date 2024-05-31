import { NextRequest, NextResponse } from "next/server";
import prisma from "@/services/database";

// Define revalidate to 3600 seconds (1 hour)
export const revalidate = 3600

export async function GET(req: NextRequest): Promise<NextResponse> {
    const getProjects = await prisma.projectDetails.findMany({
        select: {
            name: true,
            deployUrl: true,
            description: true,
            gifimage_url: true,
            githubRepo: true,
            thumbnail: true
        },
        orderBy: {
            created_at: "asc"
        }
    })

    if (!getProjects) {
        return NextResponse.json({ message: "Unable to get the projects" }, {
            status: 400
        })
    }

    return NextResponse.json({ projects: getProjects }, {
        status: 200
    })
}