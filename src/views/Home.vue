<template>
  <div class="home">
<<<<<<< HEAD
    <HomeComponent/>
=======
    <img alt="Vue logo" src="../assets/logo.png">
    
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
>>>>>>> master
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
<<<<<<< HEAD
import HomeComponent from "@/components/HomeComponent.vue"; // @ is an alias to /src
=======
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Carousel from "@/components/Carousel.vue"; // @ is an alias to /src

>>>>>>> master

@Component({
  components: {
    HomeComponent
  }
})
export default class Home extends Vue {}
</script>

<<<<<<< HEAD



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
=======
>>>>>>> master
