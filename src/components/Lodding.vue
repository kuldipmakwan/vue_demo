<template>
    <div class="loader" v-if="isLoading">
      <!-- Customize your loader here -->
      <span>Loading...</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isLoading: {
        type: Boolean,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .loader {
    /* Add your styles here */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999; /* Make sure it's above other elements */
  }
  </style>
  