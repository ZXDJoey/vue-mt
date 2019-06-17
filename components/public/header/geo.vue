<template>
  <div class="m-geo">
    <i class="el-icon-location">{{ city }}</i>
    <nuxt-link class="changeCity" to="/changeCity">切换城市</nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  ...mapState({
    city: state => state.geo.position
  })
}
</script>

<style scoped lang="scss">
</style>
