<script>

    let data = [
		{ name: 'Maxiklänning från NLY Eve' },
		{  name: 'Där har vi den. Drömklänningen' },
		{  name: 'Material av chiffong'},{ id: '4', name: 'Plisserad överdel som är omlottlagd framtill' },
        { name: 'Kort ärm' },
        { name: 'V-ringning framtill' },
        { name: 'Försluts med dragkedja och hyska och hake baktill' },
        { name: 'Helfodrad' },
        {name: 'Modellen är 180 cm lång och bär storlek EU 34' },
	];

    
</script>



    <div class="pdp-info">
    <h4>Beskrivning</h4>
    
        {#each data as {name }, i}
            <li>
                {name}
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