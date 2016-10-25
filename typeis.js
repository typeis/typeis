/**
 * typeis.js
 * Typeis. it's the smart and simple javaScript type checker
 *
 * @author Salih sagdilek
 * @version 1.0.4
 */

;((() => {
    const OP = Object.prototype;
    if (Object.defineProperty && !OP.typeis) {
        let toString;
        let Regex;
        toString = OP.toString;
        Regex = /^\[object |]$/gi;
        Object.defineProperty(OP, 'typeis', {value(is) {return typeis(this, is)}});
        function typeis(something, is) {
            const type = toString.call(something).replace(Regex, '');
            return is ? type.toLowerCase() === is.toLowerCase() : type;
        }
    }
}))();
