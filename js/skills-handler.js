const SkillsHandler = {
    skills: [
        { name: 'JavaScript', class: 'skill-js', icon: 'fab fa-js-square' },
        { name: 'CSS3', class: 'skill-css', icon: 'fab fa-css3-alt' },
        { name: 'HTML5', class: 'skill-html', icon: 'fab fa-html5' },
        { name: 'Java', class: 'skill-java', icon: 'fab fa-java' },
        { name: 'Python', class: 'skill-python', icon: 'fab fa-python' },
        { name: 'Git', class: 'skill-git', icon: 'fab fa-git-alt' },
        { name: 'Render', class: 'skill-render', icon: 'fas fa-cloud' },
        { name: 'Node.js & Express', class: 'skill-node', icon: 'fab fa-node-js' }
    ],

    createSkillItem: function(skill) {
        return `
            <div class="skill-item ${skill.class}" title="${skill.name}">
                <i class="${skill.icon}"></i>
            </div>
        `;
    },

    renderSkills: function() {
        const skillsGrid = document.getElementById('skillsGrid');
        
        if (skillsGrid) {
            skillsGrid.innerHTML = this.skills.map(this.createSkillItem).join('');
            this.addSkillEvents();
        }
    },

    addSkillEvents: function() {
        document.querySelectorAll('.skill-item').forEach(skill => {
            skill.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.2) rotate(5deg)';
            });
            
            skill.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    }
};