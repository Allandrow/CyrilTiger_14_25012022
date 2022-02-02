import { rest } from 'msw'
import { states, departments, employees } from '../data/selectData'
import { Employee } from '../data/types'

export const handlers = [
  rest.get('/states', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(states))
  }),
  rest.get('/departments', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(departments))
  }),
  rest.post('/employees', (req, res, ctx) => {
    employees.push(req.body as Employee)
    return res(ctx.status(200))
  }),
  rest.get('/employees', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(employees))
  }),
]
