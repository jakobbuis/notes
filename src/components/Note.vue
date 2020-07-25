<template>
    <li>
        {{ note.text }}
    </li>
</template>

<script>
export default {
    props: ['note'],
};
</script>
