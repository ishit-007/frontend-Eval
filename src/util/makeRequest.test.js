import {makeRequest,BACKEND_URL} from './makeRequest';
import axios from 'axios';
jest.mock('axios');


describe('Util MakeRequest', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should make API call when only endpoint is passed', async () => {
    const mockEndpoint = {
      method: 'GET',
      url: 'api/records'
    };
    const mockNavigate = jest.fn();
    const mockData = { data: { title: 'test' } };
    axios.mockResolvedValue(mockData);
    expect(axios).toHaveBeenCalledTimes(0);
    await makeRequest(mockEndpoint, {}, mockNavigate);
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: mockEndpoint.url,
      method: mockEndpoint.method
    });
  });
});
