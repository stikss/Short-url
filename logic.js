let btn = document.getElementById("shorten");

btn.addEventListener('click', short);

async function short() {
    // Obtener la URL larga desde el input
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    // Crear el cuerpo de la solicitud con la URL larga
    const inputBody = JSON.stringify({
        url: longURL
    });

    try {
        // Hacer la solicitud a la nueva API sin necesidad de API Key
        const result = await fetch('https://ulvis.net/api/v1/shorten/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: inputBody
        });

        const data = await result.json();

        if (data && data.shortUrl) {
            shortURL.value = data.shortUrl;
            console.log('URL corto generado:', data.shortUrl);
            document.getElementById("shorturl").textContent = `URL corto generado: ${data.shortUrl}`;
        } else {
            console.error('No se pudo generar el URL corto. Respuesta:', data);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}
