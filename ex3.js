

class DNI {

    /**
     * 
     * @param {string} titular Indica el titular del Dni
     * @param {string} numero  Código en formato 12345678A
     * @param {string} caducidad  Fecha de caducidad del DNI, en format año-mes-dia
     */
    constructor(titular, numero, caducidad) {
        this.titular = titular;
        this.numero = numero;
        this.caducidad = caducidad;
    }

    // Nos devuelve 'true' o 'false' indicando si el DNI está caducado o no
    estaCaducado() {
        const fechaActual = new Date();
        if(fechaActual > new Date(this.caducidad)){
            return true
        };
        return false;

    }

    // Debe devolver 'true' si el DNI está bien formado, o 'false' en caso contrario
    esDniFormatoValido() {
        const regex = /^\d{8}[A-Z]$/;
        if(regex.test(this.numero)){
            return true
        }
        return false

    }

    // Dado un número de DNI, nos calcula la letra. Buscar por Internet como calcular la letra de un DNI
    calculaLetraDni(dni) {
        const dniLetters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        const numIndex = dni % 23;
        return dniLetters[numIndex];
        // return letraDNI

    }
}

const midni = new DNI("Pedro Vallés", "1234567A", "1990-10-10");
console.log(midni.estaCaducado());
console.log(midni.esDniFormatoValido());
console.log(midni.calculaLetraDni(12345678));  

