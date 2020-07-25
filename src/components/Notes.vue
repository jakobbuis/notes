<template>
    <div class="mt-4">
        <note v-for="(note, key) in notes" :key="key" :note="note"></note>
    </div>
</template>

<script>
import Note from './Note.vue';

export default {
    props: ['notes'],
    components: { Note },
};
</script>
