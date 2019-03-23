<template>
  <div>
    这是一个登入页
    <input type="text" v-model="uName">
    <input type="text" v-model="pwd">
    <button @click="handlogin">等入</button>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'login',
  data() {
    return {
      uName: '',
      pwd: ''
    }
  },
  methods: {
    ...mapActions(
      ['login']
      ),
    //等入方法
    handlogin () {
      this.login({
        uName: this.uName,pwd: this.pwd
        }).then(()=>{
          this.$router.push({
            name: 'home'
          })
        })
        .catch((error) => {
            console.log(error)
          })
    }
  },
}
</script>

