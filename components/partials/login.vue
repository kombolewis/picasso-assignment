<template>
  <div class="w-full mb-2 lg:w-1/2 xl:border-l border-solid border-light-grey lg:pl-11 lg:pr-6 lg:mt-0 pl-6 pr-6 mt-5">
    <h3 class="text-center text-sm font-sora text-white font-normal">
      {{ $t('login') }}
    </h3>
      <v-input
      v-model="form.email"
      :placeholder="$t('email_id')"
      class="mt-4"
      type="text"
      @input="hiddenMessage()"
      />
       <div v-if="form.email.length > 0 && showError" class="flex justify-start text-xs text-red-500 mt-2 font-sora">
          <p>Invalid email address</p>
        </div>
        <!-- <div v-if="form.email.length === 0 && onSubmitCheck" class="flex justify-start text-xs text-red-500 mt-2 font-sora">
          <p>please enter email</p>
        </div> -->
      <v-input
      v-model="form.password"
      :placeholder="$t('password')"
      class="mt-4"
      type="password"
      />
        <div v-if="form.password.length === 0 && onSubmitCheck" class="flex justify-start text-xs text-red-500 mt-2 font-sora">
          <p>please enter password</p>
        </div> 
    <div class="w-full mx-auto mt-4 font-sora">
      <v-ui-button
        :status="status"
        full
        primary
        :disabled="showError ||( form.email.length<1)"
        @click.stop="onSubmit"
      >
        {{ $t('login') }}
      </v-ui-button>
       <div v-if="invaildData" class="flex justify-start text-xs text-red-500 mt-2 font-sora" >
          <p>Invalid email or password. Please try again.</p>
        </div>
    </div>
  </div>
</template>

<script>
import { Modal } from '~/types/enums';
import {fetchPassword} from '~/app/services/authenticate'

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      showError: false,
      invaildData:false,
      onSubmitCheck:false
    };
  },
  methods: {
   async onSubmit() {
     this.onSubmitCheck = true
    if (this.form.email && this.form.password) {
      // const userData = JSON.parse(localStorage.getItem('userData'));
      if(!this.showError){
        const password = await fetchPassword(this.form.email)
        if (password) {
          if (password === this.form.password) {
            localStorage.setItem('register', true);
            this.invaildData = false;
            this.$accessor.modal.closeModal(Modal.Login)
            window.location.reload();
          }
          else {
            console.log("Invalid Data");
            this.showError = false;
            this.form.password = "";
            this.form.email = "";
            this.invaildData = true;
            this.onSubmitCheck = false
          }
        }
      }
    }
  },

    // validateEmail(email) {
    //   const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return regex.test(String(email).toLowerCase());
    // },
    hiddenMessage() {
      this.invaildData = false;
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const valid = regex.test(String(this.form.email).toLowerCase());
      if(!valid) {
        this.showError = true;
      }
      else {
        this.showError = false;
      }
    }
  }
};
</script>
