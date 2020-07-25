import Vue from 'vue';
import Notes from './components/Notes.vue';
import Create from './components/Create.vue';
import ColdStorage from './ColdStorage.js';

new Vue({
    el: '#app',
    components: { Notes, Create },

    data: {
        notes: [],
    },

    mounted() {
        this.notes = ColdStorage.all();
    },

    methods: {
        createNote(text) {
            const note = { version: 1, text, created_at: Date.now() };
            this.notes.unshift(note);
            ColdStorage.add(note);
        },
    },
});
