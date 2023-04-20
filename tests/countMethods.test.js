const axios = require('axios');
const { showTonVisitCount, incrementTonVisitCount } = require('../controllers/countMethods');

jest.mock('axios');

describe('showTonVisitCount function', () => {
  it('should return the ton visit count if the API call is successful', async () => {
    const response = {
      data: {
        value: 10000,
      },
    };
    axios.get.mockResolvedValue(response);

    const req = {};
    const res = {
      send: jest.fn(),
      status: jest.fn(),
    };
    res.status.mockReturnValue(res);

    await showTonVisitCount(req, res);

    expect(res.send).toHaveBeenCalledWith(response.data);
  });
});

describe('incrementTonVisitCount function', () => {
  it('should return the incremented ton visit count if the API call is successful', async () => {
    const response = {
      data: {
        value: 10001,
      },
    };
    axios.get.mockResolvedValue(response);

    const req = {};
    const res = {
      send: jest.fn(),
      status: jest.fn(),
    };
    res.status.mockReturnValue(res);

    await incrementTonVisitCount(req, res);

    expect(res.send).toHaveBeenCalledWith(response.data);
  });
});