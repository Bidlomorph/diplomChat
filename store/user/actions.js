export default {
  // Users
  async getUsersList ({ commit }, payload) {
    const config = {
      limit: payload.limit,
      offset: payload.offset
    }
    if (payload.q) {
      config.q = payload.q
    }
    if (payload.key) {
      const orderKey = `sort[${payload.key}]`
      config[orderKey] = payload.type
    }
    const response = await this.$axios.$get('/users', {
      params: config
    })
    return response.result
  },
  // autoprogram
  async getAutoUsersList ({ commit }, payload) {
    const config = {
      limit: payload.limit,
      offset: payload.offset
    }
    if (payload.step) {
      config.step = payload.step
    }
    const response = await this.$axios.$get('/auto-programs', {
      params: config
    })
    return response.result
  },
  async getReferals ({ commit }, payload) {
    const config = {
      limit: payload.limit,
      offset: payload.offset
    }
    if (payload.currentLine) {
      config.level = payload.currentLine
    }
    const response = await this.$axios.$get(`/${payload.currentId}/referrals`, {
      params: config
    })
    return response.result
  },
  async getAllAutoByUser ({ commit }, payload) {
    const config = {
      limit: payload.limit,
      offset: payload.offset
    }
    const response = await this.$axios.$get(`/user/${payload.currentId}/auto-programs`, {
      params: config
    })
    return response.result
  },
  async getAutoprogram ({ commit }, id) {
    const response = await this.$axios.$get(`/auto-program/${id}`)
    commit('setAutoprogram', response.result)
  }
}
