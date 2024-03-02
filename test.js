describe("pow", function () {
  it("raises to n-th power", function () {
    assert.equal(pow(2, 3), 8); // first test
    // assert.equal(pow(3, 4), 81); // test here is not so good,
    // if first test fails, further test wont run
  });

  it("3 raised to power 4 is 81", function () {
    assert.equal(pow(3, 4), 81); // second test separate from first is better
  });
});

// Generate more tests using `for`:
describe("pow", function () {
  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} in the power 3 is ${expected}`, function () {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }
});

// group `makeTest` & `for` in one `describe`
describe("pow", function () {
  // Group common things together in one describe
  // if they are not used by other tests
  describe("raises x to power 3", function () {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  // ... more tests to follow here, both describe and it can be added
  // other tests here won't see `makeTest` above
  it("for negative n the result is NaN", function () {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function () {
    assert.isNaN(pow(2, 1.5));
  });
});
