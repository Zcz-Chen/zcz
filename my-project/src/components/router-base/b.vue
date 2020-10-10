<template>
  <div>
    <div>这是B 组件</div>
    <router-link to="/a">跳转到a组件</router-link>
    <button @click="TiaoA">跳转到a组件</button>
    <button @click="getArg">获取a组件信息</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    TiaoA() {
      console.log(111);
      this.$router.push({ path: "/a" });
    },
    getArg(){
      console.log(this.$route.query);
    }
  },
};
</script>