/**
 * Given the root of a tree, write a function that takes two numbers,
 * n1 and n2. Search for these two numbers within the tree and indicate
 * if they are found at the same depth.
isSameLevel(tree,1,1)
 */
// const tree = {
//   root: {
//     data: 0,
//     childs: [
//       {
//         data: 1,
//         childs: [],
//       },
//       {
//         data: 2,
//         childs: [
//           {
//             data: 1,
//             childs: [],
//           },
//           {
//             data: 5,
//             childs: [
//               {
//                 data: 3,
//                 childs: [],
//               },
//               {
//                 data: 5,
//                 childs: [
//                   {
//                     data: 6,
//                     childs: [],
//                   },
//                 ],
//               },
//               {
//                 data: 9,
//                 childs: [],
//               },
//             ],

//           },
//         ],
//       },
//       {
//         data: 3,
//         childs: [
//           {
//             data: 0,
//             childs: [],
//           },
//         ],
//       },
//       {
//         data: 5,
//         childs: [],
//       },
//       {
//         data: 7,
//         childs: [
//           {
//             data: 3,
//             childs: [
//               {
//                 data: 3,
//                 childs: [],
//               },
//               {
//                 data: 0,
//                 childs: [
//                   {
//                     data: 9,
//                     childs: [],
//                   },
//                   {
//                     data: 4,
//                     childs: [],
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// };
/**
 *
 * @param {Array} array
 * @param {Number} n1
 * @param {Number} n2
 * @return {Boolean}
 */
function check(array, n1, n2) {
  for (let idx = 0; idx < array.length; idx++) {
    const element = array[idx];
    if (n1 === null && n2 === null) {
      return true;
    }
    if (n1 === element) {
      n1 = null;
      continue;
    }
    if (n2 === element) {
      n2 = null;
      continue;
    }
  }
  return false;
}
/**
 *
 * @param {Object} tree
 * @param {Number} n1
 * @param {Number} n2
 * @return {boolean}
 */
function isSameLevel(tree, n1, n2) {
  const queue = [];
  let levelValues = [];
  queue.push(tree.root);
  queue.push(null);
  while (queue[0] != null || queue[queue.length - 1] != null) {
    const point = queue.shift();
    if (point === null) {
      queue.push(null);
      if (check(levelValues, n1, n2)) {
        return true;
      }
      //   console.log(levelValues);
      // / clear level
      levelValues = [];
    } else {
      point.childs.forEach((element) => {
        queue.push(element);
      });
      levelValues.push(point.data);
    }
  }
  //   console.log(levelValues);
  // check last level
  if (check(levelValues, n1, n2)) {
    return false;
  } else return false;
}
module.exports=isSameLevel;
// console.log(isSameLevel(tree, 3, 3))
