
import { makeAutoObservable, computed } from "mobx"
class CounterStore {
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
const counter = new CounterStore()
export default counter