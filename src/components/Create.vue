<template>
    <form class="flex sticky bottom-0 pt-4 bg-gray-300">
        <Record @voice="(text) => this.note += text"></Record>
        <textarea v-model="note" class="flex-1 h-16 p-2 italic"></textarea>
        <button
            @click.prevent="store"
            class="text-white font-bold py-2 px-4 ml-2"
            :class="{ 'bg-gray-700': note, 'bg-gray-500': !note}"
            :disabled="!note">
            Store
        </button>
    </form>
</template>

<script>
import Record from './Record.vue';

export default {
    components: { Record },

    data() {
        return {
            note: '',
        };
    },

    methods: {
        store() {
            this.$emit('create', this.note);
            this.note = '';
        },
    },
};
</script>
