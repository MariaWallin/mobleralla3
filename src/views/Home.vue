<template>


  </div>
</template>

<template>
	<div class="container">
  <div class="row">
 	
    <div class="col">
    	<div class="col1">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique eros augue, vel dictum purus placerat ut. Pellentesque interdum eros ut interdum ultricies. Sed maximus, leo convallis efficitur tincidunt, quam est dignissim nisi, finibus varius velit risus at mi. Integer et est in diam facilisis semper sit amet ut lectus. Fusce quis lacus vitae ante lobortis ornare. Morbi maximus turpis lectus, finibus iaculis velit maximus in. Pellentesque tincidunt tortor erat, quis finibus elit porttitor a. Maecenas auctor sollicitudin magna pulvinar sagittis.</p>

		<p>Sed non tortor in nibh mattis imperdiet vitae posuere mauris. Aenean dignissim efficitur felis ut porta. Etiam fringilla nec ex ac sodales. Curabitur at hendrerit nibh. Nam dolor ipsum, vestibulum eget egestas et, hendrerit eget nisl. Duis nisl odio, venenatis in dolor ac, molestie vehicula orci. Aenean sollicitudin, nibh sed aliquam commodo, enim ipsum vestibulum arcu, nec laoreet massa justo ac dui.</p>
    </div>
	</div>
    <div class="col">
      <p>Vestibulum scelerisque tempus varius. Nam ornare tellus urna, at convallis leo aliquam a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed commodo semper dignissim. Nulla facilisi. Nunc at venenatis dui. Fusce sed erat a nibh venenatis ultrices id vitae elit. Vestibulum ac ultrices tortor, at viverra erat. Cras molestie lorem sed eros vulputate, eu elementum ante blandit. Integer nunc nulla, pellentesque ut mi vel, volutpat tempor leo.</p>

		<p>Mauris a ex eleifend lacus porttitor pretium. Duis convallis fringilla turpis. Nunc scelerisque, metus sed pharetra feugiat, leo nisi porttitor enim, eget vehicula tortor ex molestie odio. Morbi sodales felis ut ornare feugiat. Aliquam ligula nisl, blandit ut scelerisque vel, laoreet ac velit. Phasellus sit amet arcu ligula. Vestibulum et erat ac ante bibendum imperdiet in vel dolor.</p>
    </div>
  </div>
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