import type { Middleware } from './middleware.ts'
import type { UseCase } from './use-case.ts'

export class UseCaseHandler implements UseCase<unknown, unknown> {
  constructor(
    readonly useCase: UseCase<unknown, unknown>,
    private readonly middleware: Middleware,
  ) {}

  async handle(params: unknown): Promise<unknown> {
    return this.middleware.intercept(params, this.useCase)
  }
}
