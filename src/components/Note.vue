<template>
    <div class="w-100 overflow-hidden shadow-md mb-4"
        :class="note.archived ? 'bg-gray-500' : 'bg-white'">
        <div class="px-4 py-2">
            <p class="text-gray-700 text-base italic" v-html="renderedText" />
        </div>
        <div class="px-4 py-4 flex text-gray-600 items-center justify-between">
            <span class="text-sm" v-html="created_at" />

            <svg v-if="!note.archived" @click.prevent="archive" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path><path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
            <svg v-if="note.archived" @click.prevent="unarchive" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path><path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    props: ['note'],

    computed: {
        renderedText() {
            return this.note.text.replace(/(?:\r\n|\r|\n)/g, '<br>');
        },

        created_at() {
            const date = new Date(this.note.created_at);
            const minutes = `0${date.getMinutes()}`.slice(-2);
            return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${minutes}`;
        },
    },

    methods: {
        archive() {
            this.$emit('archive', this.note.id);
        },

        unarchive() {
            this.$emit('unarchive', this.note.id);
        },
    },
};
</script>
