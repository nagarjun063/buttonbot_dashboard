<template>
  <v-footer
    dark
    padless
    app
    inset
    
  >
    <v-card
      class="flex"
      flat
      tile
      color="orange"
      :elevation="10"
    >

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Freshdigital</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>