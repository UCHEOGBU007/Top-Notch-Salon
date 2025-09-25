import { IoMdStarOutline } from "react-icons/io";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Style from "../Css/Testimonials.module.css";

const Testimonies = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 40,
    },
  };
  return (
    <div className={Style.TestimonyContainer}>
      <h3>TESTIMONIALS</h3>
      <p>Read what others have to say about us</p>

      {/* carousel container starts here  */}

      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        keyBoardControl={true}
        partialVisible={true}
        showDots={true}
        responsive={responsive}
      >
        {/* Testimony cards starts here . */}

        <div className={Style.Testimonycard}>
          <h5>Helieth Holibony</h5>
          <div>
            <img src="/Helieth.jpg" alt="Testimonies picture" loading="lazy" />
            <span>
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
            </span>
          </div>
          <p>
            Just wanted to say thanks for the great service and haircut
            today.You made me feel comfortable and i'm really happy with the
            result.
          </p>
        </div>
        <div className={Style.Testimonycard}>
          <h5>Don San</h5>
          <div>
            <img src="/Donsan.jpg" alt="Testimonies picture" loading="lazy" />
            <span>
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
            </span>
          </div>
          <p>
            Got a clean taper fade here and i'm seriously impressed!. The blend
            is super smoth and the lines are sharp.I highly recommend if you're
            after a fresh , professional look. Will definitely be coming back!.
          </p>
        </div>
        <div className={Style.Testimonycard}>
          <h5>Dancefit Lee</h5>
          <div>
            <img
              src="/Dancefitlee.jpg"
              alt="Testimonies picture"
              loading="lazy"
            />
            <span>
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
            </span>
          </div>
          <p>
            The owner is incredibly welcoming, genuinely kind, and brings a
            great sense of humor that makes every visit enjoyable. The stylist
            is not only skilled but also highly professional—truly one of the
            best in the area.
          </p>
        </div>
        <div className={Style.Testimonycard}>
          <h5>Norma Yunita</h5>
          <div>
            <img src="/Norma.jpg" alt="Testimonies picture" loading="lazy" />
            <span>
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
            </span>
          </div>
          <p>
            The staff are nice and friendly. They give you mineral water...the
            place is clean, the prices are moderate, not too expensive, the PK
            is all okay.
          </p>
        </div>

        <div className={Style.Testimonycard}>
          <h5>Jay</h5>
          <div>
            <img src="/Jay.jpg" alt="Testimonies picture" loading="lazy" />
            <span>
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
            </span>
          </div>
          <p>
            Prices are fair, service is exceptional, and the atmosphere is just
            right. I highly recommend stopping by if you're nearby. I’ll
            definitely be coming back!
          </p>
        </div>

        <div className={Style.Testimonycard}>
          <h5>Tiangay Koker</h5>
          <div>
            <img
              src="/Tiangaykoker.jpg"
              alt="Testimonies picture"
              loading="lazy"
            />
            <span>
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
            </span>
          </div>
          <p>
            This is Top Notch service, the service is the best, they know how to
            get good service with good haircut. the barber is clean and perfect
            in his skills.i give this place 10 out of ones best haircut case in
            bali , music is also on point.serve you also a drink and appetizers
          </p>
        </div>

        <div className={Style.Testimonycard}>
          <h5>Kelvin</h5>
          <div>
            <img src="/Kelvin.jpg" alt="Testimonies picture" loading="lazy" />
            <span>
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
            </span>
          </div>
          <p>
            From the moment you walk in, you're greeted with warmth and genuine
            hospitality. The owner brings great energy—friendly, funny, and
            truly passionate about the craft.The stylists are top-tier
            professionals who know how to deliver sharp cuts and flawless fades.
          </p>
        </div>

        <div className={Style.Testimonycard}>
          <h5>Bongo Square</h5>
          <div>
            <img
              src="/Bongosquare.jpg"
              alt="Testimonies picture"
              loading="lazy"
            />
            <span>
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
            </span>
          </div>
          <p>
            The space is clean, the vibe is relaxed, and the prices are more
            than fair for the quality you get. If you're in the area, don’t miss
            out—this place lives up to its name. I’ll definitely be back!
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonies;
