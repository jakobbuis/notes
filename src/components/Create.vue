<template>
    <form class="fixed bottom-0 inset-x-0 p-4 bg-gray-700">
        <div class="flex justify-between max-w-lg">
            <textarea v-model="note" class="flex-1 h-16 p-2 italic" autofocus></textarea>
            <button
                @click.prevent="store"
                class="text-white font-bold py-2 px-4 ml-2"
                :class="{ 'bg-gray-500': note, 'bg-gray-300': !note}"
                :disabled="!note">
                Store
            </button>
        </div>
    </form>
</template>

<script>
export default {
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
