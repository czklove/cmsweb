import { login } from '@/api/userapi.js'

const state = {

}
const mutations = {

}
const actions = {
  login ({commit},{uName,pwd}) {
    return new Promise((resolve,reject)=>{
      login({uName,pwd}).then(res=> {
        console.log(res.data)
        resolve();
      }).catch(
        (error)=>{
          reject(error)
        }
      )
    })
  }
}

export default {
  state,
  mutations,
  actions
}
