// 1. Changing to String

// Before change
console.log("Before change :");
const fromNumberX = 505;
const fromBooleanX = true;
console.log(fromNumberX);
console.log(fromBooleanX);

// Proof before changing
console.log("Proof before changing :");
console.log(typeof(fromNumberX));
console.log(typeof(fromBooleanX));

// Changing Process
const NtoStringX = String(fromNumberX);
const BtoStringX = fromBooleanX.toString();

// After Changing
console.log("After change :")
console.log(NtoStringX);
console.log(typeof(NtoStringX));
console.log(BtoStrinXg);
console.log(typeof(BtoStringX));

// 2. Changing to Number

// Before changing
console.log("Before changing :")
const fromStringY = '505';
const fromString2Y  = '9.11';
const fromBooleanY  = true;
console.log("fromStringY");
console.log("fromStringY");
console.log("fromBooleanY");

// Proof before changing
console.log("Proof Before changing :")
console.log(typeof("fromStringY"));
console.log(typeof("fromString2Y"));
console.log(typeof("fromBooleanY"));

// Changing
const StoNumberY = Number(fromStringY);
const StoNumber2Y = Number(fromString2Y);
const BtoNumberY = Number(fromBooleanY);

// After Changing
console.log("After changing :")
console.log(StoNumberY); 
console.log(typeof(StoNumberY)); 
console.log(StoNumber2Y); 
console.log(typeof(StoNumber2Y)); 
console.log(BtoNumberY); 
console.log(typeof(BtoNumberY)); 

// Proof non Numerhical

let test = "z";
const error = Number(test);
console.log(error)

// parseInt

let width = "1920px";
let length = "1080px";

const x = parseInt(width);
const y = parseInt(length);

console.log(x);
console.log(y);

// 3. Changing to Boolean

// Before change
const fromNumberZ = 505;
const fromStringZ = 'Yello';
const fromEmptyZ = null;

// Proof Before changing
console.log(typeof(fromNumberZ));
console.log(typeof(fromStringZ)); 
console.log(typeof(fromEmptyZ));

// Changing
const NtoBooleanZ = Boolean(fromNumberZ);
const StoBooleanZ = Boolean(fromStringZ);
const EtoBooleanZ = Boolean(fromEmptyZ);

// After change
console.log(NtoBooleanZ);
console.log(typeof(NtoBooleanZ));
console.log(StoBooleanZ); 
console.log(typeof(StoBooleanZ));
console.log(EtoBooleanZ);
console.log(typeof(EtoBooleanZ));