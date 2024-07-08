"use server";
import { BrandIconType } from "@/components/BrandIcon";
import prisma from "@/lib/db";

export async function getAllTags() {
    const tags = await prisma.tag.findMany();
    return tags.map(tag =>({
        title: tag.name,
        slug: tag.slug,
        href: `/tags/${tag.name}`,
        iconType: tag.iconType as BrandIconType
    }))
}