// /graphql/resolvers.ts
export const resolvers = {
  Query: {
    counters: (_parent, _args, ctx) => {
      return ctx.prisma.counter.findMany()
    },
  },
}
