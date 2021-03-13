/* eslint-disable no-param-reassign */

export default {
  setUserData (state, user) {
    state.user = user
    this.$cookies.set('user', user.email, { path: '/' })
  },
  setOldTokens (state, { access, refresh, status }) {
    state.tokens.access = access
    state.tokens.refresh = refresh
    state.status = status
  },
  setNewTokens (state, response) {
    state.tokens.access = response.result.access
    state.tokens.refresh = response.result.refresh
    state.userRole = response.result.role
    // state.status = response.ok;
    this.$cookies.set('access', response.result.access, { path: '/' })
    this.$cookies.set('refresh', response.result.refresh, { path: '/' })
  },
  logOut (state) {
    this.$cookies.remove('access')
    this.$cookies.remove('refresh')

    state.tokens.access = ''
    state.tokens.refresh = ''
    state.userRole = null
  },
  setNewRole (state, role) {
    state.userRole = role
  },
  setAutoprogram (state, result) {
    state.autoprogram = result
  },
  updateAutoprogram (state, result) {
    state.autoprogram = result
  }
}
