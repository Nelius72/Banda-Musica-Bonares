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
                foto: "/miembros/trompetas/juanan.png",
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
                foto: "/miembros/clarinetes/joaquinc.png",
            },
            {
                nombre: "Juan Antonio Coronel",
                instrumento: "Clarinete 1º",
                foto: "/miembros/clarinetes/alforillojr.png",
            },
            {
                nombre: "María León",
                instrumento: "Clarinete 1º",
                foto: "/miembros/clarinetes/maria.png",
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
                instrumento: "Clarinete 2º",
                foto: "/miembros/clarinetes/martin.png",
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
                foto: "/miembros/flautas/patricia.png",
            },
            {
                nombre: "Cristobal Limón",
                instrumento: "Flauta Ppal.",
                foto: "/miembros/flautas/cristobal.png",
            },
        ],
    },
    {
        nombre: "Trompetas y Fliscornos",
        mostrarInstrumento: false,
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
                nombre: "Pepe López",
                instrumento: "Trompeta / Corneta",
                foto: "/miembros/trompetas/pepe.png",
            },
            {
                nombre: "Juan Antonio Garrido",
                instrumento: "Trompeta",
                foto: "/miembros/trompetas/juan.png",
            },
            {
                nombre: "Antonio Regidor",
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
                foto: "/miembros/trompetas/juanan.png",
            },
            {
                nombre: "Pedro José Fernández",
                instrumento: "Fliscorno",
                foto: "/miembros/trompetas/pidri.png",
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
                foto: "/miembros/saxos/marco.png",
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
            {
                nombre: "Salomé Mota",
                instrumento: "Alto",
                foto: "/miembros/usuario.jpg",
            },
            {
                nombre: "Lola Coronel",
                instrumento: "Alto",
                foto: "/miembros/usuario.jpg",
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
                foto: "/miembros/metales/juan.png",
            },
            {
                nombre: "Manuel Limón",
                instrumento: "Trombón",
                foto: "/miembros/metales/manuel.png",
            },
            {
                nombre: "Manuel González",
                instrumento: "Trombón",
                foto: "/miembros/usuario.jpg",
            },
            {
                nombre: "Cornelio Romero",
                instrumento: "Tuba",
                foto: "/miembros/metales/neli.png",
            },
            {
                nombre: "Luís Galán",
                instrumento: "Tuba",
                foto: "/miembros/metales/luis.png",
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
                foto: "/miembros/percu/josemanuel.png",
            },
            {
                nombre: "Javier Velo",
                instrumento: "",
                foto: "/miembros/percu/javi.png",
            },
            {
                nombre: "Jorgen Bautista",
                instrumento: "",
                foto: "/miembros/percu/jorgen.png",
            },
            {
                nombre: "Aurel Martín",
                instrumento: "",
                foto: "/miembros/percu/aurel.png",
            },
        ],
    },
    {
        nombre: "Tambores y Cornetas",
        mostrarInstrumento: true,
        miembros: [
            {
                nombre: "Jose Contreras",
                instrumento: "Timbal",
                foto: "/miembros/tambores/contreras.png",
            },
            {
                nombre: "J. Ramón Pulido",
                instrumento: "Timbal",
                foto: "/miembros/usuario.jpg",
            },
            {
                nombre: "Marco Antonio Ramos",
                instrumento: "Tambor",
                foto: "/miembros/tambores/joven.png",
            },
            {
                nombre: "Cristobal Camacho",
                instrumento: "Corneta",
                foto: "/miembros/trompetas/camacho.png",
            },
            {
                nombre: "Marcos Cortés",
                instrumento: "Tambor",
                foto: "/miembros/tambores/marcos.png",
            },
            {
                nombre: "Manuel Vega",
                instrumento: "Tambor",
                foto: "/miembros/usuario.jpg",
            },
        ],
    }
];