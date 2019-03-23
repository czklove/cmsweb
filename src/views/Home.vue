<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click='cilckroute'>返回上一页</button>
    <button @click='cilckrouteparents'>跳转到parent有历史记录</button>
    <button @click='cilckroutenoparents'>跳转到parent无历史记录</button>
    <button @click='cilckrouteparams'>跳转到params传参</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

const name = 'chenzhen'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    cilckroute () {
      // 返回上一页
      //this.$router.back();
      // 返回上一页
      this.$router.go('-1');
    },
    cilckrouteparents () {
      //this.$router.push('/parent')
      // 使用路由名称的方式跳转
      this.$router.push({
        name: 'parent',
        query: {
          name: 'chenzhen'
        }
      })
    },
    cilckroutenoparents () {
      this.$router.replace('/parent')
    },
    cilckrouteparams () {
      /* this.$router.replace({
        path: '/argu',
        params: {
          name: 'chenzhen'
        }
      }) 这么写无效*/
      this.$router.replace({
        path: `/atgu/${name}`,
      })
    }
  }
}
</script>
