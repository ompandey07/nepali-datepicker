 // Initialize Lucide icons
        lucide.createIcons();
        
        // Copy code function
        function copyCode(btn) {
            const code = btn.closest('.code-block').querySelector('pre').textContent;
            navigator.clipboard.writeText(code).then(() => {
                const icon = btn.querySelector('i');
                const text = btn.childNodes[1];
                icon.setAttribute('data-lucide', 'check');
                text.textContent = ' Copied!';
                lucide.createIcons();
                
                setTimeout(() => {
                    icon.setAttribute('data-lucide', 'copy');
                    text.textContent = ' Copy';
                    lucide.createIcons();
                }, 2000);
            });
        }
        
        // Installation tabs
        function showInstallTab(tabName) {
            // Hide all content
            document.querySelectorAll('.install-content').forEach(el => {
                el.classList.remove('active');
            });
            
            // Remove active from all tabs
            document.querySelectorAll('.install-tab').forEach(el => {
                el.classList.remove('active');
            });
            
            // Show selected content
            document.getElementById('install-' + tabName).classList.add('active');
            
            // Add active to clicked tab
            event.target.closest('.install-tab').classList.add('active');
            
            // Reinitialize icons
            lucide.createIcons();
        }
        
        // Initialize all date pickers
        document.addEventListener('DOMContentLoaded', function() {
            
            // Hero Section
            NepaliDatePicker.init('#hero-light', {
                mode: 'bilingual'
            });
            
            NepaliDatePicker.init('#hero-dark', {
                mode: 'bilingual',
                dark: true
            });
            
            // Display Modes
            NepaliDatePicker.init('#demo-bilingual', {
                mode: 'bilingual'
            });
            
            NepaliDatePicker.init('#demo-nepali', {
                mode: 'nepali'
            });
            
            NepaliDatePicker.init('#demo-english', {
                mode: 'english'
            });
            
            // Dark Mode
            NepaliDatePicker.init('#demo-dark-bilingual', {
                mode: 'bilingual',
                dark: true
            });
            
            NepaliDatePicker.init('#demo-dark-nepali', {
                mode: 'nepali',
                dark: true
            });
            
            NepaliDatePicker.init('#demo-dark-english', {
                mode: 'english',
                dark: true
            });
            
            // Color Themes
            NepaliDatePicker.init('#demo-ocean', {
                mode: 'bilingual',
                theme: 'ocean'
            });
            
            NepaliDatePicker.init('#demo-forest', {
                mode: 'bilingual',
                theme: 'forest'
            });
            
            NepaliDatePicker.init('#demo-sunset', {
                mode: 'bilingual',
                theme: 'sunset'
            });
            
            NepaliDatePicker.init('#demo-rose', {
                mode: 'bilingual',
                theme: 'rose'
            });
        });