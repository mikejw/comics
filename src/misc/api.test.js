
import { callAPI } from './api';

describe('API', () => {
  test('Api fetches data', async () => {
    const [results, error] = await callAPI();
    expect(results.data.count).toEqual(20);
  });
});



