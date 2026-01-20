<template>
    <div class="flex flex-col lg:h-screen items-center justify-center">

        <h1 class="text-xl md:text-3xl lg:text-5xl font-bold">Wer hat die besten Fans in der DEL?</h1>
        <div v-if="novelUser">
            <div v-if="step === 1">
                <p class="mt-4 text-2xl text-center">Was ist dein Lieblingsclub?</p>
                <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-4xl">
                    <div v-for="club in shuffledClubs" :key="club" @click="favoriteClub = club" :class="[
                        'p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 text-center h-20 flex items-center justify-center',
                        favoriteClub === club
                            ? 'border-green-500 bg-green-100 text-green-700 shadow-lg transform scale-105'
                            : 'border-gray-300 bg-white hover:border-green-300 hover:bg-green-50 hover:shadow-md'
                    ]">
                        <span class="font-medium">{{ club }}</span>
                    </div>
                </div>
            </div>
            <div v-if="step === 2">
                <p class="mt-4 text-2xl">Welche Clubs magst du gar nicht? (bis zu 3 Clubs)</p>
                <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-4xl">
                    <div v-for="club in shuffledClubs.filter(c => c !== favoriteClub)" :key="club"
                        @click="toggleHatedClub(club)" :class="[
                            'p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 text-center h-20 flex items-center justify-center',
                            mostHatedClubs.includes(club)
                                ? 'border-red-500 bg-red-100 text-red-700 shadow-lg transform scale-105'
                                : 'border-gray-300 bg-white hover:border-red-300 hover:bg-red-50 hover:shadow-md'
                        ]">
                        <span class="font-medium">{{ club }}</span>
                    </div>
                </div>
            </div>
            <div v-if="step === 3">
                <p class="mt-4 text-2xl">Welcher Club hat die besten Auswärtsfans?</p>
                <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-4xl">
                    <div v-for="club in shuffledClubs.filter(c => c !== favoriteClub)" :key="club"
                        @click="toggleBestFansClub(club)" :class="[
                            'p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 text-center h-20 flex items-center justify-center',
                            bestFansClubs.includes(club)
                                ? 'border-blue-500 bg-blue-100 text-blue-700 shadow-lg transform scale-105'
                                : 'border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-50 hover:shadow-md'
                        ]">
                        <span class="font-medium">{{ club }}</span>
                    </div>
                </div>
            </div>
            <button v-if="step <= 3" :disabled="buttonDisabled"
                class="mt-10 px-8 py-4 rounded-xl text-3xl bg-red-500 hover:bg-red-700 disabled:bg-red-300 text-white font-white font-semibold"
                @click="nextStep">{{ buttonLabel }}</button>
        </div>
        <div v-else class="text-center">
            <p class="mt-8 text-2xl">Danke, dass du am Quiz teilgenommen hast!</p>
            <p class="mt-4 text-lg">Deine Antworten wurden erfolgreich übermittelt.</p>
        </div>
    </div>
</template>
<script setup>
import {
    ref, computed,
    onMounted
} from 'vue';
import axios from 'axios';

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
    } else if (step.value > 0 && step.value < 3) {
        return "Nächste Frage";
    } else {
        return "Quiz beenden";
    }
});

const novelUser = ref(localStorage.getItem('lukas-hockey-quiz-novel-user') === null)
const favoriteClub = ref(null);
const mostHatedClubs = ref([]);
const bestFansClubs = ref([]);
const shuffledClubs = ref([]);
const buttonDisabled = computed(() => {
    if (step.value === 1) {
        return favoriteClub.value === null;
    } else if (step.value === 2) {
        return mostHatedClubs.value.length === 0;
    } else if (step.value === 3) {
        return bestFansClubs.value.length === 0;
    }
    return false;
});

const toggleHatedClub = (club) => {
    const index = mostHatedClubs.value.indexOf(club);
    if (index > -1) {
        mostHatedClubs.value.splice(index, 1);
    } else if (mostHatedClubs.value.length < 4) {
        mostHatedClubs.value.push(club);
    }
}

const toggleBestFansClub = (club) => {
    const index = bestFansClubs.value.indexOf(club);
    if (index > -1) {
        bestFansClubs.value.splice(index, 1);
    } else if (bestFansClubs.value.length < 3) {
        bestFansClubs.value.push(club);
    }
}

const send = async () => {
    const payload = {
        identifier: 'lukas-hockey-quiz',
        email: 'jenslaufer@gmail.com',
        answers: {
            favoriteClub: favoriteClub.value,
            mostHatedClubs: mostHatedClubs.value,
            bestFansClubs: bestFansClubs.value
        }
    };
    console.log("Sending payload:", payload);
    await axios.post(`${import.meta.env.VITE_API_BASE}/answers`, payload)
    novelUser.value = false;
    localStorage.setItem('lukas-hockey-quiz-novel-user', 'true');
};


const nextStep = () => {
    step.value += 1;
    if (step.value === 4) {
        send();
    }
};

onMounted(() => {
    shuffledClubs.value = props.clubs.sort(() => Math.random() - 0.5);
});
</script>
