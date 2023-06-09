import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { useEffect , useState} from 'react';
import { Item } from '../ItemListContainer/Item';
import { getData } from '../../services/firebaseConfig';
import { Loader } from "../Loader/Loader";


export const CarouselProducts = ({homeLoader}) => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getData()
            .then(data => setProducts(data)); 
    },[])

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      
      
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    if (products.length === 0) return <Loader/>
    
    return (
      <div className="w-10/12 lg:max-w-[1280px] m-auto">
        <Slider {...settings}>
          {products.map(prod => 
            <div key={prod.id} className="slider-prod">
              <Item {...prod}/>
            </div>
          )}
        </Slider>
      </div>
    )
}
