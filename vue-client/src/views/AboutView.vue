<template>
  <div style="text-align: center">
    {{ message }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'

const message = ref('')

// Make a request for a user with a given ID
axios
  .get('http://localhost:8000/api')
  .then(function (response: any) {
    // handle success
    console.log(response)
    message.value = response.data.message
  })
  .catch(function (error: any) {
    // handle error
    console.log(error)
  })
  .finally(function () {
    // always executed
  })
</script>

<style scoped>
/** */
</style>
