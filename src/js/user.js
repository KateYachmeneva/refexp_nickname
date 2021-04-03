export default class Validator {
  validateUsername(name) {
    const template = /^[^\d\W_-][\w_-]*[^\d\W_-]+$/;
    const templateNumbers = /\d{4}/;
    const isvalidateUsername = template.test(name) && !templateNumbers.test(name);
    if (isvalidateUsername) {
      this.name = name;
      return true;
    }
    throw new Error(`Имя ${name} некорректно.`);
  }
}
