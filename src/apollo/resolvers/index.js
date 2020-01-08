import { mergeResolvers } from './utils'
import { BookResolver } from '../Book'

const resolvers = mergeResolvers([
  BookResolver
])

export default resolvers
