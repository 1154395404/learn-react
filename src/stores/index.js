import React from "react"
import counter from "./counterStore"
import listStore from "./listStore"

class RootStore {
  constructor() {
    this.counterStore = counter
    this.listStore = listStore
  }
}

const rootStore = new RootStore()

const context = new React.createContext(rootStore)
export const useStore = () => React.useContext(context)