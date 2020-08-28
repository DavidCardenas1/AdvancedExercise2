const flatten = require('../exercise1/exercise1');

describe('exercise 1 ', () => {
  it('objecs and array inside old object', () => {
    const oldObj = {
      name: 'Sara',
      gender: 'Apache Attack Helicopter',
      address: {
        location: {
          city: 'SF',
          state: 'CA',
        },
        preferredLocation: {
          city: 'SF',
          state: ['CA', 'MN'],
        },
        other: undefined,
      },
    };
    const result = flatten(oldObj, 'oldObj');
    expect(result).toEqual(jasmine.objectContaining({
      oldObj_name: 'Sara',
      oldObj_gender: 'Apache Attack Helicopter',
      oldObj_address_location_city: 'SF',
      oldObj_address_location_state: 'CA',
      oldObj_address_preferredLocation_city: 'SF',
      oldObj_address_preferredLocation_state: ['CA', 'MN'],
      oldObj_address_other: undefined,
    }));
  });
  it('simple object', () => {
    const oldObj = {
      name: 'david',
      age: 'very young',
      state: 'bc',
    };
    const result = flatten(oldObj, 'daveObj');
    expect(result).toEqual(jasmine.objectContaining({
      daveObj_name: 'david',
      daveObj_age: 'very young',
      daveObj_state: 'bc',
    }));
  });
  it('3 layers of objects', () => {
    const oldObj = {
      name: 'david',
      age: 'very young',
      parents: {
        mom: {
          name: 'maria',
          parents: {
            mom: 'juana',
            dad: 'josue',
          },
        },
        dad: {
          name: 'cruz',
          parents: {
            mom: 'maria',
            dad: 'jose',
          },
        },
      },
    };
    const result = flatten(oldObj, 'daveObj');
    expect(result).toEqual(jasmine.objectContaining({
      daveObj_name: 'david',
      daveObj_age: 'very young',
      daveObj_parents_mom_name: 'maria',
      daveObj_parents_mom_parents_mom: 'juana',
      daveObj_parents_mom_parents_dad: 'josue',
      daveObj_parents_dad_name: 'cruz',
      daveObj_parents_dad_parents_mom: 'maria',
      daveObj_parents_dad_parents_dad: 'jose',
    }));
  });
  it('array of objects', () => {
    const oldObj = {
      preferredLocation: {
        city: 'SF',
        state: [{zipcode: '123456'}, 'MN'],
      },
    };
    const result = flatten(oldObj, 'oldObj');
    expect(result).toEqual(jasmine.objectContaining({
      oldObj_preferredLocation_city: 'SF',
      oldObj_preferredLocation_state: [{zipcode: '123456'}, 'MN'],
    }));
  });
});
