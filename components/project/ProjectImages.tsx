import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

type ProjectImagesProps = {
  images: Array<string>;
};

const ProjectImages = async ({ images }: ProjectImagesProps) => {
  const t = await getTranslations("projects");

  return (
    <Carousel
      className="w-full max-w-3xl rounded-lg cursor-grabbing"
      opts={{ loop: true }}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image}
              alt={`Project image ${index + 1}`}
              width={800}
              height={600}
              className="object-cover rounded-lg max-h-116 w-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="cursor-pointer hidden md:flex" />
      <CarouselNext className="cursor-pointer hidden md:flex" />

      <p className="flex justify-center text-sm text-muted-foreground mt-2">
        {t("swipeImage")}
      </p>
    </Carousel>
  );
};

export default ProjectImages;
