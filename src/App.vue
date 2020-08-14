<template>
  <div>
    <!-- Header -->
    <TheHeader />

    <!-- Content -->
    <div>
      <!-- <HighlightPlaces /> -->

      <ColorPalette/>
    </div>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import TheHeader from './components/TheHeader.vue';
// import HighlightPlaces from './components/HighlightPlaces.vue';
import ColorPalette from './components/ColorPalette.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',

  components: {
    TheHeader,
    // HighlightPlaces,
    ColorPalette,
    TheFooter
  },

  computed: {
    ...mapState(['stickyHeader'])
  },

  methods: {
    ...mapMutations(['stickyHeaderUpdate'])
  }
};
</script>
