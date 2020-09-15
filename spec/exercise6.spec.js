const isSameLevel = require('../exercise6/exercise6');
describe('exercise 6', function() {
  const tree = {
    root: {
      data: 0,
      childs: [
        {
          data: 1,
          childs: [],
        },
        {
          data: 2,
          childs: [
            {
              data: 1,
              childs: [],
            },
            {
              data: 5,
              childs: [
                {
                  data: 3,
                  childs: [],
                },
                {
                  data: 5,
                  childs: [
                    {
                      data: 6,
                      childs: [],
                    },
                  ],
                },
                {
                  data: 9,
                  childs: [],
                },
              ],

            },
          ],
        },
        {
          data: 3,
          childs: [
            {
              data: 0,
              childs: [],
            },
          ],
        },
        {
          data: 5,
          childs: [],
        },
        {
          data: 7,
          childs: [
            {
              data: 3,
              childs: [
                {
                  data: 3,
                  childs: [],
                },
                {
                  data: 0,
                  childs: [
                    {
                      data: 9,
                      childs: [],
                    },
                    {
                      data: 4,
                      childs: [],
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
});
