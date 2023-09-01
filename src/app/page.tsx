"use client"
import { CalendarDaysIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline'
import { Button, ButtonGroup } from '@material-tailwind/react'
import Image from 'next/image'
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// CONFIG SLICK
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

const Carrousel = [
  { alt: 'Lançamento: carro new civc azul ', img: '/corte1.jpg', key: '2', current: true },
  { alt: 'Lançamento: carro new civc azul ', img: '/corte2.jpg', key: '3', current: true },
  { alt: 'Lançamento: carro new civc azul ', img: '/corte3.jpg', key: '4', current: true },
  { alt: 'Lançamento: carro new civc azul ', img: '/corte.png', key: '1', current: true }
]

export default function Home() {
  return (
    <main className="flex max-h-full min-h-[calc(100vh-32px)] flex-col items-center justify-center lg:justify-between rounded-xl p-3 bg-[url('/bg.jpg')] bg-cover shadow-lg">
      
      {/* LOGOMARCA */}
      <div className='container flex justify-center'>
        <Image src={'/logo.png'} alt='Logo' width={200} height={200}/>
      </div>


      {/* CORPO */}
      <div className='container w-full flex flex-col-reverse lg:flex-row justify-center lg:justify-around items-center'>
        <div className='flex justify-center lg:justify-normal flex-col w-4/5 lg:w-2/4 mt-5'>
          <h1 className='text-white text-center lg:text-left text-3xl lg:text-5xl font-bold'>Venha conhecer a melhor barbearia do <span className='text-[#0097e2]'>Espírito</span> <span className='text-[#f09cbf]'>Santo!</span></h1>
          <p className='text-white mt-10 text-center lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore 
          nisl tincidunt eget. Lectus mauris eros in vitae.</p>
          <div className='flex flex-col justify-center items-center lg:justify-start lg:flex-row'>
            <Button className='bg-yellow-600 text-black w-56 p-2 rounded-2xl mt-10 hover:bg-yellow-900 font-bold flex flex-row items-center justify-center'><CalendarDaysIcon width={20} className='mr-2'/> Agendar Horário</Button>
            <Button variant='outlined' className='text-white w-56 p-2 rounded-2xl lg:ml-5 mt-4 lg:mt-10 font-bold flex flex-row items-center justify-center'><ChatBubbleOvalLeftEllipsisIcon width={20} className='mr-2'/>Tirar Dúvidas</Button>
          </div>
        </div>
        <div className='w-2/4 flex justify-center mt-5 lg:mt-0'>
          <div className='w-[280px] lg:w-[450px]'>
            <Slider {...settings}>
              {Carrousel.map((item) => (
                <div key={item.key}>
                  <Image 
                    className='rounded-3xl'
                    alt={item.alt}
                    src={item.img}
                    width={450}
                    height={450}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* BUTTONS DESKTOP */}
      <div className='container w-2/3 mt-12 hidden lg:block'>
        <ButtonGroup fullWidth className='drop-shadow-2xl'>
          <Button className='flex justify-center flex-row items-center text-2xl'><BsInstagram size={30} className='mr-5' />Instagram</Button>
          <Button className='flex justify-center flex-row items-center text-2xl'><IoLocationSharp size={30} className='mr-5' />Localização</Button>
          <Button className='flex justify-center flex-row items-center text-2xl'><BsWhatsapp size={30} className='mr-5' />  Whatsapp</Button>
        </ButtonGroup>
      </div>

      {/* BUTTONS MOBILE */}
      <div className='container w-3/4 mt-10 lg:hidden'>
      <Slider {...settings}>
          <Button className='text-base'><div className='flex flex-row items-center justify-center'><IoLocationSharp size={20} className='mr-5' />Localização</div></Button>
          <Button className='text-base'><div className='flex flex-row items-center justify-center'><BsWhatsapp size={20} className='mr-5' />  Whatsapp</div></Button>
          <Button className='text-base'><div className='flex flex-row items-center justify-center'><BsInstagram size={20} className='mr-5' />Instagram</div></Button>
      </Slider>
      </div>

      {/* FOOTER */}
      <div className='container flex w-full mt-10 lg:mt-5 mb-3 flex-row justify-center items-center'>
        <p className='text-white mr-5'>Desenvolvido por</p>
        <Image src={'/logodev.png'} alt='Logo Desenvolvedor' width={130} height={130}/>
      </div>

    </main>
  )
}
