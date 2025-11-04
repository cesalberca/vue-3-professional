import type { UseCase } from './use-case.ts'

export interface Middleware {
  intercept(params: unknown, useCase: UseCase<unknown, unknown>): Promise<unknown>
}
