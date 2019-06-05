## Tworzenie galerii

1. Na swoim komputerze stwórz folder ze zdjęciami, np. `zawody-skitourowe`
2. Wewnątrz folderu umieść zdjęcia. Zdjęcia powinny mieć szerokość **900 pikseli** i krótkie nazwy. Najlepiej żeby nazwa zdjęcia była kolejnym numerem (`01.jpg`, `02.jpg`, ..., `08.jpg`). Łatwiej wtedy stworzyć linki do zdjęć.
3. Na stronie [github.com](https://github.com/skitourowe-koscielisko/skitourowe-koscielisko.github.io/) przejdź do folderu [images/galleries](https://github.com/skitourowe-koscielisko/skitourowe-koscielisko.github.io/tree/master/images/galleries)
4. Kliknij `Upload files` ![Upload files](/images/galleries/tutorial/01-upload.png)
5. Przeciągnij i upuść folder z galerią w tym miejscu: ![Drag and drop](/images/galleries/tutorial/02-drag-and-drop.png)
6. Zatwierdź zmiany. Kliknij przycisk `Commit changes` na dole strony. ![Commit changes](/images/galleries/tutorial/03-commit.png)

## Tworzenie newsa

Żeby stworzyć newsa, który pojawi się na stronie, wejdź do folderu [_posts](https://github.com/skitourowe-koscielisko/skitourowe-koscielisko.github.io/tree/master/_posts)
Można też stworzyć szkic (draft) newsa, który nie będzie jeszcze widoczny na stronie, ale dostępny do późniejszej edycji. Szkice tworzy się w folderze [_drafts](https://github.com/skitourowe-koscielisko/skitourowe-koscielisko.github.io/tree/master/_drafts).

1. Wejdź do folderu [_posts](https://github.com/skitourowe-koscielisko/skitourowe-koscielisko.github.io/tree/master/_posts)
2. Kliknij `Create new file` ![Create new file](/images/galleries/tutorial/04-create.png)
3. Nadaj nazwę pliku z rozszerzeniem `.md`. News powinien mieć nazwę zaczynającą się od daty. W tytule używaj tylko małych liter.
   Bez polskich znaków. Zamiast spacji, używaj **-**. Dobry przykład newsa: `2019-06-01-zawody-skitourowe.md`
4. Skopiuj poniższy szablon do edycji:
  ```markdown
    ---
    title: Tytuł newsa
    description: Opis, który się pojawi w wynikach wyszukiwania
    thumbnail: /images/news/zawody-kuba-witos.jpg
    ---
    <span class="image left">
      <img alt="Plakat z zawodów im. Basi German" src="/images/news/plakat-hr-491x692.jpg" title="Plakat z zawodów im. Basi German">
    </span>
    To jest miejsce na obrazek i pierwszy paragraf, będący zajawką newsa.
    
    ### Nagłówek rozpoczynający pierwszą sekcję
    
    Pierwszy paragraf pierwszej sekcji.
    
    Drugi paragraf pierwszej sekcji.
    Składa się z dwóch zdań i jest zapisany w dwóch liniach
    
    ### Składnia lisy
    
    Lista numerowana:
    1. Jeden
    2. Dwa
    3. Trzy
    
    Lista nienumerowana:
    * jeden
    * dwa
    * trzy
    
    ### Przykład galerii
    
    <span class="image modal gallery">
      <a href="/images/galleries/zawody-basi-german/race5.jpg" title=""><img src="/images/galleries/zawody-basi-german/race5.jpg.thumb.jpg" alt="" /></a>
      <a href="/images/galleries/zawody-basi-german/race6.jpg" title=""><img src="/images/galleries/zawody-basi-german/race6.jpg.thumb.jpg" alt="" /></a>
      <a href="/images/galleries/zawody-basi-german/race7.jpg" title=""><img src="/images/galleries/zawody-basi-german/race7.jpg.thumb.jpg" alt="" /></a>
      <a href="/images/galleries/zawody-basi-german/race8.jpg" title=""><img src="/images/galleries/zawody-basi-german/race8.jpg.thumb.jpg" alt="" /></a>
    </span>
  ```
5. Popraw atrybuty `title`, `description` i `thumbnail` na początku pliku
6. Użyj składni markdown do edycji treści. Szablon zawiera podstawową składnię. Ściąga Markdown jest dostępna [tutaj](https://daringfireball.net/projects/markdown/syntax)
7. Podejrzyj zmiany, klikając
  ![Preview](/images/galleries/tutorial/05-preview.png)
8. Jeśli wszystko jest w porządku. Post i obrazki wyświetlają się prawidłowo, kliknij przycisk `Commit changes` na dole strony

## Edycja newsów

1. Otwórz plik `.md` w folderze [_posts](https://github.com/skitourowe-koscielisko/skitourowe-koscielisko.github.io/tree/master/_posts)]
2. Kliknij ikonę ołówka, żeby rozpocząć edycję
   ![edit](/images/galleries/tutorial/06-edit.png)
3. Po wprowadzeniu zmian, kliknij `Commit changes` na dole strony

## Wstawianie obrazków

Obrazki będą się wyświetlały prawidłowo na stronie [Skitourowe Kościelisko](http://skitourowekoscielisko.pl/), jeśli
użyjemy specjalnego kodu HTML do wstawiania obrazków. Dobrym przykładem jest news [2019-02-28-xiv-zawody-polar-sport-skitour-im-basi-german.md](https://raw.githubusercontent.com/skitourowe-koscielisko/skitourowe-koscielisko.github.io/master/_posts/2019-02-28-xiv-zawody-polar-sport-skitour-im-basi-german.md)

Tak należy wstawiać obrazek, który wyświetli się po lewej od tekstu:
```html
<span class="image left">
    <img alt="Plakat z zawodów im. Basi German" src="/images/news/plakat-hr-491x692.jpg" title="Plakat z zawodów im. Basi German">
</span>
2 marca 2019 roku powraca Polar Sport Skitour, czyli doroczne zawody skiturowe
```
Tak należy wstawiać obrazek, który będzie rozciągnięry na całą szerokość strony:
```html
<span class="image fit">
  <img src="/images/news/zawody-basi-german/snow-leopard.jpg" alt="Snow Leopard Day 2 marca 2019" />
</span>
```

Tak tworzy się galerię:
```html
<span class="image modal gallery">
  <a href="/images/galleries/zawody-basi-german/race5.jpg" title=""><img src="/images/galleries/zawody-basi-german/race5.jpg.thumb.jpg" alt="" /></a>
  <a href="/images/galleries/zawody-basi-german/race6.jpg" title=""><img src="/images/galleries/zawody-basi-german/race6.jpg.thumb.jpg" alt="" /></a>
  <a href="/images/galleries/zawody-basi-german/race7.jpg" title=""><img src="/images/galleries/zawody-basi-german/race7.jpg.thumb.jpg" alt="" /></a>
  <a href="/images/galleries/zawody-basi-german/race8.jpg" title=""><img src="/images/galleries/zawody-basi-german/race8.jpg.thumb.jpg" alt="" /></a>
</span>
```

### Zalecany rozmiar obrazków

Obrazki na stronie wyświetlają się w określonych rozmiarach. Wrzucanie pomniejszonych obrazków na stronę powoduje że strona wgrywa się szybciej.
* Miniaturki newsów powinny mieć rozmiar **600x352 piksele**
* Obrazki, które mają być wyświetlane w galerii powinny mieć szerokość **900 pikseli**
* Miniaturki do galerii powinny mieć rozmiar **346x203**

