import { join, mkel, select, shuffle, main, getRandomInt } from './util.js'

let words = [
  "Abelujo",
  "Aĉeti",
  "Admiralo",
  "Aglo",
  "Akvo",
  "Anaso",
  "Aplaŭdo",
  "Arbaro",
  "Arĝento",
  "Artefarita Inteligento",
  "Artfajraĵoj",
  "Artisto",
  "Atlantido",
  "Avo",
  "Bakterio",
  "Baleno",
  "Bananŝelo",
  "Barbo",
  "Baterio",
  "Biblioteko",
  "Biciklo",
  "Bieno",
  "Birdmanĝigilo",
  "Birdo",
  "Biskvito",
  "Bobelo",
  "Bobeno",
  "Botoj",
  "Brakumi",
  "Brazilo",
  "Bukedo",
  "Cepo",
  "Ĉielo",
  "Ĉielarko",
  "Citrono",
  "Delfeno",
  "Dentopasto",
  "Dezerto",
  "Dinosaŭro",
  "Dometo",
  "Donaco",
  "Dormi",
  "Dorno",
  "Dungito",
  "Eklipso",
  "Elektro",
  "Esperanto",
  "Esti",
  "Fajfilo",
  "Fantomo",
  "Fenestro",
  "Feo",
  "Ferio",
  "Florgirlando",
  "Floro",
  "Formiko",
  "Frago",
  "Fridujo",
  "Fumo",
  "Fungo",
  "Ĝardeno",
  "Gazeto",
  "Gazontondilo",
  "Ĝirafo",
  "Glaciaĵo",
  "Grati",
  "Grimpi",
  "Havajo",
  "Hoko",
  "Ido",
  "Iglo",
  "Insulo",
  "Japanio",
  "Jarcento",
  "Jupo",
  "Ĵurnalisto",
  "Kafo",
  "Kalendaro",
  "Kalkulilo",
  "Kanto",
  "Kapaŭskultilo",
  "Kapkuseno",
  "Kaptanto",
  "Kapti",
  "Kastelo",
  "Keĉupo",
  "Koalo",
  "Kontuzo",
  "Kormsako",
  "Krabo",
  "Krajonoj",
  "Krokidili",
  "Krusto",
  "Kuiri",
  "Kuketo",
  "Laca",
  "Lasvegaso",
  "Legi",
  "Leono",
  "Lernejo",
  "Ligi",
  "Lipoj",
  "Ludkartoj",
  "Lumturo",
  "Lundo",
  "Luno",
  "Lustro",
  "Malkontenteco",
  "Malsanulejo",
  "mansardo",
  "Marĉo",
  "Marso",
  "Martelo",
  "Mefito",
  "Meksiko",
  "Mielo",
  "Molekulo",
  "Montoj",
  "Monto Rushmore",
  "Monujo",
  "Mumio",
  "Murpapero",
  "Muso",
  "Muzikilo",
  "Naskiĝtagkuko",
  "Naturo",
  "Naturrezervejo",
  "Naŭ",
  "Nebulo",
  "Neĝbulo",
  "Neĝo",
  "Nenio",
  "Nigra Truo",
  "Norda poluso",
  "Olimpiko",
  "Ombrelo",
  "Ondo",
  "Orangutano",
  "Ornitorinko",
  "Panama-Kanalo",
  "Pando",
  "Pantofloj",
  "Papero",
  "Papilia flugilo",
  "Parazito",
  "Parizo",
  "Pavo",
  "Pentri",
  "Perfido",
  "Pesilo",
  "Piano",
  "Pico",
  "Pirato",
  "Plaĝo",
  "Planti",
  "Pluŝurso",
  "Poŝtliveristo",
  "Punto",
  "Rano",
  "Recikligi",
  "Retejo",
  "Rideto",
  "Rivero",
  "Roboto",
  "Rompi",
  "Ronki",
  "Rozo",
  "Rukti",
  "Rultabulo",
  "Sablo-kastelo",
  "Salamandro",
  "Scienca esploro",
  "Seĝo",
  "Sekretario",
  "Skiado",
  "Skorpio",
  "Skribtablo",
  "Somero",
  "Sonĝ-kaptilo",
  "Spino",
  "Sportŝuo",
  "Stomakdoloro",
  "Ŝako",
  "Ŝtormo",
  "Strigo",
  "Studi",
  "Sunbrulo",
  "Sunkremo",
  "Suno",
  "Superulo",
  "Tabulludo",
  "Tekstumi",
  "Telefono",
  "Televido",
  "Tempo-Maŝino",
  "Tero",
  "Tertremo",
  "Trajnstacio",
  "Usono",
  "Vafloj",
  "Vanilo",
  "Velŝipo",
  "Vespo",
  "Violono",
  "Vizaĝo",
  "Vojaĝo",
  "Vortaro",
  "Vulkano",
  "Zorgoj"
]

function hide(...args) {
  for (let a of args) {
    if (a.style.display != 'none') {
      a.style.display_x = a.style.display
    }
    a.style.display = 'none'
  }
}
function show(...args) {
  for (let a of args) {
    a.style.display = a.style.display_x
  }
}

main(function ({ window, document, localStorage }) {
  // console.log('start')

  let howlong = 90
  {
    let params = new URLSearchParams(window.location.search)
    let t = params.get('t')
    let n = parseInt(t)
    if (n) {
      howlong = n
    }
  }

  let eAudio = document.createElement('audio')
  eAudio.src = `sound/end.ogg`
  document.body.append(eAudio)

  let main = select(document, '#main')

  let before = select(document, '#before')
  let during = select(document, '#during')
  let after = select(document, '#after')

  let word = select(during, '#word')
  let buttons = select(during, '#buttons')
  let yesbutton = select(buttons, '#yes')
  let nobutton = select(buttons, '#no')
  let clock = select(during, '#clock')

  let res = select(after, '#res')

  let start = () => {
    let chosen = shuffle(words).slice(0, 10)
    let w = null
    let got = []
    let notgot = []

    hide(before, after)
    show(during)

    let onyes = () => {
      got.push(w)
      change()
    }
    let onno = () => {
      notgot.push(w)
      change()
    }

    let end = () => {
      yesbutton.removeEventListener('click', onyes)
      nobutton.removeEventListener('click', onno)

      let g = mkel('div', { classes: ['got'], text: got.join(', ') })
      let j = mkel('div', { classes: ['notgot'], text: notgot.join(', ') })
      let s = mkel('div', { classes: ['score'], text: got.length })

      res.replaceChildren(g, j, s)

      hide(during)
      show(after)
    }

    let change = () => {
      if (time == 0) {
        // after the end
        end()
      }
      w = chosen.splice(0, 1)[0] || notgot.splice(0, 1)[0]
      if (!w) {
        if (to) {
          clearTimeout(to)
        }
        end()
        return
      }
      word.textContent = w
    }

    yesbutton.addEventListener('click', onyes)
    nobutton.addEventListener('click', onno)

    let setClock = () => {
      clock.textContent = time
    }

    let to = null
    let time = howlong
    setClock()
    let tick = () => {
      time--
      if (time == 0) {
        // end()
        clock.textContent = 'finita!'
        eAudio.play()
      } else {
        setClock()
        to = setTimeout(tick, 1000)
      }
    }
    change()
    to = setTimeout(tick, 1000)
  }

  let reset = e => {
    hide(before, during, after)
    show(before)
  }

  select(before, '#gobutton').addEventListener('click', e => {
    start()
  })

  select(after, '#backbutton').addEventListener('click', e => {
    reset()
  })

  reset()
})
