# Taekwondo - Hyongs & Übungen
Dieses Gitrepository enthält eine App, welche das Taekwondo umfasst, daher auch der Name TechWonDo.

In dieser App kann man alle Hyongs von ersten bis zur achten nachschlagen und zu diesen auch zufällige Übungen generieren lassen. Das passiert anhand der gelisteten Bewegungstypen bei jeder Hyong.

Außerdem werden zufällige Übungen als solche oder als Ideenansatz generiert.


# Technische Daten
### Framework
In diesem Projekt arbeite ich mit __[React](https://reactjs.org/)__, da es meiner Meinung nach Perfekt für diesen Anwendungszweck geeignet ist. Außerdem bin ich ein riesen Fan von React, da es wahnsinnig simple aufgebaut ist und dadurch einfach zu erlernen ist.
Ich arbeite hier außerdem nicht mit CSS sondern mit __[Sass](https://sass-lang.com/)__, da es in meiner Sicht fast schon Zeitverschwendung wäre hier CSS zu nutzen, da man mit dem Sass __[NPM](https://www.npmjs.com/)__ Modul selber nichts kompilieren muss, sondern einfach nur die Sass Dateien importiert und das wars.

### Installation
Gib zu aller erst folgende Commands ein:
```cmd
git clone https://github.com/juniorcoder2008/techwondo-app.git
cd techwondo-app
npm i
npm start
```
Somit installierst und startest du das Projekt.
Möchtest du jetzt die Android/iOS App dafür erstellen musst du folgende Schritte nachmachen.

#### Android
Installiere zu erst [Android Studio](https://developer.android.com/studio?hl=de&gclid=CjwKCAiA6seQBhAfEiwAvPqu1-k-bqLjwtOXhSO8_pjaAhWZZiK3Y3WyN608uh6k9cqirCCLkmva9RoCDhIQAvD_BwE&gclsrc=aw.ds). Gib zunächst in der Konsole folgendes ein:
```cmd
npm run build
npx cap add android
npx cap open android
```
Wähle zunächst einen Emulator oder dein physisches Gerät oben rechts aus und starte die App.

#### iOS
Installiere zu erst [Xcode](https://apps.apple.com/de/app/xcode/id497799835?mt=12). Gib zunächst in der Konsole folgendes ein:
```cmd
npm run build
npx cap add ios
npx cap open ios
```
Zu letzt musst du einfach die App in Xcode starten.
