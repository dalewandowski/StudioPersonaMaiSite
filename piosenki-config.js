// ============================================================
// PRZYKŁADOWE PIOSENKI — lista w odtwarzaczu na stronie głównej
// ============================================================
// Żeby dodać piosenkę: wgraj plik mp3 do folderu audio/ i dopisz
// kolejny obiekt na końcu listy (pamiętaj o przecinku po poprzednim).
//
//   title    - tytuł piosenki
//   occasion - okazja (wyświetla się pod tytułem)
//   file     - ścieżka do pliku mp3
//
// Żeby usunąć piosenkę: skasuj jej obiekt. Kolejność = kolejność na liście.
// Gdy lista jest pusta, cała sekcja odtwarzacza się ukrywa.
const SAMPLE_SONGS = [
  {
    title: "Nasza droga 💝 ",
    occasion: "Piosenka z okazji rocznicy ślubu 👩‍❤️‍👨👰‍♂️ ",
    file: "https://media.studiopersona.pl/nasza-droga.mp3",
  },
  {
    title: "Gdzie budzi się las 🌲",
    occasion:
      "Piosenka dla myśliwego, który kocha las, psy, poranne wyprawy i koleżeństwo przy ognisku. 🌲🦌",
    file: "https://media.studiopersona.pl/Gdzie%20budzi%20si%C4%99%20las.mp3",
  },
  {
    title: "Iza ma swój czas 🎈",
    occasion: "50-te urodziny Izabeli 🎉🥂 ",
    file: "https://media.studiopersona.pl/Iza%20ma%20dzi%C5%9B%20sw%C3%B3j%20czas.mp3",
  },
  {
    title: "Legenda nie kończy zmiany 🦺",
    occasion: "Zabawny rap dla ekipy z pracy. 👷‍♂️🔥 ",
    file: "https://media.studiopersona.pl/Legenda%20nie%20ko%C5%84czy%20zmiany.mp3",
  },
  {
    title: "Najlepsi rodzice ❣️",
    occasion: "Wzruszająca ballada jako podziękowanie dla rodziców 👩‍🦳👨‍🦳",
    file: "https://media.studiopersona.pl/Najlepsi%20Rodzice.mp3",
  },
  {
    title: "Nie musisz mówić 👊",
    occasion:
      "O przyjacielu, który zawsze mówi „dzwoń, jak coś” i zawsze obiera telefon 🎵📱 ",
    file: "https://media.studiopersona.pl/Nie%20musisz%20m%C3%B3wi%C4%87.mp3",
  },
];
