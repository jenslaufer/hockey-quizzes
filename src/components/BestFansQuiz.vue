<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-8 md:py-12">
        <div class="mx-auto max-w-6xl">
            <!-- Progress Bar -->
            <div v-if="novelUser && step > 0" class="mb-12">
                <div class="flex items-center justify-between mb-3">
                    <span class="text-sm font-medium text-slate-600">Schritt {{ step }} von 3</span>
                    <span class="text-sm font-medium text-slate-600">{{ Math.round((step / 3) * 100) }}%</span>
                </div>
                <div class="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all duration-500 ease-out"
                        :style="{ width: `${(step / 3) * 100}%` }"></div>
                </div>
            </div>

            <!-- Header -->
            <div class="text-center mb-6 md:mb-8" v-if="step === 0">
                <h1 class="text-2xl md:text-3xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
                    Wer hat die besten Fans<br class="hidden md:inline"> in der DEL?
                </h1>
                <p v-if="step === 0" class="text-lg md:text-xl text-slate-600 mt-6">
                    Teile deine Meinung in 3 schnellen Fragen
                </p>
            </div>

            <div v-if="novelUser">
                <!-- Step 1: Favorite Club -->
                <div v-if="step === 1" class="space-y-8">
                    <div class="text-center">
                        <h2 class="text-2xl md:text-3xl font-semibold text-slate-800">
                            Was ist dein Lieblingsclub?
                        </h2>
                        <p class="mt-2 text-slate-600">Wähle deinen Herzensverein</p>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                        <button v-for="club in shuffledClubs" :key="club" @click="favoriteClub = club" :class="[
                            'group relative p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 text-center',
                            'flex items-center justify-center min-h-[100px] md:min-h-[110px]',
                            'focus:outline-none focus:ring-4 focus:ring-indigo-500/20',
                            favoriteClub === club
                                ? 'border-indigo-500 bg-gradient-to-br from-indigo-50 to-indigo-100 shadow-lg shadow-indigo-200/50 scale-[1.02]'
                                : 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md hover:scale-[1.01]'
                        ]">
                            <span :class="[
                                'font-semibold text-sm md:text-base transition-colors',
                                favoriteClub === club ? 'text-indigo-700' : 'text-slate-700 group-hover:text-indigo-600'
                            ]">
                                {{ club }}
                            </span>
                            <div v-if="favoriteClub === club"
                                class="absolute top-2 right-2 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Step 2: Hated Clubs -->
                <div v-if="step === 2" class="space-y-8">
                    <div class="text-center">
                        <h2 class="text-2xl md:text-3xl font-semibold text-slate-800">
                            Welche Clubs magst du gar nicht?
                        </h2>
                        <p class="mt-2 text-slate-600">
                            Wähle bis zu <span class="font-semibold text-rose-600">{{ 3 - mostHatedClubs.length
                                }}</span> weitere
                            <span v-if="mostHatedClubs.length > 0"
                                class="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-rose-100 text-rose-700">
                                {{ mostHatedClubs.length }} ausgewählt
                            </span>
                        </p>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                        <button v-for="club in shuffledClubs.filter(c => c !== favoriteClub)" :key="club"
                            @click="toggleHatedClub(club)"
                            :disabled="!mostHatedClubs.includes(club) && mostHatedClubs.length >= 3" :class="[
                                'group relative p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 text-center',
                                'flex items-center justify-center min-h-[100px] md:min-h-[110px]',
                                'focus:outline-none focus:ring-4 focus:ring-rose-500/20',
                                'disabled:opacity-40 disabled:cursor-not-allowed',
                                mostHatedClubs.includes(club)
                                    ? 'border-rose-500 bg-gradient-to-br from-rose-50 to-rose-100 shadow-lg shadow-rose-200/50 scale-[1.02]'
                                    : 'border-slate-200 bg-white hover:border-rose-300 hover:shadow-md hover:scale-[1.01] disabled:hover:scale-100 disabled:hover:shadow-none'
                            ]">
                            <span :class="[
                                'font-semibold text-sm md:text-base transition-colors',
                                mostHatedClubs.includes(club) ? 'text-rose-700' : 'text-slate-700 group-hover:text-rose-600'
                            ]">
                                {{ club }}
                            </span>
                            <div v-if="mostHatedClubs.includes(club)"
                                class="absolute top-2 right-2 w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Step 3: Best Fans -->
                <div v-if="step === 3" class="space-y-8">
                    <div class="text-center">
                        <h2 class="text-2xl md:text-3xl font-semibold text-slate-800">
                            Welcher Club hat die besten Auswärtsfans?
                        </h2>
                        <p class="mt-2 text-slate-600">
                            Wähle bis zu <span class="font-semibold text-cyan-600">{{ 3 - bestFansClubs.length }}</span>
                            weitere
                            <span v-if="bestFansClubs.length > 0"
                                class="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 text-cyan-700">
                                {{ bestFansClubs.length }} ausgewählt
                            </span>
                        </p>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                        <button v-for="club in shuffledClubs.filter(c => c !== favoriteClub)" :key="club"
                            @click="toggleBestFansClub(club)"
                            :disabled="!bestFansClubs.includes(club) && bestFansClubs.length >= 3" :class="[
                                'group relative p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 text-center',
                                'flex items-center justify-center min-h-[100px] md:min-h-[110px]',
                                'focus:outline-none focus:ring-4 focus:ring-cyan-500/20',
                                'disabled:opacity-40 disabled:cursor-not-allowed',
                                bestFansClubs.includes(club)
                                    ? 'border-cyan-500 bg-gradient-to-br from-cyan-50 to-cyan-100 shadow-lg shadow-cyan-200/50 scale-[1.02]'
                                    : 'border-slate-200 bg-white hover:border-cyan-300 hover:shadow-md hover:scale-[1.01] disabled:hover:scale-100 disabled:hover:shadow-none'
                            ]">
                            <span :class="[
                                'font-semibold text-sm md:text-base transition-colors',
                                bestFansClubs.includes(club) ? 'text-cyan-700' : 'text-slate-700 group-hover:text-cyan-600'
                            ]">
                                {{ club }}
                            </span>
                            <div v-if="bestFansClubs.includes(club)"
                                class="absolute top-2 right-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Action Button -->
                <div class="flex justify-center mt-6 md:mt-8">
                    <button :disabled="buttonDisabled" class="group relative px-10 md:px-14 py-4 md:py-5 rounded-2xl text-lg md:text-xl font-semibold
                               bg-gradient-to-r from-indigo-600 to-indigo-700 text-white
                               shadow-lg shadow-indigo-500/30 
                               hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-[1.02]
                               active:scale-[0.98]
                               disabled:from-slate-300 disabled:to-slate-400 disabled:shadow-none disabled:cursor-not-allowed
                               transition-all duration-300
                               focus:outline-none focus:ring-4 focus:ring-indigo-500/50" @click="nextStep">
                        <span class="relative z-10">{{ buttonLabel }}</span>
                        <div
                            class="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </button>
                </div>
            </div>

            <!-- Thank You Screen -->
            <div v-else class="text-center py-16">
                <div
                    class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-6 shadow-lg shadow-green-500/30">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Vielen Dank!
                </h2>
                <p class="text-lg md:text-xl text-slate-600 mb-2">
                    Deine Antworten wurden erfolgreich übermittelt.
                </p>
                <p class="text-sm text-slate-500">
                    Du hast bereits am Quiz teilgenommen.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
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
        return "Los geht's";
    } else if (step.value > 0 && step.value < 3) {
        return "Weiter";
    } else {
        return "Absenden";
    }
});

const novelUser = ref(sessionStorage.getItem('lukas-hockey-quiz-novel-user') === null);
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
};

const toggleBestFansClub = (club) => {
    const index = bestFansClubs.value.indexOf(club);
    if (index > -1) {
        bestFansClubs.value.splice(index, 1);
    } else if (bestFansClubs.value.length < 3) {
        bestFansClubs.value.push(club);
    }
};

const send = async () => {
    const payload = {
        identifier: 'lukas-hockey-quiz',
        answers: {
            favoriteClub: favoriteClub.value,
            mostHatedClubs: mostHatedClubs.value,
            bestFansClubs: bestFansClubs.value
        }
    };
    console.log("Sending payload:", payload);
    await axios.post(`${import.meta.env.VITE_API_BASE}/answers`, payload);
    novelUser.value = false;
    sessionStorage.setItem('lukas-hockey-quiz-novel-user', 'true');
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