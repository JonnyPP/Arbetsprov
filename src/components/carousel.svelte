
<script>
    import { color } from '../store';
	import MediaQuery from "svelte-media-query";
    import Prices from "./prices.svelte"
    import { Swiper, SwiperSlide } from "../../node_modules/swiper/svelte";
    import productData from "./productData.json";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

import "swiper/css/pagination";

// import required modules
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay
} from "../../node_modules/swiper";



let colorName ;

color.subscribe(value => {
    colorName = value;
});
</script>




<MediaQuery query="(max-width: 800px)" let:matches>
    {#if matches}
    
    <p class="text">
        <u>{productData.ClassName}</u> <u>&#xbb;</u> <u>{productData.GroupName}</u>  <u>&#xbb;</u> <u>{productData.StyleName}</u> 
    </p>
    {#if colorName === 'Burgundy'}
    <div class="carousel">

        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        pagination={true}
        loop={true}
        class="mySwiper"
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
        
        <SwiperSlide>        
            <img src="https://media.nelly.com/i/nlyscandinavia/091323-1126_04?$categorypage_XL$" alt="rödklänning">
        </SwiperSlide>
        
        <SwiperSlide>
            <img
            src="https://media.nelly.com/i/nlyscandinavia/091323-1126_05?$categorypage_XL$"
            alt="rödklänning"
        />
        </SwiperSlide>
        <SwiperSlide>
            <video autoplay loop muted>
                <source src="https://media.nelly.com/v/nlyscandinavia/091323-1126_video50/webm_product_high?$categorypage_XL$" type="video/mp4">
            </video>
        </SwiperSlide>
        <SwiperSlide>
            <img
            src="https:\/\/media.nelly.com\/i\/nlyscandinavia\/091323-1126_06?$categorypage_XL$"
            alt="rödklänning"
        />
        </SwiperSlide>
        
        </Swiper>
    </div>
    {:else if colorName === 'Ljusrosa'}
    <div class="carousel">

        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        pagination={true}
        loop={true}
        class="mySwiper"
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
        
        <SwiperSlide>        
            <img src="https://media.nelly.com/i/nlyscandinavia/091323-0300_04?$categorypage_XL$" alt="rosaklänning">
        </SwiperSlide>
        
        <SwiperSlide>
            <img
            src="https://media.nelly.com/i/nlyscandinavia/091323-0300_05?$categorypage_XL$"
            alt="rosaklänning"
        />
        </SwiperSlide>
        <SwiperSlide>
            <video autoplay loop muted>
                <source src="https://media.nelly.com/v/nlyscandinavia/091323-0300_video50/webm_product_high?$categorypage_XL$" type="video/mp4">
            </video>
        </SwiperSlide>
        <SwiperSlide>
            <img
            src="https:\/\/media.nelly.com\/i\/nlyscandinavia\/091323-0300_06?$categorypage_XL$"
            alt="rosaklänning"
        />
        </SwiperSlide>
        
        </Swiper>
    </div>
    {:else if colorName = "Ljusblå"}
    <div class="carousel">

        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        pagination={true}
        loop={true}
        class="mySwiper"
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
        
        <SwiperSlide>        
            <img src="https://media.nelly.com/i/nlyscandinavia/091323-7072_04?$categorypage_XL$" alt="blåklänning">
        </SwiperSlide>
        
        <SwiperSlide>
            <img
            src="https://media.nelly.com/i/nlyscandinavia/091323-7072_05?$categorypage_XL$"
            alt="blåklänning"
        />
        </SwiperSlide>
        <SwiperSlide>
            <video autoplay loop muted>
                <source src="https://media.nelly.com/v/nlyscandinavia/091323-7072_video50/webm_product_high?$categorypage_XL$" type="video/mp4">
            </video>
        </SwiperSlide>
        <SwiperSlide>
            <img
            src="https:\/\/media.nelly.com\/i\/nlyscandinavia\/091323-7072_06?$categorypage_XL$"
            alt="blåklänning"
        />
        </SwiperSlide>
        
        </Swiper>
    </div>
    {/if}
   

    {/if}
</MediaQuery>

<MediaQuery query="(min-width: 800px)" let:matches>
    {#if matches}
    <div class="pic-desk">
        {#if colorName === 'Burgundy'}

        <div>
            <img
                src="https://media.nelly.com/i/nlyscandinavia/091323-1126_04?$categorypage_XL$"
                alt="asdasd"
            />
        
        
            <img
                src="https://media.nelly.com/i/nlyscandinavia/091323-1126_05?$categorypage_XL$"
                alt="asdasd"
            />
            
        </div>
        
        <div>
            <video autoplay loop muted>
                <source src="https://media.nelly.com/v/nlyscandinavia/091323-1126_video50/webm_product_high?$categorypage_XL$" type="video/mp4">
            </video>
            <img
                src="https:\/\/media.nelly.com\/i\/nlyscandinavia\/091323-1126_06?$categorypage_XL$"
                alt="asdasd"
            />
        </div>
        {:else if colorName === 'Ljusrosa'}
        <div>
            <img
                src="https://media.nelly.com/i/nlyscandinavia/091323-0300_04?$categorypage_XL$"
                alt="asdasd"
            />
        
        
            <img
                src="https://media.nelly.com/i/nlyscandinavia/091323-0300_05?$categorypage_XL$"
                alt="asdasd"
            />
            
        </div>
        
        <div>
            <video autoplay loop muted>
                <source src="https://media.nelly.com/v/nlyscandinavia/091323-0300_video50/webm_product_high?$categorypage_XL$" type="video/mp4">
            </video>
            <img
                src="https:\/\/media.nelly.com\/i\/nlyscandinavia\/091323-0300_06?$categorypage_XL$"
                alt="asdasd"
            />
        </div>
        {:else if colorName === 'Ljusblå'}
        <div>
            <img
                src="https://media.nelly.com/i/nlyscandinavia/091323-7072_04?$categorypage_XL$"
                alt="asdasd"
            />
        
        
            <img
                src="https://media.nelly.com/i/nlyscandinavia/091323-7072_05?$categorypage_XL$"
                alt="asdasd"
            />
            
        </div>
        
        <div>
            <video autoplay loop muted>
                <source src="https://media.nelly.com/v/nlyscandinavia/091323-7072_video50/webm_product_high?$categorypage_XL$" type="video/mp4">
            </video>
            <img
                src="https:\/\/media.nelly.com\/i\/nlyscandinavia\/091323-7072_06?$categorypage_XL$"
                alt="asdasd"
            />
        </div>
        {/if}

        
        <Prices></Prices>
    </div>
    {/if}
</MediaQuery>



<style>


    .text{
        height: 0;
        margin: 0;
        font-size: 10px;
        margin-left: 10px;
        font-weight: 500;
    }

.pic-desk{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }

.carousel{
    margin-top: 5px;
    width: 100%;
}

    @media screen and (max-width: 800px) {
        .carousel{
    margin-top: 20px;
    width: 100%;
}
}
@media screen and (min-width: 800px) {
  div {
    width: 30%;
    margin: 4px 4px;
  }
}


    @media screen and (max-width: 800px) {
        img {
        width: 100%;
        margin-bottom: 6px;
        padding: 0 13px 0 13px;
    }
}

@media screen and (min-width: 800px) {
    img {
        width: 100%;
        margin-bottom: 6px;
    }
}

@media screen and (max-width: 800px) {
    video{
        width: 100%;
        padding: 0 13px 0 13px;
    }
}

@media screen and (min-width: 800px) {
    video{
        width: 100%;
    }
}

    video{
        width: 100%;
    }
</style> 