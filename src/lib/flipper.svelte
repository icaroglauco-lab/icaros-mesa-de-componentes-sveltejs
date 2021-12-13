<script type="text/javascript">
	import MapView from './MapView.svelte';
  export let data;
  export let styleinject;
  export let full= false;
  export let descVisible= false;
  let {photos, title, loc} = data;

  export let hsize = "99";
  let minimizedCss = "transform: scale(0.1); z-index:20; border: 50px solid rgba(0, 72, 208, 0.24)"

  let viewMap = true;
  let basicBlockCss = `display: flex; position: absolute; bottom: 0px; right: 0px; height:${hsize}vh; transition: 250ms; width:100%; transform-origin: right bottom;`;


  $: MapViewCss = `${basicBlockCss}
          ${viewMap? 
            minimizedCss
          : "z-index:1"}`

  $: GaleryCss = `${basicBlockCss}
          ${viewMap? 
            "z-index:1; "
          : minimizedCss} `


  $: GaleryClass = `overflow-hidden carousel w-full transition-all
          ${viewMap? 
            ""
          : ""} `
</script>

<div style={`height: ${hsize}vh;`}
    class="flex flex-wrap relative hover:cursor-pointer" 
    >


    <div class="absolute w-full sm:w-96 top-0 md:top-auto md:bottom-10 text-center align-middle py-5 pl-0 mx-auto sm:pl-20 z-30 text-xl font-hero" 
         style={`background-color: #001B2EF0;
                 color: #FFE9B3;`}>
      {title}
      {#if descVisible}
          <p>
            {data.desc}
          </p>
      {/if}
    </div>
              
    <!-- Mapa view -->
    <MapView loc={loc} styles={MapViewCss} onclick={() => viewMap = false}/>
    <!-- galeria de imagens -->
    <div style={GaleryCss} class={GaleryClass} >
        {#each photos as image, i}
          <div id={`img${i+1}`} class="w-full mx-auto carousel-item" >
              <img class='w-full object-cover' src={image} alt="" on:click={() => viewMap = !viewMap}>
          </div>
        {/each}
    </div>

    <!-- Controles -->
    <div fade class="absolute bottom-0 flex justify-center w-max py-4 space-x-2 items-end  transition-all z-10"
              style={`
                left: 50%; transform-origin: center;
                transform: ${viewMap? "scale(1) translateX(-50%)": "transform: scale(0)"};`}
    >
      {#each photos as image, i}
        <a href={`#img${i+1}`} class="btn btn-xs btn-circle">{i+1}</a> 
      {/each}
      
    </div>

    {#if full}
      <div id="thumbs" class="absolute z-40 right-0 h-full flex flex-col justify-end" 
           style="width: 10%; bottom: 12%; ">
        {#each photos as photo,i}
          <a href={`#img${i+1}`}><img src={photo} class="object-cover" style="box-sizing: border-box; border: 5px solid rgb(168, 185, 218)"></a>
        {/each}
      </div>
    {/if}
    

    <slot/>

</div>

<style lang="sass">
  #thumbs
    display: none
    @media (min-width: 700px)
        display: flex


</style>