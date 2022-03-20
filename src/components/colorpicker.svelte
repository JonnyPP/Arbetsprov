<script>
	import { color } from '../store';
    function increment(setColor) {
		color.set(setColor);
	}

    let colorName ;

color.subscribe(value => {
    colorName = value;
});


</script>




<div class="color-container">
    <div class="pdp-color">
        <h5>
            Vald färg: <span>{colorName}</span>
        </h5>
    </div>
    <div class="img-container">
        <img
        class="pic"
        src="https://media.nelly.com/i/nlyscandinavia/091323-0300_40"
        alt="ljusrosa" 
        on:click={() => {
            increment('Ljusrosa')
        }}
    />

        <img
            src="https://media.nelly.com/i/nlyscandinavia/091323-1126_40"
            alt="burgundy"
            on:click={() => {
                increment('Burgundy')
            }}
        />
        <img
        src="https://media.nelly.com/i/nlyscandinavia/091323-7072_40"
        alt="ljusblå"
        on:click={() => {
            increment('Ljusblå')
        }}
    />

    </div>
</div>


<style>

    @media screen and (max-width: 800px) {
        .color-container {
            width: 33%;
            margin: 0;
            margin-bottom: 10px;
            overflow: hidden;
            padding: 0;
            margin-left: 15px;
        }
    }
    @media screen and (min-width: 800px) {
        .color-container {
            width: 17%;
            margin: 0;
            margin-bottom: 10px;
            overflow: hidden;
            padding: 0;
        }
    }
    .pdp-color {
        overflow: hidden;
    }

    @media screen and (max-width: 800px) {
        .img-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    }
    @media screen and (min-width: 800px) {
        .img-container {
        display: flex;
        align-items: center;
    }
    }


    @media screen and (max-width: 800px) {
        img {
            width: 10vw;
            height: 10vw;
            border-radius: 50%;
            padding: 0.6vw;
        }
    }
    @media screen and (min-width: 800px) {
        img {
            width: 5vw;
            height: 5vw;
            border-radius: 50%;
            padding: 0.3vw;
        }
    }

    img:hover {
        border: solid 2px black;
    }
    span {
        font-weight: 700;
    }

    @media screen and (max-width: 800px) {
        h5 {
            font-weight: 400;
            font-size: 2.7vw;
            overflow: hidden;
        }
    }
    @media screen and (min-width: 800px) {
        h5 {
            font-weight: 400;
            font-size: 1.4vw;
            overflow: hidden;
        }
    }
</style>
