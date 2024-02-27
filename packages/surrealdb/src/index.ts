import { Surreal } from 'surrealdb.wasm'

export function surrealdb() {
  var db: Surreal = new Surreal()

  async function init() {
    try {        
      // Connect to the database
      // await db.connect("ws://127.0.0.1:8000")
      // await db.connect('mem://', { user: { username: "root", password: "root" } })
      await db.connect('indxdb://mbr', { user: { username: "root", password: "root" } })

      // Signin as a namespace, database, or root user
      await db.signin({
        username: "root",
        password: "root",
      })
      
      // Select a specific namespace / database
      await db.use({ namespace: "test", database: "test" })
    } catch(e) {
      console.log(e)
    }
  }

  function info() {
    try {
      return db.version()
    } catch (e) {
      console.error("ERROR", e)
    }
  }

  init()

  return {
    db,
    info
  }
}
