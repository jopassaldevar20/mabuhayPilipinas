<template>
  <a :href="link" target="_blank">
    <div class="
      tw-px-10
      tw-py-5
      tw-text-14
      tw-flex
      tw-items-center
      tw-bg-primary-white
      tw-rounded-full
      tw-cursor-pointer
      tw-group
    ">
      <i class="material-icons-outlined tw-text-secondary-blue tw-text-20 tw-mr-5">photo_camera</i>

      <p class="group-hover:tw-underline">{{ label }}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ImageSource',

  props: {
    label: {
      type: String,
      default: 'Image source'
    },

    link: {
      type: String,
      required: true
    }
  }
};
</script>
