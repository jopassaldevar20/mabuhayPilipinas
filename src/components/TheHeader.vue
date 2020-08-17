<template>
  <div :class="[
    'tw-w-full tw-top-0 tw-left-0 tw-z-header',
    stickyHeader ? 'tw-fixed tw-transform tw-bg-primary-green' : 'tw-absolute',
    showSub ? 'tw-transition-transform tw-duration-200 tw-ease-linear tw-translate-y-0' : 'tw--translate-y-100%'
  ]">
    <div :class="[
      'max-width-header tw-py-20 tw-flex tw-items-center tw-justify-between',
      stickyHeader ? 'tw-text-primary-white' : 'tw-text-primary-green'
    ]">
      <a href="./" class=" tw-flex-shrink-0">
        <img
          v-if="stickyHeader"
          :class="isMobileLayout ? 'tw-w-150' : 'tw-w-200'"
          src="@/assets/images/logo-white.svg"
        />

        <img v-else :class="isMobileLayout ? 'tw-w-150' : 'tw-w-200'" src="@/assets/images/logo-green.svg" />
      </a>

      <i
        v-if="isMobileLayout"
        class="material-icons-outlined tw-text-primary-white tw-text-28 tw-cursor-pointer hover:tw-text-primary-green"
        @click="showSideNav = true"
      >menu</i>

      <div v-else class="tw-text-20 tw-text-primary-white tw-font-medium tw-flex">
        <a v-for="nav in navs" :key="nav.id" href="./" class="tw-ml-30 hover:tw-text-primary-green">
          <p>{{ nav.text }}</p>
        </a>
      </div>
    </div>

    <TheSidenav v-if="showSideNav" :navs="navs" @close="showSideNav = false" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TheSidenav from './TheSidenav';

export default {
  name: 'TheHeader',

  components: {
    TheSidenav
  },

  data () {
    return {
      navs: [
        { id: 1, text: 'Highlight places' },
        { id: 2, text: 'Color palette' }
      ],
      showSub: false,
      showSideNav: false
    };
  },

  computed: {
    ...mapState(['stickyHeader', 'viewport']),

    isMobileLayout () {
      return this.viewport <= 600;
    }
  },

  watch: {
    stickyHeader (newValue) {
      if (newValue) {
        setTimeout(() => { this.showSub = true; }, 100);
      } else {
        this.showSub = false;
      }
    }
  }
};
</script>
