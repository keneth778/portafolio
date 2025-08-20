const App = {
    init: function() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', this.onDOMReady.bind(this));
        } else {
            this.onDOMReady();
        }
    },

    onDOMReady: function() {
        console.log('🚀 Portfolio App initialized');
        
        // Initialize all modules
        this.loadSkills();
        this.loadProjects();
        this.initAnimations();
    },

    loadSkills: function() {
        SkillsHandler.renderSkills();
        console.log('✅ Skills loaded');
    },

    loadProjects: function() {
        ProjectsRenderer.renderProjects();
        console.log('✅ Projects loaded');
    },

    initAnimations: function() {
        AnimationsHandler.init();
        console.log('✅ Animations initialized');
    }
};

// Initialize the application
App.init();