"use server";
import { BrandIconType } from "@/components/BrandIcon";
import prisma from "@/lib/db";

export async function getAllTags() {
    const tags = await prisma.tag.findMany();
    return tags.map(tag =>({
        title: tag.title,
        slug: tag.slug,
        href: `/tags/${tag.slug}`,
        iconType: tag.iconType as BrandIconType
    }))
}