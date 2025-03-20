function contarBasesADN(adn) {
    let conteo = { A: 0, C: 0, G: 0, T: 0 };

    for (let base of adn.toUpperCase()) {
        if (conteo.hasOwnProperty(base)) {
            conteo[base]++;
        }
    }

    return `Cantidad de A: ${conteo.A}, Cantidad de C: ${conteo.C}, Cantidad de G: ${conteo.G}, Cantidad de T: ${conteo.T}`;
}

console.log(contarBasesADN("AACAGT"));  
