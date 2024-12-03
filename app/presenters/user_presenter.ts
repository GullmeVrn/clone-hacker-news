import User from '#models/user'

export class UserPresenter {
    toJson(user: User) {
        return {
            id: user.id,
            name: user.fullName,
            email: user.email,
            posts: user.posts.map((post) => ({
                id: post.id,
                timeAgo: post.createdAt.toRelative(),
                title: post.title,
                content: post.content,
                url: post.url,
            })),
        }
    }
}
