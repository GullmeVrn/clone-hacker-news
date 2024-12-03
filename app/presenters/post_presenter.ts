import Post from '#models/post'

export class PostPresenter {
    toJson(post: Post) {
        return {
            id: post.id,
            timeAgo: post.createdAt.toRelative(),
            title: post.title,
            content: post.content,
            url: post.url,
            user: {
                id: post.user.id,
                name: post.user.fullName,
            },
        }
    }
}
