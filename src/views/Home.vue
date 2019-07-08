<template>
  <div class="home">
      <router-view />
      <ul>
         <li><router-link :to="{name: 'list'}">新闻列表</router-link></li>
         <li><router-link :to="{name: 'user'}">个人中心</router-link></li>
      </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
     
  }
}
</script>
