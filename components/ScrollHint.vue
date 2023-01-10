<template>
  <div class="flex flex-col items-center">
    <span class="material-icons head-scroll-down" id="head-scroll-down1">
      &#xe5cf;
    </span>
    <span class="material-icons head-scroll-down" id="head-scroll-down2">
      &#xe5cf;
    </span>
    <span class="material-icons head-scroll-down" id="head-scroll-down3">
      &#xe5cf;
    </span>
    <h5 class="text-secondary text-xl font-extralight tracking-widest">
      SCROLL DOWN
    </h5>
  </div>
</template>

<script setup></script>

<style scoped>
.head-scroll-down {
  @apply absolute bottom-20 text-secondary text-3xl;
}

#head-scroll-down1 {
  animation: head-scroll-down1-animation;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
}
@keyframes head-scroll-down1-animation {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
}

#head-scroll-down2 {
  animation: head-scroll-down2-animation;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
}
@keyframes head-scroll-down2-animation {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(100%);
  }
}

#head-scroll-down3 {
  animation: head-scroll-down3-animation;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
}
@keyframes head-scroll-down3-animation {
  from {
    opacity: 1;
    transform: translateY(100%);
  }
  to {
    opacity: 0;
    transform: translateY(+200%);
  }
}
</style>
