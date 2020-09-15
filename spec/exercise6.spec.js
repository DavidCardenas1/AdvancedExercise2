const isSameLevel = require('../exercise6/exercise6');
describe('exercise 6', function() {
  const tree = {
    root: {
      data: 0,
      children: [
        {
          data: 1,
          children: [],
        },
        {
          data: 2,
          children: [
            {
              data: 1,
              children: [],
            },
            {
              data: 5,
              children: [
                {
                  data: 3,
                  children: [],
                },
                {
                  data: 5,
                  children: [
                    {
                      data: 6,
                      children: [],
                    },
                  ],
                },
                {
                  data: 9,
                  children: [],
                },
              ],

            },
          ],
        },
        {
          data: 3,
          children: [
            {
              data: 0,
              children: [],
            },
          ],
        },
        {
          data: 5,
          children: [],
        },
        {
          data: 7,
          children: [
            {
              data: 3,
              children: [
                {
                  data: 3,
                  children: [],
                },
                {
                  data: 0,
                  children: [
                    {
                      data: 9,
                      children: [],
                    },
                    {
                      data: 4,
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  };
  it('same level same number true', function() {
    const result = isSameLevel(tree, 3, 3);
    expect(result).toBe(true);
  });
  it('not same level same number  false', function() {
    const result = isSameLevel(tree, 1, 1);
    expect(result).toBe(false);
  });
  it('same level different number true', function() {
    const result = isSameLevel(tree, 3, 5);
    expect(result).toBe(true);
  });
  it('not same level different number false', function() {
    const result = isSameLevel(tree, 9, 1);
    expect(result).toBe(false);
  });
  it('root null false', function() {
    const tree2 = {
      root: null,
    };
    const result = isSameLevel(tree2, 9, 1);
    expect(result).toBe(false);
  });
  it('numbers same as root  false', function() {
    const result = isSameLevel(tree, 0, 0);
    expect(result).toBe(false);
  });
  it('last layer', function() {
    const result = isSameLevel(tree, 6, 9);
    expect(result).toBe(true);
  });
  it('one  layer same True', function() {
    const tree2 = {
      root: {
        data: 0,
        children: [
          {
            data: 1,
            children: [],
          },
          {
            data: 1,
            children: [],
          },
        ],
      },
    };
    const result = isSameLevel(tree2, 1, 1);
    expect(result).toBe(true);
  });
});
