<p align="center"><a href="https://typeis.github.io/" target="_blank"><img width="200"src="https://typeis.github.io/typeis.png"></a></p>

In Javascript, "Everything is (or acts like) an Object"
We need to write "typeis.js" due to a problem (type check) arised other than except the conveniences it is a providing to us.

# typeis.js

### Typeis. it's the smart and simple javascript type check and validation library ~226 Bytes;

|Value                  |Native     |Typeis.js  |
|---                    |---        |---        |
|Undeclared variables   |undefined  |---        |
|undefined              |undefined  |Undefined  |
|null                   |object     |Null       |
|Booleans               |boolean    |Boolean    |
|Numbers                |number     |Number     |
|String                 |string     |String     |
|Functions              |function   |Function   |
|Array                  |object     |Array      |
|Object                 |object     |Object     |
|Date                   |object     |Date       |
|RegExp                 |object     |RegExp     |

### Download

* [typeis.js ~813 B (413 B gzipped)](https://raw.githubusercontent.com/typeis/typeisjs/master/typeis.js)
* [typeis.min.js ~305 B (226 B gzipped)](https://raw.githubusercontent.com/typeis/typeisjs/master/dist/typeis.min.js)

### Installation bundle
```javascript
npm install typeis
bower install typeis
```

## Modules
|Name      |Package name       |Description           |Size (Normal/Gzip)
|---       |---                |---                   |---              |
|Bundle    |typeis             |Includes all modules  | ~1,699 bytes / ~671 bytes |
|Core      |@typeis/core       |Core module           | ~651 bytes / ~363 bytes   |
|Bridge    |@typeis/bridge     |Shorthand module      | ~293 bytes / ~197 bytes   |
|Url       |@typeis/url        |Url Validator         | ~888 bytes / ~471 bytes   |


#### Core
Typeis core module.

```javascript
npm install @typeis/core --save
```

In Node.js:
```javascript
require('@typeis/core');
```
In a browser:
```html
<script src="typeis.core.js"></script>
```

Example
```javascript
let variable = ['X', 'Y'] // dummy

let movies = new Typeis(variable)

movies.get() //return Array

movies.check('array') // return true

movies.check('object') // return false

```

Multi type validation
```javascript

let variable = {fckin: 'aweome'} // dummy
let options = new Typeis(variable)

options.check(['number', 'string', 'array']) // return false

options.check(['object', 'array']) // return true

```

Validation with regex
```javascript
let variable = {fckin: 'aweome'} // dummy
let options = new Typeis(variable)

options.check('array|number|string') // return false

options.check('array|object') // return true

// if variable type end of "y", "e" and "p" like Array, Date, RegExp return true otherwise false
options.check('.+[yep]$') // return false

// if variable is Array, Object or ending "n" like Function and Boolean return false otherwise true
options.check('(^(?!array|object).+)[^n]$') // return false

```

#### Real world Usage

```javascript 
function realWorld (options) {
  let isMultiple = new Typeis(options)
  if (isMultiple.check('array|object')) {
    //do something
  } else {
    //do another something
  }
}
```

#### Bridge

```javascript
npm install @typeis/bridge
```


#### Url

```javascript
npm install @typeis/url
```



### Usage
In Node.js:
```javascript
require('typeis');
```
In a browser:
```html
<script src="typeis.js"></script>
```



#### Changelog

### 2.0.0-alpha
rewrite library with typescript
removed property usage

##### 1.1.2
Property usage warning

##### 1.1.1
Update readme

##### 1.1.0
Multi type validation support
```javascript
variable.typeis(['array', 'object']);
// if variable is Array or Object return true otherwise false
```
type validation with regex support
```javascript
variable.typeis('array|object');
// if variable is Array or object return true otherwise false
```

##### 1.0
Typeis.js Released

