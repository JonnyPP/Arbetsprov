<script>
    import { onMount } from "svelte";
    import {outfit} from "../store"
    
    function SetId(setOutfit) {
        outfit.set(setOutfit);
    }
    export let colorData;

    let colorsArray = colorData.ColorPickerItems;
    let regex = /_40/gm;
    let arrayImages = [];
    let mergedColors = [];
    let mergedIDs = []
    let chooseColor;
    
    const getIDs = (ids) => {
        let idsArr = [];
        ids.forEach( color => {
            idsArr.push(color.ShortSku.AsString);
        })
        return idsArr;
    }

    const getColorNames = (colors) => {
        let colorsArr = [];
        colors.forEach( color => {
            colorsArr.push(color.ShortSku.ColorName);
        })
        return colorsArr;
    }

  const mergeListArray = (a, b) => {
    let arrayMerged = b;
    arrayMerged = [...a, ...b];
    return arrayMerged;
  };  



  onMount(async () => {
    let colors = getColorNames(colorsArray);
    let ids = getIDs(colorsArray)
    mergedColors = mergeListArray([colorData.ColorName], colors);
    mergedIDs = mergeListArray([colorData.ShortSku], ids);
    chooseColor = mergedColors[0];
    getImages();

  }); 

    async function fetchImage(outfitId) {
        const response = await fetch(
            `https://media.nelly.com/s/nlyscandinavia/${outfitId}.json`
        );
        const obj = await response.json();
        arrayImages = [...arrayImages, { ...obj }];
    }

    const getImages = () => {
        mergedIDs.forEach((id) => {
            fetchImage(id);
        });
    };
    
    function handleClick(value) {
		chooseColor = value;
	}

</script>

<div class="color-container">
    <div class="pdp-color">
        <h5>
            Vald färg: <span>{chooseColor}</span>
        </h5>
    </div>
    <div class="img-container">
        {#each arrayImages as { items, name }, i}
            {#each items as { type, src }}
                {#if type === "img" && regex.test(src)}
                    <div>
                        <img
                            src="{src}?$categorypage_XL$"
                            alt="klänning"
                            on:click={() => {
                                handleClick(mergedColors[i]);
                                SetId(mergedIDs[i])
                            }}
                        />
                    </div>
                {/if}
            {/each}
        {/each}
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
