// Thin abstraction over storing stuff in the localStorage
export default {

    // All stored items
    all() {
        let items = window.localStorage.getItem('notes');
        return items ? JSON.parse(items) : [];
    },

    // Add an item to the collection
    add(note) {
        const items = this.all();
        items.unshift(note);
        this._persist(items);
    },

    // Change an item in the collection
    update(id, note) {
        const items = this.all();
        const index = items.findIndex(note => note.id === id);
        items[index] = note;
        this._persist(items);
    },

    // utility method to persist the items to actual storage
    _persist(items) {
        window.localStorage.setItem('notes', JSON.stringify(items));
    },
};
