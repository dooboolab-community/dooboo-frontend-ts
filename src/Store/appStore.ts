import { observable, action } from 'mobx';
import autobind from 'autobind-decorator';

@autobind
class Store {

  @observable grey: boolean = false;

  appColorChange() {
    this.grey = !this.grey;
  }
}

export default Store;
