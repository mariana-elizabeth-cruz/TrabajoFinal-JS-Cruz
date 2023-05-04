class Ciudad {
    constructor (id, provincia) {
        this.id = id;
        this.provincia = provincia.trim();
    }

    toString() {
        return this.provincia;
    }
}