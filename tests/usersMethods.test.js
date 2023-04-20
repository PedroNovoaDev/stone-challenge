const dynamodb = require('../database/dynamoDB');
const { addNewUser, searchUserById } = require('../controllers/usersMethods');

jest.mock('../database/dynamoDB');

describe('addNewUser', () => {
    it('should add a new user and return a 200 status code', async () => {
        const req = { body: { id: '999', name: 'My test', password: 'password123' } };
        const res = { sendStatus: jest.fn() };

        dynamodb.addNewUser.mockResolvedValueOnce();

        await addNewUser(req, res);

        expect(res.sendStatus).toHaveBeenCalledWith(200);
        expect(dynamodb.addNewUser).toHaveBeenCalledWith(req.body);
    });
});

describe('searchUserById', () => {
    it('should return the correct user information and return a 200 status code', async () => {
        const req = { query: { id: '999' } };
        const res = { sendStatus: jest.fn(), json: jest.fn() };
        const user = { id: '999', name: 'My test', password: 'password123' };

        dynamodb.searchUserById.mockResolvedValueOnce(user);

        await searchUserById(req, res);

        expect(res.json).toHaveBeenCalledWith(user);
        expect(dynamodb.searchUserById).toHaveBeenCalledWith(req.query.id);
    });
});
