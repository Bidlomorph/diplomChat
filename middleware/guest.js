export default (context) => {
  const hasUsername = context.app.$cookies.get('user')
  if (hasUsername) {
    return context.redirect('/chat')
  }
  return true
}
