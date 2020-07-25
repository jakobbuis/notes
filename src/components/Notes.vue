<template>
    <div class="mt-4">
        <note v-for="(note) in notes" :key="note.id" :note="note"></note>
    </div>
</template>

<script>
import Note from './Note.vue';

export default {
    props: ['notes'],
    components: { Note },
};
</script>
