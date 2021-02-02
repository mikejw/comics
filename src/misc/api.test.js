
import { callAPI } from './api';

describe('API', () => {
  test('Api fetches data', async () => {
    const [results, error] = await callAPI();
    console.log(results.data.count);
    expect(results.data.count).toEqual(20);
  });
});



