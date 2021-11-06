<template>
  <div class="h-full flex flex-col xl:bg-spot-desktop bg-spot bg-no-repeat bg-cover bg-blend-overlay">
    <div class="flex relative max-w-screen-laptop-screen m-auto flex-col xl:w-full overflow-hidden bg-hero-section_mobile xl:bg-hero-section_desktop bg-cover bg-no-repeat bg-blend-overlay">
      <img :src="'/images/vector-desktop.png'" class="xl:block hidden absolute bottom-0 right-0"/>
      <img :src="'/images/vector-mobile.svg'" class="block xl:hidden absolute bottom-0 right-0"/>
      <app-header />
      <div class="flex xl:w-full z-19 2xl:ml-auto mr-auto max-w-screen-laptop-screen ">
        <div class="flex flex-col z-30 xl:mx-auto tracking-loose xl:ml-32 xl:mt-24 xl:mb-48 xl:w-xl mb-4">
          <div class="flex items-center justify-center xl:justify-start">
            <p class="opacity-50 font-poppins text-base xl:text-base uppercase">Powered By</p>
            <!-- <img
              src="powered-by-icon.svg"
              alt="Injective Exchange"
              class="h-6 ml-3 w-auto"
            />  -->
            <img
              src="/images/secondary_logo.png"
              alt="Injective Exchange"
              class="h-12 w-28"
            />
          </div>
          <h1 class="text-white text-3xl xl:text-5xl font-bold font-sora text-center pt-3 px-6 xl:p-0 xl:text-left">Trading is an Art</h1>
          <p class="opacity-70 text-base xl:text-xl xl:mt-8 mt-9 font-poppins px-6 text-center xl:text-left xl:p-0">Picasso is a decentralized exchange to access high volume derivative markets with zero gas fee and high capital efficiency. The exchange is powered by Injective Protocol and governed by the community!</p>
          <p class="opacity-70 text-base xl:text-xl mt-8 font-poppins text-center px-6 xl:text-left xl:p-0">Connect your wallet and trade 20+ digital asset markets in minutes.</p>
          <div class="flex xl:mt-8 mt-14 mb-16 xl:mb-0 flex-col xl:flex-row xl:justify-start justify-center items-center">
            <v-ui-button  v-if="authenticate" home full hero-primary @click.stop="goTrade">Trade </v-ui-button>
            <v-ui-button v-if="!authenticate"  home-wait full hero-primary-wait @click.stop="goToLogin">Join Waitlist</v-ui-button>
            <v-ui-button v-if="authenticate" home full hero-secondary @click.stop="goReadMore" >Read More</v-ui-button>
          </div>
        </div>
      </div>
    </div>
      <div class="relative 2xl:ml-auto mr-auto max-w-screen-laptop-screen flex w-full xl:pl-32 xl:pt-48 xl:pb-48 xl:flex-row flex-col-reverse overflow-hidden bg-white">
        <div class="absolute top-0 left-0 md:w-1/2">
          <img src="/home/top-left-bg.png" />
        </div>
        <div class="absolute bottom-0 right-0 md:w-1/2">
          <img src="/home/landing-bg-bottom-right.png" />
        </div>
        <div class="absolute bottom-0 left-4 xl:w-1/2 xl:opacity-30 xl:block hidden">
          <img src="/home/landing-bg-bottom-left.png" />
        </div>
        <div class="absolute top-0 right-0 xl:block hidden">
          <img src="/home/landing-bg-top-right.png" />
        </div>
        <div class="flex z-30 flex-col xl:flex-row justify-center items-center">
          <div class="flex flex-col font-sora">
            <home-card icon="/home/self-custody-new.svg">Self-custody of your assets for full control</home-card>
            <home-card top icon="/home/new-market-new.svg">New market listing by community governance</home-card>
          </div>
          <div class="flex flex-col xl:mt-24 xl:ml-9 mt-9 mb-20 xl:mb-0 font-sora">
            <home-card icon="/home/efficient-new.svg">Efficient on-chain order book trading with 20X leverage</home-card>
            <home-card top icon="/home/zero-fee-new.svg">Zero gas fees and no front running</home-card>
          </div>
        </div>
        <div class="flex flex-col xl:mt-48 xl:ml-16 mt-2">
          <h1 class="text-home xl:text-5xl font-semibold xl:w-96 font-sora px-16 xl:px-0 text-center xl:text-left text-3xl mt-20 xl:mt-0">Why Picasso Exchange?</h1>
          <p class="text-home opacity-70 text-xl mt-8 xl:w-md font-poppins px-4 xl:px-0 text-center xl:text-left text-small leading-5">Picasso exchange enables users to trade spot and derivatives on Injective Chain. Injective Protocol is a decentralized, censorship-resistant order book built on top of Tendermint using the Cosmos-SDK framework.</p>
          <div class="flex xl:mt-8 mb-9 mt-9 justify-evenly xl:justify-start">
            <v-ui-button home-section full hero-primary @click.stop="goTrade">Trade</v-ui-button>
             <v-ui-button home-section full hero-tertiary @click.stop="goReadMore">Read More</v-ui-button>
          </div>
        </div>
      </div>
      <div class="conatiner 2xl:ml-auto mr-auto max-w-screen-laptop-screen  relative w-full md:pt-24 pt-11 bg-dark-blue overflow-hidden bg-footer-mobile xl:bg-footer-desktop bg-cover bg-no-repeat bg-blend-overlay">
        <div class=" text-white text-center text-2xl font-sora font-bold">Our Supporters</div>
        <div class=" flex flex-col items-center md:flex-row justify-center xl:mt-14 opacity-60 xl:mb-28 mt-10">
            <div class="md:h-24 md:mr-32 xl:h-12 xl:w-60 xl:mb-0 mb-10 h-10 w-48">
                <img src="/images/Injective_landing.png" alt="" class="h-full cursor-pointer" @click.stop = "injectiveprotocol"/>
            </div>
            <div class="md:h-24 xl:h-12 h-10 w-48">
                <img src="/images/polygon_landing.png" alt="" class="h-full cursor-pointer" @click.stop = "polygon" />
            </div>
        </div>
         <v-footer spotPage=true />
         <!-- <model-login /> -->
        <!--<div class="flex justify-evenly xl:justify-center md:pb-24 md:mt-24 pb-12 mt-8">
          <span class="hidden xl:mr-16 xl:inline">Copyright © 2021 Picasso Exchange</span>
            <div class="md:mr-16 md:h-8 h-6 mr-8">
                <img src="/images/twitter.svg" alt="" class="h-full cursor-pointer"  @click.stop = "gotwitter"/>
            </div>
            <div class="md:mr-16 md:h-8 h-6 mr-8">
                <img src="/images/medium.svg" alt="" class="h-full cursor-pointer"  @click.stop = "gomedium">
            </div>
            <div class="md:mr-16 md:h-8 h-6 mr-8">
                <img src="/images/github.svg" alt="" class="h-full cursor-pointer"  @click.stop = "gogithub">
            </div>
            <div class="md:mr-16 md:h-8 h-6 mr-0">
                <img src="/images/discord.svg" alt="" class="h-full cursor-pointer"  @click.stop = "godiscord">
            </div>
            <span class="hidden  xl:inline xl:mr-10 xl:cursor-pointer"  @click.stop="goPrivacy">Privacy Policy</span>
        <span class="hidden xl:cursor-pointer xl:inline" @click.stop="goTerms">Terms and Conditions</span>
        </div> -->
        <!-- <div class="xl:pl-32 xl:pr-32 xl:pb-24 2xl:mr-auto 2xl:ml-auto max-w-screen-laptop-screen 2xl:pb-12">
        <span class=pr-72>Copyright © 2021 Picasso Exchange</span>
        <span class="mr-10 pl-80 cursor-pointer"  @click.stop="goPrivacy">Privacy Policy</span>
        <span class="cursor-pointer" @click.stop="goDisclaimer">Terms and Conditions</span>
        </div> -->
       </div>
       <modal-login />
      <!-- <modal-acknowledge /> -->
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import HomeCard from '~/components/ui/elements/home-card.vue'
import Header from '~/components/layouts/desktop/header.vue'
import { Modal } from '~/types'
import Footer from '~/components/partials/spot/footer.vue'
import ModalLogin from '~/components/partials/login-modal.vue'
import { verifyUserAuthentication } from '~/utils/localStroage';
// import ModalAcknowledge from '~/components/partials/acknowledge.vue'
export default Vue.extend({
  components: {
    HomeCard,
    'app-header': Header,
    'v-footer': Footer,
    // 'modal-acknowledge': ModalAcknowledge,
    'modal-login': ModalLogin
  },

   data() {
    return {
      authenticate:false
    }
   },

  mounted() {
    //  this.$accessor.modal.openModal(Modal.Acknowledge);
    this.authenticate = verifyUserAuthentication();
    // if (!authenticate) {
    //   this.$accessor.modal.openModal(Modal.Login);
    // }
  },
    methods: {
      goTrade(){
        if(!this.authenticate) {
          this.$accessor.modal.openModal(Modal.Login);
        }
        else {
         this.$router.push({ name: 'market' });
        }
        // window.open('https://trade.picasso.exchange/market','_blank');
      },
      goReadMore() {
        window.open('https://medium.com/@picasso.exchange','_blank');
      },
      gotwitter(){
        window.open('https://twitter.com/PicassoExchange','_blank');
      },
      gomedium(){
        window.open('https://medium.com/@picasso.exchange','_blank');
      },
      polygon() {
        window.open('https://polygon.technology/','_blank');
      },
      injectiveprotocol() {
        window.open('https://injectiveprotocol.com/','_blank');
      },
      godiscord(){
        window.open('https://discord.gg/WXQpVy4qqz','_blank');
      },
      gogithub(){
        window.open('https://github.com/PicassoExchange','_blank');
      },
      openAcknowledgeModal() {
        this.$accessor.modal.openModal(Modal.Acknowledge)
      },
      goPrivacy() {
      this.$router.push({ name: 'privacy_policy' })
      },
      goTerms() {
      this.$router.push({ name: 'terms' })
      },
      goToLogin(){
        this.$accessor.modal.openModal(Modal.Login);
        document.body.style.overflow = 'hidden';
      }
    }
})
</script>
