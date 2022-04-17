const { getUserById, createUser, getUserByUsername } = require("../../service/user.service");

let user = null;

test("getUserById function should return null when user not found", () => {
  const result = getUserById("12345678");

  expect(result).toBeNull();
});

test("createUser function should add new user", () => {
  createUser({
    username: "ali",
    password: "ali123",
  });
  user = getUserByUsername('ali');
});

test("getUserById function should return new user", () => {
	const result = getUserById(user.id);

	expect(result).not.toBeNull();
});
