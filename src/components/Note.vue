<template>
    <div class="w-100 overflow-hidden shadow-md bg-white mb-4">
        <div class="px-4 py-2">
            <p class="text-gray-700 text-base" v-html="renderedText" />
        </div>
        <div class="px-4 py-4">
            <span class="text-gray-600 text-sm" v-html="created_at" />
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
            return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
        },
    },
};
</script>
