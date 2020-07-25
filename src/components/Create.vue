<template>
    <form class="flex">
        <textarea v-model="note" class="flex-1 h-16 p-2"></textarea>
        <button
            @click.prevent="store"
            class="bg-gray-700 text-white font-bold py-2 px-4 ml-2">
            Store
        </button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            note: null,
        };
    },

    methods: {
        store() {
            this.$emit('create', this.note);
            this.note = null;
        }
    },
};
</script>
