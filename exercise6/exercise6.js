/**
 * Given the root of a tree, write a function that takes two numbers,
 * n1 and n2. Search for these two numbers within the tree and indicate
 * if they are found at the same depth.
isSameLevel(tree,1,1)
 */
// const tree = {
//   root: {
//     data: 0,
//     children: [
//       {
//         data: 1,
//         children: [],
//       },
//       {
//         data: 2,
//         children: [
//           {
//             data: 1,
//             children: [],
//           },
//           {
//             data: 5,
//             children: [
//               {
//                 data: 3,
//                 children: [],
//               },
//               {
//                 data: 5,
//                 children: [
//                   {
//                     data: 6,
//                     children: [],
//                   },
//                 ],
//               },
//               {
//                 data: 9,
//                 children: [],
//               },
//             ],

//           },
//         ],
//       },
//       {
//         data: 3,
//         children: [
//           {
//             data: 0,
//             children: [],
//           },
//         ],
//       },
//       {
//         data: 5,
//         children: [],
//       },
//       {
//         data: 7,
//         children: [
//           {
//             data: 3,
//             children: [
//               {
//                 data: 3,
//                 children: [],
//               },
//               {
//                 data: 0,
//                 children: [
//                   {
//                     data: 9,
//                     children: [],
//                   },
//                   {
//                     data: 4,
//                     children: [],
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
  if (n1 === null && n2 === null) {
    return true;
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
  if (tree.root === null) {
    return false;
  }
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
      // / clear level
      levelValues = [];
    } else {
      point.children.forEach((element) => {
        queue.push(element);
      });
      levelValues.push(point.data);
    }
  }

  // check last level
  if (check(levelValues, n1, n2)) {
    return true;
  } else return false;
}

module.exports = isSameLevel;
// console.log(isSameLevel(tree, 1, 1))
