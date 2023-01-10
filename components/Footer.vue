<template>
  <footer class="p-page pb-5 bg-foreground mt-60">
    <div class="CTA-block bg-background w-max p-8 mx-auto rounded-md">
      <h2 class="text-3xl font-bold text-center">
        Feeling <span class="color-primary">Left</span> Out?
      </h2>
      <p class="my-5 italic opacity-80">
        Every once in a while, we send out a newsletter featuring the latest and
        best in travel. Subscribe to never miss out.
      </p>
      <div class="flex flex-row justify-evenly h-10">
        <input
          type="email"
          class="border-2 border-solid border-[rgb(var(--foreground))] rounded-md px-2 basis-[73%]"
          placeholder="Enter your email"
          autocomplete="email"
        />
        <button
          class="btn-secondary m-0 px-2 py-0 border-2 border-solid border-[rgb(var(--primary))] basis-[20%]"
        >
          Subscribe
        </button>
      </div>
    </div>
    <div class="w-max">
      <NuxtLink to="/">
        <img
          src="/header.webp"
          class="footer-branding h-20 invert brightness-0"
          alt="shantitrip-flat-logo"
        />
      </NuxtLink>
    </div>
    <div class="content flex flex-col text-secondary">
      <p class="text-3xl opacity-60 mt-2 self-center">Useful Links</p>
      <div class="links flex flex-row justify-evenly mt-8">
        <div class="flex flex-col">
          <NuxtLink to="/terms-and-conditions">Terms & Conditions</NuxtLink>
          <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
          <NuxtLink to="/cookie-policy">Cookie Policy</NuxtLink>
        </div>
        <div class="flex flex-col">
          <NuxtLink to="/destinations">Destinations</NuxtLink>
          <NuxtLink to="/trips">Trips</NuxtLink>
        </div>
        <div class="flex flex-col">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About Us</NuxtLink>
          <NuxtLink to="/help">Help</NuxtLink>
        </div>
        <div class="flex flex-col">
          <NuxtLink to="/contact">Contact Us</NuxtLink>
          <NuxtLink to="/agents">Partner with us</NuxtLink>
          <NuxtLink to="/contact">Support</NuxtLink>
        </div>
      </div>
      <hr class="my-5" />
      <p class="self-center text-sm opacity-80 cursor-default">
        © 2023 ShantiTrip All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.CTA-block {
  box-shadow: 0px 0px 5px rgb(var(--text-primary), 0.38);
  transform: translateY(-50%);
}
.links a {
  @apply font-light text-secondary my-1 hover:opacity-75 hover:underline;
  transition: 200ms;
}
</style>
