const request = require('supertest')
const app = require('../index')

describe('Post Coupon', () => {
    it('not send productId=12', async () => {
      const res = await request(app)
        .get('/api/coupon?price=2000&code=souq1&userId=5')
        .expect(400);
    })

    it('User 5 Recieved 200 Off For p1', async () => {
      const res = await request(app)
        .get('/api/coupon?productId=12&price=2000&code=souq1&userId=5')
        .expect(200);
    })

    it('Coupon isnt for cate', async () => {
      const res = await request(app)
        .get('/api/coupon?productId=12&price=2000&code=souq2&userId=5')
        .expect(400);
    })

    it('Coupon isnt for p1', async () => {
      const res = await request(app)
        .get('/api/coupon?productId=12&price=2000&code=souq3&userId=5')
        .expect(400);
    })

    it('Coupon Not Found!', async () => {
      const res = await request(app)
        .get('/api/coupon?productId=12&price=2000&code=souq4&userId=5')
        .expect(404);
    })

    it('Product Not Found!', async () => {
      const res = await request(app)
        .get('/api/coupon?productId=1200&price=2000&code=souq3&userId=5')
        .expect(404);
    })
  })