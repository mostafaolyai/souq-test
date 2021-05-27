const request = require('supertest')
const app = require('../index')

describe('Post Coupon', () => {
    it('should create a new post', async () => {
      const res = await request(app)
        .get('/api/coupon?productId=12&price=2000&code=souq1&userId=5')
        .expect(404);
    })
  })