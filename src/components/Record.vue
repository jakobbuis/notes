<template>
    <button
        @click.prevent
        @touchstart.prevent="startRecording"
        @touchend.prevent="stopRecording"
        @touchcancel.prevent="stopRecording"
        class="w-16 text-white p-4 mr-2"
        :class="recordingStateColour">
            <svg fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path>
            </svg>
    </button>
</template>

<script>
export default {

    data() {
        return {
            recording: false,
            recordingEnabled: false,
            recognition: null,
        };
    },

    mounted() {
        this.setupVoiceRecognition();
    },

    computed: {
        recordingStateColour() {
            if (this.recording) {
                return 'bg-red-500';
            }
            if (this.recordingEnabled) {
                return 'bg-gray-500';
            }
            return 'bg-gray-300';
        },
    },

    methods: {
        setupVoiceRecognition() {
                // Initialize the SpeechRecognition engine
                try {
                    this.recognition = new webkitSpeechRecognition();
                    this.recognition.lang = 'nl-NL';
                    this.recognition.onresult = this.parseResult;
                } catch (exception) {
                    this.recordingEnabled = false;
                    return;
                }

                // trigger browser permissions immediately
                // otherwise the user must hold the button and allow permissions at the same time
                navigator.mediaDevices.getUserMedia({audio: true}).then((event) => {
                    this.recordingEnabled = true;
                }).catch(() => {
                    this.recordingEnabled = false;
                });
        },

        parseResult(event) {
            var text = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                text += event.results[i][0].transcript;
            }
            this.$emit('voice', text);
        },

        startRecording() {
            if (!this.recordingEnabled) {
                alert('Cannot record voice. Possible reasons are:\n\n1. Your device has no microphone.\n2. Your browser does not support the SpeechRecognition API.\n3. You\'ve refused the permission pop-up.');
                return;
            }
            this.recognition.start();
            this.recording = true;
        },

        stopRecording() {
            this.recognition.stop();
            this.recording = false;
        },
    },
};
</script>
