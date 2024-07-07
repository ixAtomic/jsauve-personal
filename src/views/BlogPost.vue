<template>
  <v-container>
    <v-row class="flex-column justify-center align-center">
      <v-col class="pb-6">
        <v-row class="justify-space-between">
          <v-col class="align-self-start" cols="2">
            <v-btn icon="mdi-arrow-left" @click="model = false"></v-btn>
          </v-col>
          <v-col cols="8">
            <v-img max-height="450" :src="Card?.Image"></v-img>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
      </v-col>
      <v-col class="text-h2 pb-6 d-flex justify-center">{{
        Card?.Title
      }}</v-col>
      <v-col
        cols="6"
        v-html="HTML"
        class="text-body-1 d-flex flex-column align-center justify-center"
      >
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
interface ICard {
  Image: string;
  Title: string;
  Summary: string;
  Text: string;
}

import * as Cards from "@/data/Cards.json";
import { ref, Ref, watch } from "vue";
const model = defineModel();

const props = defineProps<{
  index: number | null;
}>();

const Card: Ref<ICard | null> = ref(null);
const HTML: Ref<string> = ref("");

const GetHTML = async (url: string) => fetch(url);

watch(
  () => props.index,
  async (newIndex: number | null) => {
    if (newIndex !== null) {
      Card.value = Cards.Cards[newIndex];
      console.log(Card.value.Text);
      const response = await GetHTML(Card.value.Text);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.text();
      console.log(data);
      HTML.value = data;
    }
  },
  { immediate: true }
);
</script>
