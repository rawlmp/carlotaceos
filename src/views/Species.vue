<template>
  <v-container fluid fill-height justify-start class="letterFont">
    <v-layout sm9>
      <cards></cards>
    </v-layout>
  </v-container>
</template>

<script>
import cards from "../components/cards";

export default {
  components: {
    cards
  }
};
</script>

<style>
.letterFont {
  font-family: "Oswald", sans-serif;
}
</style>
