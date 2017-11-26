import { observable, action } from 'mobx';
import autobind from 'autobind-decorator';

@autobind
class Store {
  @observable public grey: boolean = false;

  public appColorChange() {
    this.grey = !this.grey;
  }
}

export default Store;
