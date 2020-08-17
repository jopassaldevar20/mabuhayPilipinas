<template>
  <div ref="hero-landing" :class="['tw-relative', isMobileLayout ? 'tw-h-350' : 'tw-h-600']">
    <div class="img-hero tw-w-full tw-h-full tw-bg-fixed tw-bg-bottom tw-bg-no-repeat tw-bg-cover"></div>

    <div class="img-hero-gradient tw-w-full tw-h-full tw-absolute tw-top-0 tw-left-0"></div>

    <ImageSource
      class="tw-mr-20 tw-mb-20 tw-absolute tw-bottom-0 tw-right-0"
      :link="'https://unsplash.com/@jules_bss?utm_source=unsplash&amp;' +
        'utm_medium=referral&amp;utm_content=creditCopyText'"
      :label="'Jules Bss'"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import ImageSource from '@/components/ImageSource';

export default {
  name: 'HeroLanding',

  components: {
    ImageSource
  },

  computed: {
    ...mapState(['stickyHeader', 'viewport']),

    isMobileLayout () {
      return this.viewport <= 600;
    }
  },

  methods: {
    ...mapMutations(['stickyHeaderUpdate'])
  },

  mounted () {
    const observer = new window.IntersectionObserver((entries) => {
      if (entries.length) {
        this.stickyHeaderUpdate({ value: !entries[0].isIntersecting });
      }
    }, {
      root: null,
      threshold: 0
    });

    observer.observe(this.$refs['hero-landing']);
  }
};
</script>
