<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.5s;
}

.layout-enter-from,
.layout-leave-to {
  transform: translateX(100%);
  filter: grayscale(1)
}
</style>