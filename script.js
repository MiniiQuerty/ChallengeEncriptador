const input = document.querySelector(".txtArea");
const resultado = document.querySelector(".txtArea2 textarea");
const copiarBtn = document.querySelector(".txtArea2 button");
copiarBtn.style.display = "none";

function btnEncriptar()
{
        const textoEncriptado = encriptar(input.value)
        resultado.value = textoEncriptado
        resultado.style.backgroundImage = "none"
        input.value = "";
        copiarBtn.style.display = "block"
}

//guía de encriptación.
// `La letra "a" se convierte en "🧨🔥"`
// `La letra "e" se convierte en "🥩🦁"`
// `La letra "i" se convierte en "🎂🪑"`
// `La letra "o" se convierte en "💩🚽"`
// `La letra "u" se convierte en "🦎🐧🦉"`


function encriptar(stringEncriptada){
    let matrizCodigo = [["a", "🧨🔥"], ["e", "🥩🦁"], ["i", "🎂🪑"],["o", "💩🚽"], ["u", "🦎🐧🦉"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++)
    {
        if(stringEncriptada.includes(matrizCodigo[i][0]))
        {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(input.value)
    resultado.value = textoDesencriptado
    input.value = "";
    resultado.style.backgroundImage = "none"
    copiarBtn.style.display = "block"
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["a", "🧨🔥"], ["e", "🥩🦁"], ["i", "🎂🪑"], ["o", "💩🚽"], ["u", "🦎🐧🦉"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++)
    {
        if(stringDesencriptada.includes(matrizCodigo[i][1]))
        {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }
    }
    return stringDesencriptada
}


function copiar()
{
    navigator.clipboard.writeText(resultado.value)
        .then(() => 
        {
            alert('Texto copiado al portapapeles')
        })
}