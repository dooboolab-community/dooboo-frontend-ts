import { observable, action } from 'mobx';

class Store {
  @observable public grey: boolean = false;

  @action public appDevChange(): any {
    this.grey = !this.grey;
  }
}

export default Store;
