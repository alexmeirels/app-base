/**
 * @format
 */

import { api, axiosInstance } from '../src/services/api';

describe('api', () => {
  it('returns data from axios response in get', async () => {
    const getMock = jest.spyOn(axiosInstance, 'get').mockResolvedValue({
      data: { ok: true },
      headers: {},
      status: 200,
      statusText: 'OK',
      config: { headers: undefined },
    });

    const result = await api.get<{ ok: boolean }>('/health');

    expect(getMock).toHaveBeenCalledWith('/health', undefined);
    expect(result).toEqual({ ok: true });
  });
});
