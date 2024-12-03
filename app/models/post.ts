import User from '#models/user'
import { BaseModel, belongsTo, column, computed } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'

export default class Post extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @computed()
    get timeAgo() {
        return this.createdAt.toRelative()
    }

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @column()
    declare title: string

    @column()
    declare content: string

    @column()
    declare url: string

    @column()
    declare userId: number

    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>
}
