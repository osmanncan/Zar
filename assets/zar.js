let tahmin = Number(prompt('Bir zar tahmininde bulunun (1-6): '));
let zar = Math.floor(Math.random() * 6) + 1;

if ( tahmin == zar)
{alert('Tebrikler dogru bildiniz.');

}else{
    alert('Hatali tahmin, geçerli zar: ' + zar);
}
