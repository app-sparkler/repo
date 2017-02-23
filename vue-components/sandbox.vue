<template lang="pug">
div
  h4 The Sandbox: 
  div(v-thtml="testHtml" filters="capitalize")
</template>

<script>
export default {
  data () {
    return {
      testHtml: `
        <h1>Hello World</h1>
        <p>The world says hello!</p>
      `
    }
  }
}
</script>

