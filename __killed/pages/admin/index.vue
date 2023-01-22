<template>
  <div class="flex justify-between items-center p-2" v-if="adminAuthState">
    <div class="text-lg font-medium">Logged in as admin</div>
    <button class="btn-primary m-0" @click="logout">Logout</button>
  </div>
  <div class="flex flex-col">
    <div
      v-if="!adminAuthState"
      class="flex justify-center items-center h-screen"
    >
      <AdminLogin />
    </div>
    <section class="content p-2" :key="content" v-if="adminAuthState">
      <h1 class="opacity-70">showing {{ contentType }}</h1>
      <div class="">
        <p v-if="!content.length" class="text-red-500 text-center text-3xl">loading...</p>
        <p v-for="data in content">
          {{ JSON.stringify(data) }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: "admin" });

let adminAuthState = ref(false);

let contentType = ref(useRoute().hash);

let content = reactive([]);

async function validateAuth() {
  const { data } = await useFetch("/api/admin/auth/validate");
  adminAuthState.value = data._rawValue.valid;
}

async function logout() {
  await $fetch("/api/admin/auth/logout");
  validateAuth();
}

async function fetchContent() {
  if (contentType.value === "#newsletter-subscriptions") {
    const { data } = await useFetch("/api/forms/newsletter");
    content = data.value;
  }
}

onMounted(() => {
  setTimeout(() => {
    validateAuth();
  }, 10);

  (() => {
    let oldPushState = history.pushState;
    history.pushState = function pushState() {
      let ret = oldPushState.apply(this, arguments);
      window.dispatchEvent(new Event("pushstate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    };

    let oldReplaceState = history.replaceState;
    history.replaceState = function replaceState() {
      let ret = oldReplaceState.apply(this, arguments);
      window.dispatchEvent(new Event("replacestate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    };

    window.addEventListener("popstate", () => {
      window.dispatchEvent(new Event("locationchange"));
    });
  })();

  window.addEventListener("locationchange", function () {
    setTimeout(() => {
      contentType.value = useRoute().hash;
      fetchContent();
    }, 100);
  });
});
</script>

<style scoped></style>
