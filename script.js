const quoteContainer = document.getElementById ("text")
const btn = document.getElementById ("btn")
const options = {method: 'GET', headers: {accept: 'application/json'}};
let getVerse =() => {
    quoteContainer.classList.remove('fade');
fetch('https://labs.bible.org/api/?passage=random&type=json&', options)
  .then(response => response.json())
  .then(response =>{ 
    quoteContainer.textContent=`${response[0].bookname+' '+ response[0].chapter+':'+response[0].verse+' ' + response[0].text}`;
    quoteContainer.classList.add('fade');
  });
//     const markup=`<p>${response[0].bookname+' '+ response[0].chapter+':'+response[0].verse+' ' + response[0].text}<p>`
//     document.querySelector('p').insertAdjacentHTML('beforeend',markup);
//   })
  
//   .catch(err => console.error(err));
}
  btn.addEventListener("click",getVerse)
  getVerse()
// 