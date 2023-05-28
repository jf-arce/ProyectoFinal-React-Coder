import { CarouselProducts } from "../components/Carousels/CarouselProducts";
import CarouselHero from "../components/Carousels/CarouselHero";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer"
import { CarouselBrands } from "../components/Carousels/CarouselBrands";

export default function Home(){
    return (
      <div className="home"> 
        <CarouselHero/>
        <h2 className='text-center text-3xl font-bold text-lightBlack m-10 icon'> Destacados </h2>
        <CarouselProducts/>
        <div className="w-10/12 mx-auto my-10">
          <picture>
            <img src="https://gaming-city.com.ar/static/home-banner-secundario.jpg?v=1345393324" alt="" className="rounded-sm"/>
          </picture>
        </div>
        <CarouselBrands/>
        {/* <ItemListContainer greeting="BIENVENID@ A GAMING UP"/> */}
      </div>
    )
}
