<script>
    import Styling from "./styling.svelte";
    import MediaQuery from "./mediaquery.svelte";
    import { ProductData } from "../store";

    let data;
    ProductData.subscribe((value) => {
        data = value;
    });
</script>

<MediaQuery query="(min-width: 800px)" let:matches>
    {#if matches}
        <div class="container">
            <div class="titles">
                <h1 class="title">
                    {data.BrandName}
                </h1>
                <h2>
                    {data.Name}
                </h2>
            </div>
            <div class="prices">
                <h1 class="price">
                    {data.Discount}
                    <span>{data.OrdinaryPrice}</span>
                </h1>
                <h2 class="sale-price">{data.Price}</h2>
            </div>
        </div>
        <Styling />
    {/if}
</MediaQuery>

<MediaQuery query="(max-width: 800px)" let:matches>
    {#if matches}
        <div class="container">
            <div class="titles">
                <h1 class="title">
                    {data.BrandName}
                </h1>
                <h2>
                    {data.Name}
                </h2>
            </div>
            <div class="prices">
                <h1 class="price">
                    {data.Discount}
                    <span>{data.OrdinaryPrice}</span>
                </h1>
                <h2 class="sale-price">{data.Price}</h2>
            </div>
        </div>
        <Styling />
    {/if}
</MediaQuery>

<style>
    @media screen and (max-width: 800px) {
        .container {
            display: flex;
            justify-content: space-between;
            max-width: 100% !important;
            margin: 1vw 0vw 2vw 0;
        }
    }
    @media screen and (min-width: 800px) {
        .container {
            display: flex;
            justify-content: space-between;
            max-width: 35% !important;
            padding: 0;
            margin-top: 7px;
            left: 63%;
            position: absolute;
        }
    }

    @media screen and (max-width: 800px) {
        span {
            color: black;
            text-decoration: line-through;
            text-decoration-color: black;
            font-size: 2.2vw;
        }
    }

    @media screen and (min-width: 800px) {
        span {
            color: black;
            text-decoration: line-through;
            text-decoration-color: black;
            font-size: 1vw;
        }
    }

    @media screen and (max-width: 800px) {
        .title {
            width: 100%;
            font-size: 4.8vw;
            margin: 0;
            line-height: 1.2;
            font-weight: 400;
            overflow: hidden;
            color: black;
        }
    }
    @media screen and (min-width: 800px) {
        .title {
            width: 100%;
            font-size: 1vw;
            margin: 0;
            line-height: 1.2;
            font-weight: 400;
            overflow: hidden;
            color: black;
        }
    }

    @media screen and (max-width: 800px) {
        h2 {
            font-size: 2.7vw;
            font-weight: 500;
            margin: 0;
            overflow: hidden;
        }
    }
    @media screen and (min-width: 800px) {
        h2 {
            font-size: 1.4vw;
            font-weight: 500;
            margin: 0;
            overflow: hidden;
        }
    }

    h1 {
        margin: 0;
        color: red;
    }
    @media screen and (max-width: 800px) {
        .price {
            font-size: 2.6vw;
            overflow: hidden;
        }
    }
    @media screen and (min-width: 800px) {
        .price {
            font-size: 1.2vw;
            overflow: hidden;
        }
    }
    @media screen and (max-width: 800px) {
        .sale-price {
            font-size: 4.8vw;
            overflow: hidden;
            color: red;
        }
    }
    @media screen and (min-width: 800px) {
        .sale-price {
            font-size: 1.4vw;
            overflow: hidden;
            color: red;
        }
    }
    .prices {
        text-align: right;
    }
</style>
