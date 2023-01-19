<template>
  <div
    class="border border-black shadow-2xl flex flex-col items-center w-max p-8 rounded-2xl"
  >
    <img src="/header.webp" alt="shantitrip-branding" class="w-min" />
    <h1 class="text-2xl mt-6 font-semibold opacity-70">Admin Panel - Login</h1>
    <form
      class="flex flex-col items-center my-8 justify-center gap-y-3"
      @submit.prevent
      @submit="login"
    >
      <input
        type="text"
        placeholder="username"
        name="username"
        v-model="username"
        required
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        v-model="password"
        required
      />
      <button class="btn-primary m-0">Login</button>
    </form>
  </div>
</template>

<script setup>
let username = ref(),
  password = ref();

async function login() {
  const { data } = await useFetch("/api/admin/auth/login", {
    body: { username: username, password: password },
    method: "POST",
  });

  const code = data.value.code;

  if (code == 0) {
    location.reload()
  }
  if (code == 1) {
    alert("wrong credentials");
  }

}
</script>

<style scoped>
input {
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1.49rem;
  padding: 4px;
}
</style>
