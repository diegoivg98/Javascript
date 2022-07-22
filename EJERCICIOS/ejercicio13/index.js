import {suma,multiplica} from './controller.js';
import chalk from 'chalk';

console.log(chalk.green(multiplica(suma(2, 3), suma(1, 2))))
//console.log(chalk.red(suma(multiplica(1, 2), multiplica(4, 5))))

