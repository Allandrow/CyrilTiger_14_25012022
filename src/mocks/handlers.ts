import { rest } from 'msw'
import { states, departments } from '../data/selectData'

export const handlers = [
  rest.get('/states', (req, res, ctx) => {
    console.log(req.body, 'REQUEST')
    return res(ctx.status(200), ctx.json({ states }))
  }),
  rest.get('/departments', (req, res, ctx) => {
    console.log(req.body, 'REQUEST')
    return res(ctx.status(200), ctx.json({ departments }))
  }),
]
