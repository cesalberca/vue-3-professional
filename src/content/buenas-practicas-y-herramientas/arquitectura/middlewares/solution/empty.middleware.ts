import type { Middleware } from './middleware.ts'
import type { UseCase } from './use-case.ts'

export class EmptyMiddleware implements Middleware {
  async intercept(params: unknown, useCase: UseCase<unknown, unknown>): Promise<unknown> {
    const result = await useCase.handle(params)
    return result
  }
}
