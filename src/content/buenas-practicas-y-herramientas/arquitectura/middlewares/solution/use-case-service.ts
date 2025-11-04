import type { UseCase } from './use-case.ts'
import type { Middleware } from './middleware.ts'
import { UseCaseHandler } from './use-case-handler.ts'
import { EmptyMiddleware } from './empty.middleware.ts'

export class UseCaseService {
  constructor(private readonly middlewares: Middleware[]) {}

  execute<In, Out>(useCase: UseCase<In, Out>, params?: In): Promise<Out> | Out {
    let next = new UseCaseHandler(useCase, new EmptyMiddleware())

    for (let i = this.middlewares.length - 1; i >= 0; i--) {
      next = new UseCaseHandler(next, this.middlewares[i]!)
    }

    return next.handle(params) as Promise<Out>
  }
}
