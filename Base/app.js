// Initialize Lucide icons
        lucide.createIcons();

        // Preloader
        window.addEventListener('load', function() {
            setTimeout(() => {
                document.getElementById('preloader').classList.add('loaded');
            }, 1800);
        });

        // Scroll Progress Bar
        window.addEventListener('scroll', function() {
            const scrollProgress = document.getElementById('scrollProgress');
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        });

        // Copy code function with proper feedback
        function copyCode(btn) {
            const codeBlock = btn.closest('.code-block');
            const code = codeBlock.querySelector('pre').textContent;
            
            navigator.clipboard.writeText(code).then(() => {
                const icon = btn.querySelector('i');
                const text = btn.querySelector('span');
                
                // Add copied class
                btn.classList.add('copied');
                
                // Change icon and text
                icon.setAttribute('data-lucide', 'check');
                text.textContent = 'Copied!';
                lucide.createIcons();
                
                // Reset after 2 seconds
                setTimeout(() => {
                    btn.classList.remove('copied');
                    icon.setAttribute('data-lucide', 'copy');
                    text.textContent = 'Copy';
                    lucide.createIcons();
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy:', err);
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
                el.setAttribute('aria-selected', 'false');
            });
            
            // Show selected content
            document.getElementById('install-' + tabName).classList.add('active');
            
            // Add active to clicked tab
            event.target.closest('.install-tab').classList.add('active');
            event.target.closest('.install-tab').setAttribute('aria-selected', 'true');
            
            // Reinitialize icons
            lucide.createIcons();
        }

        // Feature category filter
        document.querySelectorAll('.feature-category').forEach(btn => {
            btn.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Update active button
                document.querySelectorAll('.feature-category').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter cards
                document.querySelectorAll('.feature-card').forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                        setTimeout(() => card.style.opacity = '1', 10);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => card.style.display = 'none', 300);
                    }
                });
            });
        });

        // Set current year
        document.getElementById('currentYear').textContent = new Date().getFullYear();

        // Active nav link on scroll
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });

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