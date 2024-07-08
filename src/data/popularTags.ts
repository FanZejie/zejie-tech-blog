import { getAllTags } from "@/actions/actions";
import { BrandIconType } from "@/components/BrandIcon";

type PopularTag = {
  href: string;
  iconType: BrandIconType;
  slug: string;
  title: string;
};

const popularTags: PopularTag[] = await getAllTags()
export default popularTags;
