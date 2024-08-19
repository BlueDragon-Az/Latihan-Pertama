function beach(){
    var list = [
        'Kuta Beach',
        'Komodo Islands',
        'Pandawa Beach',
        'Nusa Dua Beach',
        'Kelingking Beach'
    ]
    var random = Math.floor(Math.random()*list.length);
    var recommendation = list[random]
    document.write(`I recommend you to go to ${recommendation}`);
}

function nationalPark(){
    var list = [
        'Teluk Cendrawasih National Park',
        'Komodo National Park',
        'Bunaken National Marine Park',
        'Tanjung Putting National Park',
        'Kerinci Seblat National Park'
    ]
    var random = Math.floor(Math.random()*list.length);
    var recommendation = list[random]
    document.write(`I recommend you to go to ${recommendation}`);
}

function museum(){
    var list = [
        'National Museum',
        'Danar Hadi Batik Museum',
        'Indonesian Museum Bank Indonesia',
        'House of Sampoerna Museum',
        'Neka Art Museum'
    ]
    var random = Math.floor(Math.random()*list.length);
    var recommendation = list[random]
    document.write(`I recommend you to go to ${recommendation}`);
}

