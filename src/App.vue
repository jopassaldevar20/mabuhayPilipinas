<template>
  <div>
    <!-- Header -->
    <TheHeader />

    <!-- Content -->
    <div>
      <HeroLanding />

      <ColorPalette/>
    </div>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import TheHeader from './components/TheHeader.vue';
import HeroLanding from './views/HeroLanding.vue';
import ColorPalette from './views/ColorPalette.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',

  components: {
    TheHeader,
    HeroLanding,
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
