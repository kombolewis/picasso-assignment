<template>
  <div class="w-full lg:w-1/2 lg:pl-6 lg:pr-11 px-6">
      <h3 class="text-center text-sm font-sora text-white font-normal">
        {{ $t('join_waitlist') }}
      </h3>
        <v-input
        v-model="form.email"
        :placeholder="$t('email_id')"
        class="mt-4"
         type="email"
        @input="hiddenMessage()"
        />
        <div v-if="form.email.length > 0 && showError" class="flex justify-start text-xs text-red-500 mt-2 font-sora" >
          <p>Invalid email address</p>
        </div>
        <div v-if="showMessage" class="flex justify-start text-xs mt-2 font-sora text-aqua-500" >
          <p>Thanks for your interest! You are on the top of our list for early access to trade on Picasso! In the meantime, follow us on Twitter  <span class="underline cursor-pointer" @click.stop="gotwitter"> @PicassoExchange</span> for the latest updates</p>
        </div>
        <!-- <v-input
        v-model="form.password"
        :placeholder="$t('password')"
        class="mt-4"
        type="password"
        /> -->
        <div class="text-sm font-sora text-white font-normal mt-4">
          By clicking submit, you agree to our <span class="underline cursor-pointer" @click.stop="goPrivacy">Privacy Policy</span> and <span class="underline cursor-pointer" @click.stop="goTerms">Terms and Conditions</span>
        </div>
      <div class="w-full mx-auto mt-4 font-sora">
        <v-ui-button
          :status="status"
          full
          primary
          :disabled="showError || form.email.length<1"
          @click.stop="onSubmit"
        >
          {{ $t('submit') }}
        </v-ui-button>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
// import { email } from 'vee-validate/dist/rules';

export default {
  data() {
    return {
      form: {
        email: ""
      },
      showError: false,
      showMessage: false
    };
  },

  methods: {

     sendEmail(requester) {
      try {
        const templateParams = {
         from_name: requester
        };

        emailjs.send('service_the4htc', 'template_8yxz0xc', templateParams, 'user_kr5qhWp6nbnMB6qqDHwD1')
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          //console.log('FAILED...', error);
        });

      } catch(error) {
         // console.log({error})
      }
      // // Reset form field
      // this.name = ''
      // this.email = ''
      // this.message = ''
    },

    // validateEmail(email) {
    //   const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return regex.test(String(email).toLowerCase());
    // },

    onSubmit() {
        if (this.form.email) {
          if(!this.showError) {
        // localStorage.setItem('userData', JSON.stringify(this.form));    
        console.log("Sending email.", this.form.email);
        this.sendEmail(this.form.email);
        this.showMessage = true;
        }
        this.showError = false;
        this.form.email = "";
      }
    },

    goPrivacy() {
      this.$router.push({ name: 'privacy_policy' })
    },

    goTerms() {
      this.$router.push({ name: 'terms' })
    },

    gotwitter() {
      window.open('https://twitter.com/PicassoExchange','_blank');
    },

    hiddenMessage() {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const valid = regex.test(String(this.form.email).toLowerCase());
      if(!valid) {
        this.showError = true;
        this.showMessage = false;
      }
      else {
        this.showError = false;
      }
    }
  }
};
</script>
