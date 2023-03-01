import { setupServer } from 'msw/node';
import { mockHandlers } from './mockHandlers';

const server = setupServer(...Object.values(mockHandlers));

server.events.on('response:mocked', (res, reqId) => {
  const responseText = res.body;
  console.log('sent a mocked response', reqId, responseText);
});

export { server };
