import { EMAIL, PHONENUMBER } from "../../../constants/Constants";

export const data = {
  titles: ["Address", "Contacts", "Menu"],
  data: [
    ["Yerevan, Armenia"],
    [" +37494052097", "info@skillex.am"],
    ["Contacts", "About Us", "Products"],
  ],
  links: [
    [""],
    [`tel:${PHONENUMBER}`, `mailto:${EMAIL}`],
    ["contact", "aboutUs", "products"],
  ],
};
