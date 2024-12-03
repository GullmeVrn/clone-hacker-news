import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { inject } from '@adonisjs/core'
import { UserPresenter } from '#presenters/user_presenter'

export default class UsersController {
    @inject()
    async show({ params, inertia }: HttpContext, presenter: UserPresenter) {
        const user = await User.query()
            .preload('posts', (query) => {
                query.groupLimit(3)
            })
            .where('id', params.id)
            .firstOrFail()

        return inertia.render('users/show', {
            user: presenter.toJson(user),
        })
    }
}
