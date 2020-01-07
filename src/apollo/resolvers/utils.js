const mergeResolvers = (resolversArray) => {
  let ResolverFinal = {}
  resolversArray.forEach((resolver) => {
    const { Mutation: MutationFinal, Query: QueryFinal, ...RestFinal } = ResolverFinal
    const { Mutation, Query, ...rest } = resolver

    ResolverFinal = {
      Mutation: {
        ...MutationFinal,
        ...Mutation
      },
      Query: {
        ...QueryFinal,
        ...Query
      },
      ...RestFinal,
      ...rest
    }
  })

  return ResolverFinal
}

var mongoObjectId = function () {
  var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
      return (Math.random() * 16 | 0).toString(16);
  }).toLowerCase();
};

export {
  mergeResolvers,
  mongoObjectId
}