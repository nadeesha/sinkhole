const _session = {};

export default {
  get: (key) => _session[key],
  set: (key, data) => {
    _session[key] = data;
    return key;
  },
};
