<template>
  <div class="contents">
    ContentsFirst
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
export default class ContentsFirst extends Vue {
  @Prop() contents!: Contents
}
</script>

<style scoped></style>
