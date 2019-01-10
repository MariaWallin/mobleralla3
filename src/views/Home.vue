<template>
  <div class="home">

    <HomeComponent/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import HomeComponent from "@/components/HomeComponent.vue"; // @ is an alias to /src

import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Carousel from "@/components/Carousel.vue"; // @ is an alias to /src



@Component({
  components: {
    HomeComponent
  }
})
export default class Home extends Vue {}
</script>





<style>
	.navbar-nav{
		text-align: center;
    margin: auto;
	}
  .navbar-brand > img{
    max-height: 100px;
    margin: 40px;

  }
  .navbar-brand {

    float:left;
  }
	
</style>

