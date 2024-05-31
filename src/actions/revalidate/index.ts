"use server"

import { revalidatePath, revalidateTag } from "next/cache";

export const revalidatePathName = async (page: string) => {
  revalidatePath(page)
}

export const revalidateTagName = async (tag: string) => {
  revalidateTag(tag)
}