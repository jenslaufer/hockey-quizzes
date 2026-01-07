<template>
    <div class="flex flex-col h-screen items-center justify-center">

        <h1 class="text-6xl font-bold">Lukas' Hockey Umfrage</h1>
        <div v-if="step === 1">
            <p class="mt-12 text-2xl">Was ist dein Lieblingsclub?</p>
            <div class="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl">
                <div v-for="club in shuffledClubs" :key="club" @click="favoriteClub = club" :class="[
                    'p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 text-center h-20 flex items-center justify-center',
                    favoriteClub === club
                        ? 'border-red-500 bg-red-100 text-red-700 shadow-lg transform scale-105'
                        : 'border-gray-300 bg-white hover:border-red-300 hover:bg-red-50 hover:shadow-md'
                ]">
                    <span class="font-medium">{{ club }}</span>
                </div>
            </div>
        </div>
        <div v-if="step === 2">
            <p class="mt-12 text-2xl">Welche Clubs magst du gar nicht?</p>
        </div>
        <div v-if="step === 3">
            <p class="mt-12 text-2xl">Welche Clubs haben die besten Auswärtsfans?</p>
        </div>
        <div v-else>
        </div>
        <button v-if="step <= 4"
            class="mt-12 px-8 py-4 rounded-xl text-3xl bg-red-500 hover:bg-red-700 text-white font-white font-semibold"
            @click="nextStep">{{ buttonLabel }}</button>
    </div>
</template>
<script setup>
import {
    ref, computed,
    onMounted
} from 'vue';

const step = ref(0);
const props = defineProps({
    clubs: {
        type: Array,
        required: true
    }
});

const buttonLabel = computed(() => {
    if (step.value === 0) {
        return "Los geht's...";
    } else if (step.value === 1) {
        return "Nächste Frage";
    } else {
        return "Quiz beenden";
    }
});

const favoriteClub = ref(null)
const mostHatedClub = ref([])

const shuffledClubs = ref([]);


const nextStep = () => {
    step.value += 1;
};

onMounted(() => {
    shuffledClubs.value = props.clubs.sort(() => Math.random() - 0.5);
});
</script>
