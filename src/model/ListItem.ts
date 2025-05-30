export interface Item {
    id: string,
    item: string,
    checked: boolean,
}
// Constuctor
export default class ListItem implements Item {
    constructor(
        private _id: string = '',
        private _item: string = '',
        private _checked: boolean = false,
    ) { }

    // getters and setters
    get id(): string {
        return this._id
    }
    set id(id: string) {
        this._id = id
    }

    get item(): string {
        return this._item
    }
    set item(item: string) {
        this._id = item
    }

    get checked(): boolean {
        return this._checked
    }
    set checked(checked: string) {
        this._id = checked
    }
}