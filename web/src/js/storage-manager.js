export default class Storage {
  static getPassword() {
    return window.localStorage.getItem('password')
  }

  static setPassword(password) {
    localStorage.setItem('password', password)
  }

  static removePassword() {
    localStorage.removeItem('password')
  }
}
