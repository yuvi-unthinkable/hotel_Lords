
import Carousel from "./Carousel";
import About from "./About";
import Icons from "./Icons";
import HotelandResaurts from "./HotelandResaurts";
import Dining from "./Dining";
import Hospitality from "./Hospitality";

export default function Homepage() {
  return (
    <>
      <Carousel />
      <div className="parent-container">
        <About
          sectionId="about-us"
          supportHeading="About"
          mainHeading="Welcome to Lords Hotels & Resorts"
          aboutData={
            <>
              Jaipur, the Pink City, is a fascinating blend of history, vibrant culture, and breathtaking architecture. Lords Plaza Jaipur is
              ideally located about 3 km from the iconic Hawa Mahal, making it a
              perfect base for exploring the city's rich heritage. Our hotel
              offers well-appointed, three event spaces ideal
              for business meetings or celebrations, and two dining options
              catering to diverse tastes. Whether you're visiting for work,
              leisure, or a special occasion, our hotel in Jaipur provides the
              perfect combination of comfort, convenience, and personalised
              service, ensuring a memorable stay in the heart of Jaipur.
            </>
          }
          ClickedButton={true}
        />
        <Icons />
        <HotelandResaurts
          sectionId="hotelId"
          supportHeading="Hotels and Resorts"
          mainHeading="Discover Our Locations"
          roomSlide={true}
        />
        <About
          sectionId="offerId"
          supportHeading="Offers"
          mainHeading="Your Favourite Getaway, Now with Even Better Savings"
          offerSlide={true}
        />
        <Dining />
      </div>

      <Hospitality />

      <div className="parent-container">
        <About
          supportHeading="Stay Tuned"
          mainHeading="Upcoming Projects"
          upcomingEvent={true}
        />
      </div>

    </>
  );
}
