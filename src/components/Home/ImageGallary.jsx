import { ImageGallaryItem } from "./ImageGallaryItem";
import { bollywoodData } from "../../state/reducer/bollywoodData";

export const ImageGallary = () => {
  console.log(bollywoodData.data);
  return (
    <table>
      <tr>
        {bollywoodData.data.map((item) => (
          <td>
            <ImageGallaryItem
              wikiUrl={item.wikiUrl}
              imgUrl={item.imgUrl}
              title={item.title}
            />
          </td>
        ))}
      </tr>
    </table>
  );
};
