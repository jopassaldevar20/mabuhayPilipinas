<template>
  <div class="tw-text-primary-white tw-bg-primary-green-dark">
    <div class="max-width-header tw-py-100 tw-text-center">
      <p class="tw-text-20">For more information about the Philippines visit Department Of Tourism</p>

      <div class="tw-mt-40">
        <div class="tw-flex tw-justify-center">
          <a v-for="social in socials" :key="social.id" :href="social.link" target="_blank" class="tw-mx-20">
            <img class="tw-w-30" :src="social.icon" />
          </a>
        </div>

        <p class="tw-mt-20 tw-text-14">
          Icons made by <a class="tw-underline" href="http://www.freepik.com/" target="_blank" title="Freepik">
          Freepik</a> from <a class="tw-underline" href="https://www.flaticon.com/" target="_blank" title="Flaticon">
          www.flaticon.com</a>
        </p>
      </div>

      <p class="tw-mt-70 tw-text-14">
        Credit to the rightful owners of the photos, information and media used by this website.
      </p>
    </div>
  </div>
</template>

<script>
import globalIcon from '@/assets/images/global.svg';
import facebookIcon from '@/assets/images/facebook.svg';
import instagramIcon from '@/assets/images/instagram.svg';
import twitterIcon from '@/assets/images/twitter.svg';
import youtubeIcon from '@/assets/images/youtube.svg';

export default {
  name: 'TheFooter',

  data () {
    return {
      socials: [
        { id: 1, icon: globalIcon, link: 'http://www.tourism.gov.ph/' },
        { id: 2, icon: facebookIcon, link: 'https://www.facebook.com/DepartmentOfTourism/' },
        { id: 3, icon: instagramIcon, link: 'https://www.instagram.com/tourism_phl/?hl=en' },
        { id: 4, icon: twitterIcon, link: 'https://twitter.com/TourismPHL/' },
        { id: 5, icon: youtubeIcon, link: 'https://www.youtube.com/channel/UC_yCORmIAJntXQDSHs4iFcw/' }
      ]
    };
  }
};
</script>
