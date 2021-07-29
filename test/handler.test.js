const handler = require('../src/handler');
const { parse } = require('../src/utils');

it('test script running', async () => {
  const result = await handler.run();
  const status = result.statusCode;
  const { response } = parse(result.body);
  expect(200).toEqual(status);
  expect('ran some script').toEqual(response);
});
