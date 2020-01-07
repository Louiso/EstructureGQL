import Home from './views/Home'
import { mergeResolvers } from './utils'

const resolvers = mergeResolvers([
  Home
])

export default resolvers
