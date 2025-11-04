import type { Query } from './use-case.ts'

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export class TodoNotFoundError extends Error {
  constructor() {
    super('Todo not found')
  }
}

export class GetTodoQry implements Query<Todo, { id: number }> {
  async handle({ id }: { id: number }): Promise<Todo> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if (!res.ok) throw new TodoNotFoundError()
    return (await res.json()) as Todo
  }
}
