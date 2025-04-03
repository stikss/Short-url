

        let btn = document.getElementById("shorten");

        btn.addEventListener('click', short);
        
        async function short() {
            // Obtener la URL larga desde el input
            let longURL = document.getElementById("longurl").value;
            let shortURL = document.getElementById("shorturl");
            
            const headers = {
                'Content-Type': 'application/json',
            }
        
            try {
                const result = await fetch('https://ulvis.net/api/v1/shorten', {
                    method: 'POST',
                    body: JSON.stringify({
                        url: `${longURL}`,
                      }),
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
        