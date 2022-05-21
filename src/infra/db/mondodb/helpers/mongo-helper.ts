import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  connection: null as MongoClient,

  async connect (uri: string): Promise<void> {
    this.connection = await MongoClient.connect(process.env.MONGO_URL)
  },

  async disconnect (): Promise<void> {
    await this.connection.close()
  },

  getCollection (name: string): Collection {
    return this.connection.db().collection(name)
  },

  map (collection: any): any {
    const { _id, ...collectionID } = collection
    return Object.assign({}, collectionID, { id: String(_id) })
  }
}
