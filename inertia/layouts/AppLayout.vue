<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<template>
    <div class="m-1.5">
        <header class="container mx-auto">
            <AppHeader />
        </header>

        <main class="container mx-auto">
            <div class="flex flex-col bg-elevated">
                <slot />
            </div>
        </main>

        <footer class="container mx-auto">
            <AppFooter />
        </footer>
    </div>
</template>
