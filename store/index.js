import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    geo
  },
  actions: {
    async nuxtServerInit({ commit }, { req, app }) { // nuxtServerInit 将服务端的一些数据传到客户端
      {
        const { status, data: { province, city } } = await app.$axios.get('/geo/getPosition')
        commit('geo/setPosition', status === 200 ? { province, city } : { province: '', city: '' })
      }
    }
  }
})

export default store
