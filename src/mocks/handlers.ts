import { rest } from 'msw'
import { states, departments } from '../data/selectData'

const baseUrl = 'http://localhost:3000'

export const handlers = [
  rest.get(`${baseUrl}/states`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(states))
  }),
  rest.get(`${baseUrl}/departments`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(departments))
  }),
]
