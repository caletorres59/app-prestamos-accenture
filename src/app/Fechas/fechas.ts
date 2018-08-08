export class Fecha {

    /**
* Función que me permite saber si una fecha es menor a la actual
*/

    /**

 * Funcion que devuelve true o false dependiendo de si la fecha es correcta.
 * Tiene que recibir el dia, mes y año
 */
    isValidDate(day, month, year) {
        let dteDate;

        // En javascript, el mes empieza en la posicion 0 y termina en la 11 
        //   siendo 0 el mes de enero
        // Por esta razon, tenemos que restar 1 al mes
        month = month - 1;
        // Establecemos un objeto Data con los valore recibidos
        // Los parametros son: año, mes, dia, hora, minuto y segundos
        // getDate(); devuelve el dia como un entero entre 1 y 31
        // getDay(); devuelve un num del 0 al 6 indicando siel dia es lunes,
        //   martes, miercoles ...
        // getHours(); Devuelve la hora
        // getMinutes(); Devuelve los minutos
        // getMonth(); devuelve el mes como un numero de 0 a 11
        // getTime(); Devuelve el tiempo transcurrido en milisegundos desde el 1
        //   de enero de 1970 hasta el momento definido en el objeto date
        // setTime(); Establece una fecha pasandole en milisegundos el valor de esta.
        // getYear(); devuelve el año
        // getFullYear(); devuelve el año
        dteDate = new Date(year, month, day);

        //Devuelva true o false...
        return ((day == dteDate.getDate()) && (month == dteDate.getMonth()) && (year == dteDate.getFullYear()));
    }

    /**
     * Funcion para validar una fecha
     * Tiene que recibir:
     *  La fecha en formato ingles yyyy-mm-dd
     * Devuelve:
     *  true-Fecha correcta
     *  false-Fecha Incorrecta
     */
    validate_fecha(fecha) {

        let patron = new RegExp("^(19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");

        if (fecha.search(patron) == 0) {
            let values = fecha.split("-");
            if (this.isValidDate(values[2], values[1], values[0])) {
                return true;
            }
        }
        return false;
    }

    /**
     * Esta función calcula la edad de una persona y los meses
     * La fecha la tiene que tener el formato yyyy-mm-dd que es
     * metodo que por defecto lo devuelve el <input type="date">
     */
    calcularEdad(fecha): any {

        if (this.validate_fecha(fecha) == true) {
            // Si la fecha es correcta, calculamos la edad
            let values = fecha.split("-");
            let dia = values[2];
            let mes = values[1];
            let ano = values[0];

            // cogemos los valores actuales
            let fecha_hoy = new Date();
            let ahora_ano = fecha_hoy.getFullYear();
            // let ahora_ano_da = fecha_hoy.getYear();
            let ahora_mes = fecha_hoy.getMonth() + 1;
            let ahora_dia = fecha_hoy.getDate();
            console.log(ahora_ano);
            // console.log(ahora_ano_da);
            // realizamos el calculo
            let edad = (ahora_ano) - ano;
            if (ahora_mes < mes) {
                edad--;
            }
            if ((mes == ahora_mes) && (ahora_dia < dia)) {
                edad--;
            }
            // if (edad > 1900) {
            //     edad -= 1900;
            // }

            // calculamos los meses
            let meses = 0;
            if (ahora_mes > mes)
                meses = ahora_mes - mes;
            if (ahora_mes < mes)
                meses = 12 - (mes - ahora_mes);
            if (ahora_mes == mes && dia > ahora_dia)
                meses = 11;

            // calculamos los dias
            let dias = 0;
            if (ahora_dia > dia)
                dias = ahora_dia - dia;
            if (ahora_dia < dia) {
                let ultimoDiaMes = new Date(ahora_ano, ahora_mes, 0);
                dias = ultimoDiaMes.getDate() - (dia - ahora_dia);
            }

            let fechaArray= [{anios: edad, meses: meses, dia: dia}];
            return fechaArray;
        } else {
            return -1;
        }
    }
}