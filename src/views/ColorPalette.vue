<template>
  <div class="max-width-default tw-my-100">
    <h2 class="tw-mb-20 tw-text-primary-green-dark tw-font-bold bg-primary-yellow">Color palette</h2>

    <div class="tw-flex tw-flex-wrap tw-justify-around">
      <div v-for="group in colorGroup" :key="`group-${group.id}`" class="tw-mb-20">
        <p class="tw-mb-20 tw-text-20 tw-font-medium tw-text-center">{{ group.title }}</p>

        <div class="tw-text-14 tw-flex tw-justify-around">
          <div
            v-for="color in group.colors"
            :key="`color-${color.id}`"
            class="tw-w-100 tw-flex tw-flex-col tw-items-center"
          >
            <div :class="['tw-w-50 tw-h-50 tw-border-2 tw-rounded-full', color.class]"></div>

            <p class="tw-mt-5">{{ color.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPalette',

  data () {
    return {
      colorGroup: [
        {
          id: 1,
          title: 'Primary',
          colors: [
            { id: 1, class: 'tw-bg-primary-white', label: 'White' },
            { id: 2, class: 'tw-bg-primary-green', label: 'Green' },
            { id: 3, class: 'tw-bg-primary-green-dark', label: 'Green dark' }
          ]
        },
        {
          id: 2,
          title: 'Secondary',
          colors: [
            { id: 1, class: 'tw-bg-secondary-magenta', label: 'Magenta' },
            { id: 2, class: 'tw-bg-secondary-yellow', label: 'Yellow' },
            { id: 3, class: 'tw-bg-secondary-blue', label: 'Blue' }
          ]
        },
        {
          id: 3,
          title: 'Font',
          colors: [
            { id: 1, class: 'tw-bg-font-primary', label: 'Font' },
            { id: 2, class: 'tw-bg-font-10', label: 'Font 10' },
            { id: 3, class: 'tw-bg-font-20', label: 'Font 20' }
          ]
        }
      ]
    };
  }
};
</script>
