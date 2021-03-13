// eslint-disable-next-line require-await
export default async (context) => {
  const hasUsername = context.app.$cookies.get('user')
  if (!hasUsername) {
    return context.redirect('/')
  }
  return true
}
