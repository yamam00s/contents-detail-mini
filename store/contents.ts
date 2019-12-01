
import { MutationTree, ActionTree, GetterTree, ActionContext } from "vuex";
import { Context as AppContext } from "@nuxt/types";
import { RootState, ContentsState, Contents } from "~/types";

export const state = (): ContentsState => ({
  contents: null
})

export const getters: GetterTree<ContentsState, RootState> = {
  contents: (state: ContentsState) => state.contents
}

export const mutations: MutationTree<ContentsState> = {
  setContents(state: ContentsState, contents: Contents): void {
    state.contents = contents
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchContents({ commit }) {
    const resupoce = await this.$axios.$get("./contents-detail.json")

    commit("setContents", resupoce)
  }
}
