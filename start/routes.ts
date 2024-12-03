/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const PostsController = () => import('#controllers/posts_controller')
const UsersController = () => import('#controllers/users_controller')

router.get('/', [PostsController, 'index'])
router.get('/posts/:id', [PostsController, 'show'])

router.get('/users/:id', [UsersController, 'show'])
