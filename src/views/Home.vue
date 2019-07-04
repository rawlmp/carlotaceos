<template>
  <v-container fluid xs12>
    <v-layout xs12>
      <v-flex width="100%">
        <h1>MEDITERRANEAN MARINE MAMMALS</h1>

        <v-flex class="white ma-0 all">
          <!-- <p>Cetaceans of the Mediterranean Sea</p> -->
          <p
            class="all"
          >The Mediterranean is a semi-enclosed sea with diverse oceanographic dynamics and water circulation patterns which result in surges of biological productivity in different places and at different times. Its rich and unique biodiversity has led to its recognition as one of the most important biodiversity hotspots in the world, including marine mammals and sea turtles that live in and migrate through the sea.</p>
          <p>ajkbfsuhdbgsbdfg</p>
        </v-flex>
      </v-flex>
    </v-layout>
    <v-layout>
      <carrousel></carrousel>
    </v-layout>
    <h1>this is a home page</h1>
  </v-container>
</template>

<script>
import carrousel from "../components/carrousel";

export default {
  components: {
    carrousel
  }
};
</script>

<style>
h1 {
  color: white;
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 34px;
}
p {
  width: 100%;
}

.all {
  width: 100%;
}
</style>

