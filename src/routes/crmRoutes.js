import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contact")
    // GET
    .get((req, res, next) => {
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)

    // POST
    .post(addNewContact);

  app
    .route("/contact/:contactId")
    // GET
    .get(getContactWithID)

    // PUT
    .put(updateContact)

    // DELETE
    .delete(deleteContact);
};

export default routes;
