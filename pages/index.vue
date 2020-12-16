<template>
  <div class="container">
    <notifications />
    <div class="card">
      <b-form>
        <b-form-group
          id="input-group-1"
          label="Email address"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="model.email"
            type="email"
            placeholder="Enter email"
            required
          />
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="model.password"
            maxlenght="20"
            placeholder="Enter password"
            required
          />
        </b-form-group>

        <b-form-group v-if="registration" id="input-group-3" label="Repeat password" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="model.repeatPassword"
            maxlenght="20"
            placeholder="Repeat password"
            required
          />
        </b-form-group>
        <div class="btns">
          <b-button v-if="!registration" variant="primary" @click="changeAction">
            Registration
          </b-button>
          <b-button v-if="registration" variant="primary" @click="changeAction">
            Authorization
          </b-button>
          <b-button v-if="registration" variant="primary" @click="registerUser">
            Register
          </b-button>
          <b-button v-if="!registration" variant="primary" @click="authUser">
            Auth
          </b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        email: '',
        password: '',
        repeatPassword: ''
      },
      registration: false
    }
  },
  methods: {
    changeAction () {
      this.registration = !this.registration
      this.model = {
        email: '',
        password: '',
        repeatPassword: ''
      }
    },
    registerUser () {
      if (this.model.email && this.model.password && this.model.repeatPassword) {
        if (this.model.password === this.model.repeatPassword) {
          // eslint-disable-next-line no-unused-vars
          const model = {
            email: this.model.email,
            password: this.model.password
          }
          this.$axios.post('/user/api/registration', model, { headers: { 'Content-Type': 'application/json' }, json: true })
        }
      } else {
        // eslint-disable-next-line no-console
        console.log('Notify: complete fields')
      }
    },
    async authUser () {
      if (this.model.email && this.model.password) {
        const model = {
          email: this.model.email,
          password: this.model.password
        }
        try {
          await this.$axios.post('/user/api/authentication', model, { headers: { 'Content-Type': 'application/json' }, json: true })
        } catch (e) {
          console.log(e)
          this.$notify({
            type: 'warn',
            text: e.response.result
          })
        }
      } else {
        // eslint-disable-next-line no-console
        console.log('Notify: complete fields')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.btns {
  display: flex;
  justify-content: space-between;
}
.card {
  width: 300px;
  padding: 20px;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
