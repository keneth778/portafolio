// Projects Renderer Module
const ProjectsRenderer = {
    createProjectCard: function(project) {
        return `
            <div class="project-card">
                <h3>
                    <div class="project-icon">
                        <i class="${project.icon}"></i>
                    </div>
                    ${project.name}
                </h3>
                <p class="project-description">${project.description}</p>
                <div class="project-buttons">
                    <a href="${project.githubUrl}" class="github-btn" target="_blank">
                        <i class="fab fa-github"></i>
                        Ver código
                    </a>
                    <a href="${project.liveUrl}" class="live-btn" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                        Ver proyecto
                    </a>
                </div>
            </div>
        `;
    },

    renderProjects: function() {
        const projectsGrid = document.getElementById('projectsGrid');
        const projects = ProjectsData.getProjects();
        
        if (projectsGrid && projects) {
            projectsGrid.innerHTML = projects.map(this.createProjectCard).join('');
        }
    }
};