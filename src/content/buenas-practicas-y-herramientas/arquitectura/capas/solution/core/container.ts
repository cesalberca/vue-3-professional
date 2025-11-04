import { FetchHttpClient } from './fetch-http-client.ts'
import { UseCaseService } from './use-case-service.ts'
import {TodoApiRepository} from "../../base/todo.api-repository.ts";
import {GetTodosQry} from "../../base/get-todos.qry.ts";

export const httpClient = new FetchHttpClient('https://jsonplaceholder.typicode.com')
export const todoRepository = new TodoApiRepository(httpClient)
export const getTodosQry = new GetTodosQry(todoRepository)
export const useCaseService = new UseCaseService()
