<script setup lang="ts">
import type PostsController from '#controllers/posts_controller'
import type { InferPageProps } from '@adonisjs/inertia/types'

defineProps<{
    posts: InferPageProps<PostsController, 'index'>['posts']
}>()
</script>

<template>
    <section class="my-2.5 space-y-1">
        <article v-for="post in posts.data" :key="post.id">
            <header>
                <span class="text-sm text-dimmed text-right"> {{ post.id }}. ▲ </span>
                <a :href="post.url" class="text-sm font-medium text-black">{{ post.title }}</a>
                <span class="text-2xs text-dimmed">
                    (<a :href="post.url" class="hover:underline">{{ post.url }}</a
                    >)
                </span>
            </header>

            <p class="flex gap-1 text-3xs text-dimmed font-medium">
                <span>213 points</span>

                by

                <Link :href="`/users/${post.user.id}`" class="hover:underline">
                    {{ post.user.name }}
                </Link>

                <time class="hover:underline">{{ post.timeAgo }}</time>
            </p>
        </article>
    </section>
</template>
