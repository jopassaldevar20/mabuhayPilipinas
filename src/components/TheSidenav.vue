<template>
  <div
    :class="[
      'tw-w-full tw-h-screen tw-p-25',
      'tw-fixed tw-top-0 tw-left-0 tw-text-primary-white',
      'tw-bg-primary-green tw-transform tw-transition-transform tw-duration-100 tw-ease-linear',
      show ? 'tw-translate-x-0' : 'tw--translate-x-100%'
    ]"
  >
    <div class="tw-flex tw-items-center tw-justify-between">
      <p>Menu</p>

      <i
        class="material-icons-outlined tw-text-28 tw-cursor-pointer hover:tw-text-primary-green-dark"
        @click="handleClose"
      >close</i>
    </div>

    <div class="tw-mt-50 tw-text-20 tw-font-bold">
      <a v-for="nav in navs" :key="nav.id" href="./" class="hover:tw-text-primary-green-dark">
        <p class="tw-mb-20">{{ nav.text }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheSidenav',

  props: {
    navs: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      show: false
    };
  },

  methods: {
    handleClose () {
      this.$emit('close');
    }
  },

  created () {
    setTimeout(() => { this.show = true; }, 10);
  }
};
</script>
