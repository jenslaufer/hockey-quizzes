<template>
    <div class="min-h-screen py-8 px-4">
        <!-- Print Button -->
        <div class="max-w-6xl mx-auto mb-6 no-print">
            <button @click="printCV"
                class="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:bg-slate-600 transform hover:-translate-y-0.5 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
                Lebenslauf drucken
            </button>
        </div>

        <!-- CV Content -->
        <div class="max-w-6xl mx-auto">
            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                <!-- Header mit Foto -->
                <div class="relative bg-slate-800 text-white overflow-hidden">
                    <!-- Dekorative Elemente -->
                    <div class="absolute inset-0 opacity-5">
                        <div
                            class="absolute top-0 right-0 w-96 h-96 bg-slate-700 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2">
                        </div>
                        <div
                            class="absolute bottom-0 left-0 w-96 h-96 bg-slate-700 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2">
                        </div>
                    </div>

                    <div class="relative p-12">
                        <div class="flex items-start gap-10">
                            <!-- Foto Platzhalter -->
                            <div class="flex-shrink-0">
                                <div class="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                                    <img :src="contactInfo.photoUrl" :alt="contactInfo.name"
                                        class="w-full h-full object-cover" />
                                </div>
                            </div>

                            <!-- Kontaktinformationen -->
                            <div class="flex-1">
                                <h1 class="text-6xl font-bold font-serif mb-4 tracking-tight">{{ contactInfo.name }}
                                </h1>
                                <div class="w-24 h-1 bg-slate-600 rounded-full mb-6"></div>
                                <p class="text-xl font-light mb-8 text-slate-200 leading-relaxed max-w-2xl">
                                    Data Scientist & Fullstack-Entwickler mit über 25 Jahren Erfahrung
                                </p>

                                <div class="grid grid-cols-2 gap-x-12 gap-y-4 text-sm text-slate-200">
                                    <div class="flex items-center gap-3 group">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                        </div>
                                        <span>{{ contactInfo.address }}</span>
                                    </div>
                                    <div class="flex items-center gap-3 group">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path
                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                                </path>
                                            </svg>
                                        </div>
                                        <span>{{ contactInfo.phone }}</span>
                                    </div>
                                    <div class="flex items-center gap-3 group">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                            </svg>
                                        </div>
                                        <span>{{ contactInfo.email }}</span>
                                    </div>
                                    <div class="flex items-center gap-3 group">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                                <path
                                                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                                </path>
                                            </svg>
                                        </div>
                                        <span>{{ contactInfo.website }}</span>
                                    </div>
                                    <div class="flex items-center gap-3 group">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                                <path
                                                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                                </path>
                                            </svg>
                                        </div>
                                        <span>{{ contactInfo.company }}</span>
                                    </div>
                                    <div class="flex items-center gap-3 group">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path
                                                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                                                </path>
                                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                            </svg>
                                        </div>
                                        <span>{{ contactInfo.github }}</span>
                                    </div>
                                    <div class="flex items-center gap-3 group">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path
                                                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                                </path>
                                                <rect x="2" y="9" width="4" height="12"></rect>
                                                <circle cx="4" cy="4" r="2"></circle>
                                            </svg>
                                        </div>
                                        <span>{{ contactInfo.linkedin }}</span>
                                    </div>
                                    <div class="flex items-center gap-3 group">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                                <path
                                                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                                </path>
                                            </svg>
                                        </div>
                                        <span>{{ contactInfo.ideenpilot }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-12">
                    <!-- Fachliche Schwerpunkte -->
                    <section class="mb-14">
                        <div class="flex items-center gap-4 mb-8">
                            <div class="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M12 20h9"></path>
                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                </svg>
                            </div>
                            <h2 class="text-4xl font-bold font-serif text-slate-900">Fachliche Schwerpunkte</h2>
                        </div>
                        <div class="space-y-6">
                            <div
                                class="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                                <h3 class="font-semibold text-slate-900 mb-3 flex items-center gap-2 text-lg">
                                    <div class="w-2 h-2 rounded-full bg-slate-700"></div>
                                    Arbeitsweise
                                </h3>
                                <p class="text-slate-700 pl-4 leading-relaxed">{{ skills.working }}</p>
                            </div>
                            <div
                                class="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                                <h3 class="font-semibold text-slate-900 mb-3 flex items-center gap-2 text-lg">
                                    <div class="w-2 h-2 rounded-full bg-slate-700"></div>
                                    Data Science
                                </h3>
                                <p class="text-slate-700 pl-4 leading-relaxed">{{ skills.dataScience }}</p>
                            </div>
                            <div class="grid md:grid-cols-2 gap-4 pl-4">
                                <div
                                    class="bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition-all hover:border-slate-400">
                                    <h4 class="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                        <span class="text-slate-700">→</span>
                                        API-Design
                                    </h4>
                                    <p class="text-slate-600 text-sm leading-relaxed">{{ skills.api }}</p>
                                </div>
                                <div
                                    class="bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition-all hover:border-slate-400">
                                    <h4 class="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                        <span class="text-slate-700">→</span>
                                        Datenbanken
                                    </h4>
                                    <p class="text-slate-600 text-sm leading-relaxed">{{ skills.databases }}</p>
                                </div>
                                <div
                                    class="bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition-all hover:border-slate-400">
                                    <h4 class="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                        <span class="text-slate-700">→</span>
                                        Backend
                                    </h4>
                                    <p class="text-slate-600 text-sm leading-relaxed">{{ skills.backend }}</p>
                                </div>
                                <div
                                    class="bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition-all hover:border-slate-400">
                                    <h4 class="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                        <span class="text-slate-700">→</span>
                                        Frontend
                                    </h4>
                                    <p class="text-slate-600 text-sm leading-relaxed">{{ skills.frontend }}</p>
                                </div>
                                <div
                                    class="bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition-all hover:border-slate-400">
                                    <h4 class="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                        <span class="text-slate-700">→</span>
                                        DevOps & CI/CD
                                    </h4>
                                    <p class="text-slate-600 text-sm leading-relaxed">{{ skills.devops }}</p>
                                </div>
                                <div
                                    class="bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition-all hover:border-slate-400">
                                    <h4 class="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                        <span class="text-slate-700">→</span>
                                        Testing
                                    </h4>
                                    <p class="text-slate-600 text-sm leading-relaxed">{{ skills.testing }}</p>
                                </div>
                                <div
                                    class="bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition-all hover:border-slate-400 md:col-span-2">
                                    <h4 class="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                        <span class="text-slate-700">→</span>
                                        Cloud & Betrieb
                                    </h4>
                                    <p class="text-slate-600 text-sm leading-relaxed">{{ skills.cloud }}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Berufserfahrung -->
                    <section class="mb-14">
                        <div class="flex items-center gap-4 mb-8">
                            <div class="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                            </div>
                            <h2 class="text-4xl font-bold font-serif text-slate-900">Berufserfahrung (ausgewählte
                                Projekte)</h2>
                        </div>
                        <div class="space-y-6">
                            <div v-for="(job, index) in experience" :key="index"
                                class="relative pl-8 pb-8 border-l-2 border-slate-300 last:border-transparent hover:border-indigo-400 transition-colors group">
                                <div
                                    class="absolute -left-3 top-0 w-6 h-6 rounded-full bg-slate-700 border-4 border-white shadow-lg group-hover:scale-110 transition-transform">
                                </div>

                                <div
                                    class="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all hover:border-slate-400">
                                    <div class="flex justify-between items-start mb-3 flex-wrap gap-2">
                                        <div>
                                            <h3 class="text-xl font-bold text-slate-900 mb-1">
                                                {{ job.title }}
                                            </h3>
                                            <p class="text-slate-700 font-semibold">{{ job.organization }}</p>
                                            <p class="text-slate-700 font-medium">{{ job.company }}</p>
                                        </div>
                                        <span
                                            class="text-sm text-slate-600 bg-slate-100 px-4 py-2 rounded-full font-medium whitespace-nowrap">
                                            {{ job.period }}
                                        </span>
                                    </div>
                                    <p class="text-slate-700 mb-4 leading-relaxed">{{ job.description }}</p>
                                    <div v-if="job.tech" class="flex flex-wrap gap-2">
                                        <span v-for="(tech, i) in job.tech.split(', ')" :key="i"
                                            class="text-xs px-3 py-1.5 skill-tag text-white rounded-lg font-medium">
                                            {{ tech }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Weitere Projekte -->
                    <section class="mb-14">
                        <div class="flex items-center gap-4 mb-8">
                            <div class="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                </svg>
                            </div>
                            <h2 class="text-4xl font-bold font-serif text-slate-900">Weitere Projekte</h2>
                        </div>
                        <div class="grid md:grid-cols-2 gap-4">
                            <div v-for="(project, index) in projects" :key="index"
                                class="flex items-start gap-4 bg-slate-50 p-5 rounded-xl border border-slate-200 hover:shadow-lg transition-all hover:border-slate-400 group">
                                <div
                                    class="w-3 h-3 rounded-full bg-slate-700 mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform">
                                </div>
                                <p class="text-slate-700 leading-relaxed">{{ project }}</p>
                            </div>
                        </div>
                    </section>

                    <!-- Ausbildung, Zertifikate und Sprachen -->
                    <div class="grid md:grid-cols-3 gap-6">
                        <section>
                            <div class="flex items-center gap-3 mb-6">
                                <div
                                    class="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                    </svg>
                                </div>
                                <h2 class="text-2xl font-bold font-serif text-slate-900">Ausbildung</h2>
                            </div>
                            <div
                                class="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                                <h3 class="font-bold text-slate-900 mb-1">Dipl.-Ing. Elektrotechnik</h3>
                                <p class="text-slate-700 font-medium">Universität Erlangen-Nürnberg</p>
                                <p class="text-sm text-slate-600 mt-2">Abschluss: 1997</p>
                            </div>
                        </section>

                        <section>
                            <div class="flex items-center gap-3 mb-6">
                                <div
                                    class="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <circle cx="12" cy="8" r="7"></circle>
                                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                    </svg>
                                </div>
                                <h2 class="text-2xl font-bold font-serif text-slate-900">Zertifikate</h2>
                            </div>
                            <div class="space-y-3">
                                <div
                                    class="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                                    <h3 class="font-bold text-slate-900 text-sm">Machine Learning Engineer</h3>
                                    <p class="text-xs text-slate-600 mt-1">Udacity, 2018</p>
                                </div>
                                <div
                                    class="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                                    <h3 class="font-bold text-slate-900 text-sm">Data Analyst</h3>
                                    <p class="text-xs text-slate-600 mt-1">Udacity, 2017</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div class="flex items-center gap-3 mb-6">
                                <div
                                    class="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="m5 8 6 6"></path>
                                        <path d="m4 14 6-6 2-3"></path>
                                        <path d="M2 5h12"></path>
                                        <path d="M7 2h1"></path>
                                        <path d="m22 22-5-10-5 10"></path>
                                        <path d="M14 18h6"></path>
                                    </svg>
                                </div>
                                <h2 class="text-2xl font-bold font-serif text-slate-900">Sprachen</h2>
                            </div>
                            <div class="space-y-3">
                                <div
                                    class="bg-slate-50 px-5 py-4 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                                    <p class="font-bold text-slate-900">Deutsch</p>
                                    <p class="text-sm text-slate-600">Muttersprache</p>
                                </div>
                                <div
                                    class="bg-slate-50 px-5 py-4 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                                    <p class="font-bold text-slate-900">Englisch</p>
                                    <p class="text-sm text-slate-600">Verhandlungssicher</p>
                                </div>
                                <div
                                    class="bg-slate-50 px-5 py-4 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                                    <p class="font-bold text-slate-900">Französisch</p>
                                    <p class="text-sm text-slate-600">Schulkenntnisse</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const contactInfo = {
    name: "Jens Laufer",
    //photoUrl: "https://res.cloudinary.com/jenslaufer/image/upload/v1550571160/Jens_Laufer-13-1.jpg",
    //photoUrl: "https://res.cloudinary.com/jenslaufer/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1525766863/Jens_Laufer-3.jpg",
    photoUrl: "https://res.cloudinary.com/jenslaufer/image/upload/e_grayscale,c_thumb,w_200,g_face/v1525766863/Jens_Laufer-3.jpg",
    address: "Hörsteiner Str. 20a, 63791 Karlstein a. Main",
    phone: "+49 172 8443048",
    email: "jenslaufer@jenslaufer.com",
    website: "https://jenslaufer.com",
    company: "https:///www.solytics.de",
    ideenpilot: "https://ideenpilot.com/#/",
    github: "https://github.com/jenslaufer",
    linkedin: "https://linkedin.com/in/jenslaufer",
};

const skills = {
    working: "Hands-on, kundenorientiert, dokumentationsstark, Agile (Scrum), Clean Code",
    dataScience: "R, Python, pandas, polars, scikit-learn, ggplot, dplyr, Explorative Datenanalyse, Clustering, A/B-Tests",
    api: "RESTful APIs, OpenAPI, Swagger",
    databases: "PostgreSQL, MySQL, MongoDB, Oracle",
    backend: "Java 8+, Python, Spring Boot, Spring Security, JPA",
    frontend: "Javascript, TailwindCSS, vue.js",
    devops: "Docker, Kubernetes, GitLab CI, Jenkins",
    testing: "JUnit, Mockito, TDD, Playwright",
    cloud: "AWS, Azure, Keycloak IAM"
};

const experience = [
    {
        title: "Backend-Entwickler",
        company: "Brunata GmbH – Heizkostenabrechnung",
        period: "07/2022 – 08/2024 (Remote)",
        organization: "Solytics GmbH",
        description: "Entwicklung von Java-Microservices mit Spring Boot zur Heizdatenverarbeitung, Parserlogik und Datenmodellierung mit R, Authentifizierung über Keycloak, CI/CD mit GitLab, TDD mit JUnit und Mockito",
        tech: "Java, Spring Boot, MongoDB, PostgreSQL, R, GitLab CI, JUnit, Mockito"
    },
    {
        title: "Backend-Entwickler",
        company: "Condor – Migration Payment-Backend",
        period: "01/2022 – 06/2022 (Remote)",
        organization: "Solytics GmbH",
        description: "JavaEE zu Spring Boot Migration, Containerisierung mit Docker, API-Anpassung, Refactoring, Testautomatisierung",
        tech: "Java, Spring Boot, Docker, JUnit, Mockito, API"
    },
    {
        title: "Fullstack-Entwickler",
        company: "DigitalMarketer.com – Marketing-Tools & Analytics",
        period: "2021 – 2022 (Remote)",
        organization: "freiberuflich",
        description: "Entwicklung datengetriebener Tools mit Spring Boot, Vue.js, R, Webscraping, Kampagnenanalyse, A/B-Testing",
        tech: "Java, Python, Vue.js, R, PostgreSQL, Docker"
    },
    {
        title: "DevOps & Fullstack-Entwickler",
        company: "Deutsche Telekom – Gerätekonfiguration",
        period: "2019 – 2020",
        organization: "freiberuflich",
        description: "Weiterentwicklung eines Frontend-Backendsystems zur Verwaltung von Endgeräten, Spring Boot, Vue.js, Keycloak IAM, CI/CD mit Rancher und GitLab",
        tech: "Python, Vue.js, Keycloak, Docker, Kubernetes, Cloud, GitLab CI"
    },
    {
        title: "Machine Learning Engineer",
        company: "JiGaoTrading (CN) – Börsenagent",
        period: "2019",
        organization: "freiberuflich",
        description: "Reinforcement Learning Agent für automatisierten Aktienhandel, Python, OpenAI Gym, AWS Sagemaker",
        tech: "Python, TensorFlow, OpenAI Gym",
    },
    {
        title: "Data Analyst & ML Engineer",
        company: "Coop UK – Kundenanalyse & Segmentierung",
        period: "2019",
        organization: "freiberuflich",
        description: "Clustering, PCA, Datenvisualisierung (R, Python, scikit-learn, ggplot), Insights zu Konsumverhalten, Sortimentsoptimierung",
        tech: "R, Python, pandas, numpy, ggplot2, tidyverse, dpylr",
    }
];

const projects = [
    "Bundesagentur für Arbeit: Backend-Entwicklung",
    "Volkswagen: Backend-Entwicklung von Geodatenservices für Fahrtenbuch & Tanklogbuch (Spring Boot, Kafka, Azure)",
    "DVAG: Rechnungsplattform für KMUs (mehrere Teilprojekte über 3 Jahre, Microservices, Spring Security, OAuth2)",
    "Audi: Prototyp eines Fahrzeugkonfigurators (SPA mit AngularJS, Spring, MongoDB)",
    "Commerzbank: Datenmigration & Workflowentwicklung für Masterdatenmanagement",
    "1&1: Implementierung von Webservices auf einem ESB, SAP-Anbindung"
];

const printCV = () => {
    window.print();
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

* {
    font-family: 'Inter', sans-serif;
}

.font-serif {
    font-family: 'Crimson Pro', serif;
}

@media print {
    body {
        background: white;
    }

    .no-print {
        display: none !important;
    }

    .shadow-2xl,
    .shadow-lg,
    .shadow-md {
        box-shadow: none !important;
    }

    .border {
        border-color: #e2e8f0 !important;
    }
}

.skill-tag {
    background: #475569;
    transition: all 0.3s ease;
}

.skill-tag:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(71, 85, 105, 0.4);
    background: #334155;
}
</style>