<template>
  <header class="fixed z-50 mobile:bottom-0">
    <nav class="navbar flex flex-row justify-between p-page py-4 w-screen widescreen-only">
      <div class="navbar-branding left">
        <NuxtLink to="/">
          <img
            src="/header.webp"
            class="h-12"
            id="header-logo"
            alt="ShantiTrip Holidays logo"
          />
        </NuxtLink>
      </div>
      <div class="right">
        <ul class="navbar-items flex flex-row items-center h-full gap-12">
          <li class="navbar-item">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="navbar-item">
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li class="navbar-item">
            <NuxtLink to="/trips">Trips</NuxtLink>
          </li>
          <li class="navbar-item">
            <NuxtLink to="/destinations">Destinations</NuxtLink>
          </li>
          <li class="navbar-item">
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
          <li class="navbar-item">
            <NuxtLink to="/agents">For Agents</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
const noFixPages = ["destinations"];

onMounted(() => {
  const navbar = document.querySelector(".navbar");
  const fixNavbar = () => {
    if (window.scrollY > 49) {
      let { name: routeName } = useRoute();
      if (!noFixPages.includes(routeName)) {
        navbar.classList.add("nav-fix");
      }
    } else {
      navbar.classList.remove("nav-fix");
    }
  };
  window.addEventListener("scroll", fixNavbar);
});
</script>

<style scoped>
.navbar {
  transition: 300ms ease;
}
.navbar:not(.nav-fix) {
  background-color: transparent;
  padding-bottom: 8vh;
  margin-bottom: -6vh;
}
.navbar.nav-fix {
  background-color: rgba(var(--background));
  box-shadow: 0px -2px 6px rgb(var(--text-primary));
}
.navbar-item {
  font-size: 1.2rem;
}
.navbar:not(.nav-fix) .navbar-branding {
  filter: brightness(0) invert(1);
}
.navbar:not(.nav-fix) .navbar-item a {
  color: rgb(var(--text-secondary));
}
.navbar.nav-fix .navbar-branding {
  filter: brightness(1) invert(0);
}
.navbar.nav-fix .navbar-item a {
  color: rgb(var(--text-primary));
}
.navbar .navbar-item a:hover {
  color: rgb(var(--primary));
  transition: 300ms;
}
.navbar-item:has(.router-link-exact-active) {
  display: none;
}
</style>
