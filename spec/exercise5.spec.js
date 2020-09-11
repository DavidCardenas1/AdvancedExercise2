const isSymetric = require('../exercise5/exercise5');
describe('exercise 4', function() {
  it('symetric', function() {
    /**
 *                1
 *             2     2
 *           3   4  4  3
 *              5    5
 */
    const binTree = {
      root: {
        data: 1,
        left: {
          data: 2,
          left: {
            data: 3,
            left: null,
            right: null,
          },
          right: {
            data: 4,
            left: {
              data: 5,
              left: null,
              right: null,
            },
            right: null,
          },
        },
        right: {
          data: 2,
          left: {
            data: 4,
            left: null,
            right: {
              data: 5,
              left: null,
              right: null,
            },
          },
          right: {
            data: 3,
            left: null,
            right: null,
          },
        },
      },
    };
    const result = isSymetric(binTree);
    expect(result).toBe(true);
  });
  it('not symetric', function() {
    /**
*                1
*             2     2
*           3   4  4  3
*              5
*/
    const binTree = {
      root: {
        data: 1,
        left: {
          data: 2,
          left: {
            data: 3,
            left: null,
            right: null,
          },
          right: {
            data: 4,
            left: {
              data: 5,
              left: null,
              right: null,
            },
            right: null,
          },
        },
        right: {
          data: 2,
          left: {
            data: 4,
            left: null,
            right: null,
          },
          right: {
            data: 3,
            left: null,
            right: null,
          },
        },
      },
    };
    const result = isSymetric(binTree);
    expect(result).toBe(false);
  });
  it('symetric root null', function() {
    /**
*                null
*/
    const binTree = {
      root: null,
    };
    const result = isSymetric(binTree);
    expect(result).toBe(true);
  });
  it('symetric 2 level ', function() {
    /**
*                1
*             2     2
*/
    const binTree = {
      root: {
        data: 1,
        left: {
          data: 2,
          left: null,
          right: null,
        },
        right: {
          data: 2,
          left: null,
          right: null,
        },
      },
    };
    const result = isSymetric(binTree);
    expect(result).toBe(true);
  });
  it('symetric 2 level ', function() {
    /**
*                1
*             2     2
*/
    const binTree = {
      root: {
        data: 1,
        left: {
          data: 2,
          left: null,
          right: null,
        },
        right: {
          data: 2,
          left: null,
          right: null,
        },
      },
    };
    const result = isSymetric(binTree);
    expect(result).toBe(true);
  });
});
