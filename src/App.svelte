<script>
  // Componente searchbar feito!
  import PropertyFlipper from "./lib/flipper.svelte" 
  import PropertyContent from './lib/propertyContent.svelte';
  import MapView from './lib/MapView.svelte';
  import Navbar from './lib/navbar.svelte'
  import PropertyCard from './lib/propertyCard.svelte'

  let data = {
    "title": "Título Placeholder",
    "desc": "LoremIpsum",
    "photos": [
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    "price": "2.000,00",
    "tags": [
      {img:"", value: "Em destaque", title: "Propriedade", desc: "Nova"},
      {img:"https://picsum.photos/id/1005/400/250", value: "Em destaque", title: "Propriedade", desc: "Nova"},
      {img:"https://picsum.photos/id/1005/400/250", value: "Em destaque", title: "Propriedade", desc: "Nova"},
    ],
    "loc" : "{\"coordinates\": [-40.8420757,-14.8562588]}"
  }

  let loc = data.loc

</script>


<main class="relative">
  <Navbar/>

  <!-- <div class="container space-y-2 h-screen w-full flex-row">
    <div style="position: absolute; height: 100%; width: 100%; z-index: 5">
      <MapView loc={data.loc} styles="height: 100%; width: 100%"/>
    </div>

    <div class="flex flex-col bg-white p-2 overflow-y-scroll h-full">
      <PropertyCard data={data}/>
      <PropertyCard data={data}/>
      <PropertyCard data={data}/>
      <PropertyCard data={data}/>
      <PropertyCard data={data}/>
    </div>

    
  </div>
 -->
  <PropertyFlipper data={data} hsize="98" full={true} descVisible={true}/>
  <!-- <PropertyContent data={data}/> -->

</main>


<footer class="p-4 text-sm">
  @copyright 2021
</footer>


<style lang="sass">
  
</style>