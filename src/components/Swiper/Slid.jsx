import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Container } from "react-bootstrap";
export default function Categories() {
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    const { data } = await axios.get(
      `https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10`
    );
    setCategory(data.categories);
  };
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Swiper
      navigation="true"
      pagination="true"
      scrollbar="true"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {category.length > 0 ? (
        category.map((categories) => (
          <div className="col-lg-6 col-md-4 col-sm-6 mt-5" key={categories._id}>
            <SwiperSlide className="swiperSlide">
              <Link to={"/products?id=" + categories._id}>
                <img src={categories.image.secure_url} />
              </Link>
            </SwiperSlide>
          </div>
        ))
      ) : (
        <h2>....</h2>
      )}
    </Swiper>
  );
}
