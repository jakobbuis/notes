<template>
    <li v-html="renderedText" />
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
