import Router from 'koa-router'
// import axios from './utils/axios'
// import Config from '../dbs/config'
import Positon from '../dbs/models/position'

let router = new Router({
  prefix: '/geo'
})

// const sign = Config.sign

// [postman](http://localhost:3000/geo/getPosition)
router.get('/getPosition', async ctx => {
  const result = await Positon.findOne() // Operating a local database
  ctx.body = {
    province: result.province,
    city: result.city
  }
  // Online service
  // const {
  //   status,
  //   data: { province, city }
  // } = await axios.get(`${Config.requestUrl}/geo/getPosition?sign=${sign}`)
  // if (status === 200) {
  //   ctx.body = {
  //     province,
  //     city
  //   }
  // } else {
  //   ctx.body = {
  //     province: '',
  //     city: ''
  //   }
  // }
})

export default router
