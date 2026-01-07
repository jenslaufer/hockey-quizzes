<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Toolbar - nur am Bildschirm sichtbar -->
      <div class="print:hidden mb-6 flex justify-end gap-4">
        <button @click="exportToPDF"
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 font-medium">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
          Als PDF exportieren
        </button>
      </div>

      <!-- Anschreiben Container -->
      <div id="letter-content"
        class="bg-white shadow-2xl rounded-lg overflow-hidden print:shadow-none print:rounded-none">
        <!-- Header mit Akzentfarbe -->
        <div class="bg-gradient-to-r from-blue-600 to-blue-700 h-2 print:hidden"></div>

        <!-- Hauptinhalt -->
        <div class="p-6 print:p-16">
          <!-- Absender -->
          <div class="mb-12 print:mb-16">
            <div class="text-gray-600 space-y-1 text-sm ">
              <p class="font-medium text-gray-900">Jens Laufer</p>
              <p>Hörsteiner Str. 20a</p>
              <p>63791 Karlstein a. Main</p>
              <p class="pt-2">jenslaufer@gmail.com</p>
              <p>+49-172-8443048</p>
            </div>
          </div>

          <!-- Empfänger -->
          <div class="mt-12 mb-8">
            <div class="text-gray-700 space-y-1 text-sm">
              <p class="font-medium text-gray-900">Deutsche Bundesbank</p>
              <p>Personalabteilung</p>
              <p>Wilhelm-Epstein-Straße 14</p>
              <p>60431 Frankfurt am Main</p>
            </div>
          </div>

          <!-- Datum und Betreff -->
          <div class="mt-8 mb-14">
            <p class="text-gray-600 text-sm mb-13">{{ currentDate }}</p>
            <h1 class="text-2xl font-bold text-gray-900 mb-2">
              Bewerbung als Data Management Specialist (m/w/d)
            </h1>
            <p class="text-gray-600">Stellen-ID: 2025_1175_02</p>
          </div>

          <!-- Anrede -->
          <div class="space-y-6 text-gray-700 leading-relaxed">
            <p>Sehr geehrte Damen und Herren,</p>

            <p>
              wenn ich Ihre Ausschreibung lese, sehe ich eine Situation, die ich gut kenne: Eine neue Einheit entsteht,
              Prozesse müssen definiert werden, verschiedene Stakeholder haben unterschiedliche Erwartungen, und am Ende
              sollen Daten nicht nur vorhanden, sondern wirklich nutzbar sein. Das ist genau das Spannungsfeld, in dem
              ich mich seit Jahren bewege.
            </p>

            <p>
              Als freiberuflicher Entwickler und Data Scientist habe ich gelernt: Datenmanagement funktioniert nur, wenn
              man beide Seiten versteht – die technische UND die fachliche. Ich kann Python-Skripte für Datenflüsse
              schreiben, Datenbanken aufsetzen und gleichzeitig mit Controlling und Fachabteilungen auf Augenhöhe
              sprechen. Diese Brückenfunktion ist bei mir keine Theorie aus dem Lehrbuch, sondern Daily Business aus
              über 20 Projekten in verschiedensten Branchen.
            </p>

            <p class="font-medium text-gray-900">Was ich für EFIDA konkret mitbringe:</p>

            <div class="space-y-4 pl-1">
              <div>
                <p class="font-semibold text-gray-900">Ich mache Daten produktiv.</p>
                <p>In meinen Projekten bedeutet das: Ich verstehe, woher Daten kommen, wie sie transformiert werden
                  müssen und wie sie schließlich in Analysen oder Dashboards landen. Wenn ein Fachanwender ein Problem
                  mit Finanzmarktdaten hat, finde ich nicht nur die technische Lösung, sondern erkläre auch, warum sie
                  funktioniert.</p>
              </div>

              <div>
                <p class="font-semibold text-gray-900">Ich baue Prozesse, die halten.</p>
                <p>Zwanzig Jahre Selbstständigkeit haben mich gelehrt: Adhoc-Lösungen sind teuer. Ich denke in
                  Workflows, Qualitätsstandards und Automatisierung – weil ich die Konsequenzen schlechter Datenqualität
                  selbst ausbaden musste.</p>
              </div>

              <div>
                <p class="font-semibold text-gray-900">Ich komme schnell rein.</p>
                <p>Neue Datenquellen bewerten, Use Cases analysieren, mit IT und Beschaffung koordinieren – das ist der
                  Kern meiner Arbeit als externer Berater. Ich brauche keine sechs Monate Einarbeitung, um Wert zu
                  liefern.</p>
              </div>

              <div>
                <p class="font-semibold text-gray-900">Ich spreche beide Sprachen.</p>
                <p>Datenbanken, APIs, ETL-Prozesse auf der einen Seite – Geschäftsprozesse, Anforderungsmanagement und
                  Stakeholder-Kommunikation auf der anderen. Ich übersetze zwischen diesen Welten, weil ich in beiden
                  zuhause bin.</p>
              </div>
            </div>

            <p>
              Ihr Projekt reizt mich, weil es nicht nur um Technik geht. Sie bauen etwas Neues auf, das sichtbar sein
              und Mehrwert liefern soll. Das bedeutet: Standards setzen, Abläufe etablieren, Menschen mitnehmen. Genau
              hier liegt meine Stärke – ich sehe das große Bild, verliere mich aber nicht in abstrakten Konzepten,
              sondern sorge dafür, dass am Ende etwas funktioniert.
            </p>

            <p>
              Lassen Sie uns sprechen. Ich zeige Ihnen gern konkret, wie ich EFIDA helfen kann, nicht nur Daten zu
              verwalten, sondern eine Infrastruktur zu schaffen, die Ihre Bank wirklich voranbringt.
            </p>

            <!-- Grußformel -->
            <div class="mt-12">
              <p class="mb-14">Mit freundlichen Grüßen</p>
              <p class="font-medium text-gray-900">Jens Laufer</p>
            </div>
          </div>
        </div>

        <!-- Footer mit Akzent - nur am Bildschirm -->
        <div class="bg-gradient-to-r from-blue-600 to-blue-700 h-1 print:hidden"></div>
      </div>

      <!-- Info-Box unter dem Brief - nur am Bildschirm -->
      <div class="print:hidden mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
        <p class="flex items-start gap-2">
          <svg class="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd" />
          </svg>
          <span>
            <strong>Tipp:</strong> Klicke auf "Als PDF exportieren" und wähle im Druckdialog "Als PDF speichern" oder
            verwende einen PDF-Drucker. Passe vor dem Export deine persönlichen Daten (Name, Adresse, Kontakt) im
            Template an.
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const currentDate = computed(() => {
  const today = new Date()
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return today.toLocaleDateString('de-DE', options)
})

const exportToPDF = () => {
  globalThis.print()
}
</script>

<style>
/* Print-spezifische Styles */
@media print {
  body {
    background: white;
  }

  @page {
    margin: 1cm;
    size: A4;
  }

  /* Seitenumbrüche optimieren */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    page-break-after: avoid;
  }

  p {
    orphans: 3;
    widows: 3;
  }

  /* Keine Schatten im Druck */
  * {
    box-shadow: none !important;
    text-shadow: none !important;
  }
}

/* Schrift-Optimierung für bessere Lesbarkeit */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>