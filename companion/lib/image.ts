import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./sanity";
import type { SanityImage } from "./types";

const builder =
  projectId && projectId !== "replace-me"
    ? imageUrlBuilder({
        projectId,
        dataset,
      })
    : null;

export function imageUrlFor(image?: SanityImage, width = 900, height = 640) {
  if (!builder || !image?.asset?._ref) {
    return null;
  }

  return builder.image(image).width(width).height(height).fit("crop").auto("format").url();
}
