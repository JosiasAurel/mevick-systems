
const { createUser } = require("../database/user");



// can we create a user ?
test("Create User", async () => {
    let user__ = await createUser("Dane", "dane@dane.io", "dane123", "User");
    expect(user__.status).toBe(true);
});

