<template>
  <div>
    <div>这是 A 组件</div>
    <router-link to="/b">跳转到b组件</router-link>
    <button @click="TiaoB">跳转到b组件</button>
  </div>
</template>
<script>
export default {
  data () {
    return{};
  },
  methods: {
    TiaoB(){
      console.log(111);

      // this.$router.push({path:"/b",query:{name:"tom",age:"15",id:"123",height:"180"}});

      //通过name和params跳转
      this.$router.push({name:"b",params: {newName:"bob",newAge:"20"}});
    }
  },
}
</script>
