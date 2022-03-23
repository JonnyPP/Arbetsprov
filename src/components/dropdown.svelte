<script>
  import { onMount } from "svelte";
  import _ from "lodash";
  import { ProductData } from "../store";

  let data;
  ProductData.subscribe((value) => {
    data = value;
  });

  let mergedItems = [];
  const mergeListArray = (a, b) => {
    let arrayMerged = b;
    arrayMerged = [...a, ...b];
    const sortedMergedArray = _.orderBy(arrayMerged, ["Name"], ["asc"]);
    return sortedMergedArray;
  };

  const checkId = (checkId) => {
    let bool = false;
    const soldOut = data.SoldOutSizes;
    soldOut.forEach(({ Name, Id }) => {
      if (Id === checkId) bool = true;
    });
    return bool;
  };

  onMount(async () => {
    mergedItems = mergeListArray(data.Sizes, data.SoldOutSizes);
  });
  let chooseSize = "välj storlek";

  function handleClick(value) {
		chooseSize = value;
	}
</script>

<div class="container">
  <label for="touch"><span>
      {chooseSize}
    </span></label>
  <input type="checkbox" id="touch" />
  <ul class="slide">
    <li>
      <a href="#1">VÄLJ STORLEK</a>
    </li>
    {#each mergedItems as { Name, Id }}
      {#if checkId(Id)}
        <li>
          <a href="#1" class="out-of-stock">{Name}</a>
        </li>
      {:else}
        <li
          on:click={() => {
            handleClick(Name);
          }}
        >
          <a href="#1">{Name}</a>
        </li>
      {/if}
    {/each}
  </ul>
</div>

<style>
  .out-of-stock {
    cursor: context-menu;
    color: #aaaa;
  }

  li {
    border: 1px solid #ddd;
    overflow: hidden;
    text-align: left;
  }

  li a {
    text-decoration: none;
    color: #2d2f31;
  }

  @media screen and (max-width: 800px) {
    label {
      width: 100%;
      padding: 0 0px 0 10px;
    }
  }

  @media screen and (min-width: 800px) {
    label {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    .container {
      margin: 0;
      padding: 0;
    }
  }

  @media screen and (min-width: 800px) {
    .container {
      margin: 0;
      padding: 0;
      width: 36%;
    }
  }

  .container::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media screen and (max-width: 800px) {
    span {
      padding: 10px 10px;
      color: black;
      font-size: 3.5vw;
      font-variant: small-caps;
      cursor: pointer;
      display: block;
      border: 2px solid #ddd;
      text-align: left;
    }
  }
  @media screen and (min-width: 800px) {
    span {
      padding: 10px 10px;
      color: black;
      font-size: 1.5vw;
      font-variant: small-caps;
      cursor: pointer;
      display: block;
      border: 2px solid #ddd;
      text-align: left;
    }
  }

  span::after {
    float: right;
    right: 10%;
    content: "▼";
  }

  .slide {
    clear: both;
    width: 100%;
    height: 0px;
    text-align: center;
    transition: height 0.4s ease;
    position: absolute;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
  }
  .slide::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .slide li {
    padding: 15px;
    z-index: 10;
    background-color: white;
    cursor: pointer;
  }

  .slide li:hover {
    background-color: rgb(243, 241, 241);
  }

  #touch {
    position: absolute;
    opacity: 0;
    height: 0px;
    width: 100%;
  }

  #touch:checked + .slide {
    height: 300px;
    width: 100%;
    border: 1px solid #ddd;
  }

  @media screen and (min-width: 800px) {
    #touch:checked + .slide {
      height: 340px;
      width: 36%;
      position: absolute;
      top: 11%;
      z-index: 100;
    }
  }
</style>
