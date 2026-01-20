<template>
    <div class="min-h-screen py-8 px-4">
        <!-- Print Button -->
        <div class="max-w-4xl mx-auto mb-6 no-print">
            <button @click="printLetter"
                class="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
                Anschreiben drucken
            </button>
        </div>

        <!-- Letter Content -->
        <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 print-container">
                <!-- Decorative Header -->
                <div class="relative h-24 print-h-12 bg-slate-800 overflow-hidden">
                    <div class="absolute inset-0 opacity-20">
                        <div class="absolute top-0 right-0 w-64 h-64 bg-slate-700 rounded-full blur-3xl"></div>
                        <div class="absolute bottom-0 left-0 w-64 h-64 bg-slate-700 rounded-full"></div>
                    </div>
                    <div class="relative h-full flex items-center px-8 print-px-6">
                        <div>
                            <h1 class="text-2xl print-text-xl font-bold font-serif text-white mb-1">Bewerbungsschreiben
                            </h1>
                            <div class="w-16 h-0.5 bg-slate-600 rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div class="p-8 print-p-4 print-pt-3">
                    <!-- Absender -->
                    <div class="mb-6 print-mb-2 pb-4 print-pb-2 border-b border-slate-200">
                        <div class="flex items-start gap-4">
                            <div class="w-0.5 h-16 print-h-10 bg-slate-700 rounded-full"></div>
                            <div class="text-xs print-text-2xs space-y-0.5">
                                <p class="font-bold text-slate-900 text-sm print-text-xs">{{ senderInfo.name }}</p>
                                <p class="text-slate-600">{{ senderInfo.street }}</p>
                                <p class="text-slate-600">{{ senderInfo.city }}</p>
                                <p class="text-slate-700 mt-1 font-medium">{{ senderInfo.email }}</p>
                                <p class="text-slate-700 font-medium">{{ senderInfo.phone }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Empfänger -->
                    <div class="mb-6 print-mb-2">
                        <div class="bg-slate-50 p-4 print-p-3 rounded-lg border border-slate-200">
                            <p class="font-bold text-slate-900 text-sm print-text-xs mb-0.5">{{ recipientInfo.company }}
                            </p>
                            <p class="text-slate-700 text-xs print-text-2xs">{{ recipientInfo.department }}</p>
                            <p class="text-slate-600 text-xs print-text-2xs">{{ recipientInfo.street }}</p>
                            <p class="text-slate-600 text-xs print-text-2xs">{{ recipientInfo.city }}</p>
                        </div>
                    </div>

                    <!-- Betreff -->
                    <div class="mb-6 print-mb-2">
                        <div class="bg-slate-50 p-4 print-p-3 rounded-lg border-l-3 border-slate-700">
                            <h2 class="text-lg print-text-base font-bold font-serif text-slate-900 mb-1">
                                {{ subject.title }}
                            </h2>
                            <p class="text-slate-700 font-semibold text-xs print-text-2xs">{{ subject.jobId }}</p>
                        </div>
                    </div>

                    <!-- Datum -->
                    <div class="mb-6 print-mb-2 text-right">
                        <p class="text-slate-600 font-medium text-xs print-text-2xs">{{ date }}</p>
                    </div>

                    <!-- Anrede -->
                    <p class="mb-4 print-mb-2 text-slate-800 text-sm print-text-xs">{{ salutation }}</p>

                    <!-- Haupttext -->
                    <div class="space-y-3 print-space-y-2 text-slate-700 leading-relaxed text-sm print-text-xs">
                        <p class="">
                            {{ paragraphs.intro }}
                        </p>

                        <p>
                            {{ paragraphs.experience }}
                        </p>

                        <!-- Highlights Section -->
                        <div class="my-4 print-my-3 bg-slate-50 p-4 print-p-3 rounded-lg border border-slate-200">
                            <p
                                class="font-bold text-slate-900 mb-3 print-mb-2 text-sm print-text-xs flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="text-slate-700">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                {{ highlights.title }}
                            </p>

                            <div class="space-y-2 print-space-y-1.5">
                                <div v-for="(highlight, index) in highlights.points" :key="index"
                                    class="bg-white p-3 print-p-2 rounded border border-slate-200">
                                    <p class="font-bold text-slate-900 mb-1 text-xs print-text-2xs">
                                        {{ highlight.title }}
                                    </p>
                                    <p class="text-slate-700 leading-relaxed text-xs print-text-2xs">
                                        {{ highlight.content }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p>
                            {{ paragraphs.motivation }}
                        </p>

                        <p class="font-medium">
                            {{ paragraphs.closing }}
                        </p>
                    </div>

                    <!-- Grußformel -->
                    <div class="mt-8 print-mt-4">
                        <p class="mb-12 print-mb-6 text-slate-800 font-medium text-sm print-text-xs">{{ farewell }}</p>
                        <div class="border-t border-slate-200 pt-2 inline-block">
                            <p class="font-bold text-slate-900 text-base print-text-sm">{{ senderInfo.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const senderInfo = {
    name: "Jens Laufer",
    street: "Hörsteiner Str. 20a",
    city: "63791 Karlstein a. Main",
    email: "jenslaufer@gmail.com",
    phone: "+49-172-8443048"
};

const recipientInfo = {
    company: "Deutsche Bundesbank",
    department: "Personalabteilung",
    street: "Wilhelm-Epstein-Straße 14",
    city: "60431 Frankfurt am Main"
};

const date = "9. Januar 2026";

const subject = {
    title: "Bewerbung als Data Management Specialist (m/w/d)",
    jobId: "Stellen-ID: 2025_1175_02"
};

const salutation = "Sehr geehrte Frau Triebskorn, sehr geehrter Herr Dötsch,";

const paragraphs = {
    intro: "wenn ich Ihre Ausschreibung lese, sehe ich eine Situation, die ich gut kenne: Eine neue Einheit entsteht, Prozesse müssen definiert werden, verschiedene Stakeholder haben unterschiedliche Erwartungen, und am Ende sollen Daten nicht nur vorhanden, sondern wirklich nutzbar sein. Das ist genau das Spannungsfeld, in dem ich mich seit Jahren bewege.",

    experience: "Als freiberuflicher Entwickler und Data Scientist habe ich gelernt: Datenmanagement funktioniert nur, wenn man beide Seiten versteht – die technische UND die fachliche. Ich kann Python-Skripte für Datenflüsse schreiben, Datenbanken aufsetzen und gleichzeitig mit Controlling und Fachabteilungen auf Augenhöhe sprechen. Diese Brückenfunktion ist bei mir keine Theorie aus dem Lehrbuch, sondern Daily Business aus über 20 Projekten in verschiedensten Branchen.",

    motivation: "Ihr Projekt reizt mich, weil es nicht nur um Technik geht. Sie bauen etwas Neues auf, das sichtbar sein und Mehrwert liefern soll. Das bedeutet: Standards setzen, Abläufe etablieren, Menschen mitnehmen. Genau hier liegt meine Stärke – ich sehe das große Bild, verliere mich aber nicht in abstrakten Konzepten, sondern sorge dafür, dass am Ende etwas funktioniert.",

    closing: "Lassen Sie uns sprechen. Ich zeige Ihnen gern konkret, wie ich EFIDA helfen kann, nicht nur Daten zu verwalten, sondern eine Infrastruktur zu schaffen, die Ihre Bank wirklich voranbringt."
};

const highlights = {
    title: "Was ich für EFIDA konkret mitbringe:",
    points: [
        {
            title: "Ich bringe Daten produktiv.",
            content: "In meinen Projekten bedeutet das: Ich verstehe, woher Daten kommen, wie sie transformiert werden müssen und wie sie schließlich in Analysen oder Dashboards landen. Wenn ein Fachanwender ein Problem mit Finanzmarktdaten hat, finde ich nicht nur die technische Lösung, sondern erkläre auch, warum sie funktioniert."
        },
        {
            title: "Ich baue Prozesse, die halten.",
            content: "Zwanzig Jahre Selbstständigkeit haben mich gelehrt: Adhoc-Lösungen sind teuer. Ich denke in Workflows, Qualitätsstandards und Automatisierung – weil ich die Konsequenzen schlechter Datenqualität selbst ausbaden musste."
        },
        {
            title: "Ich komme schnell rein.",
            content: "Neue Datenquellen bewerten, Use Cases analysieren, mit IT und Beschaffung koordinieren – das ist der Kern meiner Arbeit als externer Berater. Ich brauche keine sechs Monate Einarbeitung, um Wert zu liefern."
        },
        {
            title: "Ich spreche beide Sprachen.",
            content: "Datenbanken, APIs, ETL-Prozesse auf der einen Seite – Geschäftsprozesse, Anforderungsmanagement und Stakeholder-Kommunikation auf der anderen. Ich übersetze zwischen diesen Welten, weil ich in beiden zuhause bin."
        }
    ]
};

const farewell = "Mit freundlichen Grüßen";

const printLetter = () => {
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

    .rounded-2xl,
    .rounded-xl,
    .rounded-lg {
        border-radius: 4px !important;
    }

    /* Kompakte Print-Größen */
    .print-container {
        max-width: 100% !important;
    }

    .print-h-12 {
        height: 2rem !important;
    }

    .print-h-10 {
        height: 2rem !important;
    }

    .print-px-6 {
        padding-left: 1rem !important;
        padding-right: 1rem !important;
    }

    .print-p-4 {
        padding: 0.75rem !important;
    }

    .print-pt-3 {
        padding-top: 0.5rem !important;
    }

    .print-p-3 {
        padding: 0.5rem !important;
    }

    .print-p-2 {
        padding: 0.4rem !important;
    }

    .print-pl-4 {
        padding-left: 0.75rem !important;
    }

    .print-pb-2 {
        padding-bottom: 0.3rem !important;
    }

    .print-mb-2 {
        margin-bottom: 0.3rem !important;
    }

    .print-mb-3 {
        margin-bottom: 0.5rem !important;
    }

    .print-mb-4 {
        margin-bottom: 0.75rem !important;
    }

    .print-mb-6 {
        margin-bottom: 1rem !important;
    }

    .print-mb-8 {
        margin-bottom: 1.5rem !important;
    }

    .print-mt-4 {
        margin-top: 0.75rem !important;
    }

    .print-mt-6 {
        margin-top: 1rem !important;
    }

    .print-my-3 {
        margin-top: 0.5rem !important;
        margin-bottom: 0.5rem !important;
    }

    .print-pb-3 {
        padding-bottom: 0.5rem !important;
    }

    .print-space-y-2>*+* {
        margin-top: 0.4rem !important;
    }

    .print-space-y-1\.5>*+* {
        margin-top: 0.3rem !important;
    }

    /* Schriftgrößen für Print */
    .print-text-2xs {
        font-size: 0.65rem !important;
        line-height: 1.3 !important;
    }

    .print-text-xs {
        font-size: 0.75rem !important;
        line-height: 1.4 !important;
    }

    .print-text-sm {
        font-size: 0.85rem !important;
        line-height: 1.4 !important;
    }

    .print-text-base {
        font-size: 0.95rem !important;
        line-height: 1.4 !important;
    }

    .print-text-xl {
        font-size: 1.1rem !important;
        line-height: 1.3 !important;
    }

    .print-first-letter\:text-2xl::first-letter {
        font-size: 1.3rem !important;
    }

    @page {
        margin: 1cm 1.5cm 1.5cm 1.5cm;
        size: A4;
    }
}
</style>