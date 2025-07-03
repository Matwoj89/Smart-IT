Smart IT – Serwis Komputerowy
Profesjonalna, responsywna strona prezentująca ofertę serwisu komputerowego Smart IT. Gotowy szablon HTML/CSS z ikonami Boxicons i sekcją kontaktu.

Funkcje
Responsywny układ grid prezentujący usługi

Ikony Boxicons zamiast obrazków – lekka grafika z CDN

Sekcja kontaktowa z formularzem Formspree i numerem telefonu

Motyw jasny i ciemny (obsługa w script.js)

Przygotowane metatagi SEO oraz Open Graph

Spis treści
Instalacja lokalna

Deploy na GitHub Pages

Konfiguracja formularza

Dostosowanie stylów

Technologie

Wsparcie

Licencja

Instalacja lokalna
Sklonuj repozytorium:

bash
git clone https://github.com/TwojLogin/smart-it.git
cd smart-it
Otwórz index.html w przeglądarce

(Opcjonalnie) uruchom prosty serwer HTTP:

bash
npx http-server . -p 8080
Deploy na GitHub Pages
Utwórz repo o nazwie TwojLogin.github.io

Wypchnij kod do gałęzi main:

bash
git remote add origin https://github.com/TwojLogin/TwojLogin.github.io.git
git push -u origin main
Odczekaj chwilę, strona pojawi się pod https://TwojLogin.github.io

(Opcjonalnie) dodaj własną domenę w Settings → Pages → Custom domain

Konfiguracja formularza
Formularz wysyła wiadomości przez Formspree. Aby działanie było aktywne:

Zarejestruj się na formspree.io

Utwórz nowy formularz i skopiuj swój ID

W index.html zmień atrybut action:

html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
Przetestuj wysyłkę i potwierdź swój adres e-mail

Dostosowanie stylów
Wszystkie reguły CSS znajdują się w pliku styles.css. Możesz:

Zmienić kolory w sekcji .card .icon

Dodać media queries dla niestandardowych breakpointów

Przenieść inline-style z <head> do zewnętrznego arkusza

Technologie
HTML5

CSS3 (Grid Layout, Flexbox)

Boxicons (CDN)

JavaScript (tryb ciemny/jasny)

Wsparcie
Masz pytania lub potrzebujesz pomocy? Napisz na e-mail: hello@smart-it.pl lub zadzwoń: +48 600 123 456

Licencja
