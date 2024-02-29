var a;
function pass()
{
    if(a==1)
{
    document.getElementById('form-control').type='password';
    document.getElementById('lk').src='/Imagenes/candado.png';
    a=0;
}
else
{
    document.getElementById('form-control').type='password';
    document.getElementById('lk').src='/Imagenes/candadoabierto.png';
    a=1;
}
}