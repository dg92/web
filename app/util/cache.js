import {isNumber, cloneDeep} from 'lodash';

const cache = {
  set(key, val, lifetime) {
    const cacheObj = {
      val,
      lifetime: isNumber(lifetime) ? lifetime : -1,
      timestamp: new Date().getTime()
    };

    localStorage.setItem(key, JSON.stringify(cacheObj));

    return cache;
  },

  get(key, defaultVal=null) {
    const cacheObj = JSON.parse(localStorage.getItem(key));

    if(!cacheObj) {
      return defaultVal;
    }

    const {val, lifetime, timestamp} = cacheObj;

    if(lifetime === -1 && (new Date().getTime()-timestamp) > lifetime) {
      cache.del(key);
      return defaultVal;
    } else {
      return cloneDeep(val);
    }
  }
};
