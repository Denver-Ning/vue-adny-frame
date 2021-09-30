// es5 deepclone

const deepClone = function (origin: any, target: any) {
  // edge cases
  var tar = target || {}
  var toStr = Object.prototype.toString
  var ARRAY_TYPE = '[object Array]'
  for (var key in origin) {
    if (origin.hasOwnProperty(key)) {
      if (typeof origin[key] === 'object' && origin[key] !== null) {
        tar[key] = toStr.call(origin[key]) === ARRAY_TYPE ? [] : {}
        deepClone(origin[key], tar[key])
      } else {
        tar[key] = origin[key]
      }
    }
  }
  return tar
}

// es6 deepclone

export default deepClone
