import { computed, makeAutoObservable, onBecomeObserved } from "mobx";
import moment from "moment";
import {
  getEvents,
  addEvent,
  editEvent,
  deleteEvent,
  deleteArchive,
} from "../api";

class EventsStore {
  data = [];
  filtredData = [];

  constructor() {
    makeAutoObservable(
      this,
      {},
      {
        autoBind: true,
        archiveData: computed,
        notArchiveData: computed,
      }
    );

    onBecomeObserved(this, "data", this.fetch);
  }

  get archiveData() {
    return this.data.filter((el) => el.archive);
  }

  get notArchiveData() {
    return this.data.filter((el) => !el.archive);
  }

  get pastData() {
    return this.data.filter(
      (el) => moment(el.date).isBefore(moment(), "day") && !el.archive
    );
  }

  get todayData() {
    return this.data.filter(
      (el) => moment(el.date).isSame(moment(), "day") && !el.archive
    );
  }

  get futureData() {
    return this.data.filter(
      (el) => moment(el.date).isAfter(moment(), "day") && !el.archive
    );
  }

  get favoriteData() {
    return this.data.filter((el) => el.favorite && !el.archive);
  }

  *fetch() {
    const response = yield getEvents();
    this.data = response;
    this.filtredData = response.filter((el) => !el.archive);
  }

  *addEvent(data) {
    yield addEvent(data);
    yield this.fetch();
  }

  *editEvent(data) {
    yield editEvent(data);
    yield this.fetch();
  }

  *deleteEvent(id) {
    yield deleteEvent(id);
    yield this.fetch();
  }

  *deleteArchive() {
    yield deleteArchive();
    yield this.fetch();
  }
}

export const events = new EventsStore();
