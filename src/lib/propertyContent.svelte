<script type="text/javascript">
  import MapView from './MapView.svelte';
	export let data;
	let descImgIndex = 0;
	let descTitleOpct = true;
</script> 

<div id="content" class="w-full space-x-5 p-5 flex">
	<div class="container">
	  <img id="title-image" src={data.photos[descImgIndex]} class="object-cover w-full h-96">
	  <div class="space-y-24">
	    <h1 id="title-banner" class="text-3xl py-5 w-full pl-5 bg-dark-title-bg text-gray-100 font-header transition duration-300 delay-150" style={`opacity: ${descTitleOpct?1:0};`}>
	      {data.title} 
	      <i class="text-xl ml-5">
	        {data.tags.map(d => d.value).join(', ')}
	      </i>
	    </h1>
	    <div id="desc" class="mb-5 text-body p-2">
	      {data.desc}
	    </div>
	    <div class="w-full stats rounded-none justify-evenly space-x-2 flex flex-wrap">
	      {#each data.tags as tag}
	          <div class="image-full bg-gray-800 mb-5 relative overflow-hidden" style="width:300px; height:140px">
	          	<img src={tag.img} class="opacity-25 object-cover absolute">
	              <div class="stat p-6 bg-transparent text-white place-items-center place-content-center">
	                <div class="stat-title">{tag.title}</div> 
	                <div class="stat-value">{tag.value}</div> 
	                <div class="stat-desc">{tag.desc}</div>
	              </div>
	          </div>
	      {/each}
	    </div>

	    <div>
	      <i class="text-sm">
	        Localização
	      </i>
	      <MapView loc={data.loc} id="mapa_desc"/>
	    </div>
	  </div>
	  
	</div>
	<div id="imagens" class="flex flex-col">
	  {#each data.photos as photo, i}
	    <img src={photo} on:click={()=> descImgIndex = i} class="object-cover w-full hover:cursor-pointer hover:scale-105"/>
	  {/each}
	</div>
</div>

<style lang="sass">
  #title-banner
    background-color

  #content

  #imagens
    width: 250px
    img 
      height: 200px

  @media (max-width: 500px)
    #imagens
      display: none
  @media (max-width: 830px)
    #title-image
      display: none
</style>