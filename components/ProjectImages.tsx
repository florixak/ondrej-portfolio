import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Project } from "@/types/types";
import Image from "next/image";

type ProjectImagesProps = {
  images: Project["images"];
};

const ProjectImages = ({ images }: ProjectImagesProps) => {
  return (
    <Carousel className="w-full max-w-3xl overflow-hidden rounded-lg">
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectImages;
