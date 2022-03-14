import { EventEmitter } from "events";
import data from "./db.json";
const CHANGE_EVENT = "change";
let _comments = data['comments'];

class DataSource extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getComments() {
        return _comments;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

}

const store = new DataSource();

export default store;
