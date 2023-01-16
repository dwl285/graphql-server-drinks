export type Db = {
  drinkRecords: DrinkRecord[]
}

export type DrinkRecord = {
  id: string
  drinks: bigint
  name: string
  createdAt: bigint
}


/**
* Mock (in-memory) db implementation
* Restart will clear the data 🙁
* DO NOT use it in production ❗️
*/
export const db: Db = {
  drinkRecords: []
}
