<template>
  <div class="contents">
    ContentsTerm
    <button
      type="button"
      @click="$emit('dispatch-contents')"
    >
      時限発行する
    </button>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"
import { Contents } from "~/types";

@Component({})
export default class ContentsTerm extends Vue {
  @Prop() contents!: Contents
}
</script>

<style scoped></style>
