<template>
  <main class="relative flex flex-row">
    <div class="fixed top-0 left-0">
      <div
        class="flex flex-col bg-[#00000021] w-max items-center justify-evenly gap-y-16 h-screen px-3 text-lg"
      >
        <button name="contact" class="admin-nav-btn">Contact requests</button>
        <button name="newsletter" class="admin-nav-btn">
          Newsletter subscriptions
        </button>
        <button name="collaboration" class="admin-nav-btn">
          Collaboration offers
        </button>
        <button
          class="bg-red-600 text-white rounded-xl p-1"
          onclick="alert('Disabled')"
        >
          Configuration (Danger)
        </button>
      </div>
    </div>
    <div class="opacity-0 pointer-events-none">
      <div
        class="flex flex-col bg-[#00000021] w-max items-center justify-evenly gap-y-16 h-screen px-3 text-lg"
      >
        <NuxtLink to="#contact-requests">Contact requests</NuxtLink>
        <NuxtLink to="#newsletter-subscriptions"
          >Newsletter subscriptions</NuxtLink
        >
        <NuxtLink to="#collaboration-offers">Collaboration offers</NuxtLink>
        <NuxtLink
          to="#configuration"
          class="bg-red-600 text-white rounded-lg p-2"
          >Configuration (Danger)</NuxtLink
        >
      </div>
    </div>
    <div class="w-full">
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
        <!-- <section class="content p-2" :key="content" v-if="adminAuthState">
      <h1 class="opacity-70">showing {{ contentType }}</h1>
      <div class="">
        <p v-if="!content.length" class="text-red-500 text-center text-3xl">loading...</p>
        <p v-for="data in content">
          {{ JSON.stringify(data) }}
        </p>
      </div>
    </section> -->
        <div class="content p-2" :key="showing">
          <section v-if="showing == 'contact'" class="flex flex-col gap-y-8">
            <h1 class="mt-3 mb-5 font-semibold text-2xl">Contact Requests</h1>
            <p v-for="data in contactData" class="shadow-md p-4">
              Name : {{ data.name }}
              <br />
              Email : {{ data.email }}
              <br />
              <span v-if="data.message">Message : {{ data.message }}</span>
            </p>
          </section>
          <section v-if="showing == 'newsletter'" class="flex flex-col gap-y-8">
            <h1 class="mt-3 mb-5 font-semibold text-2xl">
              Newsletter Subscriptions
            </h1>
            <p v-for="data in newsletterData" class="shadow-md p-4">
              Email : {{ data.email }}
            </p>
          </section>
          <section
            v-if="showing == 'collaboration'"
            class="flex flex-col gap-y-8"
          >
            <h1>Collaboration Offers</h1>
            <p v-for="data in collaborationData">
              {{ JSON.stringify(data) }}
            </p>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
definePageMeta({ layout: "admin" });

let adminAuthState = ref(false);

let { data: contactData } = useFetch("/api/forms/contact");
contactData = contactData.value;
let { data: newsletterData } = useFetch("/api/forms/newsletter");
newsletterData = newsletterData.value;

let collaborationData = [];

// async function fetchCollaborationData(){
//   const {data} = useFetch('/api/forms/collaboration')
// }

async function validateAuth() {
  const { data } = await useFetch("/api/admin/auth/validate");
  adminAuthState.value = data._rawValue.valid;
}

async function logout() {
  await $fetch("/api/admin/auth/logout");
  validateAuth();
}

let showing = ref("");

onMounted(() => {
  setTimeout(() => {
    validateAuth();
  }, 10);

  const navBtns = document.querySelectorAll(".admin-nav-btn");

  navBtns.forEach((e) => {
    e.addEventListener("click", () => {
      showing.value = e.name;
      navBtns.forEach((b) => b.classList.remove("selected"));
      e.classList.add("selected");
    });
  });
});
</script>

<style scoped>
.admin-nav-btn.selected {
  color: red;
}
</style>
