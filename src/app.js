import Vue from 'vue';
import Note from './components/Note.vue';
import Create from './components/Create.vue';
import ColdStorage from './ColdStorage.js';

new Vue({
    el: '#app',
    components: { Note, Create },

    data: {
        notes: [],
    },

    mounted() {
        this.notes = ColdStorage.all();
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

        uuidv4() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        },
    },
});
