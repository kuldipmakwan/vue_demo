<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white shadow-2xl body">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto animate-bounce"
                src="https://parthlocal.s3.ap-south-1.amazonaws.com/Ciyaza+Logo.png" alt="Your Company" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">Sign in to your
                account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-[#ada3a25d] p-6 rounded-2xl">
            <form @submit.prevent="handleLoginForm" class="space-y-6">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-100">Email address</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" required=""
                            placeholder="Enter your email"
                            class="block w-full p-2 rounded-md border-0 py-1.5  shadow-sm ring-1 border-none  placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#900C3F] sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-100">Password</label>
                    </div>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="current-password" required=""
                            placeholder="Enter your password"
                            class="block w-full p-2 rounded-md border-0 py-1.5  shadow-sm ring-1 border-none  placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#900C3F] sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <router-link to="/dashboard">
                    <button type="submit"
                        class="flex w-full hover:-translate-y-1 duration-300 my-5 tracking-wide hover:tracking-[3px] justify-center rounded-md bg-[#900C3F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#900c3fe1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                        in</button>
                </router-link>
                <div class="text-sm flex justify-center">
                    <a href="#" class="font-semibold  text-[#75083296] underline hover:text-[#900C3F]">Forgot password?</a>
                </div>
            </form>

            <p class="mt-5 text-center text-sm text-gray-100">
                Not a member?
                {{ ' ' }}
            </p>
        </div>
    </div>
</template>

<script setup>

const handleLoginForm = () => {
    console.log('123')
}
</script>

<style scoped>
    .body{
        background-image: url('https://parthlocal.s3.ap-south-1.amazonaws.com/Parth-01.jpg');
        background-size: cover;
        object-fit: cover;
        height: 100vh;
        background-repeat: no-repeat;
    }
</style>