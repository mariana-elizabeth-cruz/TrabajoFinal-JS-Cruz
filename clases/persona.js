class Persona {
    constructor (id, nombre, apellido, direccion, email, dni, localidad, edad) {
        this.id = id;
        this.nombre = nombre.trim();
        this.apellido = apellido.trim();
        this.direccion = direccion.trim();
        this.email = email.trim();
        this.dni = dni;
        this.localidad = localidad.trim();
        this.edad = edad;
    }

    toString() {
        return this.apellido.toUpperCase() + ", " + this.nombre.toUpperCase();
    }
}