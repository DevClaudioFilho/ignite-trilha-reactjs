import { useKeenSlider } from 'keen-slider/react';
import Image from "next/image";

import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from '../assets/camisetas/1.png';
import camiseta2 from '../assets/camisetas/2.png';

import 'keen-slider/keen-slider.min.css';


export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides:{
      perView:2.5,
      spacing:48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide" >
        <Image src={camiseta1} width={520} height={480} alt=''/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 160,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide" >
        <Image src={camiseta1} width={520} height={480} alt=''/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 160,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide" >
        <Image src={camiseta2} width={520} height={480} alt=''/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 160,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide" >
        <Image src={camiseta2} width={520} height={480} alt=''/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 160,00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
