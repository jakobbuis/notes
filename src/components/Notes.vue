<template>
    <ul>
        <li v-for="(note, key) in notes" :key="key">{{ note.text }}</li>
    </ul>
</template>

<script>
export default {
    props: ['notes'],
};
</script>
