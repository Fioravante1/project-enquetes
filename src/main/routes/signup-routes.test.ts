import request from 'supertest'
import { MongoHelper } from '../../infra/db/mondodb/helpers/mongo-helper'

import app from '../config/app'

describe('Signup Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  test('Should return an account success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Fioravante',
        email: 'junior.chiozzi@gmail.com',
        password: '123456',
        passwordConfirmation: '123456'
      })
      .expect(200)
  })
})
