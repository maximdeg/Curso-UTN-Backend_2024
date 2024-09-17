import { createUser, findUserByID } from "./managers/user.manager.js";

createUser(
  "juan",
  "juan@jose.com",
  "user",
  "juan1234",
  "123 456 789",
  "123 Fake Street"
);

findUserByID("66e9902755c75bea0e5ab37c")
  .then(result => {
    console.log("USER FOUND:", result.email);
  })
  .catch(error => {
    console.error("💥 Ocurrio una excpecion", error);
  })
  .finally(() => {
    console.log("PROCESS FINISHED");
  });
