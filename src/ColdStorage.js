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
        window.localStorage.setItem('notes', JSON.stringify(items));
    },
};
