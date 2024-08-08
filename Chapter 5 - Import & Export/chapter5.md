## Chapter 5 : Export & Import on JavaScript

Import & Export in JavaScript will help to make code more efficient, it will make work with two or many files, depends structure of you program or application.

### 5.1 Import

Import in this meaning is same mean like import in real life, it will import variable/ value/ function from other file or module. Import is need function on different module which is exported, and module will be impoerted to target file code. Here's the first example : 

File 1 : 5.1.0-main.mjs
```javascript
import functionA from './5.1submain.mjs';

FunctionA();
```
File 2 : 5.1.0-submain.mjs
```javascript
export default function functionA() {
    console.log('You imported functionA, from different file');
}
```
Output 5.1.0-main.mjs : 
```
You imported functionA, from different file
```

> *Important : Import and export statements can only be used in the ECMAScript (ESM) module environment, while Node.js defaults to CommonJS (CJS) which uses require to import modules. But you can also change the file extension from ".js" to ".mjs". Node.js will automatically recognize files with the ".mjs" extension as ECMAScript modules. That's why in this session we will use ".mjs"*

You can try in [5.1.0-main.mjs](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%205%20-%20Import%20%26%20Export/5.1.0-main.mjs)

Here's some type of import : 

#### 5.1.1 Default Import

In fact, the previous example was an example of an import that used the default import. But its ok,  Default import it will import based on export, if the export setting default, then when import will take the default export default import allows you to take functions/ methods/ variables that do not have the same name as the original function/ method/ variable. Here's an example : 

File 1 : 5.1.1.1-main.mjs
```javascript
import functionA from './5.1.1.1-submain.mjs';

functionA();
```
File 2 : 5.1.1.1-submain.mjs
```javascript
export default function functionA() {
    console.log('You imported functionA, from different file');
}
```
Output 5.1.1.1-main.mjs : 
```
You imported functionA, from different file
```

Let's try the different name : 

File 1 : 5.1.1.2-main.mjs
```javascript   
import result from './5112submain.mjs';

result();
```
File 2 : 5.1.1.2-submain.mjs
```javascript
export default function myFunction() {
  console.log('This is default function.');
}
```
Output 5.1.1.2-main.mjs : 
```
This is default function
```

You can try in [5.1.1.1-main.mjs](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%205%20-%20Import%20%26%20Export/5.1.1.1-main.mjs) and [5.1.1.2-main.mjs](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%205%20-%20Import%20%26%20Export/5.1.1.2-main.mjs)

#### 5.1.2 Named Import 

Unlike default import which does not require a specific name, named import allows us to import a specific function/ method/ variable based on its name. When using named import, make sure the name of the function you want to import matches.

Here's again some example : 

File 1 : 5.1.2.1-main.mjs
```javascript
import { functionA } from './5.1.2.1-submain.mjs';

functionA();
```
File 2 : 5.1.2.1-submain.mjs
```javascript
export function functionA() {
  console.log('You run the functionA');
}
```
Output 5.1.2.1-main.mjs : 
```
You run the functionA
```
You can import more than one function/ method/ variable, like this one : 

File 1 : 5.1.2.2-main.mjs
```javascript
import { name, email, age } from './5.1.2.2-submain.mjs';

console.log(name);
console.log(email);
console.log(age);
```
File 2 : 5.1.2.2-submain.mjs
```javascript
const name = 'Himeko';
const email = 'himeko@astralexpress.com';
const age = 29;

export { name, email, age };
```
Output 5.1.2.2-main.mjs : 
```
Himeko
himeko@astralexpress.com
29
```
Above if the amount is not too much, but what happens if the amount is more than that, it will definitely be troublesome, right? Therefore, we can use the "*" method which means importing everything in the export. Like this one : 

File 1 : 5.1.2.3-main.mjs

```javascript
import * as variable from './5.1.2.3-submain.mjs';

console.log(variable.name);
console.log(variable.email);
console.log(variable.age);
```
File 2 : 5.1.2.3-submain.mjs
```javascript
const name = 'Himeko';
const email = 'himeko@astralexpress.com';
const age = 29;

export { name, email, age };
```
Output 5.1.2.3-main.mjs : 
```
Himeko
himeko@astralexpress.com
29
```

> *Remember, "{}" is specially based on the name, "*" is anything will be exported*

You can try in [5.1.2.1-main.mjs](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%205%20-%20Import%20%26%20Export/5.1.2.1-main.mjs), [5.1.2.2-main.mjs](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%205%20-%20Import%20%26%20Export/5.1.2.2-main.mjs), and [5.1.2.3-main.mjs](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%205%20-%20Import%20%26%20Export/5.1.2.3-main.mjs)

### 5.2 Export

If you know about import before export, its still same export definition in import. Export is used to export functions, objects, or values from one module so that they can be used in another module. Remember it will same like imprt material because, import module need export module.

#### 5.2.1 Default Export 

Default export allows you to export a single value from a module as the primary export. A module can only have one default export, and when imported, you do not need to use the same name as when exporting it. LIke this : 

Maybe let's see the new example again : 
File 1 : 5.2.1-main.mjs
```javascript
export default function multiply(a, b) {
  return a * b;
}
```
File 2 : 5.2.1-submain.mjs
```javascript
import multiply from './5.1.2-main.mjs';

console.log(multiply(2, 3));
```
Output main.mjs : 
```
6
```

You can try in [5.2.1-main.mjs](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%205%20-%20Import%20%26%20Export/5.2.1-main.mjs)

#### 5.2.2 Named Export

Named exports allow you to export multiple items from a module. When using named exports, you must import those items with the same name from another module. Here's an example : 

File 1 : 5.2.2-main.mjs
```javascript
import { add, subtract } from './5.2.2-submain.mjs';

console.log(add(2, 3));
console.log(subtract(5, 2));
```
File 2 : 5.2.2-submain.mjs
```javascript
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```
Output 5.2.2-main.mjs : 
```
6
10
```

You can try in [5.2.2-main.mjs](https://github1s.com/hilmimusyafa/javascript/blob/main/Chapter%205%20-%20Import%20%26%20Export/5.2.2-main.mjs)