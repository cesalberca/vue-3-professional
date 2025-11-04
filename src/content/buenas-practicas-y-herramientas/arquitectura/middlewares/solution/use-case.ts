export interface UseCase<In = void, Out = void> {
  handle(input?: In): Promise<Out> | Out
}

export type Query<Out, In = void> = UseCase<In, Out>
export type Command<In = void> = UseCase<In, void>
