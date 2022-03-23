<script>
    import { outfit } from "../store";
    import MediaQuery from "svelte-media-query";
    import Prices from "./prices.svelte";
    import { Swiper, SwiperSlide } from "../../node_modules/swiper/svelte";
    import { ProductData } from "../store";

    let productData;
    ProductData.subscribe((value) => {
        productData = value;
    });
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
        Autoplay,
    } from "../../node_modules/swiper";

    let outfitName;

    let regex = /_40/gm;

    outfit.subscribe((value) => {
        outfitName = value;
    });
    async function fetchImage(outfitName) {
        const response = await fetch(
            `https://media.nelly.com/s/nlyscandinavia/${outfitName}.json`
        );
        return await response.json();
    }
</script>

<MediaQuery query="(max-width: 800px)" let:matches>
    {#if matches}
        <p class="text">
            <u>{productData.ClassName}</u> <u>&#xbb;</u>
            <u>{productData.GroupName}</u> <u>&#xbb;</u>
            <u>{productData.StyleName}</u>
        </p>

        {#await fetchImage(outfitName)}
            <p>...waiting</p>
        {:then data}
            <div class="carousel">
                <Swiper
                    modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        Autoplay,
                    ]}
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
                    {#each data.items as { type, src }}
                        {#if type === "img" && !regex.test(src)}
                            <SwiperSlide>
                                <img
                                    src="{src}?$categorypage_XL$"
                                    alt="klänning"
                                />
                            </SwiperSlide>
                        {:else if type === "video"}
                            <SwiperSlide>
                                <video autoplay loop muted>
                                    <source
                                        src="{src}/webm_product_high?$categorypage_XL$"
                                        type="video/mp4"
                                    />
                                </video>
                            </SwiperSlide>
                        {/if}
                    {/each}
                </Swiper>
            </div>
        {:catch error}
            <p>An error occurred!</p>
        {/await}
    {/if}
</MediaQuery>

<MediaQuery query="(min-width: 800px)" let:matches>
    {#if matches}
        <div class="pic-desk">
            {#await fetchImage(outfitName)}
                <p>...waiting</p>
            {:then data}
                {#each data.items as { type, src }}
                    {#if type === "img" && !regex.test(src)}
                        <div>
                            <img src="{src}?$categorypage_XL$" alt="klänning" />
                        </div>
                    {:else if type === "video"}
                        <div>
                            <video autoplay loop muted>
                                <source
                                    src="{src}/webm_product_high?$categorypage_XL$"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    {/if}
                {/each}
            {:catch error}
                <p>An error occurred!</p>
            {/await}
            <Prices />
        </div>
    {/if}
</MediaQuery>

<style>
    .text {
        height: 0;
        margin: 0;
        font-size: 10px;
        margin-left: 10px;
        font-weight: 500;
    }

    .pic-desk {
        display: flex;
        width: 66%;
        flex-wrap: wrap;
        flex-direction: row;
    }

    .pic-desk > div {
        display: flex;
        flex-basis: calc(50% - 40px);
        justify-content: center;
        flex-direction: column;
    }

    div :nth-child(1) {
        order: 1;
    }
    div :nth-child(2) {
        order: 2;
    }
    div :nth-child(3) {
        order: 3;
    }
    div :nth-child(4) {
        order: 1;
    }

    .carousel {
        margin-top: 5px;
        width: 100%;
    }

    @media screen and (max-width: 800px) {
        .carousel {
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
        }
    }

    @media screen and (max-width: 800px) {
        video {
            width: 100%;
            padding: 0 13px 0 13px;
        }
    }

    @media screen and (min-width: 800px) {
        video {
            width: 100%;
        }
    }

    video {
        width: 100%;
    }
</style>
