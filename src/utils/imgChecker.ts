export function imageChecker (file:Blob) {
  const imageUrl = URL.createObjectURL(file);
                    const img = new Image(150,150);
                    img.src = imageUrl;      
                    img.onload = () => {
                        const ancho = img.naturalWidth;
                        const alto = img.naturalHeight;
                        const relacionAspecto = ancho / alto;
                        const relacionObjetivo = 1; // Ejemplo: aspecto cuadrado (1:1)
                        
                        // Define un rango de tolerancia (por ejemplo, 3%)
                        const tolerancia = 0.03;
                        const sizeCheck = file.size<100_000 ? true:false
                        if ((Math.abs(relacionAspecto - relacionObjetivo) <= tolerancia) && sizeCheck) {
                          console.log("size: ",sizeCheck, file.size)
                            console.log('La imagen cumple con la restricción de aspecto.');
                            return true
                        } else {
                            console.log('La imagen no cumple con la restricción de aspecto.');
                            console.log("size: ",sizeCheck,file.size )
                            return false
                        }
                    }
                  }