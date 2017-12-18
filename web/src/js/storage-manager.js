export default class Storage {
  static getPassword() {
    localStorage.getItem('password')
  }

  static setPassword(password) {
    localStorage.setItem('password', password)
  }

  static removePassword() {
    localStorage.removeItem('password')
  }
}
