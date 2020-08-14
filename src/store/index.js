import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    stickyHeader: false,
    viewport: 0
  },

  mutations: {
    stickyHeaderUpdate (state, { value }) {
      state.stickyHeader = value;
    },

    viewportUpdate (state, { width }) {
      state.viewport = width;
    }
  },

  actions: {
    initViewportWatch ({ commit }) {
      const handleResize = () => {
        commit('viewportUpdate', { width: window.innerWidth || document.documentElement.clientWidth });
      };

      window.addEventListener('resize', handleResize);

      handleResize();
    }
  }
});

export default store;
