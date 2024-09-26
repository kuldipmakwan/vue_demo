<script setup>
import NavBar from "../components/NavBar.vue";
import Table from "../components/Table.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import Model from '../components/Model.vue';
// import cerateModel from '../pages/createUser.vue'
import { PencilSquareIcon, ArchiveBoxXMarkIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  isOpen:{
    type: Boolean,
    default: false
  }
})

const form = ref({
  name:'',
  email:'',
  description:'',

})

console.log(props.isOpen,'hello')

const openModal = ref(false);
const image = ref(null);
// const createUserModel = ref(false);
const userData = ref([]);
const getUserData = async () => {
  await axios
    .get("https://jsonplaceholder.typicode.com/comments?postId=1")
    .then((res) => {
      userData.value = res.data;
      console.log(res.data, "hellopost"); 
    });
};

const openPopupModel = async (userId) => {
  console.log(userId,'helloid')
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
        axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${userId}`) 
    .then((res) => {
      console.log(res, "delettUserhello");
    });
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted successfully.",
        icon: "success",
      });
    }
  });
};

const editUser = (user) => {
  form.value.name = user.name,
  form.value.description = user.body,
  form.value.email = user.email
  openModal.value = true;

}

onMounted(() => {
  getUserData();
});
</script> 

<template>
  <section>
    <!-- navbar sections -->
    <Model v-if="openModal" @close="openModal = false">
      <template #headerName>
        <h2>Edit User</h2>
      </template>
      <template #description>
        <!-- name -->
        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div class="mt-2">
            <input type="text" v-model="form.name" name="last-name" id="last-name" autocomplete="family-name"
              class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <!-- email address -->
        <div class="sm:col-span-4">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" v-model="form.email" name="email" type="email" autocomplete="email"
              class="block w-full rounded-md border-0 px-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <!-- descriptions -->
        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
          <div class="mt-2">
            <textarea id="about" v-model="form.description" name="about" rows="3"
              class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
        </div>
      </template>
    </Model>
    <NavBar />
    <div class="flex justify-end mx-6 my-2">
      <button @click="createUserModel = true" class="bg-violet-500 hover:bg-violet-600 px-4 py-2 text-white rounded-md">
        Add User
      </button>
    </div>
    <!-- table  -->
    <Table class="mx-5 p-5">
      <template #header>
        <tr>
          <th class="py-3">sr no.</th>
          <th>name</th>
          <th>email</th>
          <th>Descriptions</th>
          <th>Actions</th>
        </tr>
      </template>
      <template #tbody>
        <tr v-for="(user,index) in userData" :key="index">
          <td class="py-3">{{ index +1 }}</td>
          <td class="py-3">{{ user.name }}</td>
          <td class="py-3">{{ user.email }}</td>
          <td class="py-3">{{ user.body.length > 20 ? user.body.slice(0,20) + '..' : '' }}</td>
          <td class="py-3 flex gap-2 items-center btn">
            <div>
              <button @click="editUser(user)">
                <PencilSquareIcon class="w-5 h-5 text-green-500" />
              </button>
            </div>
            <button @click="openPopupModel(user.id)">
              <ArchiveBoxXMarkIcon class="w-5 h-5 text-red-500" />
            </button>
          </td>
        </tr>
      </template>
    </Table>
  </section>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
#about::-webkit-scrollbar{
  display: none;
}
</style>
