const request = require('supertest');


describe('The User API', () => {


    it('Returns the list of all users', async () => {

        const res = await request('http://127.0.0.1:3000')
        .get('api/users/list')
        .expect(200)
        .expect('Content-Type', "application/json");



        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body[0].userName).toBe('administrator');
    })
})


