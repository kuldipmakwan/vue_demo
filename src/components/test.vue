<template>
  <editModel v-if="isEditOpen" @close-model="isEditOpen = false" :editData="editData"  />
  <Model v-if="isOpen" @close-model="isOpen = false">
    <!-- title -->
    <template v-slot:modelTitle>
      <div class="flex justify-between">
        <p>Add User</p>
        <XMarkIcon @click="isOpen = false" class="w-5 cursor-pointer" />
      </div>
    </template>
    <!-- content -->
    <template v-slot:modelContent>
      <form class="max-w-sm mx-auto">
        <!-- name -->
        <div class="mt-3">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">FirstName</label>
          <input type="name" id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter your name" v-model="user.firstname" required />
        </div>
        <!-- email -->
        <div class="mt-3">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Your email</label>
          <input type="email" id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter your email" v-model="user.email" required />
        </div>
        <!-- price -->
        <div class="mt-3">
          <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">website</label>
          <input type="number" id="price"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter your price" v-model="user.website" required />
        </div>
      </form>
    </template>
    <!-- bottom -->
    <template #modelButton>
      <div class="mt-3 flex justify-end gap-2">
        <button type="button"
          class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          @click="isOpen = fasle">
          Cancle
        </button>
        <button @click.prevent="handleSubmit" type="submit"
          class="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2">
          Save
        </button>
      </div>
    </template>
  </Model>
  <div class="container mx-auto max-w-[70%] flex justify-end py-4">
    <button @click="isOpen = true" class="bg-indigo-500 text-white font-medium text-base p-2 rounded-md">Add
      User</button>
  </div>

  <div class="relative overflow-x-auto shadow sm:rounded-lg max-w-[70%] mx-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Sr No.</th>
          <th scope="col" class="px-6 py-3">ProProduct name</th>
          <th scope="col" class="px-6 py-3">Last Name</th>
          <th scope="col" class="px-6 py-3">website Name</th>
          <th scope="col" class="px-6 py-3">Phone</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody v-if="paginatedProProducts.length">
        <tr v-for="(ProProduct, index) in paginatedProProducts" :key="index"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="px-6 py-4">{{ index + 1 + (currentPage - 1) * itemsPerPage }}</td>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ ProProduct.firstname }}
          </th>
          <td class="px-6 py-4">{{ ProProduct.lastname }}</td>
          <td class="px-6 py-4">{{ ProProduct.website }}</td>
          <td class="px-6 py-4">{{ ProProduct.phone }}</td>
          <td class="px-6 py-4 flex gap-1">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              <PencilIcon @click="handleEdit(ProProduct.id)" class="w-5 h-5 text-green-400" />
            </a>
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              <TrashIcon @click="handleDelete(ProProduct.id)" class="w-5 h-5 text-red-400" />
            </a>
          </td>
        </tr>
      </tbody>
      <tr v-else>
        <td colspan="6" class="text-center py-4 text-lg" >😭 No data found!</td>
      </tr>
    </table>
  </div>

  <MyPagination :total-items="totalItems" :items-per-page="itemsPerPage" :current-page="currentPage"
    @page-changed="onPageChange" />
</template>

<script setup>
import MyPagination from './MyPagination.vue';
import { ref, computed } from 'vue';
import Model from '../components/Model.vue'
import { PencilIcon, TrashIcon, XMarkIcon } from '@heroicons/vue/20/solid';
import axios from 'axios';
import { onMounted } from 'vue';
import Swal from 'sweetalert2';
import editModel from '../pages/user/editModel.vue';

const dataProProducts = ref([]);

const isOpen = ref(false);
const isEditOpen = ref(false);
const currentPage = ref(1);
const itemsPerPage = ref(5);
const editData  = ref([]);
const user = ref({
  firstname: '',
  email:'',
  zipcode: ''
});

const handleSubmit = () => {
  axios.post('https://jsonplaceholder.org/users',{
    name: user.value.firstname,
    email: user.value.email,
    zipcode: user.value.zipcode
  })
    .then((res) => {
      console.log(res.data);
      getUserData();
      isOpen.value = false; 
    }).catch((err) => {
      console.log(err)
    })
}


const getUserData = () => {
  axios.get('https://jsonplaceholder.org/users')
  .then((res) => {
    dataProProducts.value = res.data; 
  })
}

const handleDelete = (id) => {
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    axios.delete(`https://jsonplaceholder.org/users/${id}`)
    .then((res) => {
      console.log(res)
    })
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
}

const handleEdit = (id) => {
    axios.get(`https://jsonplaceholder.org/users/${id}`)
      .then((res) => {
        editData.value = res.data
        getUserData();
      })
  
  console.log(id,user.value.firstname,'editId')
  isEditOpen.value = true;
}

onMounted(() => {
  getUserData();
})

const totalItems = computed(() => dataProProducts.value.length);

const paginatedProProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return dataProProducts.value.slice(start, end);
});


const onPageChange = (newPage) => {
  currentPage.value = newPage;
};
</script>
