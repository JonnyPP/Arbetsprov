<script>
    import MediaQuery from "./mediaquery.svelte"
    </script>
    
    <MediaQuery query="(min-width: 800px)" let:matches>
        {#if matches}
        <div class="container">
            <div>
                <button class="btn" > Lägg till </button>
                <button class="btn-heart" > <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg></button>
            </div>
        </div>
        
        {/if}
    </MediaQuery>
    <MediaQuery query="(max-width: 800px)" let:matches>
        {#if matches}
        <div class="container">
            <button class="btn" > Lägg till </button>
        </div>
        {/if}
    </MediaQuery>
    
    <style>

        .btn-heart{
            width: 19%;
            background-color:white;
            padding: 12px 10px;
            border: 1px solid #ddd !important;
            margin-right: 2%;
            font-size: 1.2vw;
            opacity: 0.6;
            border-style: none;
            z-index: -1;
        }
        @media screen and (max-width: 800px) {
            .btn {
            background-color: #ff9393;
            color: #fff;
            padding: 12px 10px;
            border-style: none;
            border-color: #ff9393;
            width: 100%;
            margin-right: 5%;
            font-size: 3.5vw;
            opacity: 0.6;
    
        }
    }
        @media screen and (min-width: 800px) {
            .btn {
            background-color: #ff9393;
            color: #fff;
            padding: 12px 10px;
            border-style: none;
            border-color: #ff9393;
            width: 38%;
            margin-right: 2%;
            font-size: 1.5vw;
            opacity: 0.6;
            z-index: -1;
        }
    }
    
    
    
        .btn:hover{
            opacity: 1.3;
            color: white;
        }
    
        @media screen and (max-width: 800px) {
      .container{
      margin: 0;
      margin-bottom: 10px;
    }
    }
    
    @media screen and (min-width: 800px) {
      .container{
      margin: 0;
      padding: 0;
      margin-bottom: 10px;
      width: 60%;
      display: flex;
        flex-direction: column;
    }
    }
    </style>
    