// Skills Handler Module - Solo con tus tecnologías
const SkillsHandler = {
    techStacks: [
        { name: 'Python', class: 'skill-python', icon: 'fab fa-python' },
        { name: 'JavaScript', class: 'skill-js', icon: 'fab fa-js-square' },
        { name: 'HTML5', class: 'skill-html', icon: 'fab fa-html5' },
        { name: 'CSS3', class: 'skill-css', icon: 'fab fa-css3-alt' },
        { name: 'Node.js', class: 'skill-node', icon: 'fab fa-node-js' },
        { name: 'Express.js', class: 'skill-express', icon: 'fas fa-server' }
    ],

    tools: [
        { name: 'Render', class: 'skill-render', icon: 'fas fa-cloud' },
        { name: 'Git', class: 'skill-git', icon: 'fab fa-git-alt' }
    ],

    createSkillItem: function(skill) {
        return `
            <div class="skill-item ${skill.class}" data-tooltip="${skill.name}">
                <i class="${skill.icon}"></i>
            </div>
        `;
    },

    renderSkills: function() {
        const techsGrid = document.getElementById('techsGrid');
        const toolsGrid = document.getElementById('toolsGrid');
        
        if (techsGrid) {
            techsGrid.innerHTML = this.techStacks.map(this.createSkillItem).join('');
        }
        
        if (toolsGrid) {
            toolsGrid.innerHTML = this.tools.map(this.createSkillItem).join('');
        }
        
        this.addSkillEvents();
    },

    addSkillEvents: function() {
        document.querySelectorAll('.skill-item').forEach(skill => {
            skill.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.1)';
            });
            
            skill.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
};