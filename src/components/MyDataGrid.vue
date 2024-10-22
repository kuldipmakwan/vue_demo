<template>
  <div>
    <!-- Add User Modal -->
    <editModel v-if="isEditOpen" @close-model="isEditOpen = false" :currentId="currentId"  />
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
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Your
              name</label>
            <input type="name" id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter your name" v-model="user.firstname" required />
          </div>
          <!-- email -->
          <div class="mt-3">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Your
              email</label>
            <input type="email" id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter your email" v-model="user.email" required />
          </div>
          <!-- price -->
          <div class="mt-3">
            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">website</label>
            <input type="text" id="price"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter your website" v-model="user.website" required />
          </div>
          <!-- phone -->
          <div class="mt-3">
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Phone</label>
            <input type="number" id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter your phone" v-model="user.phone" required />
          </div>
        </form>
      </template>

      <!-- bottom -->
      <template #modelButton>
        <div class="mt-3 flex justify-end gap-2">
          <button type="button"
            class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            @click="isOpen = false">
            Cancel
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

    <!-- Table with Sorting -->
    <div class="relative overflow-x-auto shadow sm:rounded-lg max-w-[70%] mx-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">Sr No.</th>
            <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortData('firstname')">
              Product Name
              <span v-if="sortKey === 'firstname'">{{ sortDirection === 1 ? '▲' : '▼' }}</span>
            </th>
            <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortData('lastname')">
              Last Name
              <span v-if="sortKey === 'lastname'">{{ sortDirection === 1 ? '▲' : '▼' }}</span>
            </th>
            <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortData('website')">
              Website Name
              <span v-if="sortKey === 'website'">{{ sortDirection === 1 ? '▲' : '▼' }}</span>
            </th>
            <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortData('phone')">
              Phone
              <span v-if="sortKey === 'phone'">{{ sortDirection === 1 ? '▲' : '▼' }}</span>
            </th>
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
              <PencilIcon @click="handleEdit(ProProduct.id)" class="w-5 h-5 text-green-400 cursor-pointer" />
              <TrashIcon @click="handleDelete(ProProduct.id)" class="w-5 h-5 text-red-400" />
            </td>
          </tr>
        </tbody>
        <tr v-else>
          <td colspan="6" class="text-center py-4 text-lg">😭 No data found!</td>
        </tr>
      </table>
    </div>

    <!-- Pagination -->
    <MyPagination :total-items="totalItems" :items-per-page="itemsPerPage" :current-page="currentPage"
      @page-changed="onPageChange" />
  </div>
</template>

<script setup>
import MyPagination from './MyPagination.vue';
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import Model from '../components/Model.vue';
import { PencilIcon, TrashIcon, XMarkIcon } from '@heroicons/vue/20/solid';
import editModel from '../pages/user/editModel.vue';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";


// State for data and pagination
const dataProProducts = ref([]);
const isOpen = ref(false);
const isEditOpen = ref(false);
const currentPage = ref(1);
const itemsPerPage = ref(4);
const editData = ref([]);
const currentId = ref(null);
const user = ref({
  firstname: '',
  email: '',
  website: '',
  phone:'',
});


const sortKey = ref(''); 
const sortDirection = ref(1);


const handleSubmit = () => {
  const userData = {
    name: user.value.firstname,
    email: user.value.email,
    website: user.value.website,
    phone: user.value.phone
  };
  axios.post('https://jsonplaceholder.org/users', userData)
    .then((res) => {
      console.log(res.data);
      dataProProducts.value.push(res.data);
      toast("user create successfully", {
        "theme": "dark",
        "type": "success",
        "transition": "flip",
        "dangerouslyHTMLString": true
      })
      getUserData();
      isOpen.value = false;
    }).catch((err) => {
      console.log(err);
    });
};

// Fetch user data
const getUserData = () => {
  axios.get('https://jsonplaceholder.org/users')
    .then((res) => {
      dataProProducts.value = res.data;
    });
};

// Handle deletion
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
          console.log(res);
        });
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
};

// Handle editing user data
const handleEdit = (id) => {
currentId.value = id;
  axios.get(`https://jsonplaceholder.org/users/${id}`)
      .then((res) => {
        editData.value = res.data
      })
  isEditOpen.value = true;
  // editData.value = dataProProducts.value.filter((product) => product.id === id);
};

// Handle pagination
const onPageChange = (page) => {
  currentPage.value = page;
};

const totalItems = computed(() => dataProProducts.value.length);

// Sorting logic
const sortData = (key) => {
  if (sortKey.value === key) {
    // Toggle the sort direction if the same column is clicked
    sortDirection.value *= -1;
  } else {
    // Set sort key and reset direction
    sortKey.value = key;
    sortDirection.value = 1;
  }
};

// Sorted and paginated data
const paginatedProProducts = computed(() => {
  const sortedData = [...dataProProducts.value].sort((a, b) => {
    const fieldA = a[sortKey.value] ? a[sortKey.value].toString().toLowerCase() : '';
    const fieldB = b[sortKey.value] ? b[sortKey.value].toString().toLowerCase() : '';

    if (fieldA < fieldB) return -1 * sortDirection.value;
    if (fieldA > fieldB) return 1 * sortDirection.value;
    return 0;
  });

  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return sortedData.slice(start, end);
});

// Fetch data on component mount
onMounted(() => {
  getUserData();
});
</script>

<style scoped>
/* Add any custom styling here */
</style>
