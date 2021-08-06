const {fetchGet, fetchPost, debug} = require('./base');
const basePath = '/';
describe(basePath, () => {
  test('首页测试', async() => {
    const pa = 'index';
    const body = await fetchGet(basePath + pa, {});
    debug('%s: %j', pa, body);
    expect(body.errno).toBe(0);
  });
});
