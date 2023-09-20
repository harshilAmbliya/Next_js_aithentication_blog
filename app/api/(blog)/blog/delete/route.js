import prisma from "@/prisma/prismadb"
import { NextResponse } from "next/server"

export const DELETE = async (req, { params }) => {
    const { id } = await params
    const blog = await prisma.blog.delete({
        where: {
            id
        }
    })
    return NextResponse.json("deleted successfully", blog)
}