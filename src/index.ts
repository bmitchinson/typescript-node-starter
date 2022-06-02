import returnBen from './returnBen';
import NumberGen from './NumberGen';
import { HELLO } from './configuration';

const gen = new NumberGen();
const val = gen.getNum();
console.log(returnBen());
console.log('getNum Value:', val);
console.log('config Value:', HELLO);
