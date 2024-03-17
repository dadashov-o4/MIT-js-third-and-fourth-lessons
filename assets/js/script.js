// console.log("Salam, Roman")
// console.log("Salam, Tahir")
// console.log("Salam, Gunay")

// // Regular function

// function welcomeUser(istifadeciAdi) {
//     console.log("Salam " + istifadeciAdi)
// }


// welcomeUser("Gunay")
// welcomeUser("Roman")
// welcomeUser("Huseynrza")


// // Function vs Function Expression


// const istifadeciniSalamla = function(userName) {
//     console.log("Welcome, " + userName)
// }

// istifadeciniSalamla("Raul")


// // Arrow function

// // const istifadeciniSalamlaArrowFunc = (name) => {return name}   return olmasi ucun {} olmalidir
// const istifadeciniSalamlaArrowFunc = (name) => console.log("Welcome, " + name )
// istifadeciniSalamlaArrowFunc("Meherrem")



// // IIFE     Immediately Invoked Function Expression

// (function s5QrupunuSalamla(){
//     console.log("Welcome, " + ad + " " + soyad)

// }("Meherrem", 'Dadashov'))


// API Appliication Programming Interface
// Asinxron Sinxron
// Asinxron programlasdirma zamani eyni zamanda bir nece proses icra oluna bilir 
// Sinxron programlasdirma zamani ise prosesler novbe ile icra olunur


// Hoisting   (addEvent in fuction dan once gelmesi )

const mehsullarinYerleseceyiYer = document.getElementById("mehsullar")

window.addEventListener("DOMContentLoaded", melumatlariGetir)    //undefined

async function melumatlariGetir() {
    const unvan = "https://fakestoreapi.com/products"

    try {
        const cavab = await fetch(unvan)   // saytdan melumatlari getirir (request (istek) gonderir)
        // console.log(cavab)  // yanit

        // Pending fulfilled reject  Pending (Beklemede): İlk durum, tamamlanmamış veya reddedilmemiş. Fulfilled (Tamamlanmış): İşlemin başarıyla tamamlandığı anlamına gelir. Rejected (Reddedilmiş): İşlemin başarısız olduğu anlamına gelir.

        const mehsullar = await cavab.json()
        console.table(mehsullar)      // json formatinda obyektimiz

        for(let i=0; i<mehsullar.length; i++){
            mehsullarinYerleseceyiYer.innerHTML += `<div class="col-12 col-md-6 col-lg-3">
            <div class="card my-2 border-0" style="width: 18rem;">
              <img src="${mehsullar[i].image}" class="card-img-top" alt="...">
              <div class="card-body d-flex flex-column justify-content-space-evenly">
                <h5 class="card-title text-center">${mehsullar[i].title.slice(0, 60)}...</h5>
                <p class="card-text">${mehsullar[i].description.slice(0, 50)}...</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
           </div>`
        }

    }
    // JSON  JavaScript Object Notation   (backend ve frontend arasinda rabite rolunu oynayir)

    catch (err) {
        console.log("Serverde bas veren xeta: ", err.message)
    }

    finally { 
        console.log("Serverde xeta yarandi")
    }
}

// Load  DOMContentLoaded

const overlayMenyuDivi = document.querySelector(".overlay-menu")

const navbarButton = document.querySelector(".navbar-toggler-icon")
const menyunuBagla = document.querySelector(".bi-x-circle")

navbarButton.addEventListener("click", navbarMenyunuAc)
menyunuBagla.addEventListener("click", closeIcon)


function navbarMenyunuAc(){
    overlayMenyuDivi.classList.add("aktiv")
    
}
function  closeIcon() {
    overlayMenyuDivi.classList.remove("aktiv")
}


