<template>
    <div class="form" :class="'status-'+status">
        <form @submit.prevent="onSubmit" >
            <label class="label">
                <span>{{$ts('Your email')}} ({{$ts('required')}}):</span>
                <input type="email" v-model="email" name="email" required/>
            </label>

            <label class="label">
                <span>{{$ts('Name')}}:</span>
                <input type="text" name="name" v-model="name"/>
            </label>

            <label class="label">
                <span>{{$ts('Specialization')}} ({{$ts('required')}}):</span>
                <input type="text" name="specialization" v-model="specialization" required/>
            </label>

            <label class="label">
                <span>{{$ts('Your application in text form')}}:</span>
                <textarea name="application" v-model="application"></textarea>
            </label>
            
            
            <label><input type="checkbox" name="agreement" required/> {{$ts('I agree to receive emails')}} ({{$ts('required')}})</label>
            <vue-recaptcha
            ref="invisibleRecaptcha"
            @verify="onVerify"
            size="invisible"
            :sitekey="recaptchaSitekey">
            </vue-recaptcha>
            <div><input type="submit" value="Apply" /></div>
        </form>

        <div class="form-message">{{$ts('Thanks, your application has been sent!')}}</div>
    </div>
</template>

<style scoped>

    form {
        display: block;
        max-width: calc(var(--w-content) * 0.7) !important;
    }

    input:not([type='checkbox'],[type='submit']), textarea {
        border: 0;
        display: block;
        width: 100%;
        padding: 0;
    }

    textarea {
        min-height: 100px;
    }

    input[type='submit'] {
        width: 100%;
        padding-top: calc(var(--space) * 1.2);
        padding-bottom: calc(var(--space) * 1.2);
    }

    .label {
        display: block;
        border: 1px solid var(--color-dark);
        padding: 0 calc(var(--space) * 0.5) calc(var(--space) * 0.5);
        margin-bottom: var(--space);
    }

    .label span {
        font-size: 80%;
        line-height: 1;
    }

    .status-wait form, .status-ok form {
        filter: grayscale(1);
        pointer-events: none;
    }

    .status-ok form {
        opacity: 0.3;
    }

    .form .form-message {
        max-width: calc(var(--w-content) * 0.7) !important;
        text-align: center;
        color: var(--color-green);
        font-size: 120%;
        font-weight: bold;
        margin-top: var(--space);
        display: none;
    }

    .form.status-ok .form-message {
        display: block;
    }
</style>

<script>
export default {
  components: {
      VueRecaptcha: () => import("vue-recaptcha")
  },

  metaInfo: {
    script: [
      {
        src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit',
        body: true
      }
    ]
  },

  data () {
    return {
      email: null,
      name: '',
      specialization: '',
      application: '',
      status: 'none',
      recaptchaSitekey: "6LcALh8dAAAAACPhvqAoQujBHk8kndfYN7rrpK24"
    //   recaptchaSitekey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" //test localhost
    }
  },

  methods: {

    onSubmit: function () {
      this.$refs.invisibleRecaptcha.execute()
    },

    onVerify: function (response) {
      if(response) {
          
        this.status = 'wait'

        let request = ''

        if(this.email){
          request = 'email=' + encodeURIComponent(this.email) + '&lang=' + encodeURIComponent(this.$locale) + '&name=' + encodeURIComponent(this.name) + '&specialization=' + encodeURIComponent(this.specialization) + '&application=' + encodeURIComponent(this.application)
        }

        if (this.$PostGoogleSheets(request)){
          const o = this
          setTimeout(function(){
            o.status = 'ok'
          }, 1500);
        } else{
          this.status = 'error'
        }
      }
    }

  }
}
</script>