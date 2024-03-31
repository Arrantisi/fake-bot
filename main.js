
const botSay = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loader = document.getElementById("loader");
const container = document.getElementById("container")

let init = 0;

let usersData = [];

const tekan = (data) => {
    return [
        `Hallooo, nama saya Borbot, nama kamu siapa? `,
        `Hallo kak ${data?.nama}, Berapa usia kamu?`,
        `Waaaaw, usia kakak ${data?.usia} tahun, hobi kamu apa?`,
        `Aku juga suka ${data?.hobby}, apakah kak ${usersData[0]} sudah punya pacar?`,
        `Waaaaw,kak ${usersData[0]} ${data?.berapa} pacar, untuk mengakhiri ketikan pesan :)`
    ]
}

function botInput(userName) {
    console.log({usersData : usersData})
    loader.style.display = "block"
    container.style.filter = "blur(4px)"
    container.style.transitionDuration = "300ms"
    
    setTimeout (() => {
        botSay.innerHTML = tekan(userName)[init]
        loader.style.display = "none"
        container.style.filter = "none"
    }, 1200)
    usersData.push(jawaban.value)
    jawaban.value = ""
}

const botFinishing = () => {
    botSay.innerHTML = `Yaudah gitu aj kak ${usersData[0]}, makasih`
    jawaban.value = "Siap terimakasih"
}

const botEnd = () => {
    alert("Anda akan di kembalikan ke menu utama.")
    window.location.reload()
}

botSay.innerHTML = tekan()[0];

function botStart() {
    init++
    if (jawaban.value.length < 1) return alert("Silahkan isi jawabannya!!!")
    switch (init){
        case 1:
            botInput({nama : jawaban.value})
            break;
        case 2 :
            botInput({usia : jawaban.value})
            break;
        case 3:
            botInput({hobby : jawaban.value})
            break;
        case 4:
            botInput({berapa : jawaban.value})
            jawaban.value = `Terimakasih telah menjawab pertanyaan kak${usersData[0]}`
            break;
        case 5 :
            botFinishing()
            break;
        default:
            botEnd()
    }
}
