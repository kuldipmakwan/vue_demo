<template>
    <div class="container mx-auto max-w-[70%] flex justify-end py-4">
      <button class="bg-indigo-500 text-white font-medium text-base p-2 rounded-md">Add User</button>
    </div>
    
    <div class="relative overflow-x-auto shadow sm:rounded-lg max-w-[70%] mx-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">Sr No.</th>
            <th scope="col" class="px-6 py-3">Product name</th>
            <th scope="col" class="px-6 py-3">Color</th>
            <th scope="col" class="px-6 py-3">Category</th>
            <th scope="col" class="px-6 py-3">Price</th>
            <th scope="col" class="px-6 py-3 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(Product, index) in paginatedProducts"
            :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="px-6 py-4">{{ index + 1 + (currentPage - 1) * itemsPerPage }}</td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ Product.name }}
            </th>
            <td class="px-6 py-4">{{ Product.color }}</td>
            <td class="px-6 py-4">{{ Product.category }}</td>
            <td class="px-6 py-4">{{ Product.price }}</td>
            <td class="px-6 py-4 text-right">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <MyPagination
      :total-items="totalItems"
      :items-per-page="itemsPerPage"
      :current-page="currentPage"
      @page-changed="onPageChange"
    />
  </template>

<script setup>
import MyPagination from './MyPagination.vue';
import { ref, computed } from 'vue';

const dataProducts = ref([
  { name: "Apple MacBook Pro 17\"", color: "Silver", category: "Laptop", price: "$2999" },
  { name: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: "$1999" },
  { name: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" },
  { name: "Google Pixel 6", color: "Sorta Sage", category: "Phone", price: "$799" },
  { name: "Samsung Galaxy S21", color: "Phantom Black", category: "Phone", price: "$999" },
  { name: "Samsung", color: "Phantom Black", category: "Phone", price: "$999" },
  { name: "Samsung Galaxy S21", color: "Phantom Black", category: "Phone", price: "$999" },
  { name: "Samsung", color: "Phantom Black", category: "Phone", price: "$999" },
]);

const currentPage = ref(1);
const itemsPerPage = ref(3);


const totalItems = computed(() => dataProducts.value.length);

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return dataProducts.value.slice(start, end);
});


const onPageChange = (newPage) => {
  currentPage.value = newPage;
};
</script>
