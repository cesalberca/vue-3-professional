import { UseCaseService } from './use-case-service.ts'
import { GetTodoQry } from './get-todo.qry.ts'
import type { Middleware } from './middleware.ts'
import { LoggerMiddleware } from './logger.middleware.ts'
import { ErrorMiddleware } from './error.middleware.ts'

const middlewares: Middleware[] = [new LoggerMiddleware(), new ErrorMiddleware()]
export const useCaseService = new UseCaseService(middlewares)
export const getTodoQry = new GetTodoQry()
