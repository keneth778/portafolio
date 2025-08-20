// Projects Data Module
const ProjectsData = {
    projects: [
        {
            name: "app-web-asistencia",
            description: "Aplicación web para gestión de asistencia escolarUna plataforma en línea diseñada para facilitar el control y registro de asistencia en un colegio. Permite a los docentes marcar la asistencia de sus estudiantes de manera rápida y organizada, credenciales de prueba:prueba@gmail.com contraseña:123456",
            icon: "fas fa-shopping-cart",
            githubUrl: "https://github.com/keneth778/app-web-asistencia-frontend",
            liveUrl: "https://asistencia-1fna.onrender.com/"
        },
        {
            name: "juego para niños web",
            description: "a los docentes crear y gestionar juegos educativos en los que los estudiantes participan en tiempo real. El profesor puede diseñar cuestionarios, trivias y retos personalizados, mientras que los alumnos se conectan con un código único para unirse a la partida desde cualquier dispositivo.",
            icon: "fas fa-tasks",
            githubUrl: "https://github.com/keneth778/cartasFronted",
            liveUrl: "#"
        },
        {
            name: "juego de rompecabezas",
            description: "Juego web de rompecabezas interactivoUna aplicación en línea diseñada para estimular la concentración, el pensamiento lógico y la memoria a través de rompecabezas dinámicos. El jugador puede armar diferentes imágenes divididas en piezas que se mezclan de forma aleatoria, con niveles de dificultad ajustables que van desde pocas piezas grandes hasta muchas piezas pequeñas y detalladas.",
            icon: "fas fa-cloud-sun",
            githubUrl: "https://github.com/keneth778/rompecabezas",
            liveUrl: "https://keneth778.github.io/rompecabezas/"
        },
        {
            name: "sofware de hospital",
            description: "Software de gestión hospitalaria (versión inicial en Java)Un sistema desarrollado en Java que busca digitalizar los procesos básicos de un hospital. Aunque se encuentra en una fase inicial, ya incluye las funciones esenciales para el manejo de usuarios y la organización del centro médico.",
            icon: "fas fa-share-alt",
            githubUrl: "https://github.com/keneth778/hospital2",
            liveUrl: "https://github.com/keneth778/hospital2/raw/refs/heads/rm-farmacia/src/Descargas/hospita.jar"
        },
        {
            name: "proyecto comperativo de la evolucion",
            description: "Proyecto cooperativo sobre la evoluciónUna iniciativa colaborativa que busca explorar y representar la evolhttps://github.com/keneth778/Darwin-evolucionución de diversos aspectos de la humanidad, la naturaleza y la tecnología a lo largo del tiempo. El proyecto se centra en el trabajo en equipo, donde cada participante aporta investigaciones, ideas y recursos para construir una visión integral de cómo han cambiado diferentes elementos a través de la historia.mi aporte es el numero 15",
            icon: "fas fa-cloud-sun",
            githubUrl: "https://github.com/keneth778/Darwin-evolucion",
            liveUrl: "https://rockemma.github.io/Darwin-evolucion/"
        }
    ],

    getProjects: function() {
        return this.projects;
    }
};