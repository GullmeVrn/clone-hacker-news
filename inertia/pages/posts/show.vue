<script setup lang="ts">
import type PostsController from '#controllers/posts_controller'
import type { InferPageProps } from '@adonisjs/inertia/types'

defineProps<{
    post: InferPageProps<PostsController, 'show'>['post']
}>()
</script>

<template>
    <article>
        <header>
            <h1>{{ post.title }}</h1>
        </header>
    </article>
</template>
