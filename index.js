module.exports = function helmet(obj, path = []) {
  const _handle = {
    get (target, property) {
      return helmet(obj, path.concat(property))
    },
    apply (target, self, args) {
      let val = obj;
      let parent;
      for(let i = 0; i < path.length; i++) {
          if(val === null || val === undefined) break;
          parent = val;
          val = val[path[i]];
      }
      if(val === null || val === undefined) {
          val = args[0];
      }
      return val;
  }};

  return new Proxy(() => {}, _handle);
};

