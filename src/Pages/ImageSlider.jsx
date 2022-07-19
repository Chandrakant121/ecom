import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }) => {
    return (
        <Carousel infiniteLoop autoPlay >
            {slides.map((slide) => {
                return <Image src={slide.image} height="500px" width="100%" />;
            })}
        </Carousel>
    );
};

export default ImageSlider;
