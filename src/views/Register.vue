<template>
        <div class="container my-5 py-4">
           <div class="my-1">
      <span><a href="#">Home</a></span>
      <i class="fa fa-chevron-right text-danger"></i>
      <span><a href="#">Register</a></span>
      <hr>
    </div>
          <h4>Register</h4>
          <form @submit.prevent="register">
            <label for="name">Name</label>
            <div>
                <input id="name" class="form-control w-25" type="text" v-model="name" required autofocus>
            </div>
            <label for="email" >E-Mail Address</label>
            <div>
                <input id="email" class="form-control w-25" type="email" v-model="email" required>
            </div>
            <label for="password">Password</label>
            <div>
                <input id="password" class="form-control w-25" type="password" v-model="password" required>
            </div>
            <label for="password-confirm">Confirm Password</label>
            <div>
                <input id="password-confirm"  class="form-control w-25" type="password" v-model="password_confirmation" required>
            </div>
            <div class="py-3">
                <button type="submit" class="btn btn-outline-dark w-25">Create account</button>
            </div>
          </form>
        </div>
      </template>
      <script>
         import Service from '@/service/Service.js'
      export default {
        data() {
          return {
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
          };
        },
        methods: {
          register() {         
        let name=this.name
        let email = this.email
        let password = this.password
        let password_confirmation =this.password_confirmation
         Service.users(name,email,password,password_confirmation)
        .then(response => {
          this.$store.dispatch('storeToken',response.data.access_token)
          this.$router.push('/login')
            })
           
          }
        }
      };
      </script>