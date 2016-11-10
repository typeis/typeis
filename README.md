<p align="center"><a href="https://typeis.github.io/" target="_blank"><img width="200"src="https://typeis.github.io/typeis.png"></a></p>

In Javascript, "Everything is (or acts like) an Object";
Bunun bize sağladığı kolaylıklar zorluklar bir tarafa, karşımıza çıkan bir sorundan dolayı typeis.js'i yazma gereği duyduk "tip kontrolü (type check)".

#typeis.js
##Typeis. it's the smart and simple javaScript type checker;

|Value                  |Native     |Typeis.js  |
|---                    |---        |---        |
|Undeclared variables   |undefined  |---        |
|undefined              |undefined  |---        |
|null                   |object     |---        |
|Booleans               |boolean    |Boolean    |
|Numbers                |number     |Number     |
|String                 |string     |String     |
|Functions              |function   |Function   |
|Array                  |object     |Array      |
|Object                 |object     |Object     |
|Date                   |object     |Date       |
|RegExp                 |object     |RegExp     |
####Be careful!
Everything in JavaScript acts like an object, with the only two exceptions being **null** and **undefined**. *[JavaScript Garden](https://bonsaiden.github.io/JavaScript-Garden/#object.general)
Typeis.js acts like an property; doesn't work null and undefined types because they doesn't have properties.

###Download

* [typeis.js ~813 B (413 B gzipped)](https://raw.githubusercontent.com/typeis/typeisjs/master/typeis.js) ([minified ~305 B (226 B gzipped)](https://raw.githubusercontent.com/typeis/typeisjs/master/dist/typeis.min.js))

###installation
```javascript
npm install typeis
bower install typeis
```
###usage
In Node.js:
```javascript
require('typeis');
```
In a browser:
```html
<script src="typeis.js"></script>
```
####examples
Multi type checking
```javascript
variable.typeis(['array', 'object']); // if variable is Array or Object return true otherwise false
```
type checking with regex
```javascript
variable.typeis('array|object'); // if variable is Array or object return true otherwise false
variable.typeis('.+[yep]$'); // if variable is Array, Date, RegExp return true otherwise false
variable.typeis('(^(?!array|object).+)[^n]$'); // if variable is Array, Object, Function and Boolean return false otherwise true
```

```javascript
var regexp = /test/gi
var arr = ['test'];
var now = new Date();
var obj = {};

console.log(regexp.typeis()); //RegExp;
console.log(regexp.typeis('regexp')); //true;
console.log(regexp.typeis('object')); //false;
console.log(arr.typeis()); //Array;
console.log(arr.typeis('array')); //true;
console.log(now.typeis()); //Date;
console.log(obj.typeis()); //Object;
```

####Real world Usage

```javascript 
function realWorld( options ){
    if(options.typeis('object')){
        //do something
    } else {
        //do another something
    }
}
```

if you don't sure a 100 percent you need to change like

```javascript 
function realWorld( options ){
    if(options && options.typeis('object')){
        //do something
    } else {
        //do another something
    }
}
```

####Changelog
#####1.0.x
Typeis.js Released

#####1.1.x
Multi type check support
```javascript
variable.typeis(['array', 'object']); // if variable is Array or Object return true otherwise false
```
type checking with regex support
```javascript
variable.typeis('array|object'); // if variable is Array or object return true otherwise false
```
