<template>
  <div id="app">
            <a class="navbar-brand" href="/Home.vue">
          <img src="./assets/logomobleralla.png">
            </a>
    <div id="nav">



          <nav class="navbar navbar-expand-sm">
  <!-- Brand -->



              <!-- Links -->
              <ul class="navbar-nav">
                <!-- Dropdown -->

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                  <router-link to="/Vardagsrum.vue">Vardagsrum</router-link>
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Soffor</a>
                    <a class="dropdown-item" href="#">Fåtöljer</a>
                    <a class="dropdown-item" href="#">Bord</a>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                  <router-link to="/Kontor.vue">Kontor</router-link>
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Skrivbord</a>
                    <a class="dropdown-item" href="#">Kontorsstolar</a>
                    <a class="dropdown-item" href="#">Bokhyllor</a>
                  </div>
              </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                  <router-link to="/Sovrum.vue">Sovrum</router-link>
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Sängar</a>
                    <a class="dropdown-item" href="#">Nattduksbord</a>
                    <a class="dropdown-item" href="#">Garderober</a>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                  <router-link to="/Kok.vue">Köksinredning</router-link>
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Bänkskivor</a>
                    <a class="dropdown-item" href="#">Köksbänkar</a>
                    <a class="dropdown-item" href="#">Kökshyllor</a>
                    <a class="dropdown-item" href="#">Lådhurstar</a>
                    <a class="dropdown-item" href="#">Skåpluckor</a>
                  </div>
                </li>
              </ul>
            </nav>
    </div>
    <img class="banner" alt="headerimg" src="./assets/_interior.jpg">
    <router-view/>
  </div>
</template>





<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
