/**
 * https://typeis.github.io/
 * https://github.com/typeis/typeisjs
 * typeis.js
 * Typeis. it's the smart and simple javascript type check and validation library
 *
 * @author Salih Sağdilek
 * @version 2.0.0
 */

;(function () {
  var OP = Object.prototype
  var toString = OP.toString
  var Regex = /^\[object |]$/gi

  function whatTheType (something) {
    return toString.call(something).replace(Regex, '')
  }

  function typeis (something, is) {
    var type = whatTheType(something, is)
    if (whatTheType(is) == 'Array') {
      is = is.join('|')
    }
    return is ? new RegExp('^(' + is + ')$', 'i').test(type) : type
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = typeis
  }
  else {
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return typeis
      })
    }
    else {
      window.typeis = typeis
    }
  }
})()