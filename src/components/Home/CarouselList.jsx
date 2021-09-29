import { Carousel } from "react-bootstrap";
import { bollywoodData } from "../../state/reducer/bollywoodData";

export const CarouselList = () => {
  return (
    <Carousel>
      {bollywoodData.data.map((item) => (
        <Carousel.Item>
          <img className="d-block w-100" src={item.imgUrl} alt={item.title} />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
