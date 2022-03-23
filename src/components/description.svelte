<script>
import { ProductData} from "../store";
let description;
let descriptionArray;

ProductData.subscribe((value) => {
        description = value;
        description = JSON.stringify(description.Description)
        description = description.replace(/['"]+/g, '');
    });
descriptionArray = description.trim().split("\u003cbr /\u003e");


</script>



    <div class="pdp-info">
    <h4>Beskrivning</h4>
    
        {#each descriptionArray as info }
            <li>
                {info}
            </li>
        {/each}

</div>



<style>


    @media screen and (max-width: 800px) {
        .pdp-info{
        width: 100%;
        margin: 0 10px 10px 16px;
    }
}
    @media screen and (min-width: 800px) {
        .pdp-info{
        width: 100%;
        margin: 0;
    }
}


    @media screen and (max-width: 800px) {
        h4{
    width: 100%;
    text-align: left;
    margin-top: 3vw;
    margin-bottom: 3vw;
    font-size: calc(7px + 2vw);
    text-transform: uppercase;
    font-weight: 500;
    overflow: hidden;
    }
}
    @media screen and (min-width: 800px) {
        h4{
    width: 100%;
    text-align: left;
    margin-top: 0;
    margin-bottom: 1vw;
    font-size: calc(6px + 1vw);
    text-transform: uppercase;
    font-weight: 500;
    overflow: hidden;
    }
}
@media screen and (max-width: 800px) {
    li{
        font-size: 2.5vw;
        line-height: 2;
    }
}
    @media screen and (min-width: 800px) {
        li{
        font-size: 1.2vw;
        line-height: 1.7;
        margin-left: 1vw;
    }
}
</style>