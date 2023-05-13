class Persona {
    constructor (id, nombre, apellido, direccion, email, dni, localidad, edad, provincias, acepto = false) {
        this.id = id;
        this.nombre = nombre.trim();
        this.apellido = apellido.trim();
        this.direccion = direccion.trim();
        this.email = email.trim();
        this.dni = dni;
        this.localidad = localidad.trim();
        this.edad = edad;
        this.provincias = provincias;
        this.acepto = acepto;
    }

    toString() {
        return this.apellido.toUpperCase() + ", " + this.nombre.toUpperCase();
    }
}