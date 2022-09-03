export default function listGifts(letter) {
    //no se tiene que contar ('_').
    const letter_split = letter.split(" ").filter(r => r[0] !== '_' && r!=='')
    
    //Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece
    return letter_split.reduce((acc, current) => {
          if (acc[current]) {
              acc[current] += 1
          } else {
              acc[current] = 1
          }
          return acc
      }, {})
  }
  
  const carta = 'bici coche balón _playstation bici coche peluche'
  const regalos = listGifts(carta)
  console.log(regalos)