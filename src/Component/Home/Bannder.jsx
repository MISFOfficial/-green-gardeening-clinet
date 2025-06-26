import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectCoverflow, EffectFade, Keyboard, Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const Bannder = () => {

    return (
        <div className='signinBg relative mt-17 '>
           <button className='absolute centered bg-[green]  px-4 py-2  text-sm md:text-lg lg:text-lg z-100 text-white font-bold cursor-pointer  duration-250'>Explore more</button>
           {/* <button className='absolute centered2 bg-red-400  px-4 py-2  text-sm md:text-lg lg:text-lg z-100 text-white font-bold cursor-pointer duration-250'>Join Our Garden Community</button> */}
            <div className='py-2 md:py-4 lg:py-8 hero-overlay'>
                <Swiper
                    className='h-[30vh] md:h-[40vh] lg:h-[60vh] rounded-4xl'
                    modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        EffectCoverflow,
                        Autoplay,
                        Keyboard
                    ]}
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    spaceBetween={30}
                    // navigation
                    effect='coverflow'
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 110,
                        depth: 400,
                        modifier: 2,
                        slideShadows: true
                    }}
                    speed={800}
                    autoplay={{
                        delay: 1500,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: true
                    }}
                >

                    <SwiperSlide className='h-full !w-[340px] md:!w-[600px] lg:!w-[1200px] relative '>
                        <img
                            className='object-cover w-full h-full rounded-4xl'
                            src='/asset/gn1.avif'
                            alt=''
                        />
                    </SwiperSlide>
                    <SwiperSlide className='h-full !w-[340px] md:!w-[600px] lg:!w-[1200px] relative '>
                       
                        <img
                            className='object-cover w-full h-full rounded-4xl'
                            src='/asset/gn2.avif'
                            alt=''
                        />
                    </SwiperSlide>
                    <SwiperSlide className='h-full !w-[340px] md:!w-[600px] lg:!w-[1200px] relative '>
                       
                        <img
                            className='object-cover w-full h-full rounded-4xl'
                            src='/asset/gn3.avif'
                            alt=''
                        />
                    </SwiperSlide>
                    <SwiperSlide className='h-full !w-[340px] md:!w-[600px] lg:!w-[1200px] relative '>
                       
                        <img
                            className='object-cover w-full h-full rounded-4xl'
                            src='/asset/gn4.avif'
                            alt=''
                        />
                    </SwiperSlide>
                    <SwiperSlide className='h-full !w-[340px] md:!w-[600px] lg:!w-[1200px] relative '>
                        
                        <img
                            className='object-cover w-full h-full rounded-4xl'
                            src='/asset/gn5.avif'
                        />
                    </SwiperSlide>
                    <SwiperSlide className='h-full !w-[340px] md:!w-[600px] lg:!w-[1200px] relative '>
                        
                        <img
                            className='object-cover w-full h-full rounded-4xl'
                            src='/asset/gn6.avif'
                            alt=''
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
};

export default Bannder;