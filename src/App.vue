<template>
  <v-app app fixed>
    <!-- Menú hamburger -->

    <v-navigation-drawer app temporary v-model="sideNav">
      <!--temporary: cuando se abre el menú se ve oscuro el fondo-->
      <v-list>
        <v-list-tile v-for="(link, index) in links" :key="link.icon" :to="link.route">
          <!--Iconos-->
          <v-icon v-if="index != 1">{{link.icon}}</v-icon>
          <v-flex xs1 v-else>
            <v-avatar size="24">
              <!-- Icono aleta caudal -->
              <v-img v-bind:src="link.icon2"></v-img>
            </v-avatar>
          </v-flex>

          <v-list-tile-content class="pl-2">{{link.text}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app flat fixed dark>
      <!-- Menú completo -->
      <v-toolbar-side-icon @click.native.stop="sideNav =! sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>CETMED</v-toolbar-title>
      <v-flex xs1>
        <v-img :src="require('@/assets/killer-whale.png')" contain height="50px" width="100px"></v-img>
      </v-flex>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="(link, i) in links" :key="i" :to="link.route">
          <!--icono aleta caudal-->

          <!--Iconos-->
          <v-icon v-if="i != 1">{{link.icon}}</v-icon>
          <v-flex class="aleta" xs1 v-else>
            <v-avatar size="24">
              <!-- Icono aleta caudal -->
              <v-img mr-3 v-bind:src="link.icon"></v-img>
            </v-avatar>
          </v-flex>
          <v-flex>{{link.text}}</v-flex>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- Body : -->
    <v-content class="parallax letterFont">
      <router-view></router-view>

      <footer>
        <p>Icon made by [author link] from www.flaticon.com</p>
      </footer>
    </v-content>
  </v-app>
</template> 




<script>
export default {
  data() {
    return {
      sideNav: false,
      links: [
        { icon: "home", text: "Home", route: "/Home" },
        {
          icon: require("./assets/whale-fin-icon.svg"),
          icon2: require("./assets/whale-fin-icon.png"),
          text: "Species",
          route: "/Species"
        },
        { icon: "alarm", text: "About", route: "/About" },
        {
          icon: "calendar_view_day",
          text: "Classification",
          route: "/classification"
        },
        { icon: "question_answer", text: "Chat", route: "/" },
        { icon: "person", text: "Login", route: "/" }
      ]
    };
  }
};
</script>

<style>
.parallax {
  /* The image used */
  background-image: url("./assets/background-image.jpg");
  background-color: rgb(158, 222, 233);

  /* Set a specific height */
  /* height: 500px; */

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
}

.letterFont {
  font-family: "Oswald", sans-serif;
}

.aleta {
  padding-right: 25px;
}
</style>
