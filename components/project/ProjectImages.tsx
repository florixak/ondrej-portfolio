import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getTranslations } from "next-intl/server";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type ProjectImagesProps = {
  images: Array<string | StaticImport>;
};

const ProjectImages = async ({ images }: ProjectImagesProps) => {
  const t = await getTranslations("projects");
  return (
    <Carousel
      className="w-full max-w-3xl rounded-lg cursor-grabbng"
      opts={{ loop: true }}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image}
              alt={`Project image ${index + 1}`}
              className="object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}

      <p className="flex justify-center text-sm text-muted-foreground">
        {t("swipeImage")}
      </p>
    </Carousel>
  );
};

export default ProjectImages;
