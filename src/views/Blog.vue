<template>
  <v-container v-show="!isBlogPost">
    <v-row>
      <v-col class="text-h2 pt-6 pb-6"> Blog </v-col>
    </v-row>
    <v-row :class="mdAndDown ? 'flex-column justify-center align-center' : ''">
      <v-col
        :cols="mdAndUp ? 3 : 7"
        v-for="(card, index) in Cards.Cards"
        :key="index"
      >
        <v-card
          link
          @click="GetPost(index)"
          :title="card.Title"
          :text="card.Summary"
        >
          <v-img :src="card.Image"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <BlogPost
    v-model="isBlogPost"
    :index="SelectedPost"
    v-if="isBlogPost"
  ></BlogPost>
</template>

<script lang="ts" setup>
import * as Cards from "@/data/Cards.json";
import BlogPost from "./BlogPost.vue";
import { useDisplay } from "vuetify";
import { Ref, ref } from "vue";

const isBlogPost: Ref<Boolean> = ref(false);
const SelectedPost: Ref<number | null> = ref(null);

function GetPost(PostIndex: number) {
  isBlogPost.value = true;
  SelectedPost.value = PostIndex;
}

const { mdAndUp, mdAndDown } = useDisplay();
</script>
