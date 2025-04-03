
let btn = document.getElementById("shorten");

btn.addEventListener('click', short);

async function short() {
    // Obtener la URL larga desde el input
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    // Crear el cuerpo de la solicitud con la URL larga y la expiración
    const inputBody = JSON.stringify({
        url: longURL,
        expiry: "5m" // O personaliza el tiempo de expiración
    });

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': 'sk_3c08fafe2456419ab3d9f8cc4e2d8fa8' // Reemplaza 'API_KEY' con tu clave real de API
    };

    try {
        const result = await fetch('https://api.manyapis.com/v1-create-short-url', {
            method: 'POST',
            body: inputBody,
            headers: headers
        });

        const data = await result.json();
        

        if (data && data.shortUrl) {
            shortURL.value = data.shortUrl
            console.log('URL corto generado:', data.shortUrl);
            document.getElementById("shorturl").textContent = `URL corto generado: ${data.shortUrl}`;
        } else {
            console.error('No se pudo generar el URL corto. Respuesta:', data);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}
