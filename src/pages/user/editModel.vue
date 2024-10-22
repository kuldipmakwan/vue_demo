<template>
    <div>
        <editModel>
            <template v-slot:modelTitle>
                <div class="flex justify-between">
                    <p>Edit User</p>
                    <XMarkIcon @click="$emit('close-model')" class="w-5 cursor-pointer" />
                </div>
            </template>
            <template v-slot:modelContent>
                <form class="max-w-sm mx-auto">
                    <!-- name -->
                    <div class="mt-3">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Your
                            name</label>
                        <input type="name" id="name" v-model="user.firstname"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="enter your name" required />
                    </div>
                    <!-- email -->
                    <div class="mt-3">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Your
                            email</label>
                        <input type="email" id="email" v-model="user.email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="enter your email" required />
                    </div>
                    <!-- website -->
                    <div class="mt-3">
                        <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">website</label>
                        <input type="text" id="website" v-model="user.website"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="enter your website" required />
                    </div>
                    <!-- phone -->
                    <div class="mt-3">
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Phone</label>
                        <input type="text" id="phone" v-model="user.phone"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="enter your phone" required />
                    </div>
                </form>
            </template>
            <template v-slot:modelButton>
                <div class="mt-3 flex justify-end gap-2">
                    <button type="button"
                        class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        @click="$emit('close-model')">
                        Cancel
                    </button>
                    <button type="button" @click="updateUserData" class="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2">
                        Save
                    </button>
                </div>
            </template>
        </editModel>
    </div>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/20/solid';
import editModel from '../../components/Model.vue';
import { defineProps, ref, watch } from 'vue';
import axios from 'axios';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const props = defineProps({
  currentId: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['close-model'])

const user = ref({
  firstname: '',
  email: '',
  website: '',
  phone: ''
});

// Fetch user data from the API based on currentId prop
const fetchUserData = (id) => {
  axios.get(`https://jsonplaceholder.org/users/${id}`)
    .then((res) => {
      const userData = res.data;
      user.value = {
        firstname: userData.firstname,
        email: userData.email,
        website: userData.website,
        phone: userData.phone
      };
    }).catch((error) => {
      console.error('Error fetching user data:', error);
    });
};

// Function to update user data through API
const updateUserData = () => {
    axios.put(`https://jsonplaceholder.org/users/${props.currentId}`, user.value)
        .then((res) => {
            console.log('User updated successfully:', res.data);
            toast("user update successfully!", {
                "theme": "dark",
                "type": "success",
                "transition": "flip",
                "dangerouslyHTMLString": true
            })
            emit('close-model');
        }).catch((error) => {
            console.error('Error updating user data:', error);
            // alert('Error updating user data');
        });
};

// Fetch the initial data when component is mounted
fetchUserData(props.currentId);

</script>

<style scoped>
</style>
