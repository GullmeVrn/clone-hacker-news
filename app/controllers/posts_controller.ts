import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import Post from '#models/post'
import { PostsPresenter } from '#presenters/posts_presenter'
import { PostPresenter } from '#presenters/post_presenter'

export default class PostsController {
    @inject()
    async index({ inertia, request }: HttpContext, presenter: PostsPresenter) {
        const page = request.input('page', 1)

        const posts = await Post.query().preload('user').paginate(page, 30)

        return inertia.render('posts/index', {
            posts: presenter.toJson(posts),
        })
    }

    @inject()
    async show({ params, inertia }: HttpContext, presenter: PostPresenter) {
        const post = await Post.query().preload('user').where('id', params.id).firstOrFail()

        return inertia.render('posts/show', {
            post: presenter.toJson(post),
        })
    }
}
