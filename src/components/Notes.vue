<template>
    <ul>
        <li v-for="(text, key) in notes" :key="key">{{ text }}</li>
    </ul>
</template>

<script>
export default {
    props: ['notes'],
};
</script>
