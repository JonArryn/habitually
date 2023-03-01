import { rest, RestHandler } from 'msw';

const buildEndpoint = (path: string): string =>
  `${process.env.REACT_APP_DEV_API_URL}${path}`;

const _mockAnyEndpoint = (
  endpointPath: string,
  statusCode = 200,
  mockData?: any,
  method: keyof typeof rest = 'get'
): RestHandler => {
  return rest[method](buildEndpoint(endpointPath), (_, res, ctx) => {
    return res(ctx.status(statusCode), ctx.json(mockData));
  });
};

const mockGetEndpoint = (
  endpointPath: string,
  statusCode?: number,
  mockData?: any
): RestHandler => {
  return _mockAnyEndpoint(endpointPath, statusCode, mockData, 'get');
};

export { mockGetEndpoint };
