export default class Match {
  static create(matches) {
    const m = new Match(matches);

    return val => m.match(val);
  }

  constructor(matches) {
    const isObject = value => value != null && !Array.isArray(value) && typeof value === 'object';

    this._map = isObject(matches) ? new Map(Object.entries(matches)) : new Map(matches);
  }

  match(val) {
    return this._map.has(val) ? this._map.get(val) : this._map.has('_') ? this._map.get('_') : null;
  }
}
