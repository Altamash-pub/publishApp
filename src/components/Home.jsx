import { Personalinfo } from "./Home/Personalinfo";
import { Professionalinfo } from "./Home/Professionalinfo";
import { ImageGallary } from "./Home/ImageGallary";
import { CarouselList } from "./Home/CarouselList";
import { Button } from "react-bootstrap";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <table>
        <tr>
          <td>
            <CarouselList />
          </td>
        </tr>
        <tr>
          <td>
            <Personalinfo />
          </td>
          <td>
            <Professionalinfo />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <ImageGallary />
          </td>
        </tr>
      </table>
    </div>
  );
};
