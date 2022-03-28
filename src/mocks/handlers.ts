import { rest } from 'msw'
import { states, departments, employees } from '../data'
import { Employee } from '../types'

export const handlers = [
  rest.get('/states', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(states))
  }),
  rest.get('/departments', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(departments))
  }),
  rest.post('/employees', (req, res, ctx) => {
    const employee = { ...(req.body as Employee) }

    // construct unique key from object values + remove spaces inside the string
    const key = Object.values(employee)
      .reduce((str, value) => (str += value), '')
      .replace(/\s+/g, '')

    employees.push({ ...employee, key })

    return res(ctx.status(200), ctx.json(employees))
  }),
  rest.get('/employees', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(employees))
  }),
]
