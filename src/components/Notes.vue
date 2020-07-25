<template>
    <ul>
        <note v-for="(note, key) in notes" :key="key" :note="note"></note>
    </ul>
</template>

<script>
import Note from './Note.vue';

export default {
    props: ['notes'],
    components: { Note },
};
</script>
