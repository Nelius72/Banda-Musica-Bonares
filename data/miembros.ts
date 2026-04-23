export interface Miembro {
    nombre: string;
    instrumento: string;
    cargo?: string;
    foto: string;
}

export interface Seccion {
    nombre: string;
    mostrarInstrumento?: boolean;
    miembros: Miembro[];
}

export const secciones: Seccion[] = [
    {
        nombre: "Dirección y Junta Directiva",
        mostrarInstrumento: false,
        miembros: [
            {
                nombre: "Antonio León",
                instrumento: "Tuba",
                cargo: "Director",
                foto: "/miembros/director.png",
            },
            {
                nombre: "Diego Coronel",
                instrumento: "",
                cargo: "Presidente",
                foto: "/miembros/presidente.png",
            },
            {
                nombre: "J. Antonio Coronel",
                instrumento: "",
                cargo: "Tesorero",
                foto: "/miembros/tesorero.png",
            },
            {
                nombre: "Leonardo García",
                instrumento: "",
                cargo: "Secretario",
                foto: "/miembros/secretario.jpg",
            },
        ],
    },
    {
        nombre: "Clarinetes",
        mostrarInstrumento: true,
        miembros: [
            {
                nombre: "Joaquín Pérez",
                instrumento: "Clarinete Ppal.",
                foto: "/miembros/clarinetes/joaquin.png",
            },
            {
                nombre: "Juan Antonio Coronel",
                instrumento: "Clarinete 1º",
                foto: "/miembros/clarinetes/alforillojr.png",
            },
            {
                nombre: "María León",
                instrumento: "Clarinete 1º",
                foto: "/miembros/usuario.jpg",
            },
            {
                nombre: "Paola Rodríguez",
                instrumento: "Clarinete 2º",
                foto: "/miembros/clarinetes/paola.png",
            },
            {
                nombre: "Antonio García",
                instrumento: "Clarinete 2º",
                foto: "/miembros/clarinetes/botones.png",
            },
            {
                nombre: "Martín Bautista",
                instrumento: "Clarinete 3º",
                foto: "/miembros/usuario.jpg",
            },
            {
                nombre: "Cristina García",
                instrumento: "Clarinete 3º",
                foto: "/miembros/clarinetes/cristina.png",
            },
            {
                nombre: "Manoli Vega",
                instrumento: "Clarinete 3º",
                foto: "/miembros/clarinetes/manoli.png",
            },
        ],
    },
    {
        nombre: "Flautas",
        mostrarInstrumento: true,
        miembros: [
            {
                nombre: "Luz María Díaz",
                instrumento: "Flauta Ppal. / Flautín",
                foto: "/miembros/flautas/luzmi.png",
            },
            {
                nombre: "Elena Martín",
                instrumento: "Flauta 1º",
                foto: "/miembros/flautas/elena.png",
            },
            {
                nombre: "Patricia Salvador",
                instrumento: "Flauta 2º",
                foto: "/miembros/usuario.jpg",
            },
        ],
    },
    {
        nombre: "Trompetas, Cornetas y Fliscornos",
        mostrarInstrumento: true,
        miembros: [
            {
                nombre: "Álvaro Vega",
                instrumento: "Trompeta",
                foto: "/miembros/trompetas/alvaro.png",
            },
            {
                nombre: "Rocío Pichardo",
                instrumento: "Trompeta",
                foto: "/miembros/trompetas/rocio.png",
            },
            {
                nombre: "Cristobal Camacho",
                instrumento: "Corneta",
                foto: "/miembros/trompetas/camacho.png",
            },
            {
                nombre: "Pepe López",
                instrumento: "Trompeta / Corneta",
                foto: "/miembros/usuario.jpg",
            },
            {
                nombre: "Juan Antonio Garrido",
                instrumento: "Trompeta",
                foto: "/miembros/trompetas/juan.png",
            },
            {
                nombre: "Juan Antonio Regidor",
                instrumento: "Trompeta",
                foto: "/miembros/trompetas/regidor.png",
            },
            {
                nombre: "Jose Antonio Raya",
                instrumento: "Trompeta",
                foto: "/miembros/trompetas/raya.png",
            },
            {
                nombre: "J. Antonio Coronel",
                instrumento: "Fliscorno",
                foto: "/miembros/trompetas/chupao.png",
            },
        ],
    },
    {
        nombre: "Trompas",
        mostrarInstrumento: false,
        miembros: [
            {
                nombre: "Sergio Martín",
                instrumento: "Platillos",
                foto: "/miembros/trompa/sergio.png",
            },
        ],
    },
    {
        nombre: "Saxofones",
        mostrarInstrumento: true,
        miembros: [
            {
                nombre: "Diego Coronel",
                instrumento: "Alto",
                foto: "/miembros/presidente.png",
            },
            {
                nombre: "Ángela León",
                instrumento: "Alto",
                foto: "/miembros/saxos/angela.png",
            },
            {
                nombre: "Marco García",
                instrumento: "Alto",
                foto: "/miembros/usuario.jpg",
            },
            {
                nombre: "Jesús Yáñez",
                instrumento: "Tenor",
                foto: "/miembros/saxos/yañez.png",
            },
            {
                nombre: "Pedro Velo",
                instrumento: "Tenor",
                foto: "/miembros/saxos/pedro.png",
            },
            {
                nombre: "Leonardo Pérez",
                instrumento: "Barítono",
                foto: "/miembros/saxos/leonardo.png",
            },
        ],
    },
    {
        nombre: "Fagot",
        mostrarInstrumento: false,
        miembros: [
            {
                nombre: "Nani Pavón",
                instrumento: "",
                foto: "/miembros/fagot/nani.png",
            },
        ],
    },
    {
        nombre: "Bombardinos, Trombones y Tubas",
        mostrarInstrumento: true,
        miembros: [
            {
                nombre: "Isabel Camacho",
                instrumento: "Bombardino",
                foto: "/miembros/metales/isa.png",
            },
            {
                nombre: "Manuel Moreno",
                instrumento: "Bombardino",
                foto: "/miembros/metales/manuelbdno.png",
            },
            {
                nombre: "Leonardo García",
                instrumento: "Trombón",
                foto: "/miembros/metales/leo.png",
            },
            {
                nombre: "Juan Romero",
                instrumento: "Trombón",
                foto: "/miembros/usuario.jpg",
            },
            {
                nombre: "Manuel Limón",
                instrumento: "Trombón",
                foto: "/miembros/metales/manuel.png",
            },
            {
                nombre: "Cornelio Romero",
                instrumento: "Tuba",
                foto: "/miembros/metales/neli.png",
            },
            {
                nombre: "Luís Galán",
                instrumento: "Tuba",
                foto: "/miembros/usuario.jpg",
            },
            {
                nombre: "Ezequiel Márquez",
                instrumento: "Tuba",
                foto: "/miembros/metales/zequi.png",
            },
        ],
    },
    {
        nombre: "Percusión",
        mostrarInstrumento: false,
        miembros: [
            {
                nombre: "José Coronel",
                instrumento: "",
                foto: "/miembros/percu/jose.png",
            },
            {
                nombre: "Luis Rodríguez",
                instrumento: "",
                foto: "/miembros/percu/luis.png",
            },
            {
                nombre: "Manuel Jesús Rodríguez",
                instrumento: "",
                foto: "/miembros/percu/zubi.png",
            },
            {
                nombre: "Jose Manuel Pérez",
                instrumento: "",
                foto: "/miembros/usuario.jpg",
            },
            {
                nombre: "Javier Velo",
                instrumento: "",
                foto: "/miembros/percu/javi.png",
            },
            {
                nombre: "Jorgen Bautista",
                instrumento: "",
                foto: "/miembros/usuario.jpg",
            },
            {
                nombre: "Aurel Martín",
                instrumento: "",
                foto: "/miembros/usuario.jpg",
            },
        ],
    },
];