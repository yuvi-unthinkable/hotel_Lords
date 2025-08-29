import About from "./About";
// import SmallSlider from "./SmallSlider";
import AutoPlay from "./AutoPlay";
import { ShowMore } from "@re-dev/react-truncate";
export default function Dining() {
  return (
    // <div id="dining-section" className="col-md-12">
    //   <About
    //     className="col-md-6"
    //     supportHeading="Dining"
    //     mainHeading="A Culinary Map of India and Nepal on Your Plate!"
    //     aboutData="At Lords Hotels & Resorts, we believe great journeys deserve great food. Spread across India and Nepal, our dining experiences bring together the best of local flavours and global favourites. Whether you're savouring the bold spices of the Deccan or the fresh, earthy notes of the Himalayas, there's something for everyone. We also understand that food preferences matter—some of our properties offer pure vegetarian dining, ensuring a delightful experience for every guest. No matter where you stay, expect a meal that’s more than just food—it’s a taste of culture, comfort, and hospitality."
    //   />
    //   <AutoPlay className="col-md-6" />
    // </div>
    <div className="container1">
      <div className="row align-items-center">
        <div className="col-md-6">
          <About
            className="col-md-6"
            supportHeading="Dining"
            mainHeading="A Culinary Map of India and Nepal on Your Plate!"
            aboutData={
              <ShowMore lines={10}>
                "At Lords Hotels & Resorts, we believe great journeys deserve
                great food. Spread across India and Nepal, our dining
                experiences bring together the best of local flavours and global
                favourites. Whether you're savouring the bold spices of the
                Deccan or the fresh, earthy notes of the Himalayas, there's
                something for everyone. We also understand that food preferences
                matter—some of our properties offer pure vegetarian dining,
                ensuring a delightful experience for every guest. No matter
                where you stay, expect a meal that’s more than just food—it’s a
                taste of culture, comfort, and hospitality."
              </ShowMore>
            }
            ClickButton={true}
          />
        </div>
        <div className="col-md-6 dining-right-part">
          <AutoPlay dotsIn={false} dinner={true} />
        </div>
      </div>
    </div>
  );
}
