
     
    function calcularQuantidades() {
        const numRefis = parseInt(document.getElementById('numRefis').value) || 0;
        const volumeRefil = parseInt(document.getElementById('volumeRefil').value) || 0;
    
        if (numRefis <= 0 || volumeRefil <= 0) {
            alert('Por favor, insira valores válidos.');
            return;
        }
    
        const totalVolume = numRefis * volumeRefil;
        const quantEssencia = totalVolume * 0.3;
        const quantAugeo = totalVolume * 0.7;
        const quantEssenciaPrateleira = quantEssencia * 0.3; // 30% adicional para prateleira
        const totalEssencia = quantEssencia + quantEssenciaPrateleira; // Soma total de essência
    
        document.getElementById('totalVolume').innerText = `${totalVolume.toFixed(2)} ml`;
        document.getElementById('quantEssencia').innerText = `${quantEssencia.toFixed(2)} ml`;
        document.getElementById('quantAugeo').innerText = `${quantAugeo.toFixed(2)} ml`;
        document.getElementById('quantEssenciaPrateleira').innerText = `${quantEssenciaPrateleira.toFixed(2)} ml`;
        document.getElementById('totalEssencia').innerText = `${totalEssencia.toFixed(2)} ml`;
    }
    
    calcularQuantidades();
    
     
     
     
     
     /* function calcularQuantidades() {
            const numRefis = parseInt(document.getElementById('numRefis').value);
            const volumeRefil = parseInt(document.getElementById('volumeRefil').value);

            if (isNaN(numRefis) || isNaN(volumeRefil)) {
                alert('Por favor, insira valores válidos.');
                return;
            }

            const totalVolume = numRefis * volumeRefil;
            const quantEssencia = totalVolume * 0.3;
            const quantAugeo = totalVolume * 0.7;

            document.getElementById('totalVolume').innerText = totalVolume.toFixed(2) + ' ml';
            document.getElementById('quantEssencia').innerText = quantEssencia.toFixed(2) + ' ml';
            document.getElementById('quantAugeo').innerText = quantAugeo.toFixed(2) + ' ml';
        }

        // Calcula os valores iniciais
        calcularQuantidades(); 
    */