import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img
              src="https://media.tacdn.com/media/attractions-content--1x-1/0b/e2/05/a7.jpg"
              alt=""
            />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img
              src="https://images8.alphacoders.com/856/thumb-1920-856105.jpg"
              alt=""
            />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="https://wallpaperaccess.com/full/1375418.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="https://wallpapercave.com/wp/wp4190125.jpg" alt="" />
          </a>
        </Wrap>
      </Carousel>
    </div>
  );
};

const Carousel = styled(Slider)`
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;
const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      max-height: 450px;
      min-height: min(100vw * 0.2, 325px);
      object-fit: cover;
    }

    &:hover {
      padding: 0px;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;
