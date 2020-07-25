import Vue from 'vue';
import Note from './components/Note.vue';
import Create from './components/Create.vue';
import NavBar from './components/NavBar.vue';
import ColdStorage from './ColdStorage.js';

new Vue({
    el: '#app',
    components: { Note, Create, NavBar },

    data: {
        notes: [],
    },

    mounted() {
        this.notes = ColdStorage.all();
    },

    computed: {
        // sort notes by creation descending, archived last
        sortedNotes() {
            return this.notes.sort((a, b) => {
                // Sort archived notes always last
                if (a.archived && !b.archived) {
                    return 1;
                }
                if (!a.archived && b.archived) {
                    return -1;
                }
                // If both archived or unarchived, sort recent first
                return Math.sign(b.created_at - a.created_at);
            });
        },

        archivedNotesPresent() {
            return this.notes.some(note => note.archived);
        },
    },

    methods: {
        createNote(text) {
            const note = {
                text,
                version: 1,
                created_at: Date.now(),
                archived: false,
                id: this.uuidv4(),
            };
            this.notes.unshift(note);
            ColdStorage.add(note);
        },

        archive(id) {
            const note = this.notes.find(note => note.id === id);
            note.archived = true;
            ColdStorage.update(id, note);
        },

        unarchive(id) {
            const note = this.notes.find(note => note.id === id);
            note.archived = false;
            ColdStorage.update(id, note);
        },

        clearArchived() {
            // find archived notes, and purge them from ColdStorage
            this.notes.filter(note => note.archived).map(note => ColdStorage.remove(note.id));
            // remove archived notes from the UI
            this.notes = this.notes.filter(note => !note.archived);
        },

        uuidv4() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        },
    },
});
