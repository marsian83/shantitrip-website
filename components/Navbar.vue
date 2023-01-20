<template>
  <header class="fixed z-50 mobile:bottom-0">
    <nav
      class="navbar flex flex-row justify-between p-page py-4 w-screen mobile:px-6 mobile:py-2"
    >
      <div class="navbar-branding left widescreen-only">
        <NuxtLink to="/">
          <img
            src="/header.webp"
            class="h-12"
            id="header-logo"
            alt="ShantiTrip Holidays logo"
          />
        </NuxtLink>
      </div>
      <div class="right widescreen-only">
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
            <NuxtLink to="/gallery">Gallery</NuxtLink>
          </li>
          <li class="navbar-item">
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
          <li class="navbar-item">
            <NuxtLink to="/agents">Collaborate</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="mobile-navbar mobile-only w-full">
        <ul class="navbar-items flex flex-row items-center justify-between">
          <li class="navbar-item">
            <NuxtLink to="/trips">
              <span class="material-icons">&#xe539;</span>
              <p>Trips</p>
            </NuxtLink>
          </li>
          <li class="navbar-item">
            <NuxtLink to="/contact">
              <span class="material-icons">&#xe61d;</span>
              <p>Contact</p>
            </NuxtLink>
          </li>
          <li class="navbar-item relative">
            <NuxtLink to="/" class="mobile-nav-logo">
              <img src="/logo.webp" alt="shantitrip-logo" class=""
            /></NuxtLink>
          </li>
          <li class="navbar-item">
            <NuxtLink to="/gallery">
              <span class="material-icons">&#xe413;</span>
              <p>Gallery</p></NuxtLink
            >
          </li>
          <li class="navbar-item">
            <NuxtLink to="/agents">
              <span class="material-icons">&#xebcb;</span>
              <p>Collab</p>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="mobile-only mobile-navbar"></nav>
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
  @apply bg-transparent pb-[8vh] mb-[-6vh] mobile:hidden;
}
.navbar.nav-fix {
  @apply bg-background;
  box-shadow: 0px -2px 6px rgb(var(--text-primary));
}
.navbar-item {
  @apply text-[1.2rem] mobile:text-base mobile:font-semibold;
}
.navbar-item a {
  @apply flex flex-col items-center gap-y-1;
}
.navbar-item span {
  @apply mobile:p-1;
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
.navbar .navbar-item a {
  @apply widescreen:hover:color-primary transition-300;
}
.navbar-item:has(.router-link-exact-active) {
  @apply widescreen:hidden;
}
.navbar-item:has(.router-link-exact-active) span,
.navbar-item:has(.router-link-exact-active) p {
  @apply mobile:color-primary;
}
.router-link-exact-active {
  @apply mobile:color-primary;
}
.mobile-nav-logo {
  @apply bg-background rounded-full aspect-square border-t border-black;
  transform: translateY(-2rem) scale(3.4);
}
.mobile-nav-logo img {
  @apply w-5 aspect-square object-contain;
}
</style>
