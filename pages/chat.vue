<template>
  <div>
    <notifications />
    <div class="chat">
      <div class="dialogs">
        123
      </div>
      <div class="messenger">
        321
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  name: 'Chat',
  computed: {
    ...mapGetters({
      user: 'user/user'
    })
  }
}
</script>

<style scoped lang="scss">
.chat {
  display: grid;
  grid-template-columns: 274px 1fr;
}
</style>
