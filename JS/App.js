
const getrandomnumb=()=>{

    const Randomnum= Math.floor( Math.random()*16777215)
    const Randomhexacode="#"+Randomnum.toString(16)
    document.body.style.backgroundColor= Randomhexacode;
    document.getElementById("color-picker").innerText=Randomhexacode;
    navigator.clipboard.writeText(Randomhexacode);
    document.getElementById("copytoclipboard").innerText= " Color Code has been copied to Clipboard- "+Randomhexacode

    // console.log(Randomnum, Randomhexacode)

} 

// Copy to clipbord function..
// const CopytoClipbordfun=()=>{
    
//     navigator.clipboard.writeText(Randomhexacode);
// }

// Load it on click event..
document.getElementById("select-btn").addEventListener(
    "click",
    getrandomnumb
)
// It called while loading the dom first time...
getrandomnumb()

document.getElementById("select-copy-btn").addEventListener(
    "click", CopytoClipbordfun
)
