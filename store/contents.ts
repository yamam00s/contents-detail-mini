
import { MutationTree, ActionTree, GetterTree, ActionContext } from "vuex";
import { Context as AppContext } from "@nuxt/types";
import { RootState, ContentsState, Contents, Status, Stock } from "~/types";

export const state = (): ContentsState => ({
  contents: null,
  status: null,
  stock: null
})

export const getters: GetterTree<ContentsState, RootState> = {
  contents: (state: ContentsState) => state.contents,
  status: (state: ContentsState) => state.status,
  stock: (state: ContentsState) => state.stock
}

export const mutations: MutationTree<ContentsState> = {
  setContents(state: ContentsState, contents: Contents): void {
    state.contents = contents
  },
  setStatus(state: ContentsState, status: Status): void {
    state.status = status
  },
  setStock(state: ContentsState, stock: Stock): void {
    state.stock = stock
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchContents({ commit }) {
    const resupoce = await this.$axios.$get("./contents-detail.json")
    commit("setContents", resupoce)
  },
  async fetchStatus({ commit }) {
    const resupoce = await this.$axios.$get("./contents-detail-status.json")
    commit("setStatus", resupoce)
  },
  async fetchStock({ commit }) {
    const resupoce = await this.$axios.$get("./contents-detail-stock.json")
    commit("setStock", resupoce)
  },
  async postFirstContents() {
    await this.$axios.$post("")
  },
  async postLotContents() {
    await this.$axios.$post("")
  },
  async postTermContents() {
    await this.$axios.$post("")
  }
}
