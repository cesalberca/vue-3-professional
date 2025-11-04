import type { UseCase } from './use-case.ts'

export class UseCaseService {
  execute<In, Out>(useCase: UseCase<In, Out>, params?: In): Promise<Out> {
    return useCase.handle(params)
  }
}
