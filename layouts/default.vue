<template>
    <div>
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <NuxtLink to="/">
                    <span class="font-semibold text-xl tracking-tight">Kathryn Oliveira</span>
                </NuxtLink>
                <NuxtLink v-for="rota in rotasSistemas()" :key="rota.nome" :to="rota.path">
                    <span class="mx-4 text-small tracking-tight">{{ rota.nome }}</span>
                </NuxtLink>

            </div>
            <div class="block lg:hidden">
                <button
                    class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                    @click="toggleMenu">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path :class="{ hidden: isOpen, 'inline-block': !isOpen }" class="fill-current"
                            d="M0 0h20v20H0z" />
                        <path :class="{ hidden: !isOpen, 'inline-block': isOpen }" class="fill-current"
                            d="M0 0h20v20H0z" />
                    </svg>
                </button>
            </div>
            <div :class="{ hidden: !isOpen, block: isOpen }"
                class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <!-- <NuxtLink v-for="rota in rotasSistemas()" :key="rota.nome" :to="rota.path"
                        class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        {{ rota.nome }}
                    </NuxtLink> -->
                </div>
                <div class="flex items-center">
                    <ClientOnly>
                        <UButton :icon="isDark
                            ? 'i-heroicons-moon-20-solid'
                            : 'i-heroicons-sun-20-solid'
                            " color="gray" variant="ghost" aria-label="Theme" @click="isDark = !isDark" />

                        <template #fallback>
                            <div class="w-8 h-8" />
                        </template>
                    </ClientOnly>
                    <select v-model="locale" class="ml-8">
                        <option value="pt">pt</option>
                        <option value="en">en</option>
                    </select>
                    <ClientOnly v-if="loggedIn">
                        <LayoutUsuario class="mx-2" />
                    </ClientOnly>
                </div>
            </div>
        </nav>

        <!-- <select v-model="locale">
            <option value="pt">pt</option>
            <option value="en">en</option>
        </select> -->
        <UContainer class="my-4">
            <slot></slot>
        </UContainer>
        <UDivider label="Kathryn Oliveira" :ui="{ label: 'text-primary-500 dark:text-primary-400' }">

        </UDivider>
        Rodapé Padrão
    </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const isOpen = ref(false);
const colorMode = useColorMode()
const { user, clear, loggedIn} = useUserSession()

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
}

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})

</script>

<style lang="scss" scoped></style>