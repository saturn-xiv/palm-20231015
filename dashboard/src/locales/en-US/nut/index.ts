import users from "./users";
import admin from "./admin";

const items = {
  "nut.switch-language.title": "Switch language",
  "nut.switch-language.confirm": "Are you sure to change language to {lang}?",
  "nut.install.title": "Install",
  "nut.leave-words.new.title": "Leave us a message",
  "nut.404.title": "Not found",
  "nut.attachments.index.title": "Attachments",
  "nut.attachments.show.title": "Share {name}",
  "nut.attachments.show.due.invalid": "Must be less than a week",
  ...users,
  ...admin,
};

export default items;
