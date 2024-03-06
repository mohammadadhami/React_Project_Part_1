import axios from "axios";
import { useState, useEffect } from "react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Container, Card, Button } from "react-bootstrap";
import "./Swiper.css";
import {useSearchParams} from  'react-router-dom';

export default function Mens() {
  const [category, setCategory] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const getCategory = async () => {
    try {
      const { data } = await axios.get('https://ecommerce-node4.vercel.app/products/category/' + searchParams.get('id'));
      console.log(data);
      setCategory(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCategory();
  }, [searchParams]);

  return (
    <>
      <div className="cards">
        {category.length === 0 ? (
          <h2>No products to display</h2>
        ) : (
          category.map((product) => (
            <Card key={product._id}>
              <img variant="top" src={product.mainImage.secure_url} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </>
  );
}