import Post from '#models/post'
import { inject } from '@adonisjs/core'
import type { ModelPaginatorContract } from '@adonisjs/lucid/types/model'

@inject()
export class PostsPresenter {
    toJson(posts: ModelPaginatorContract<Post>) {
        const meta = posts.getMeta()

        return {
            meta: {
                total: meta.total,
                perPage: meta.perPage,
                currentPage: meta.currentPage,
                lastPage: meta.lastPage,
                firstPage: meta.firstPage,
                firstPageUrl: meta.firstPageUrl,
                lastPageUrl: meta.lastPageUrl,
                nextPageUrl: meta.nextPageUrl,
                previousPageUrl: meta.previousPageUrl,
            },
            data: posts.all().map((post) => ({
                id: post.id,
                timeAgo: post.createdAt.toRelative(),
                title: post.title,
                content: post.content,
                url: post.url,
                user: {
                    id: post.user.id,
                    name: post.user.fullName,
                },
            })),
        }
    }
}
