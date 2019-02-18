import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

export interface IDataItem {
    author: string;
    caption?: string;
    date: Date | string;
    description: string;
    id: number;
    image: string;
    liked?: boolean;
    location: string;
    popularity?: string | number;
    title: string;
    viewed?: boolean;
}

@Injectable()
export class DataService {

    private _items$: BehaviorSubject<Array<IDataItem>>;
    private _items = new Array<IDataItem>(
        {
            id: 1,
            image: "https://cdn.gallerystore.pl/works//w777-h700/jacek-malinowski-toskania-val-d-orcia-1-malarstwo-olejne.jpg",
            title: "Toskania",
            author: "Jacek Malinowski",
            location: "Gallerystore",
            description: "Obraz jest wyjątkową ekspresją artysty. Praca jest dedykowanym portretem Cmili Cobello. Abstrakcyjna gra świateł i cienia za pomocą 4 kolorów oddaje złożoność jakie chciał osiągnąć artysta oraz prosty panton barw które budują całą narrację. Dużą wagę można zaobserwować w detalu, ponieważ jest to grafika wektorowa możemy dostrzec nietypowy detal włosów oraz światło, które rozświetla końcówki. Obraz przedstawia piękno kobiety, oraz drzemiącą magię jej temperamentu. Zimne barwy oddają chłód który symbolizuje żal między uczuciem wynikającym z rozstania.",
            date: "2018",
            popularity: 82,
            viewed: false,
            liked: false
        },
        {
            id: 2,
            image: "https://cdn.gallerystore.pl/works//w777-h700/joanna-sulek-malinowska-chromosfera-iii-akryl.jpg",
            title: "Chromosfera III",
            author: "Joanna Sułek-Malinowska",
            location: "Gallerystore",
            description: "Cykl abstrakcji „Chromosfery” inspirowany jest słońcem, przestrzenią kosmiczną oraz zjawiskami meteorologicznymi. Czarne pasy sugerują ograniczenie mieszkańca ziemskiego, który nie może wznieść się ponad to co widzi z dołu. Barwny środek z symbolicznym słońcem lub planetą zmienia formy oraz kolory w zależności od pory dnia. Obrazy budowane są za pomocą płynnych linii, przenikających się na płaszczyźnie. Często układy przestrzenne rozświetlane są światłem padającym z nieoczywistego źródła. Uwydatniają się aby za chwilę zapaść się w czerń. Powierzchnia obrazów poprzez wielokrotne, precyzyjne nakładanie płaskiej plamy, zdaje się być idealnie gładka. Delikatne linie podkreślają kruchość zjawiska a jednocześnie są łącznikiem pasa barw z czarną przestrzenią.",
            date: "2016",
            popularity: 41,
            viewed: false,
            liked: false
        },
        {
            id: 3,
            image: "https://cdn.gallerystore.pl/works//w777-h700/pawel-gorski-slimak-akryl.jpg",
            title: "Ślimak",
            author: "Paweł Górski",
            location: "Gallerystore",
            description: "Abstrakcyjna przyroda, piekno otaczającego nas świata, współistnienie. Akstrakcyjny, pełen kolorów obraz akrylowy na płótnie lnianym wykonany w technice enkaustyki. Enkaustyka to technika pracochłonna, która wymaga od twórcy nakładania farb na gorąco w spoiwie wosku pszczelego lub oleju. Dzięki takim zabiegom pozwala uzyskać trwałe i odporne na wilgoć rezultaty, a także zachować głębię i blask zastosowanej palety kolorystycznej. Praca doda chatakteru przestronnym wnetrzom. Obraz sprawdzi się w biurze oraz w dużym, jasnym salonie.",
            date: "2015",
            popularity: 55,
            viewed: false,
            liked: false
        },
        {
            id: 4,
            image: "https://cdn.gallerystore.pl/works//w777-h700/pawel-porada-dama-malarstwo-olejne.jpg",
            title: "Dama",
            author: "Paweł Porada",
            location: "Gallerystore",
            description: "Obraz \"dama\" został namalowany na płótnie 3D - grubsza rama, o wymiarach 50x50cm, farbami olejnymi. Malowidło przedstawia kobietę z klasą na tle z bogatą ornamentyką. Bardzo kolorowy, zbudowany z prostych form i kształtów. Klimatem lekko nawiązuje do dawniejszych epok lub do damy z talii kart. Portret idealnie zagra w każdym wnętrzu ale i również podkreśli karciane upodobania, hobby historyczne lub rozrywkowy charakter osoby która go zakupi. Sygnowany z przodu nazwiskiem i datą powstania. Wykonany w pojedynczym egzemplarzu co zwiększa jego wartość kolekcjonerską.",
            date: "2018",
            popularity: 63,
            viewed: false,
            liked: false
        },
        {
            id: 5,
            image: "https://cdn.gallerystore.pl/works//w777-h700/iza-kostiukow-slady-4-malarstwo-olejne.jpg",
            title: "Ślady 4",
            author: "Iza Kostiukow",
            location: "Gallerystore",
            description: "Abstrakcyjny obraz namalowany w technice olejnej. praca nie wymaga ramy , krawędzie płótna są zamalowane. Praca jest zabezpieczona werniksem satynowym. obraz jest sygnowany z tyłu obraz jest częścią cyklu malarskiego \" Ślady\", powstałego w 2014 roku. Praca może być dobrym prezentem np. na ślub.",
            date: "2014",
            popularity: 15,
            viewed: false,
            liked: false
        },
        {
            id: 6,
            image: "https://i.pinimg.com/736x/63/7a/a9/637aa953aa91cd0eb3a1b35ad065b2e1--romanticism-vitamin.jpg",
            title: "O śmierci sąsiada",
            author: "Zbigniew Rogalski",
            location: "Raster gallery",
            description: "Obraz zainspirowany autentycznym zdarzeniem - śmiercią sąsiada malarza. Ciało zmarłego zostało odnalezione dopiero po kilku dniach od zgonu w mieszkaniu, które przylegało do pracowni i mieszkania Rogalskiego.",
            date: "2017",
            popularity: 21,
            viewed: false,
            liked: false
        },
        {
            id: 7,
            image: "https://img1.onebid.pl/img/216/33889_1b.jpg",
            title: "Poster for \"JAZZ Jamboree 70\"",
            author: "Jan Młodożeniec",
            location: "Ostoya",
            description: "Obraz \"dama\" został namalowany na płótnie 3D - grubsza rama, o wymiarach 50x50cm, farbami olejnymi. Malowidło przedstawia kobietę z klasą na tle z bogatą ornamentyką. Bardzo kolorowy, zbudowany z prostych form i kształtów. Klimatem lekko nawiązuje do dawniejszych epok lub do damy z talii kart. Portret idealnie zagra w każdym wnętrzu ale i również podkreśli karciane upodobania, hobby historyczne lub rozrywkowy charakter osoby która go zakupi. Sygnowany z przodu nazwiskiem i datą powstania. Wykonany w pojedynczym egzemplarzu co zwiększa jego wartość kolekcjonerską.",
            date: "1970",
            popularity: 98,
            viewed: false,
            liked: false
        },
        {
            id: 8,
            image: "https://uploads3.wikiart.org/00145/images/wilhelm-sasnal/shoah-forest-2003.jpg!Large.jpg",
            title: "Forest",
            author: "Wilhelm Sasnal",
            location: "Whitechapel Gallery",
            description: "Obraz \"dama\" został namalowany na płótnie 3D - grubsza rama, o wymiarach 50x50cm, farbami olejnymi. Malowidło przedstawia kobietę z klasą na tle z bogatą ornamentyką. Bardzo kolorowy, zbudowany z prostych form i kształtów. Klimatem lekko nawiązuje do dawniejszych epok lub do damy z talii kart. Portret idealnie zagra w każdym wnętrzu ale i również podkreśli karciane upodobania, hobby historyczne lub rozrywkowy charakter osoby która go zakupi. Sygnowany z przodu nazwiskiem i datą powstania. Wykonany w pojedynczym egzemplarzu co zwiększa jego wartość kolekcjonerską.",
            date: "2002",
            popularity: 45,
            viewed: false,
            liked: false
        },
        {
            id: 9,
            image: "https://d5wt70d4gnm1t.cloudfront.net/media/a-s/articles/2243-818175819439/wilhelm-sasnal-900x450.png",
            title: "Bathers at Asnieres,",
            author: "Wilhelm Sasnal",
            location: "Foksal Gallery Foundation Varsovie",
            description: "Obraz \"dama\" został namalowany na płótnie 3D - grubsza rama, o wymiarach 50x50cm, farbami olejnymi. Malowidło przedstawia kobietę z klasą na tle z bogatą ornamentyką. Bardzo kolorowy, zbudowany z prostych form i kształtów. Klimatem lekko nawiązuje do dawniejszych epok lub do damy z talii kart. Portret idealnie zagra w każdym wnętrzu ale i również podkreśli karciane upodobania, hobby historyczne lub rozrywkowy charakter osoby która go zakupi. Sygnowany z przodu nazwiskiem i datą powstania. Wykonany w pojedynczym egzemplarzu co zwiększa jego wartość kolekcjonerską.",
            date: "2010",
            popularity: 81,
            viewed: false,
            liked: false
        },
        {
            id: 10,
            image: "https://cdn.gallerystore.pl/works//w777-h700/adam-twardowski-camila-grafika.jpg",
            title: "Camila",
            author: "Adam Twardowski",
            location: "Gallerystore",
            description: "Obraz jest wyjątkową ekspresją artysty. Praca jest dedykowanym portretem Cmili Cobello. Abstrakcyjna gra świateł i cienia za pomocą 4 kolorów oddaje złożoność jakie chciał osiągnąć artysta oraz prosty panton barw które budują całą narrację. Dużą wagę można zaobserwować w detalu, ponieważ jest to grafika wektorowa możemy dostrzec nietypowy detal włosów oraz światło, które rozświetla końcówki. Obraz przedstawia piękno kobiety, oraz drzemiącą magię jej temperamentu. Zimne barwy oddają chłód który symbolizuje żal między uczuciem wynikającym z rozstania.",
            date: "2018",
            popularity: 63,
            viewed: false,
            liked: false
        },
        {
            id: 11,
            image: "https://cdn.gallerystore.pl/works//w2000-h2000/anna-zabielska-akt-kobiecy-akwarela.jpg",
            title: "Camila",
            author: "Adam Twardowski",
            location: "Gallerystore",
            description: "Obraz jest wyjątkową ekspresją artysty. Praca jest dedykowanym portretem Cmili Cobello. Abstrakcyjna gra świateł i cienia za pomocą 4 kolorów oddaje złożoność jakie chciał osiągnąć artysta oraz prosty panton barw które budują całą narrację. Dużą wagę można zaobserwować w detalu, ponieważ jest to grafika wektorowa możemy dostrzec nietypowy detal włosów oraz światło, które rozświetla końcówki. Obraz przedstawia piękno kobiety, oraz drzemiącą magię jej temperamentu. Zimne barwy oddają chłód który symbolizuje żal między uczuciem wynikającym z rozstania.",
            date: "2018",
            popularity: 63,
            viewed: false,
            liked: false
        }

    );

    constructor() {
        this._items$ = new BehaviorSubject<Array<IDataItem>>(this.cloneItems());
    }

    getItems(): Array<IDataItem> {
        return this._items$.getValue();
    }

    getItem(id: number): IDataItem {
        return this._items$.getValue().find((data) => {
            return data.id == id;
        });
    }

    getIndex(item: IDataItem): number {
        return this.getItems().findIndex((element) => element.id === item.id);
    }

    getUnseenItems$(): Observable<Array<IDataItem>> {
        return this._items$.asObservable()
            .pipe(map((items: Array<IDataItem>) => items.filter((item: IDataItem) => !item.viewed)));
    }

    getUnseenItems(): Array<IDataItem> {
        return this._items$.getValue().filter((item: IDataItem) => !item.viewed);
    }

    getLikedItems$(): Observable<Array<IDataItem>> {
        return this._items$.asObservable()
            .pipe(map((items: Array<IDataItem>) => items.filter((item: IDataItem) => item.liked === true)));
    }

    getLikedItems(): Array<IDataItem> {
        return this._items$.getValue().filter((item: IDataItem) => item.liked);
    }

    updateItem(item: IDataItem): void {
        const items = this.getItems();
        items[this.getIndex(item)] = item;
        this._items$.next(items);
    }

    dislike(item: IDataItem): void {
        item.liked = false;
        const items = this.getItems();
        items[this.getIndex(item)] = item;
        this._items$.next(items);
    }

    resetItems(): void {
        this._items$.next(this.cloneItems());
    }

    private cloneItems(): Array<IDataItem> {
        return JSON.parse(JSON.stringify(this._items));
    }
}
