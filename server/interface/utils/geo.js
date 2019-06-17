import Router from 'koa-router'
import axios from './utils/axios'

let router = new Router({
  prefix: '/geo'
})

const sign = '3225903'

router.get('/getPosition', async (ctx) => {
  let { stauts, data: { province, city } } = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
  if (stauts === 200) {
    ctx.body = {
      province,
      city
    }
  } else {
    ctx.body = {
      province: '',
      city: ''
    }
  }
})

export default router
