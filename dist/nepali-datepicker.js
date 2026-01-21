/**
 * Nepali Date Picker - Premium Edition
 * Author: Om Pandey
 * Version: 2.3.0
 * Website: https://www.omkumarpandey.com.np/
 * Fixed: Display div hidden by default
 */

(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.NepaliDatePicker = factory());
})(this, (function() {
    'use strict';

    // Calendar Data (BS 2070 - 2099)
    const BS_DATA = {
        2070: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        2071: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
        2072: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        2073: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        2074: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        2075: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        2076: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        2077: [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
        2078: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        2079: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        2080: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        2081: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
        2082: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        2083: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        2084: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        2085: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
        2086: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        2087: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        2088: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        2089: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        2090: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        2091: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        2092: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        2093: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        2094: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        2095: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
        2096: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        2097: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        2098: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
        2099: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31]
    };

    const BS_REF = { year: 2070, month: 1, day: 1 };
    const AD_REF = new Date(2013, 3, 14);

    // Localization
    const NEP_DIGITS = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    const NEP_MONTHS = ['बैशाख', 'जेठ', 'असार', 'साउन', 'भदौ', 'असोज', 'कार्तिक', 'मंसिर', 'पुष', 'माघ', 'फाल्गुन', 'चैत्र'];
    const ENG_MONTHS = ['Baisakh', 'Jestha', 'Ashar', 'Shrawan', 'Bhadra', 'Ashwin', 'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'];
    const NEP_DAYS = ['आइत', 'सोम', 'मंगल', 'बुध', 'बिही', 'शुक्र', 'शनि'];
    const ENG_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const NEP_DAYS_FULL = ['आइतबार', 'सोमबार', 'मंगलबार', 'बुधबार', 'बिहीबार', 'शुक्रबार', 'शनिबार'];

    // Icons
    const ICONS = {
        calendar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
        chevronLeft: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
        chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
        close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
        today: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
        clear: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>'
    };

    // Utility Functions
    function toNepali(num) {
        return String(num).split('').map(d => NEP_DIGITS[parseInt(d)] || d).join('');
    }

    function getDaysInMonth(year, month) {
        return BS_DATA[year] ? BS_DATA[year][month - 1] : 30;
    }

    function getTotalDays(year) {
        return BS_DATA[year] ? BS_DATA[year].reduce((a, b) => a + b, 0) : 365;
    }

    function bsToAd(y, m, d) {
        let total = 0;
        if (y > BS_REF.year) {
            for (let i = BS_REF.year; i < y; i++) total += getTotalDays(i);
        } else if (y < BS_REF.year) {
            for (let i = y; i < BS_REF.year; i++) total -= getTotalDays(i);
        }
        for (let i = 1; i < m; i++) total += getDaysInMonth(y, i);
        total += d - 1;
        const ad = new Date(AD_REF);
        ad.setDate(ad.getDate() + total);
        return { year: ad.getFullYear(), month: ad.getMonth() + 1, day: ad.getDate(), dow: ad.getDay() };
    }

    function adToBs(y, m, d) {
        const target = new Date(y, m - 1, d);
        let total = Math.floor((target - AD_REF) / (1000 * 60 * 60 * 24));
        let bsY = BS_REF.year, bsM = BS_REF.month, bsD = BS_REF.day;
        
        if (total >= 0) {
            while (total > 0) {
                const dim = getDaysInMonth(bsY, bsM);
                const rem = dim - bsD;
                if (total <= rem) { bsD += total; total = 0; }
                else { total -= (rem + 1); bsM++; bsD = 1; if (bsM > 12) { bsM = 1; bsY++; } }
            }
        } else {
            total = Math.abs(total);
            while (total > 0) {
                if (total < bsD) { bsD -= total; total = 0; }
                else { total -= bsD; bsM--; if (bsM < 1) { bsM = 12; bsY--; } bsD = getDaysInMonth(bsY, bsM); }
            }
        }
        return { year: bsY, month: bsM, day: bsD };
    }

    function getToday() {
        const t = new Date();
        return adToBs(t.getFullYear(), t.getMonth() + 1, t.getDate());
    }

    function getFirstDay(y, m) {
        return bsToAd(y, m, 1).dow;
    }

    // Global state
    let activePickerCalendar = null;
    let globalZIndex = 999999;

    // Close active picker
    function closeActivePicker() {
        if (activePickerCalendar) {
            activePickerCalendar.classList.remove('ndp-open');
            activePickerCalendar = null;
        }
    }

    // Close on outside click
    document.addEventListener('click', function(e) {
        if (activePickerCalendar && !activePickerCalendar.closest('.nepali-datepicker').contains(e.target)) {
            closeActivePicker();
        }
    });

    // DatePicker Class
    class NepaliDatePicker {
        constructor(el, opts = {}) {
            this.el = typeof el === 'string' ? document.querySelector(el) : el;
            if (!this.el) {
                console.error('NepaliDatePicker: Element not found');
                return;
            }

            // FIXED: showDisplay is now false by default
            this.opts = {
                mode: 'bilingual',
                theme: 'default',
                dark: false,
                size: 'default',
                minYear: 2070,
                maxYear: 2099,
                showToday: true,
                showClear: true,
                showClose: true,
                showDisplay: false,  // FIXED: Changed from true to false
                closeOnSelect: true,
                placeholder: 'मिति छान्नुहोस्',
                placeholderEn: 'Select Date',
                onChange: null,
                onOpen: null,
                onClose: null,
                ...opts
            };

            const today = getToday();
            this.year = opts.initialYear || today.year;
            this.month = opts.initialMonth || today.month;
            this.selected = null;
            this.isOpen = false;
            this.currentView = 'days';
            this.yearRangeStart = Math.floor(this.year / 12) * 12;

            this.init();
        }

        init() {
            this.el.classList.add('nepali-datepicker');
            if (this.opts.dark) this.el.classList.add('ndp-dark');
            if (this.opts.theme !== 'default') this.el.classList.add(`ndp-theme-${this.opts.theme}`);
            if (this.opts.mode === 'nepali') this.el.classList.add('ndp-nepali-only');
            if (this.opts.mode === 'english') this.el.classList.add('ndp-english-only');

            const placeholder = this.opts.mode === 'english' ? this.opts.placeholderEn : this.opts.placeholder;

            this.el.innerHTML = `
                <div class="ndp-input-wrapper">
                    <input type="text" class="ndp-input" readonly placeholder="${placeholder}">
                    <span class="ndp-input-icon">${ICONS.calendar}</span>
                </div>
                <div class="ndp-calendar">
                    <div class="ndp-header">
                        <div class="ndp-header-nav">
                            <button type="button" class="ndp-nav-btn ndp-prev">${ICONS.chevronLeft}</button>
                            <button type="button" class="ndp-title-btn">
                                <span class="ndp-title-nepali"></span>
                                <span class="ndp-title-english"></span>
                            </button>
                            <button type="button" class="ndp-nav-btn ndp-next">${ICONS.chevronRight}</button>
                        </div>
                    </div>
                    <div class="ndp-days-view">
                        <div class="ndp-weekdays"></div>
                        <div class="ndp-days"></div>
                    </div>
                    <div class="ndp-month-picker">
                        <div class="ndp-picker-header">
                            <span class="ndp-picker-title">${this.opts.mode === 'english' ? 'Select Month' : 'महिना छान्नुहोस्'}</span>
                            <button type="button" class="ndp-picker-close">${ICONS.close}</button>
                        </div>
                        <div class="ndp-month-grid"></div>
                    </div>
                    <div class="ndp-year-picker">
                        <div class="ndp-picker-header">
                            <span class="ndp-picker-title">${this.opts.mode === 'english' ? 'Select Year' : 'वर्ष छान्नुहोस्'}</span>
                            <button type="button" class="ndp-picker-close">${ICONS.close}</button>
                        </div>
                        <div class="ndp-year-nav">
                            <span class="ndp-year-range"></span>
                            <div class="ndp-year-nav-btns">
                                <button type="button" class="ndp-year-nav-btn ndp-year-prev">${ICONS.chevronLeft}</button>
                                <button type="button" class="ndp-year-nav-btn ndp-year-next">${ICONS.chevronRight}</button>
                            </div>
                        </div>
                        <div class="ndp-year-grid"></div>
                    </div>
                    <div class="ndp-footer"></div>
                </div>
                ${this.opts.showDisplay ? '<div class="ndp-display"></div>' : ''}
            `;

            // Cache elements
            this.input = this.el.querySelector('.ndp-input');
            this.cal = this.el.querySelector('.ndp-calendar');
            this.titleBtn = this.el.querySelector('.ndp-title-btn');
            this.titleNep = this.el.querySelector('.ndp-title-nepali');
            this.titleEng = this.el.querySelector('.ndp-title-english');
            this.daysView = this.el.querySelector('.ndp-days-view');
            this.weekdays = this.el.querySelector('.ndp-weekdays');
            this.days = this.el.querySelector('.ndp-days');
            this.monthPicker = this.el.querySelector('.ndp-month-picker');
            this.monthGrid = this.el.querySelector('.ndp-month-grid');
            this.yearPicker = this.el.querySelector('.ndp-year-picker');
            this.yearGrid = this.el.querySelector('.ndp-year-grid');
            this.yearRange = this.el.querySelector('.ndp-year-range');
            this.footer = this.el.querySelector('.ndp-footer');
            this.display = this.el.querySelector('.ndp-display');

            this.buildFooter();
            this.bindEvents();
            this.render();
        }

        buildFooter() {
            let html = '';
            if (this.opts.showToday) {
                html += `<button type="button" class="ndp-btn ndp-btn-primary ndp-today">${ICONS.today}${this.opts.mode === 'english' ? 'Today' : 'आज'}</button>`;
            }
            if (this.opts.showClear) {
                html += `<button type="button" class="ndp-btn ndp-btn-secondary ndp-clear">${ICONS.clear}${this.opts.mode === 'english' ? 'Clear' : 'मेटाउनुहोस्'}</button>`;
            }
            if (this.opts.showClose) {
                html += `<button type="button" class="ndp-btn ndp-btn-ghost ndp-close">${ICONS.close}${this.opts.mode === 'english' ? 'Close' : 'बन्द'}</button>`;
            }
            this.footer.innerHTML = html;
        }

        bindEvents() {
            // Input click - toggle calendar
            this.input.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggle();
            });

            // Prevent calendar from closing when clicking inside
            this.cal.addEventListener('click', (e) => {
                e.stopPropagation();
            });

            // Navigation
            this.el.querySelector('.ndp-prev').addEventListener('click', (e) => {
                e.preventDefault();
                this.navigate(-1);
            });

            this.el.querySelector('.ndp-next').addEventListener('click', (e) => {
                e.preventDefault();
                this.navigate(1);
            });

            // Title button - switch views
            this.titleBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchView();
            });

            // Month picker close
            this.monthPicker.querySelector('.ndp-picker-close').addEventListener('click', (e) => {
                e.preventDefault();
                this.showDaysView();
            });

            // Year picker close
            this.yearPicker.querySelector('.ndp-picker-close').addEventListener('click', (e) => {
                e.preventDefault();
                this.showMonthsView();
            });

            // Year navigation
            this.el.querySelector('.ndp-year-prev').addEventListener('click', (e) => {
                e.preventDefault();
                this.yearRangeStart = Math.max(this.yearRangeStart - 12, this.opts.minYear - 11);
                this.renderYears();
            });

            this.el.querySelector('.ndp-year-next').addEventListener('click', (e) => {
                e.preventDefault();
                this.yearRangeStart = Math.min(this.yearRangeStart + 12, this.opts.maxYear);
                this.renderYears();
            });

            // Footer buttons
            const todayBtn = this.el.querySelector('.ndp-today');
            const clearBtn = this.el.querySelector('.ndp-clear');
            const closeBtn = this.el.querySelector('.ndp-close');

            if (todayBtn) todayBtn.addEventListener('click', (e) => { e.preventDefault(); this.selectToday(); });
            if (clearBtn) clearBtn.addEventListener('click', (e) => { e.preventDefault(); this.clear(); });
            if (closeBtn) closeBtn.addEventListener('click', (e) => { e.preventDefault(); this.close(); });

            // Scroll/resize handling
            let scrollTimer;
            const handleScrollResize = () => {
                clearTimeout(scrollTimer);
                scrollTimer = setTimeout(() => {
                    if (this.isOpen) this.position();
                }, 10);
            };

            window.addEventListener('scroll', handleScrollResize, true);
            window.addEventListener('resize', handleScrollResize);
        }

        position() {
            const inputRect = this.input.getBoundingClientRect();
            const calHeight = 420;
            const calWidth = 340;
            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;
            const gap = 8;

            const spaceBelow = viewportHeight - inputRect.bottom - gap;
            const spaceAbove = inputRect.top - gap;

            let top, left;
            let positionTop = false;

            if (spaceBelow >= calHeight || spaceBelow >= spaceAbove) {
                top = inputRect.bottom + gap;
            } else {
                top = inputRect.top - calHeight - gap;
                positionTop = true;
            }

            left = inputRect.left;
            if (left + calWidth > viewportWidth - gap) {
                left = viewportWidth - calWidth - gap;
            }
            if (left < gap) {
                left = gap;
            }

            this.cal.style.top = top + 'px';
            this.cal.style.left = left + 'px';
            this.cal.classList.toggle('ndp-position-top', positionTop);
        }

        navigate(delta) {
            if (this.currentView === 'days') {
                this.month += delta;
                if (this.month > 12) { this.month = 1; this.year++; }
                if (this.month < 1) { this.month = 12; this.year--; }
                this.year = Math.max(this.opts.minYear, Math.min(this.opts.maxYear, this.year));
                this.render();
            } else if (this.currentView === 'months') {
                this.year = Math.max(this.opts.minYear, Math.min(this.opts.maxYear, this.year + delta));
                this.renderMonths();
                this.updateTitle();
            } else {
                this.yearRangeStart += delta * 12;
                this.renderYears();
            }
        }

        switchView() {
            if (this.currentView === 'days') {
                this.showMonthsView();
            } else if (this.currentView === 'months') {
                this.showYearsView();
            } else {
                this.showDaysView();
            }
        }

        showDaysView() {
            this.currentView = 'days';
            this.daysView.classList.remove('ndp-hidden');
            this.monthPicker.classList.remove('ndp-active');
            this.yearPicker.classList.remove('ndp-active');
            this.render();
        }

        showMonthsView() {
            this.currentView = 'months';
            this.daysView.classList.add('ndp-hidden');
            this.monthPicker.classList.add('ndp-active');
            this.yearPicker.classList.remove('ndp-active');
            this.renderMonths();
            this.updateTitle();
        }

        showYearsView() {
            this.currentView = 'years';
            this.daysView.classList.add('ndp-hidden');
            this.monthPicker.classList.remove('ndp-active');
            this.yearPicker.classList.add('ndp-active');
            this.yearRangeStart = Math.floor(this.year / 12) * 12;
            this.renderYears();
            this.updateTitle();
        }

        updateTitle() {
            if (this.currentView === 'days') {
                this.titleNep.textContent = `${NEP_MONTHS[this.month - 1]} ${toNepali(this.year)}`;
                this.titleEng.textContent = `${ENG_MONTHS[this.month - 1]} ${this.year}`;
            } else if (this.currentView === 'months') {
                this.titleNep.textContent = toNepali(this.year);
                this.titleEng.textContent = String(this.year);
            } else {
                const end = Math.min(this.yearRangeStart + 11, this.opts.maxYear);
                this.titleNep.textContent = `${toNepali(this.yearRangeStart)} - ${toNepali(end)}`;
                this.titleEng.textContent = `${this.yearRangeStart} - ${end}`;
            }
        }

        render() {
            this.updateTitle();
            this.renderWeekdays();
            this.renderDays();
        }

        renderWeekdays() {
            this.weekdays.innerHTML = NEP_DAYS.map((d, i) => `
                <div class="ndp-weekday ${i === 0 ? 'ndp-sun' : ''} ${i === 6 ? 'ndp-sat' : ''}">
                    <span class="ndp-weekday-nep">${d}</span>
                    <span class="ndp-weekday-eng">${ENG_DAYS[i]}</span>
                </div>
            `).join('');
        }

        renderDays() {
            const daysInMonth = getDaysInMonth(this.year, this.month);
            const firstDay = getFirstDay(this.year, this.month);
            const today = getToday();
            let html = '';

            for (let i = 0; i < firstDay; i++) {
                html += '<div class="ndp-day ndp-empty"></div>';
            }

            for (let d = 1; d <= daysInMonth; d++) {
                const ad = bsToAd(this.year, this.month, d);
                const dow = (firstDay + d - 1) % 7;
                
                let cls = 'ndp-day';
                if (dow === 0) cls += ' ndp-sun';
                if (dow === 6) cls += ' ndp-sat';
                if (this.year === today.year && this.month === today.month && d === today.day) cls += ' ndp-today';
                if (this.selected && this.year === this.selected.year && this.month === this.selected.month && d === this.selected.day) cls += ' ndp-selected';

                const nepD = this.opts.mode === 'english' ? d : toNepali(d);

                html += `
                    <div class="${cls}" data-day="${d}">
                        <span class="ndp-day-nep">${nepD}</span>
                        <span class="ndp-day-eng">${ad.month}/${ad.day}</span>
                    </div>
                `;
            }

            this.days.innerHTML = html;

            this.days.querySelectorAll('.ndp-day:not(.ndp-empty)').forEach(el => {
                el.addEventListener('click', () => {
                    this.selectDate(this.year, this.month, parseInt(el.dataset.day));
                });
            });
        }

        renderMonths() {
            const today = getToday();
            let html = '';

            for (let m = 1; m <= 12; m++) {
                let cls = 'ndp-month-item';
                if (m === this.month) cls += ' ndp-selected';
                if (m === today.month && this.year === today.year) cls += ' ndp-current';

                html += `
                    <div class="${cls}" data-month="${m}">
                        <span class="ndp-month-nep">${NEP_MONTHS[m - 1]}</span>
                        <span class="ndp-month-eng">${ENG_MONTHS[m - 1]}</span>
                    </div>
                `;
            }

            this.monthGrid.innerHTML = html;

            this.monthGrid.querySelectorAll('.ndp-month-item').forEach(el => {
                el.addEventListener('click', () => {
                    this.month = parseInt(el.dataset.month);
                    this.showDaysView();
                });
            });
        }

        renderYears() {
            const today = getToday();
            const start = this.yearRangeStart;
            const end = start + 11;

            this.yearRange.textContent = this.opts.mode === 'english' 
                ? `${start} - ${end}` 
                : `${toNepali(start)} - ${toNepali(end)}`;

            let html = '';

            for (let y = start; y <= end; y++) {
                let cls = 'ndp-year-item';
                if (y === this.year) cls += ' ndp-selected';
                if (y === today.year) cls += ' ndp-current';
                if (y < this.opts.minYear || y > this.opts.maxYear) cls += ' ndp-disabled';

                html += `
                    <div class="${cls}" data-year="${y}">
                        <span class="ndp-year-nep">${toNepali(y)}</span>
                        <span class="ndp-year-eng">${y}</span>
                    </div>
                `;
            }

            this.yearGrid.innerHTML = html;

            this.yearGrid.querySelectorAll('.ndp-year-item:not(.ndp-disabled)').forEach(el => {
                el.addEventListener('click', () => {
                    this.year = parseInt(el.dataset.year);
                    this.showMonthsView();
                });
            });

            this.updateTitle();
        }

        selectDate(y, m, d) {
            this.selected = { year: y, month: m, day: d };
            const ad = bsToAd(y, m, d);

            let formatted;
            if (this.opts.mode === 'english') {
                formatted = `${d} ${ENG_MONTHS[m - 1]} ${y}`;
            } else if (this.opts.mode === 'nepali') {
                formatted = `${toNepali(d)} ${NEP_MONTHS[m - 1]} ${toNepali(y)}`;
            } else {
                formatted = `${toNepali(d)} ${NEP_MONTHS[m - 1]} ${toNepali(y)} (${ad.year}/${ad.month}/${ad.day})`;
            }

            this.input.value = formatted;
            this.renderDays();
            this.updateDisplay();

            if (this.opts.onChange) {
                this.opts.onChange({ bs: this.selected, ad, formatted });
            }

            if (this.opts.closeOnSelect) {
                this.close();
            }
        }

        updateDisplay() {
            // Only update display if showDisplay is true and display element exists
            if (!this.opts.showDisplay || !this.display || !this.selected) {
                if (this.display) this.display.classList.remove('ndp-show');
                return;
            }

            const { year, month, day } = this.selected;
            const ad = bsToAd(year, month, day);

            let val, sub;
            if (this.opts.mode === 'english') {
                val = `${ENG_DAYS[ad.dow]}, ${day} ${ENG_MONTHS[month - 1]} ${year}`;
                sub = `${ad.year}-${String(ad.month).padStart(2, '0')}-${String(ad.day).padStart(2, '0')}`;
            } else {
                val = `${NEP_DAYS_FULL[ad.dow]}, ${toNepali(day)} ${NEP_MONTHS[month - 1]} ${toNepali(year)}`;
                sub = `${ad.year}/${ad.month}/${ad.day} AD`;
            }

            this.display.innerHTML = `
                <div class="ndp-display-label">${this.opts.mode === 'english' ? 'Selected Date' : 'छानिएको मिति'}</div>
                <div class="ndp-display-value">${val}</div>
                <div class="ndp-display-sub">${sub}</div>
            `;
            this.display.classList.add('ndp-show');
        }

        selectToday() {
            const t = getToday();
            this.year = t.year;
            this.month = t.month;
            this.showDaysView();
            this.selectDate(t.year, t.month, t.day);
        }

        clear() {
            this.selected = null;
            this.input.value = '';
            this.renderDays();
            if (this.display) this.display.classList.remove('ndp-show');
            if (this.opts.onChange) this.opts.onChange(null);
        }

        open() {
            if (this.isOpen) return;
            
            closeActivePicker();

            this.isOpen = true;
            this.cal.style.zIndex = ++globalZIndex;
            
            this.position();
            this.cal.classList.add('ndp-open');
            this.showDaysView();
            
            activePickerCalendar = this.cal;

            if (this.opts.onOpen) this.opts.onOpen();
        }

        close() {
            if (!this.isOpen) return;
            
            this.isOpen = false;
            this.cal.classList.remove('ndp-open');
            
            if (activePickerCalendar === this.cal) {
                activePickerCalendar = null;
            }

            if (this.opts.onClose) this.opts.onClose();
        }

        toggle() {
            if (this.isOpen) {
                this.close();
            } else {
                this.open();
            }
        }

        getDate() {
            if (!this.selected) return null;
            return {
                bs: { ...this.selected },
                ad: bsToAd(this.selected.year, this.selected.month, this.selected.day)
            };
        }

        setDate(y, m, d) {
            this.year = y;
            this.month = m;
            this.selectDate(y, m, d);
        }

        setTheme(theme) {
            ['ndp-theme-ocean', 'ndp-theme-forest', 'ndp-theme-sunset', 'ndp-theme-rose'].forEach(cls => {
                this.el.classList.remove(cls);
            });
            if (theme !== 'default') {
                this.el.classList.add(`ndp-theme-${theme}`);
            }
        }

        setDark(dark) {
            this.opts.dark = dark;
            this.el.classList.toggle('ndp-dark', dark);
        }

        destroy() {
            this.el.innerHTML = '';
            this.el.className = '';
        }
    }

    // Static methods
    NepaliDatePicker.init = (el, opts) => new NepaliDatePicker(el, opts);

    NepaliDatePicker.utils = {
        toNepali,
        bsToAd,
        adToBs,
        getToday,
        getDaysInMonth,
        NEP_MONTHS,
        ENG_MONTHS,
        NEP_DAYS,
        ENG_DAYS
    };

    return NepaliDatePicker;
}));