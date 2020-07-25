<template>
    <div class="w-100 overflow-hidden shadow-md bg-white mb-4">
        <div class="px-4 py-2">
            <p class="text-gray-700 text-base" v-html="renderedText" />
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
    },
};
</script>
