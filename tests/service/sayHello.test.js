const { sayHello } = require("../../service/sayHello.service.js");

test("should sayHello function returns 'hello'", () => {
  const result = sayHello();

  // Assertion
	expect(result).toBe('hello');
});
