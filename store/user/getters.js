export default {
  isAuth: state => !!(state.tokens.access && state.tokens.refresh),
  accessToken: state => state.tokens.access,
  refreshToken: state => state.tokens.refresh,
  status: state => state.status,
  getProfile: state => state.profile,
  userRole: state => state.userRole,
  autoprogram: state => state.autoprogram,
  user: state => state.user
}
