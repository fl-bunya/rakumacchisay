#!/usr/bin/env node

const { bearSay } = require('./index');
const message = process.argv[2];
// const bearSay = `
//  _______________________________________________________________
// /                                                               \\
//   ${message}
// \\________________________  _____________________________________/
//                          |/

//      .-.                     .-.
//     (   y_....-----------.._(   ;)
//      \`.                         '\\
//      /       0         .      0   |
//    .""\`_.            \`-^-'        /
//   /     |_                      /\`~~-.              .--.
//  |        \`"""~=-----------='""\`     /""~         .    .--.
//   \`-._      /                   ~~--y    \\.      /   /     \\
//     \`""""--y__..     rakumachi       \\    )__,,,/  /       /
//                 \`\\                  .(__./ ___,,,"\`       /
//                   \\....--------='"\`  _/              __ /
//                       \`---.......y--'\`,,,______-==~"\`

//           ..:::::::::::::::::::::::::::::::..
//        :::::::::::::::::::::::::::::::::::::::::
//          '':::::::::::::::::::::::::::::::::''
// `;

console.log(bearSay(message));