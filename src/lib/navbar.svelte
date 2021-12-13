<nav class="absolute p-2 z-50 w-full flex flex-wrap justify-between sticky top-0 -mb-16"
       style="background-color: rgba(6, 33, 54, 0.25);
              height: 3.5rem;
              padding-top: 0px;"
    >
    <div class="right" style="margin-left: 10vh">
      <img class="h-20 logo object-cover rounded-full" src="logo.png" style="
        clip-path: polygon(22.50% 35.00%, 50% 18.75%, 76.25% 35%, 76.25% 73.75%, 22.5% 73.75%);
        margin-top: -8px;
        transform: scale(0.8);"/>
    </div>
    <div class="left text-white text-sm font-body">
      <ul class="flex">
        <li class="m-5">
          <a href="/">Início</a>
        </li>
        <li class="m-5">
          <a href="/loteamentos">Loteamentos rurais</a>
        </li>

        <li class="m-5">
          <a href="/urbanos">Propriedades Urbanas</a>
        </li>


        <li class="m-5">
        </li>

        <li class="m-5">
        </li>

        <li class="cursor-pointer m-5 opacity-60 hover:opacity-100 transition-all">
          <img src="whatsapp.svg" style="height: 20px">
        </li>
        <li class="cursor-pointer m-5 opacity-60 hover:opacity-100 transition-all">
          <img src="instagram-icon.svg" style="height: 20px">
        </li>
        <li class="cursor-pointer m-5 opacity-60 hover:opacity-100 transition-all">
          <img src="facebook.svg" style="height: 20px">
        </li>

      </ul>
    </div>
  </nav>

<style lang="sass">
  nav .left a::after 
    content: ''
    display: block
    width: 0
    height: 2px
    background: #ffd67659
    transition: width .3s

  nav .left a:hover::after
    width: 100%
</style>