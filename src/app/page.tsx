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
  { alt: 'Lançamento: carro new civc azul ', img: '/corte.png', key: '1', current: true },
  { alt: 'Lançamento: carro new civc azul ', img: '/corte.png', key: '2', current: true },
  { alt: 'Lançamento: carro new civc azul ', img: '/corte.png', key: '3', current: true },
  { alt: 'Lançamento: carro new civc azul ', img: '/corte.png', key: '4', current: true }
]

export default function Home() {
  return (
    <main className="flex max-h-screen min-h-[calc(100vh-32px)] flex-col items-center justify-between rounded-xl p-3 bg-[url('/bg.jpg')] bg-cover shadow-lg">
      
      {/* LOGOMARCA */}
      <div>
        <Image src={'/logo.png'} alt='Logo' width={200} height={200}/>
      </div>


      {/* CORPO */}
      <div className='w-full flex justify-around items-center'>
        <div className='flex justify-normal flex-col w-2/4'>
          <h1 className='text-white text-5xl w-9/12 ml-20 font-bold'>Venha conhecer a melhor barbearia do <span className='text-[#0097e2]'>Espírito</span> <span className='text-[#f09cbf]'>Santo!</span></h1>
          <p className='text-white w-9/12 ml-20 mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore 
          nisl tincidunt eget. Lectus mauris eros in vitae.</p>
          <div className='flex flex-row'>
            <Button className='bg-yellow-600 text-black w-56 p-2 rounded-2xl ml-20 mt-10 hover:bg-yellow-900 font-bold flex flex-row items-center justify-center'><CalendarDaysIcon width={20} className='mr-2'/> Agendar Horário</Button>
            <Button variant='outlined' className='text-white w-56 p-2 rounded-2xl ml-5 mt-10 font-bold flex flex-row items-center justify-center'><ChatBubbleOvalLeftEllipsisIcon width={20} className='mr-2'/>Tirar Dúvidas</Button>
          </div>
        </div>
        <div className='w-2/4 flex justify-center'>
          <div className='w-[450px]'>
            <Slider {...settings}>
              {Carrousel.map((item) => (
                <div>
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

      {/* BUTTONS */}
      <div className='w-2/3 mt-12'>
        <ButtonGroup fullWidth className='drop-shadow-2xl'>
          <Button className='flex justify-center flex-row items-center text-2xl'><IoLocationSharp size={30} className='mr-5' />Localização</Button>
          <Button className='flex justify-center flex-row items-center text-2xl'><BsWhatsapp size={30} className='mr-5' />  Whatsapp</Button>
          <Button className='flex justify-center flex-row items-center text-2xl'><BsInstagram size={30} className='mr-5' />Instagram</Button>
        </ButtonGroup>
      </div>

      {/* FOOTER */}
      <div className='flex w-full mt-5 mb-3 flex-row justify-center items-center'>
        <p className='text-white mr-5'>Desenvolvido por</p>
        <Image src={'/logodev.png'} alt='Logo Desenvolvedor' width={150} height={150}/>
      </div>

    </main>
  )
}
