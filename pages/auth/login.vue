<template>
  <section
    class="hero h-screen bg-cover p-page mobile:bg-left-bottom mobile:overflow-hidden"
  >
    <div class="flex justify-center h-full items-center mobile:flex-col">
      <div
        class="agent-form-container w-[80%] py-8 px-4 rounded-2xl bg-[rgba(var(--background),0.21)] shadow-lg justify-center items-center text-center backdrop-blur-sm mobile:w-full mobile:mb-10"
      >
        <form class="login-form flex flex-col gap-6">
          <h1 class="font-bold text-secondary text-center text-2xl">
            Login to ShantiTrip
          </h1>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Your Email Address"
            required
          />
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Choose a pasword"
            required
          />

          <button
            class="btn-primary self-center flex flex-row items-center gap-1"
          >
            Log me in!<span class="material-icons px-2">&#xea77;</span>
          </button>
        </form>
        <NuxtLink
          to="/auth/signup"
          class="text-secondary mt-14 underline hover:no-underline"
          >Dont have an account? Click here to signup</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { useSeoMeta } from "@unhead/vue";

import sha256 from "sha256/lib/sha256";

onMounted(() => {
  const form = document.querySelector("form.login-form");

  let fields = {};

  form.querySelectorAll("input").forEach((e) => {
    fields[e.name] = e;
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (fields.password.value.length < 6) {
      return alert("password too short");
    }
    let { data } = await useFetch("/api/auth/login", {
      method: "POST",
      body: {
        password: sha256(fields.password.value),
        email: fields.email.value,
      },
    });
    data = data.value;
    if (data.error && data.error.code == 11000) {
      return alert("User already exists");
    }
    if (data.code == 403) {
      return alert("WRONG PASSWORD");
    }
    if (data.code == 0) {
      window.location = "/";
    }
  });
});
</script>

<style scoped>
.hero {
  background-image: linear-gradient(
      to bottom,
      rgba(var(--text-primary), 0.49),
      transparent,
      rgba(var(--text-primary), 0.49)
    ),
    linear-gradient(
      to right,
      rgba(var(--text-primary), 0.83),
      transparent,
      rgba(var(--text-primary), 0.83)
    ),
    url("https://cdn.pixabay.com/photo/2021/07/27/11/22/mountains-6496638_1280.jpg");
  background-position: bottom;
  text-shadow: 0px 0px 8px rgba(var(--text-primary), 0.69);
}
input,
textarea,
select {
  @apply px-4 py-2 rounded-md text-lg;
}
</style>
