let Pokemons = [
    {
    ime: 'Pikachu',
    vrsta: 'Elecric',
    sposobnosti: ['Electric Attack', 'Hand Attack', 'Speedy Damage'],
    karakteristike: {
        napad: 50,
        odbrana: 30,
        brzina: 80
    },
    slika: 'Pikachu.png'
},
{
    ime: 'Charizard',
    vrsta: 'Reptil',
    sposobnosti: ['Strong Push', 'Fire Balls', 'Wing Fire'],
    karakteristike: {
        napad: 80,
        odbrana: 40,
        brzina: 40
    },
    slika: 'Charizard.png'
},
{
    ime: 'Blastoise',
    vrsta: 'Armored Pokemon',
    sposobnosti: ['Heavey Armor', 'The Rock Shield', 'Rolling Hit'],
    karakteristike: {
        napad: 30,
        odbrana: 80,
        brzina: 20
    },
    slika: 'Blastoise.png'
},
{
    ime: 'Totodile',
    vrsta: 'Baby Dragon',
    sposobnosti: ['Dragon Little Fire', 'Flameing Bombs', 'Wopa Hopa Hit'],
    karakteristike: {
        napad: 30,
        odbrana: 30,
        brzina: 30
    },
    slika: 'Totodile.png'
}]

Pokemons.sort((a,b) => b.karakteristike.brzina - a.karakteristike.brzina);

console.log(Pokemons);


const sposobnosti = (Pokemons) => {
    let Abilities = []
    Pokemons.forEach(item => {
        Abilities = Abilities.concat(item.sposobnosti)
    })
    return Abilities
}

let Abilities = sposobnosti(Pokemons)

console.log('Prikaz svih sposobnosti: ', Abilities);

const Fight = (Pokemons) => {
    let StrongestPokemon = {
        karakteristike: {
        napad: 0,
        odbrana: 0,
        brzina: 0
    }
}

Pokemons.forEach(item => {
    if(StrongestPokemon.karakteristike.napad < item.karakteristike.napad){
        StrongestPokemon = item
    }
})
return StrongestPokemon
}

document.getElementById('ShowAllPokemons').addEventListener('click', (e) => {
    document.getElementById('showPokemons').innerHTML = ''
    Pokemons.forEach(item => {
        document.getElementById('showPokemons').innerHTML +=
        `
        <div>
        <p>Ime: ${item.ime}</p>
        <img alt=${item.ime} src=${item.slika} />
        <p>Vrsta: ${item.vrsta}</p>
        <p>Sposobnosti: ${item.sposobnosti.join(' , ')}</p>
        <p>Napad: ${item.karakteristike.napad}</P>
        <p>Odbrana: ${item.karakteristike.odbrana}</p>
        <p>Brzina: ${item.karakteristike.brzina}</p>
        </div>
        `
    })
})

document.getElementById('ShowStrongestPokemon').addEventListener('click', (e) => {
    let StrongestPokemon = Fight(Pokemons)
    document.getElementById('showPokemons').innerHTML = ''
    document.getElementById('showPokemons').innerHTML +=
        `
        <div>
        <p>Ime: ${StrongestPokemon.ime}</p>
        <img alt=${StrongestPokemon.ime} src=${StrongestPokemon.slika} />
        <p>Vrsta: ${StrongestPokemon.vrsta}</p>
        <p>Sposobnosti: ${StrongestPokemon.sposobnosti.join(' , ')}</p>
        <p>Napad: ${StrongestPokemon.karakteristike.napad}</P>
        <p>Odbrana: ${StrongestPokemon.karakteristike.odbrana}</p>
        <p>Brzina: ${StrongestPokemon.karakteristike.brzina}</p>
        </div>
        `
    })

