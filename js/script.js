const estudiantes = [];

function ingresarEstudiante() {
    const nombre = prompt("Ingrese el nombre del estudiante (o escriba 'fin' para terminar): ");

    if (nombre.toLowerCase() === 'fin') {
        mostrarResultados();
    } else {
        const notas = [];
        const numNotas = parseInt(prompt(`Ingrese el número de notas para ${nombre}: `));

        for (let i = 0; i < numNotas; i++) {
            const nota = parseFloat(prompt(`Ingrese la nota ${i + 1} de ${nombre}: `));
            notas.push(nota);
        }

        estudiantes.push({ nombre, notas });
        ingresarEstudiante();
    }
}

function mostrarResultados() {
    console.log("Resultados:");

    for (const estudiante of estudiantes) {
        const promedio = estudiante.notas.reduce((sum, nota) => sum + nota, 0) / estudiante.notas.length;
        console.log(`Estudiante: ${estudiante.nombre}`);
        console.log(`Notas: ${estudiante.notas.join(', ')}`);
        console.log(`Promedio: ${promedio.toFixed(2)}`);
    }
}

function main() {
    console.log("¡Bienvenido al sistema de ingreso de estudiantes!");
    console.log("Por favor, siga las instrucciones para ingresar los datos.");
    
    const opcion = parseInt(prompt("Opciones:\n1. Ingresar estudiante\n2. Mostrar resultados\nSeleccione una opción: "));

    switch (opcion) {
        case 1:
            ingresarEstudiante();
            break;
        case 2:
            mostrarResultados();
            break;
        default:
            console.log("Opción no válida. Por favor, elija 1 o 2.");
            main();
            break;
    }
}

main();
