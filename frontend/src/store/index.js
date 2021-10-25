import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headerColor : "",
    headerBase:"",
    isDrumKitDisplayed: false
  },
  mutations: {

    changeHeaderBase(state,payload){
      state.headerBase = payload
    } ,
    changeHeaderColor(state,payload){
      state.headerColor = payload
    },
    toggleDrumKitDisplayed(state,payload){
      state.isDrumKitDisplayed = payload
    }
  },
  actions: {},
  modules: {},
});
