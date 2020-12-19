<template>
  <div class="login container my-5 py-4">
    <div class="my-1">
      <span><a href="#">Home</a></span>
      <i class="fa fa-chevron-right text-danger"></i>
      <span><a href="#">Login</a></span>
      <hr>
    </div>
    <div class="row">
      <div class="col-md-12">
        <b-card no-body class="overflow-hidden justify-content-center">
          <b-row no-gutters>
            <b-col md="6" class="text-center">
              <img src="../assets/banner-img/login1.png" alt="" class="img-fluid">

            </b-col>
            <b-col md="6">
              <b-card-body title="Login">
                <b-card-text>
                  <p v-if="error" class="text-danger">{{erMsg}}</p>
                  <form @submit.prevent="login">
                    <div class="form-group">
                      <label>Email</label>
                      <input type="email" class="form-control" v-model="email">
                    </div>
                    <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control" v-model="password">
                    </div>
                    <div class="form-group">
                      <input type="submit" class="btn btn-outline-danger" value="login">
                    </div>
                  </form>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
  import Service from '@/service/Service.js'
  export default{
    data(){
      return {
        error:false,
        erMsg: "",
        email: "",
        password: ""
      }
    },
    methods:{
      login(){
        let email = this.email
        let password = this.password
        Service.login(email,password)
        .then(response => {
          this.$store.dispatch('storeToken',response.data.access_token)
          this.$store.dispatch('getUser')
          this.$router.push('/')
        })
        .catch(err=>{
          console.log(err)
          this.error=true
          this.erMsg="Email and Password Invalid"
        })
      }
    }
  }
</script>

<style scoped>

</style>
