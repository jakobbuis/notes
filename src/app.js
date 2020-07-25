import Vue from 'vue';
import Notes from './components/Notes.vue';
import Create from './components/Create.vue';

new Vue({
    el: '#app',
    components: { Notes, Create },

    data: {
        notes: [],
    },

    methods: {
        createNote(text) {
            this.notes.push(text);
        },
    },
});
