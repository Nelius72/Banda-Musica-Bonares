export interface Obra {
  id: number;
  titulo: string;
  autor?: string;
  compositor?: string;
  enlace: string;
  tipo: "marcha" | "pasodoble" | "sinfonica";
}

/* =========================
   marcha PROCESIONALES
========================= */

export const marchasProcesionales: Obra[] = [
  { id: 1, titulo: "Alma de la Trinidad - (Eloy García)", autor: "Eloy García", tipo: "marcha", enlace: "" },
  { id: 2, titulo: "A la voz del Capataz - (Abel Moreno)", autor: "Abel Moreno", tipo: "marcha", enlace: "" },
  { id: 3, titulo: "Aquella Virgen - (M. Gómez de Arriba)", autor: "M. Gómez de Arriba", tipo: "marcha", enlace: "" },
  { id: 4, titulo: "A ti Manue - (J.J. Puntas)", autor: "J.J. Puntas", tipo: "marcha", enlace: "" },
  { id: 5, titulo: "Aniversario Macareno - (J. Velázquez)", autor: "J. Velázquez", tipo: "marcha", enlace: "" },
  { id: 6, titulo: "Ave María - (G. Caccini / D. Coronel)", autor: "G. Caccini / D. Coronel", tipo: "marcha", enlace: "" },
  { id: 7, titulo: "Aires de Triana - (F. Singuenza)", autor: "F. Singuenza", tipo: "marcha", enlace: "" },
  { id: 8, titulo: "Amarguras - (M. Font de Anta)", autor: "M. Font de Anta", tipo: "marcha", enlace: "" },
  { id: 9, titulo: "Bella Reina del Cielo - (A. Domínguez)", autor: "A. Domínguez", tipo: "marcha", enlace: "" },
  { id: 10, titulo: "Bajo tu Amparo - (R. Jordán Flores)", autor: "R. Jordán Flores", tipo: "marcha", enlace: "" },

  { id: 11, titulo: "Callejuela de la O - (P. Lola)", autor: "P. Lola", tipo: "marcha", enlace: "" },
  { id: 12, titulo: "Camino de Sepulcro - (David Rivas)", autor: "David Rivas", tipo: "marcha", enlace: "" },
  { id: 13, titulo: "Calvario - (F.J. Alonso)", autor: "F.J. Alonso", tipo: "marcha", enlace: "" },
  { id: 14, titulo: "Candelaria - (M. Marvizón)", autor: "M. Marvizón", tipo: "marcha", enlace: "" },
  { id: 15, titulo: "Caridad del Guadalquivir - (P. Lola)", autor: "P. Lola", tipo: "marcha", enlace: "" },
  { id: 16, titulo: "Como Tú Ninguna - (David Hurtado)", autor: "David Hurtado", tipo: "marcha", enlace: "" },
  { id: 17, titulo: "Concha - (V.M. Ferrer)", autor: "V.M. Ferrer", tipo: "marcha", enlace: "" },
  { id: 18, titulo: "Coronación - (M. Marvizón)", autor: "M. Marvizón", tipo: "marcha", enlace: "" },
  { id: 19, titulo: "Coronación de la Macarena - (P. Braña)", autor: "P. Braña", tipo: "marcha", enlace: "" },
  { id: 20, titulo: "Coronación en el Rocío - (R. González / J.J. Espinosa)", autor: "R. González / J.J. Espinosa", tipo: "marcha", enlace: "" },

  { id: 21, titulo: "Creo en la Esperanza - (Carlos Guillén)", autor: "Carlos Guillén", tipo: "marcha", enlace: "" },
  { id: 22, titulo: "Costalero - (P. González)", autor: "P. González", tipo: "marcha", enlace: "" },
  { id: 23, titulo: "Dolores, Madre y Reina de Bonares - (L. Pichardo)", autor: "L. Pichardo", tipo: "marcha", enlace: "" },
  { id: 24, titulo: "Dolores - (J.A. Márquez)", autor: "J.A. Márquez", tipo: "marcha", enlace: "" },
  { id: 25, titulo: "Dolores, Saeta Onubense - (C. López Gándara)", autor: "C. López Gándara", tipo: "marcha", enlace: "" },
  { id: 26, titulo: "Dolores por Rociana - (J.J. Domínguez)", autor: "J.J. Domínguez", tipo: "marcha", enlace: "" },
  { id: 27, titulo: "Encarnación Coronada - (Abel Moreno)", autor: "Abel Moreno", tipo: "marcha", enlace: "" },
  { id: 28, titulo: "Esperanza de Triana Coronada - (J. Albero)", autor: "J. Albero", tipo: "marcha", enlace: "" },
  { id: 29, titulo: "Esperanza Macarena - (P. Morales)", autor: "P. Morales", tipo: "marcha", enlace: "" },
  { id: 30, titulo: "Esperanza Marinera - (Abel Moreno)", autor: "Abel Moreno", tipo: "marcha", enlace: "" },

  { id: 31, titulo: "Esperanza por Huelva Coronada - (Abel Moreno)", autor: "Abel Moreno", tipo: "marcha", enlace: "" },
  { id: 32, titulo: "Esperanza por los Pobres Coronada - (J. Jiménez)", autor: "J. Jiménez", tipo: "marcha", enlace: "" },
  { id: 33, titulo: "Esperanza - (M. Marvizón)", autor: "M. Marvizón", tipo: "marcha", enlace: "" },
  { id: 34, titulo: "Estrella Sublime - (M. López Farfán)", autor: "M. López Farfán", tipo: "marcha", enlace: "" },
  { id: 35, titulo: "Esperanza Pastora de Hinojos - (Pedro Morales)", autor: "Pedro Morales", tipo: "marcha", enlace: "" },
  { id: 36, titulo: "Esperanza que Guía a Triana - (J. León Alapont)", autor: "J. León Alapont", tipo: "marcha", enlace: "" },
  { id: 37, titulo: "Hermanos Costaleros - (Abel Moreno)", autor: "Abel Moreno", tipo: "marcha", enlace: "" },
  { id: 38, titulo: "Hiniesta Coronada - (J. Albero)", autor: "J. Albero", tipo: "marcha", enlace: "" },
  { id: 39, titulo: "Hiniesta - (J. Martínez Peralto)", autor: "J. Martínez Peralto", tipo: "marcha", enlace: "" },
  { id: 40, titulo: "Himno Nacional", autor: "", tipo: "marcha", enlace: "" },

  { id: 41, titulo: "Jesús de las Penas - (A. Pantión)", autor: "A. Pantión", tipo: "marcha", enlace: "" },
  { id: 42, titulo: "La Macarena - (P. Lola)", autor: "P. Lola", tipo: "marcha", enlace: "" },
  { id: 43, titulo: "La Madrugá - (Abel Moreno)", autor: "Abel Moreno", tipo: "marcha", enlace: "" },
  { id: 44, titulo: "La Virgen de Sevilla - (Víctor López)", autor: "Víctor López", tipo: "marcha", enlace: "" },
  { id: 45, titulo: "Miradlo en la Cruz - (David Hurtado)", autor: "David Hurtado", tipo: "marcha", enlace: "" },
  { id: 46, titulo: "Macarena - (Abel Moreno)", autor: "Abel Moreno", tipo: "marcha", enlace: "" },
  { id: 47, titulo: "Madre de los Gitanos Coronada - (Abel Moreno)", autor: "Abel Moreno", tipo: "marcha", enlace: "" },
  { id: 48, titulo: "Madre Hiniesta - (M. Marvizón)", autor: "M. Marvizón", tipo: "marcha", enlace: "" },
  { id: 49, titulo: "Madrugá Macarena - (P. Ojeda)", autor: "P. Ojeda", tipo: "marcha", enlace: "" },
  { id: 50, titulo: "Mater Mea - (Ricardo Dorado)", autor: "Ricardo Dorado", tipo: "marcha", enlace: "" },

  { id: 51, titulo: "Mª Stma del Dulce Nombre - (L. Lerate)", autor: "L. Lerate", tipo: "marcha", enlace: "" },
  { id: 52, titulo: "María Nazaret - (J.A. Raya / D. Coronel)", autor: "J.A. Raya / D. Coronel", tipo: "marcha", enlace: "" },
  { id: 53, titulo: "Mektub - (M. San Miguel)", autor: "M. San Miguel", tipo: "marcha", enlace: "" },
  { id: 54, titulo: "Mi Amargura - (V.M. Ferrer)", autor: "V.M. Ferrer", tipo: "marcha", enlace: "" },
  { id: 55, titulo: "Nazareno y Gitano - (M. Salas)", autor: "M. Salas", tipo: "marcha", enlace: "" },
  { id: 56, titulo: "Ntro. Padre Jesús - (E. Cebrián)", autor: "E. Cebrián", tipo: "marcha", enlace: "" },
  { id: 57, titulo: "Osanna in Excelsis - (O. Navarro)", autor: "O. Navarro", tipo: "marcha", enlace: "" },
  { id: 58, titulo: "Onuba Aestuaria - (P. Ponce)", autor: "P. Ponce", tipo: "marcha", enlace: "" },
  { id: 59, titulo: "Pasa la Virgen Macarena - (P.G. Laserna)", autor: "P.G. Laserna", tipo: "marcha", enlace: "" },
  { id: 60, titulo: "Pasan los Campanilleros - (López Farfán)", autor: "López Farfán", tipo: "marcha", enlace: "" },

  { id: 61, titulo: "Pasa la Virgen de la Candelaria - (C. López Gándara)", autor: "C. López Gándara", tipo: "marcha", enlace: "" },
  { id: 62, titulo: "Pasa la Virgen de la Caridad - (C. López Gándara)", autor: "C. López Gándara", tipo: "marcha", enlace: "" },
  { id: 63, titulo: "Perdónalos - (David Rivas)", autor: "David Rivas", tipo: "marcha", enlace: "" },
  { id: 64, titulo: "Pureza Marinera - (J. Pardo)", autor: "J. Pardo", tipo: "marcha", enlace: "" },
  { id: 65, titulo: "Pobre Carmen - (E. López Juanrranz)", autor: "E. López Juanrranz", tipo: "marcha", enlace: "" },
  { id: 66, titulo: "Rocío - (M. Vidriet)", autor: "M. Vidriet", tipo: "marcha", enlace: "" },
  { id: 67, titulo: "Reina del Polvorín - (E. Vílchez)", autor: "E. Vílchez", tipo: "marcha", enlace: "" },
  { id: 68, titulo: "Reina del Amor - (I. Macías)", autor: "I. Macías", tipo: "marcha", enlace: "" },
  { id: 69, titulo: "Reina de San Román - (G. Sánchez)", autor: "G. Sánchez", tipo: "marcha", enlace: "" },
  { id: 70, titulo: "Reina de Triana - (J. López Rueda)", autor: "J. López Rueda", tipo: "marcha", enlace: "" },

  { id: 71, titulo: "Rosario de Montesión - (J. Velázquez)", autor: "J. Velázquez", tipo: "marcha", enlace: "" },
  { id: 72, titulo: "Saeta - (G. Ríos)", autor: "G. Ríos", tipo: "marcha", enlace: "" },
  { id: 73, titulo: "Cristo del Desamparo y Abandono - (F. Herrera)", autor: "F. Herrera", tipo: "marcha", enlace: "" },
  { id: 74, titulo: "Salvación - (David Hurtado)", autor: "David Hurtado", tipo: "marcha", enlace: "" },
  { id: 75, titulo: "Se arrodilla Triana - (David Hurtado)", autor: "David Hurtado", tipo: "marcha", enlace: "" },
  { id: 76, titulo: "Sine Labe Concepta - (Abel Moreno)", autor: "Abel Moreno", tipo: "marcha", enlace: "" },
  { id: 77, titulo: "Siempre la Esperanza - (J.J. Espinosa)", autor: "J.J. Espinosa", tipo: "marcha", enlace: "" },
  { id: 78, titulo: "Soleá dame la mano - (M. Font de Anta)", autor: "M. Font de Anta", tipo: "marcha", enlace: "" },
  { id: 79, titulo: "Soleá de Triana - (David Hurtado)", autor: "David Hurtado", tipo: "marcha", enlace: "" },
  { id: 80, titulo: "Triana - (Félix de Carbonera)", autor: "Félix de Carbonera", tipo: "marcha", enlace: "" },

  { id: 81, titulo: "Triana de Esperanza - (C. Gómez)", autor: "C. Gómez", tipo: "marcha", enlace: "" },
  { id: 82, titulo: "Triunfal - (J. Blanco)", autor: "J. Blanco", tipo: "marcha", enlace: "" },
  { id: 83, titulo: "Total Pulcra - (A. Domínguez)", autor: "A. Domínguez", tipo: "marcha", enlace: "" },
  { id: 84, titulo: "Tú eres el Orgullo de Nuestro Pueblo - (Pablo Ojeda)", autor: "Pablo Ojeda", tipo: "marcha", enlace: "" },
  { id: 85, titulo: "Victoria del Polvorín - (Fco. Cano)", autor: "Fco. Cano", tipo: "marcha", enlace: "" },
  { id: 86, titulo: "Valle de Sevilla - (José de la Vega)", autor: "José de la Vega", tipo: "marcha", enlace: "" },
  { id: 87, titulo: "Virgen de los Negritos - (P. Morales)", autor: "P. Morales", tipo: "marcha", enlace: "" },
  { id: 88, titulo: "Virgen de San Bernardo - (Abel Moreno)", autor: "Abel Moreno", tipo: "marcha", enlace: "" },
  { id: 89, titulo: "Virgen de las Aguas - (S. Ramos)", autor: "S. Ramos", tipo: "marcha", enlace: "" },
  { id: 90, titulo: "Virgen de los Estudiantes - (Abel Moreno)", autor: "Abel Moreno", tipo: "marcha", enlace: "" },

  { id: 91, titulo: "Virgen del Valle - (V. Zarzuela)", autor: "V. Zarzuela", tipo: "marcha", enlace: "" },
  { id: 92, titulo: "Al Cielo la Reina de Triana - (Gómez Jaldón)", autor: "Gómez Jaldón", tipo: "marcha", enlace: "" },
  { id: 93, titulo: "El Día del Señor - (A. López Cortés)", autor: "A. López Cortés", tipo: "marcha", enlace: "" },
  { id: 94, titulo: "El Mayor Dolor - (D. Albarrán)", autor: "D. Albarrán", tipo: "marcha", enlace: "" },
  { id: 95, titulo: "Reina, Madre y Capitana - (Gómez Jaldón)", autor: "Gómez Jaldón", tipo: "marcha", enlace: "" },
  { id: 96, titulo: "Y Amaneció en tu Albayzín - (E. Santiago Vico)", autor: "E. Santiago Vico", tipo: "marcha", enlace: "" },
  { id: 97, titulo: "Himno Nacional - (Tradicional)", autor: "Tradicional", tipo: "marcha", enlace: "" }
];

/* =========================
   PASODOBLES
========================= */

export const pasodobles: Obra[] = [
  { id: 1, titulo: "Suspiros de España", autor: "Álvarez Alonso", tipo: "pasodoble", enlace: "https://www.youtube.com/watch?v=example11" },
  { id: 2, titulo: "España Cañí", autor: "Pascual Marquina", tipo: "pasodoble", enlace: "https://www.youtube.com/watch?v=example12" },
  { id: 3, titulo: "El Gato Montés", autor: "Manuel Penella", tipo: "pasodoble", enlace: "https://www.youtube.com/watch?v=example13" },
];

/* =========================
   OBRAS SINFÓNICAS
========================= */

export const obrasSinfonicas: Obra[] = [
  { id: 1, titulo: "First Suite in Eb", autor: "Gustav Holst", tipo: "sinfonica", enlace: "https://www.youtube.com/watch?v=example14" },
  { id: 2, titulo: "Second Suite in F", autor: "Gustav Holst", tipo: "sinfonica", enlace: "https://www.youtube.com/watch?v=example15" },
  { id: 3, titulo: "El Camino Real", autor: "Alfred Reed", tipo: "sinfonica", enlace: "https://www.youtube.com/watch?v=example16" },
];