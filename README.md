# नेपाली मिति पिकर (Nepali Date Picker)

![Version](https://img.shields.io/badge/version-2.3.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A beautiful, modern Nepali (Bikram Sambat) date picker with multiple themes, bilingual support, and complete BS/AD conversion.

![Nepali Date Picker Preview](https://via.placeholder.com/800x400/8b5cf6/ffffff?text=Nepali+Date+Picker+Preview)

## ✨ Features

- 🎨 **5 Beautiful Themes** - Default purple, ocean blue, forest green, sunset orange, and rose pink
- 🌙 **Dark Mode** - Built-in dark mode with carefully crafted colors
- 🌏 **Bilingual Support** - Nepali only, English only, or bilingual mode
- 📅 **Month & Year Picker** - Quick jump to any month or year with grid selectors
- 🔄 **BS ⇔ AD Conversion** - Accurate conversion from 2070 to 2099 BS
- ⚡ **Zero Dependencies** - Lightweight vanilla JS. No jQuery needed
- 📱 **Responsive** - Works perfectly on all devices
- 🎯 **Easy to Use** - Simple initialization and configuration

## 📦 Installation

### Option 1: Using CDN (jsDelivr)

The easiest way to get started is using the CDN:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ompandey07/nepali-datepicker@main/dist/nepali-datepicker.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/ompandey07/nepali-datepicker@main/dist/nepali-datepicker.js"></script>
```

### Option 2: Download Files

1. Download the latest release from [GitHub](https://github.com/ompandey07/nepali-datepicker)
2. Copy `nepali-datepicker.css` and `nepali-datepicker.js` to your project
3. Include them in your HTML:

```html
<link rel="stylesheet" href="path/to/nepali-datepicker.css">
<script src="path/to/nepali-datepicker.js"></script>
```

### Option 3: npm (Coming Soon)

```bash
npm install nepali-datepicker
```

## 🚀 Quick Start

### Basic Usage (CDN)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nepali Date Picker Demo</title>
    
    <!-- Include CSS from CDN -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ompandey07/nepali-datepicker@main/dist/nepali-datepicker.css">
</head>
<body>
    <!-- Date Picker Container -->
    <div id="myDatePicker"></div>

    <!-- Include JS from CDN -->
    <script src="https://cdn.jsdelivr.net/gh/ompandey07/nepali-datepicker@main/dist/nepali-datepicker.js"></script>
    
    <!-- Initialize -->
    <script>
        NepaliDatePicker.init('#myDatePicker', {
            mode: 'bilingual',
            theme: 'default'
        });
    </script>
</body>
</html>
```

### Local Files Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Nepali Date Picker - Local</title>
    
    <!-- Include CSS from local -->
    <link rel="stylesheet" href="dist/nepali-datepicker.css">
</head>
<body>
    <div id="datepicker"></div>

    <!-- Include JS from local -->
    <script src="dist/nepali-datepicker.js"></script>
    
    <script>
        NepaliDatePicker.init('#datepicker', {
            mode: 'bilingual',
            theme: 'ocean'
        });
    </script>
</body>
</html>
```

## 🎨 Themes

Choose from 5 beautiful color themes:

```javascript
// Default Purple Theme
NepaliDatePicker.init('#picker', { theme: 'default' });

// Ocean Blue Theme
NepaliDatePicker.init('#picker', { theme: 'ocean' });

// Forest Green Theme
NepaliDatePicker.init('#picker', { theme: 'forest' });

// Sunset Orange Theme
NepaliDatePicker.init('#picker', { theme: 'sunset' });

// Rose Pink Theme
NepaliDatePicker.init('#picker', { theme: 'rose' });
```

### Dark Mode

```javascript
NepaliDatePicker.init('#picker', {
    theme: 'default',
    dark: true
});
```

## 🌐 Display Modes

### Bilingual Mode (Default)
Shows both Nepali and English dates:

```javascript
NepaliDatePicker.init('#picker', {
    mode: 'bilingual'
});
```

### Nepali Only
Shows only Nepali text:

```javascript
NepaliDatePicker.init('#picker', {
    mode: 'nepali'
});
```

### English Only
Shows only English text:

```javascript
NepaliDatePicker.init('#picker', {
    mode: 'english'
});
```

## ⚙️ Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `mode` | String | `'bilingual'` | Display mode: `'bilingual'`, `'nepali'`, or `'english'` |
| `theme` | String | `'default'` | Color theme: `'default'`, `'ocean'`, `'forest'`, `'sunset'`, `'rose'` |
| `dark` | Boolean | `false` | Enable dark mode |
| `minYear` | Number | `2070` | Minimum BS year |
| `maxYear` | Number | `2099` | Maximum BS year |
| `closeOnSelect` | Boolean | `true` | Close calendar after date selection |
| `showToday` | Boolean | `true` | Show "Today" button |
| `showClear` | Boolean | `true` | Show "Clear" button |
| `showClose` | Boolean | `true` | Show "Close" button |
| `showDisplay` | Boolean | `true` | Show selected date display below |
| `placeholder` | String | `'मिति छान्नुहोस्'` | Input placeholder (Nepali) |
| `placeholderEn` | String | `'Select Date'` | Input placeholder (English) |
| `onChange` | Function | `null` | Callback function on date selection |
| `onOpen` | Function | `null` | Callback function on calendar open |
| `onClose` | Function | `null` | Callback function on calendar close |

### Example with All Options

```javascript
const picker = NepaliDatePicker.init('#myPicker', {
    mode: 'bilingual',
    theme: 'ocean',
    dark: false,
    minYear: 2075,
    maxYear: 2090,
    closeOnSelect: true,
    showToday: true,
    showClear: true,
    showClose: true,
    showDisplay: true,
    placeholder: 'मिति छान्नुहोस्',
    placeholderEn: 'Select Date',
    onChange: function(date) {
        console.log('Selected Date:', date);
    },
    onOpen: function() {
        console.log('Calendar opened');
    },
    onClose: function() {
        console.log('Calendar closed');
    }
});
```

## 📚 API Methods

### Get Date

```javascript
const picker = NepaliDatePicker.init('#picker');
const selectedDate = picker.getDate();
// Returns: { bs: { year, month, day }, ad: { year, month, day, dow } }
```

### Set Date

```javascript
picker.setDate(2081, 5, 15); // Sets to 2081/05/15 BS
```

### Open / Close / Toggle

```javascript
picker.open();   // Open the calendar
picker.close();  // Close the calendar
picker.toggle(); // Toggle open/close
```

### Clear Selection

```javascript
picker.clear(); // Clear the selected date
```

### Change Theme

```javascript
picker.setTheme('ocean');  // Change to ocean theme
picker.setDark(true);      // Enable dark mode
```

### Destroy

```javascript
picker.destroy(); // Remove the date picker
```

## 🔧 Utility Functions

### Convert BS to AD

```javascript
const ad = NepaliDatePicker.utils.bsToAd(2081, 5, 15);
console.log(ad); // { year: 2024, month: 8, day: 30, dow: 5 }
```

### Convert AD to BS

```javascript
const bs = NepaliDatePicker.utils.adToBs(2024, 8, 30);
console.log(bs); // { year: 2081, month: 5, day: 15 }
```

### Convert to Nepali Numerals

```javascript
const nepali = NepaliDatePicker.utils.toNepali(2081);
console.log(nepali); // "२०८१"
```

### Get Today's Date

```javascript
const today = NepaliDatePicker.utils.getToday();
console.log(today); // { year: 2081, month: 5, day: 15 }
```

## 💡 Examples

### With onChange Callback

```javascript
NepaliDatePicker.init('#picker', {
    mode: 'bilingual',
    onChange: function(date) {
        if (date) {
            console.log('BS Date:', date.bs);
            console.log('AD Date:', date.ad);
            console.log('Formatted:', date.formatted);
        } else {
            console.log('Date cleared');
        }
    }
});
```

### Multiple Date Pickers

```html
<div id="picker1"></div>
<div id="picker2"></div>
<div id="picker3"></div>

<script>
    // Different themes
    NepaliDatePicker.init('#picker1', { theme: 'default' });
    NepaliDatePicker.init('#picker2', { theme: 'ocean' });
    NepaliDatePicker.init('#picker3', { theme: 'forest', dark: true });
</script>
```

### Form Integration

```html
<form id="myForm">
    <label>Date of Birth:</label>
    <div id="dobPicker"></div>
    
    <button type="submit">Submit</button>
</form>

<script>
    const dobPicker = NepaliDatePicker.init('#dobPicker', {
        mode: 'bilingual',
        maxYear: 2081
    });
    
    document.getElementById('myForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const date = dobPicker.getDate();
        
        if (date) {
            console.log('Submitting DOB:', date);
            // Submit form data
        } else {
            alert('Please select a date');
        }
    });
</script>
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ⚠️ IE 11 (with polyfills)

## ⚠️ Important Notes

- **Calendar Data Range**: Accurate BS data included from 2070 to 2099. Dates outside this range may not convert correctly.
- **Font Dependencies**: The date picker uses Google Fonts (Noto Sans Devanagari and Plus Jakarta Sans). Make sure you have internet connectivity for fonts to load properly.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Om Pandey**
- Website: [omkumarpandey.com.np](https://www.omkumarpandey.com.np/)
- GitHub: [@ompandey07](https://github.com/ompandey07)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped this project grow
- Special thanks to the Nepali developer community

## 📞 Support

If you have any questions or need help, please:
- Open an issue on [GitHub](https://github.com/ompandey07/nepali-datepicker/issues)
- Visit the [documentation site](https://github.com/ompandey07/nepali-datepicker)

---

<div align="center">
Made with ❤️ by <a href="https://www.omkumarpandey.com.np/">Om Pandey</a>
</div>