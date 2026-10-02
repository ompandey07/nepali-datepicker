// Initialize Lucide icons
lucide.createIcons();

// Preloader
window.addEventListener('load', function() {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) preloader.classList.add('loaded');
    }, 1200);
});

// Scroll Progress Bar
window.addEventListener('scroll', function() {
    const scrollProgress = document.getElementById('scrollProgress');
    if (!scrollProgress) return;
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
        
        btn.classList.add('copied');
        if (icon) icon.setAttribute('data-lucide', 'check');
        if (text) text.textContent = 'Copied!';
        lucide.createIcons();
        
        setTimeout(() => {
            btn.classList.remove('copied');
            if (icon) icon.setAttribute('data-lucide', 'copy');
            if (text) text.textContent = 'Copy';
            lucide.createIcons();
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Installation tabs
function showInstallTab(tabName) {
    document.querySelectorAll('.install-content').forEach(el => {
        el.classList.remove('active');
    });
    
    document.querySelectorAll('.install-tab').forEach(el => {
        el.classList.remove('active');
        el.setAttribute('aria-selected', 'false');
    });
    
    const targetContent = document.getElementById('install-' + tabName);
    if (targetContent) targetContent.classList.add('active');
    
    if (event && event.target) {
        const tabBtn = event.target.closest('.install-tab');
        if (tabBtn) {
            tabBtn.classList.add('active');
            tabBtn.setAttribute('aria-selected', 'true');
        }
    }
    
    lucide.createIcons();
}

// Feature category filter
document.querySelectorAll('.feature-category').forEach(btn => {
    btn.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        
        document.querySelectorAll('.feature-category').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
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
const yearElem = document.getElementById('currentYear');
if (yearElem) yearElem.textContent = new Date().getFullYear();

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
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

// Initialize all date pickers with new logic
document.addEventListener('DOMContentLoaded', function() {
    if (typeof NepaliDatePicker === 'undefined') return;

    // Hero Section
    NepaliDatePicker.init('#hero-light', {
        mode: 'light',
        language: 'nepali',
        miniEnglishDates: true
    });
    
    NepaliDatePicker.init('#hero-dark', {
        mode: 'dark',
        language: 'nepali',
        miniEnglishDates: true
    });
    
    // Display Modes / Language options
    NepaliDatePicker.init('#demo-bilingual', {
        mode: 'light',
        language: 'nepali',
        miniEnglishDates: true
    });
    
    NepaliDatePicker.init('#demo-nepali', {
        mode: 'light',
        language: 'nepali'
    });
    
    NepaliDatePicker.init('#demo-english', {
        mode: 'light',
        language: 'english'
    });
    
    // Dark Mode
    NepaliDatePicker.init('#demo-dark-bilingual', {
        mode: 'dark',
        language: 'nepali',
        miniEnglishDates: true
    });
    
    NepaliDatePicker.init('#demo-dark-nepali', {
        mode: 'dark',
        language: 'nepali'
    });
    
    NepaliDatePicker.init('#demo-dark-english', {
        mode: 'dark',
        language: 'english'
    });
    
    // Color Themes
    NepaliDatePicker.init('#demo-ocean', {
        mode: 'light',
        theme: 'ocean',
        miniEnglishDates: true
    });
    
    NepaliDatePicker.init('#demo-forest', {
        mode: 'light',
        theme: 'forest',
        miniEnglishDates: true
    });
    
    NepaliDatePicker.init('#demo-sunset', {
        mode: 'light',
        theme: 'sunset',
        miniEnglishDates: true
    });
    
    NepaliDatePicker.init('#demo-rose', {
        mode: 'light',
        theme: 'rose',
        miniEnglishDates: true
    });
});