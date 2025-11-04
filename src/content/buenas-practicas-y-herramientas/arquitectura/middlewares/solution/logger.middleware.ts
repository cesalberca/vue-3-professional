import type { Middleware } from './middleware.ts'
import type { UseCase } from './use-case.ts'

export class LoggerMiddleware implements Middleware {
  async intercept(params: unknown, useCase: UseCase<unknown, unknown>): Promise<unknown> {
    console.log('Logging use case:', useCase.constructor.name)
    console.log('Logging params:', params)
    console.time(useCase.constructor.name)
    const result = await useCase.handle(params)
    console.timeEnd(useCase.constructor.name)
    console.log('Logging result:', result)
    return result
  }
}
