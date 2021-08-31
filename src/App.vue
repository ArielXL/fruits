<template>
  <div id="app" class="container">
    <Header />
    <List />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    Header,
    List
  }
}
</script>