import type { Middleware } from './middleware.ts'
import type { UseCase } from './use-case.ts'

export class ErrorMiddleware implements Middleware {
  async intercept(params: unknown, useCase: UseCase<unknown, unknown>): Promise<unknown> {
    try {
      const result = await useCase.handle(params)
      return result
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message)
      }
      throw error
    }
  }
}
