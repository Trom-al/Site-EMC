

const image1 = 'https://tse1.mm.bing.net/th?id=OIP.5m0-e2Wc3W8vPKsogWcmWgHaEK&pid=Api';
const image2 = 'https://www.sciencepresse.qc.ca/sites/default/files/styles/full_width/public/2020-07/Caricature_5G_v2.jpg?itok=_6WFanJA';
const image3 = 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1120231.jpg';
const image4 = 'https://hitek.fr/img/up_o/774006391/hitek_9ababceb701d231c8d5c055de7165533_1538665669.jpeg';
const image5 = 'https://metropolitanmagazine.it/wp-content/uploads/2019/07/evidenza.png';
const image6 = 'https://47dk7z2a6mouuho1p212sati-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/58392509c4618830688b4605.jpg';
const image7 = 'https://static.theclinic.cl/media/2011/07/retrato-salvador-allende.jpg';
const image8 = 'https://tse4.mm.bing.net/th?id=OIP.O0i5cFDvL32oS5Eyf-oxIwHaEK&pid=Api';
const image9 = 'https://upload.wikimedia.org/wikipedia/commons/5/55/WMD_intelligence_commission.jpg';


var image_liste = [['complot', image1, /*texte1*/], ['complot', image2, /*texte2*/], ['complot', image3, /*texte3*/], ['complot', image4, /*texte4*/], ['complot', image5, /*texte5*/], ['verite', image6, /*texte6*/], ['verite', image7, /*texte7*/],  ['verite', image8, /*texte8*/], ['complot', image9, /*texte9*/]];
window.imgselected = null


function takerandom(image_liste){
  let random_number = randint(0, image_liste.length)
  window.imgselected = image_liste[random_number]
  image_liste.splice(random_number, 1)
  return window.imgselected
}


function change(){
  const imgid = document.getElementById('imagebox');
  if (image_liste.length > 0) {
    imgid.src = takerandom(image_liste)[1];
  }
  else {
    imgid.src = 'No more image.png'
    imgid.style.transform = 'scale(100%)'
  }
}


function randint(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}


function verify(check){
  if ((window.imgselected[0] == 'verite' && check == 'verite') || (window.imgselected[0] == 'complot' && check == 'complot')){
    delay = setInterval(function(){confetti_generation('green')}, randint(50, 100))
    setTimeout(function(){clearInterval(delay)}, 5.0*1000)
    setTimeout(function(){
      array = document.querySelectorAll('canvas')
      for (var i = 0; i < array.length; i++) {
        array[i].remove()
      }
    }, 15.0*1000)
  }
  else if ((window.imgselected[0] == 'complot' && check == 'verite') || (window.imgselected[0] == 'verite' && check == 'complot')){
    delay = setInterval(function(){confetti_generation('red')}, randint(50, 100))
    setTimeout(function(){clearInterval(delay)}, 5.0*1000)
    setTimeout(function(){
      array = document.querySelectorAll('canvas')
      for (var i = 0; i < array.length; i++) {
        array[i].remove()
      }
    }, 15.0*1000)
  }
  setTimeout(change, 15.0*1000)
}


change()
