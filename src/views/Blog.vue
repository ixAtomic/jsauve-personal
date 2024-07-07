<template>
  <v-container>
    <v-row>
      <v-col cols="3" v-for="(card, index) in Cards.Cards" :key="index">
        <v-card
          :image="card.Image"
          :title="card.Title"
          :text="card.Summary"
          :key="key"
        >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import * as Cards from "../../public/Cards.json";
</script>
