if (!localStorage.getItem("nexuscrm_user")) {
  window.location.href = "index.html";
}
const Storage = {
  get(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  add(key, item) {
    let data = this.get(key);
    data.push(item);
    this.set(key, data);
  },

  update(key, id, updatedItem) {
    let data = this.get(key);
    data = data.map(item => item.id === id ? updatedItem : item);
    this.set(key, data);
  },

  delete(key, id) {
    let data = this.get(key);
    data = data.filter(item => item.id !== id);
    this.set(key, data);
  }
};
