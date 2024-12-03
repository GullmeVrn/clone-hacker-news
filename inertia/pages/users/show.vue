<script setup lang="ts">
import type { InferPageProps } from '@adonisjs/inertia/types'
import type UsersController from '#controllers/users_controller'

defineProps<{
    user: InferPageProps<UsersController, 'show'>['user']
}>()
</script>

<template>
    <div class="text-sm">
        <p class="text-dimmed">
            user: <span class="text-black">{{ user.name }}</span>
        </p>

        <ul>
            <li v-for="post in user.posts" :key="post.id">
                {{ post.title }}
            </li>
        </ul>
    </div>
</template>
