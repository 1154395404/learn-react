
import { makeAutoObservable, computed } from "mobx"
class ListStore {
  count = 0
  list = []
  constructor() {
    makeAutoObservable(this, {
      recordCountState: computed
    })
  }


  add = () => {
    this.count++
    this.list.push(this.count)
  }
  sub = () => {
    this.count--
    this.list.push(this.count)
  }

  get recordCountState () {

    return this.list.join('-')

  }

}
const listStore = new ListStore()
export default listStore