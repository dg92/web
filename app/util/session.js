import cache from './cache';

export default {
  token: null,

  _cacheLifetime: 2 * 24 * 3600 * 1000,

  load() {
    return cache.get('session.token').then((token) => {
      this.token = token;
      return this;
    });
  },

  set({token}) {
    return cache.set('session.token', token, this._cacheLifetime).then(() => this.load());
  },

  clear() {
    return cache.del('session.token').then(() => this.load());
  }
};
