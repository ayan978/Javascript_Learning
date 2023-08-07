import external, {x, y, func2} from './Module1.js'

console.log(x);
console.log(y);

external();  //This is func1 which is default exported from module1
func2();

