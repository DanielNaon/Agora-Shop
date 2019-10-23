import { observable, computed} from 'mobx'
export class Item{
    @observable name
    @observable price = 0
    @observable quantity = 1
    
    constructor(newName){
        this.name = newName
    }
}