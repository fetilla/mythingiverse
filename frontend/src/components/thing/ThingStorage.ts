import { computed, observable } from 'mobx';

class ThingStorage {

  @observable private _id: number;

  @computed
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}

export default new ThingStorage();