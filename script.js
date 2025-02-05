
     
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
    
    document.addEventListener("DOMContentLoaded", function() {
        calcularQuantidades();
        window.addEventListener("resize", ajustarLayout);
    });
    
    function ajustarLayout() {
        const table = document.querySelector("table");
        if (window.innerWidth < 600) {
            table.style.fontSize = "12px";
            titulo.style.textAlign = "center";
        } else {
            table.style.fontSize = "16px";
        }
    }
    
    ajustarLayout();
    
    
    
    
    
    
  