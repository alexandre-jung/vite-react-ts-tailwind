import { rest } from 'msw';

const handlers = [
  rest.get('http://localhost:3000/api/users', (req, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.json({
        data: [
          { id: 2, name: 'alex' },
          { id: 5, name: 'emeline' },
          { id: 8, name: 'olive' },
        ],
      })
    );
  }),
];

export default handlers;
