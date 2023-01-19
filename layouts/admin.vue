<template>
  <div
    class="fixed bottom-4 right-4 text-center z-30 text-white bg-black bg-opacity-40 backdrop-blur p-2 rounded-xl hover:bg-opacity-80 transition-300"
  >
    <a href="https://nuxtjs.org" class="cursor-pointer hover:text-green-200 transition"> Powered by Nuxt3 </a>
    <br />
    <a href="https://marsian-portfolio.vercel.app" class="cursor-pointer hover:text-blue-200 transition">
      Developed by Spandan Barve
    </a>
  </div>
  <main class="relative flex flex-row">
    <div class="fixed top-0 left-0">
      <AdminNavigation />
    </div>
    <div class="opacity-0">
      <AdminNavigation />
    </div>
    <div class="w-full">
      <slot />
    </div>
  </main>
</template>
