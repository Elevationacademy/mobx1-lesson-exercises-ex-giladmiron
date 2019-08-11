import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    @action addItem = (name) => {
        let newItem = new Item(name)
        this.list.push(newItem)
    }
    @action editItem = (itemName, newLocation) => {
        let item = this.list.find(i => i.name == itemName)
        item.location = newLocation
    }
    @action deleteItem = (itemName) => {
        for (let i in this.list) {
            if (this.list[i].name == itemName)
                this.list.splice(i, 1)
        }
    }
}

