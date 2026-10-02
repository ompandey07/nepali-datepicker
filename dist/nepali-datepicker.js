/**
 * Nepali Date Picker - New Logic Edition
 * Author: Om Pandey
 * Website: https://www.omkumarpandey.com.np/
 */

(function(global, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        global = typeof globalThis !== 'undefined' ? globalThis : global || self;
        var exportsObj = factory();
        global.NepaliFunctions = exportsObj.NepaliFunctions;
        global.NepaliDatePicker = exportsObj.NepaliDatePicker;
    }
})(this, function() {
    'use strict';

    // =========================================================================
    // NepaliFunctions Core Library
    // =========================================================================
    var NepaliFunctions = (function() {
        var availableFormats = ["YYYY-MM-DD", "YYYY/MM/DD", "YYYY.MM.DD", "DD-MM-YYYY", "DD/MM/YYYY", "DD.MM.YYYY", "MM-DD-YYYY", "MM/DD/YYYY"];
        var defaultBsFormat = "YYYY-MM-DD";
        var defaultAdFormat = "MM/DD/YYYY";
        var typeAd = "AD";

        function getBsCalendarData() {
            var data = [];
            var refBs = { year: 2000, month: 9, day: 17 };
            var refAd = { year: 1944, month: 1, day: 1 };

            data[1970] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[1971] = [31,31,32,31,32,30,30,29,30,29,30,30];
            data[1972] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[1973] = [30,32,31,32,31,30,30,30,29,30,29,31];
            data[1974] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[1975] = [31,31,32,32,31,30,30,29,30,29,30,30];
            data[1976] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[1977] = [30,32,31,32,31,31,29,30,29,30,29,31];
            data[1978] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[1979] = [31,31,32,32,31,30,30,29,30,29,30,30];
            data[1980] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[1981] = [31,31,31,32,31,31,29,30,30,29,30,30];
            data[1982] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[1983] = [31,31,32,32,31,30,30,29,30,29,30,30];
            data[1984] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[1985] = [31,31,31,32,31,31,29,30,30,29,30,30];
            data[1986] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[1987] = [31,32,31,32,31,30,30,29,30,29,30,30];
            data[1988] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[1989] = [31,31,31,32,31,31,30,29,30,29,30,30];
            data[1990] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[1991] = [31,32,31,32,31,30,30,30,29,29,30,30];
            data[1992] = [31,32,31,32,31,30,30,30,29,30,29,31];
            data[1993] = [31,31,31,32,31,31,30,29,30,29,30,30];
            data[1994] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[1995] = [31,32,31,32,31,30,30,30,29,29,30,30];
            data[1996] = [31,32,31,32,31,30,30,30,29,30,29,31];
            data[1997] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[1998] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[1999] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[2000] = [30,32,31,32,31,30,30,30,29,30,29,31];
            data[2001] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2002] = [31,31,32,32,31,30,30,29,30,29,30,30];
            data[2003] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[2004] = [30,32,31,32,31,30,30,30,29,30,29,31];
            data[2005] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2006] = [31,31,32,32,31,30,30,29,30,29,30,30];
            data[2007] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[2008] = [31,31,31,32,31,31,29,30,30,29,29,31];
            data[2009] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2010] = [31,31,32,32,31,30,30,29,30,29,30,30];
            data[2011] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[2012] = [31,31,31,32,31,31,29,30,30,29,30,30];
            data[2013] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2014] = [31,31,32,32,31,30,30,29,30,29,30,30];
            data[2015] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[2016] = [31,31,31,32,31,31,29,30,30,29,30,30];
            data[2017] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2018] = [31,32,31,32,31,30,30,29,30,29,30,30];
            data[2019] = [31,32,31,32,31,30,30,30,29,30,29,31];
            data[2020] = [31,31,31,32,31,31,30,29,30,29,30,30];
            data[2021] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2022] = [31,32,31,32,31,30,30,30,29,29,30,30];
            data[2023] = [31,32,31,32,31,30,30,30,29,30,29,31];
            data[2024] = [31,31,31,32,31,31,30,29,30,29,30,30];
            data[2025] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2026] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[2027] = [30,32,31,32,31,30,30,30,29,30,29,31];
            data[2028] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2029] = [31,31,32,31,32,30,30,29,30,29,30,30];
            data[2030] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[2031] = [30,32,31,32,31,30,30,30,29,30,29,31];
            data[2032] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2033] = [31,31,32,32,31,30,30,29,30,29,30,30];
            data[2034] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[2035] = [30,32,31,32,31,31,29,30,30,29,29,31];
            data[2036] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2037] = [31,31,32,32,31,30,30,29,30,29,30,30];
            data[2038] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[2039] = [31,31,31,32,31,31,29,30,30,29,30,30];
            data[2040] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2041] = [31,31,32,32,31,30,30,29,30,29,30,30];
            data[2042] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[2043] = [31,31,31,32,31,31,29,30,30,29,30,30];
            data[2044] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2045] = [31,32,31,32,31,30,30,29,30,29,30,30];
            data[2046] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[2047] = [31,31,31,32,31,31,30,29,30,29,30,30];
            data[2048] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2049] = [31,32,31,32,31,30,30,30,29,29,30,30];
            data[2050] = [31,32,31,32,31,30,30,30,29,30,29,31];
            data[2051] = [31,31,31,32,31,31,30,29,30,29,30,30];
            data[2052] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2053] = [31,32,31,32,31,30,30,30,29,29,30,30];
            data[2054] = [31,32,31,32,31,30,30,30,29,30,29,31];
            data[2055] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2056] = [31,31,32,31,32,30,30,29,30,29,30,30];
            data[2057] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[2058] = [30,32,31,32,31,30,30,30,29,30,29,31];
            data[2059] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2060] = [31,31,32,32,31,30,30,29,30,29,30,30];
            data[2061] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[2062] = [30,32,31,32,31,31,29,30,29,30,29,31];
            data[2063] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2064] = [31,31,32,32,31,30,30,29,30,29,30,30];
            data[2065] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[2066] = [31,31,31,32,31,31,29,30,30,29,29,31];
            data[2067] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2068] = [31,31,32,32,31,30,30,29,30,29,30,30];
            data[2069] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[2070] = [31,31,31,32,31,31,29,30,30,29,30,30];
            data[2071] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2072] = [31,32,31,32,31,30,30,29,30,29,30,30];
            data[2073] = [31,32,31,32,31,30,30,30,29,29,30,31];
            data[2074] = [31,31,31,32,31,31,30,29,30,29,30,30];
            data[2075] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2076] = [31,32,31,32,31,30,30,30,29,29,30,30];
            data[2077] = [31,32,31,32,31,30,30,30,29,30,29,31];
            data[2078] = [31,31,31,32,31,31,30,29,30,29,30,30];
            data[2079] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2080] = [31,32,31,32,31,30,30,30,29,29,30,30];
            data[2081] = [31,32,31,32,31,30,30,30,29,30,29,31];
            data[2082] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2083] = [31,31,32,31,31,31,30,29,30,29,30,30];
            data[2084] = [31,31,32,31,31,30,30,30,29,30,30,30];
            data[2085] = [31,32,31,32,30,31,30,30,29,30,30,30];
            data[2086] = [30,32,31,32,31,30,30,30,29,30,30,30];
            data[2087] = [31,31,32,31,31,31,30,30,29,30,30,30];
            data[2088] = [30,31,32,32,30,31,30,30,29,30,30,30];
            data[2089] = [30,32,31,32,31,30,30,30,29,30,30,30];
            data[2090] = [30,32,31,32,31,30,30,30,29,30,30,30];
            data[2091] = [31,31,32,31,31,31,30,30,29,30,30,30];
            data[2092] = [30,31,32,32,31,30,30,30,29,30,30,30];
            data[2093] = [30,32,31,32,31,30,30,30,29,30,30,30];
            data[2094] = [31,31,32,31,31,30,30,30,29,30,30,30];
            data[2095] = [31,31,32,31,31,31,30,29,30,30,30,30];
            data[2096] = [30,31,32,32,31,30,30,29,30,29,30,30];
            data[2097] = [31,32,31,32,31,30,30,30,29,30,30,30];
            data[2098] = [31,31,32,31,31,31,29,30,29,30,29,31];
            data[2099] = [31,31,32,31,31,31,30,29,29,30,30,30];
            data[2100] = [31,32,31,32,30,31,30,29,30,29,30,30];

            var minBsDate = { year: 1970, month: 1, day: 1 };
            var maxBsDate = { year: 2100, month: 12, day: 30 };

            function sumArray(arr) {
                var total = 0;
                arr.forEach(function(val) { total += val; });
                return total;
            }

            function countAdDays(d1, d2) {
                var utc1 = Date.UTC(d1.year, d1.month - 1, d1.day);
                var utc2 = Date.UTC(d2.year, d2.month - 1, d2.day);
                return Math.abs((utc2 - utc1) / 864e5);
            }

            function countBsDays(d1, d2) {
                var days = 0, y;
                for (y = d1.year; y <= d2.year; y++) days += sumArray(data[y]);
                for (var m = 0; m < d1.month; m++) days -= data[d1.year][m];
                days += data[d1.year][11];
                for (var m = d2.month - 1; m < 12; m++) days -= data[d2.year][m];
                days -= (d1.day + 1);
                days += (d2.day - 1);
                return days;
            }

            function addAdDays(d, count) {
                var date = new Date(formatDateObj(d, defaultAdFormat));
                date.setDate(date.getDate() + count);
                return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
            }

            function addBsDays(d, count) {
                d.day += count;
                while (d.day > data[d.year][d.month - 1]) {
                    d.day -= data[d.year][d.month - 1];
                    d.month += 1;
                    if (d.month > 12) {
                        d.month = 1;
                        d.year += 1;
                    }
                }
                return { year: d.year, month: d.month, day: d.day };
            }

            return {
                minDate: function() { return minBsDate; },
                maxDate: function() { return maxBsDate; },
                countAdDays: countAdDays,
                countBsDays: countBsDays,
                addBsDays: addBsDays,
                addAdDays: addAdDays,
                bs2ad: function(bsObj) {
                    var days = countBsDays(refBs, bsObj);
                    return addAdDays(refAd, days);
                },
                ad2bs: function(adObj) {
                    var days = countAdDays(refAd, adObj);
                    return addBsDays(refBs, days);
                },
                getDaysInMonth: function(y, m) { return data[y] ? data[y][m - 1] : 30; }
            };
        }

        function extractDateObject(inputDate, format, type) {
            var dateObj, fmt = defaultBsFormat;
            if (type === typeAd) {
                fmt = defaultAdFormat;
                if ("[object Date]" === Object.prototype.toString.call(inputDate)) {
                    var dt = inputDate;
                    inputDate = { year: dt.getFullYear(), month: dt.getMonth() + 1, day: dt.getDate() };
                    format = defaultAdFormat;
                }
            }
            if (typeof inputDate === "object" && inputDate && inputDate.year && inputDate.month && inputDate.day) {
                dateObj = inputDate;
            } else {
                dateObj = parseDateString(inputDate, isValidFormat(format) ? format : fmt);
            }
            return { dateObject: dateObj, dateFormat: format };
        }

        function isValidFormat(fmt) {
            return availableFormats.indexOf(fmt) > -1;
        }

        function ad2bs(adInput, format, outputFormat) {
            var extracted = extractDateObject(adInput, format, typeAd);
            var dateObj = extracted.dateObject;
            var fmt = extracted.dateFormat;
            if (!dateObj) return null;
            var bsObj = getBsCalendarData().ad2bs(dateObj);
            return fmt ? formatDateObj(bsObj, isValidFormat(outputFormat) ? outputFormat : defaultBsFormat) : bsObj;
        }

        function bs2ad(bsInput, format, outputFormat) {
            var extracted = extractDateObject(bsInput, format);
            var dateObj = extracted.dateObject;
            var fmt = extracted.dateFormat;
            if (!dateObj) return null;
            var adObj = getBsCalendarData().bs2ad(dateObj);
            return fmt ? formatDateObj(adObj, isValidFormat(outputFormat) ? outputFormat : defaultAdFormat) : adObj;
        }

        function formatDateObj(obj, format) {
            format = format && availableFormats.indexOf(format) > -1 ? format : defaultBsFormat;
            var y = obj.year;
            var m = String(obj.month).padStart(2, "0");
            var d = String(obj.day).padStart(2, "0");
            return format.replace("YYYY", y).replace("MM", m).replace("DD", d);
        }

        function parseDateString(str, format) {
            if (!str || !format) return null;
            var parts = [];
            var res = { year: null, month: null, day: null };
            switch (format) {
                case "MM/DD/YYYY":
                    parts = str.split("/");
                    if (parts.length === 3) res = { year: Number(parts[2]), month: Number(parts[0]), day: Number(parts[1]) };
                    break;
                case "MM-DD-YYYY":
                    parts = str.split("-");
                    if (parts.length === 3) res = { year: Number(parts[2]), month: Number(parts[0]), day: Number(parts[1]) };
                    break;
                case "YYYY-MM-DD":
                    parts = str.split("-");
                    if (parts.length === 3) res = { year: Number(parts[0]), month: Number(parts[1]), day: Number(parts[2]) };
                    break;
                case "YYYY/MM/DD":
                    parts = str.split("/");
                    if (parts.length === 3) res = { year: Number(parts[0]), month: Number(parts[1]), day: Number(parts[2]) };
                    break;
                case "YYYY.MM.DD":
                    parts = str.split(".");
                    if (parts.length === 3) res = { year: Number(parts[0]), month: Number(parts[1]), day: Number(parts[2]) };
                    break;
                case "DD-MM-YYYY":
                    parts = str.split("-");
                    if (parts.length === 3) res = { year: Number(parts[2]), month: Number(parts[1]), day: Number(parts[0]) };
                    break;
                case "DD/MM/YYYY":
                    parts = str.split("/");
                    if (parts.length === 3) res = { year: Number(parts[2]), month: Number(parts[1]), day: Number(parts[0]) };
                    break;
                case "DD.MM.YYYY":
                    parts = str.split(".");
                    if (parts.length === 3) res = { year: Number(parts[2]), month: Number(parts[1]), day: Number(parts[0]) };
                    break;
            }
            return (res && res.year && res.month && res.day) ? res : null;
        }

        function convertToUnicode(num) {
            var map = { 0: "०", 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९" };
            num = num.toString();
            var out = "";
            for (var i = 0; i < num.length; i++) {
                out += map[num[i]] || num[i];
            }
            return out;
        }

        function convertToNumber(unicodeStr) {
            var map = { "०": "0", "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9" };
            unicodeStr = unicodeStr.toString();
            var out = "";
            for (var i = 0; i < unicodeStr.length; i++) {
                out += map[unicodeStr[i]] || unicodeStr[i];
            }
            return out;
        }

        function getAdCurrentDate(format) {
            var date = new Date();
            date.setHours(date.getHours() + 5);
            date.setMinutes(date.getMinutes() + 45);
            var obj = { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() };
            return format ? formatDateObj(obj, isValidFormat(format) ? format : defaultAdFormat) : obj;
        }

        function getBsCurrentDate(format) {
            var bsObj = ad2bs(getAdCurrentDate());
            return format ? formatDateObj(bsObj, isValidFormat(format) ? format : defaultBsFormat) : bsObj;
        }

        function getAdDays() { return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; }
        function getAdDaysShort() { return ["S", "M", "T", "W", "T", "F", "S"]; }
        function getAdMonths() { return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; }

        function getBsMonths() { return ["Baisakh", "Jestha", "Ashar", "Shrawan", "Bhadra", "Ashoj", "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"]; }
        function getBsMonthsUnicode() { return ["वैशाख", "जेठ", "असार", "श्रावण", "भाद्र", "आश्विन", "कार्तिक", "मंसिर", "पौष", "माघ", "फाल्गुन", "चैत्र"]; }
        function getBsDaysUnicode() { return ["आइतबार", "सोमबार", "मङ्गलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"]; }
        function getBsDaysUnicodeShort() { return ["आ", "सो", "मं", "बु", "बि", "शु", "श"]; }

        function validateBsDate(bsObj, format) {
            var extracted = extractDateObject(bsObj, format);
            var obj = extracted.dateObject;
            if (!obj) return false;
            var cal = getBsCalendarData();
            var min = cal.minDate();
            var max = cal.maxDate();
            var val = obj.day + 100 * obj.month + 10000 * obj.year;
            var minVal = min.day + 100 * min.month + 10000 * min.year;
            var maxVal = max.day + 100 * max.month + 10000 * max.year;
            if (val > maxVal || val < minVal) return false;
            var daysInMonth = cal.getDaysInMonth(obj.year, obj.month);
            return obj.month > 0 && obj.month <= 12 && obj.day > 0 && obj.day <= daysInMonth;
        }

        function getDaysInBsMonth(y, m) {
            var cal = getBsCalendarData();
            var min = cal.minDate();
            var max = cal.maxDate();
            if ((y < min.year || y > max.year) && (m < min.month || m > max.month)) return 0;
            return cal.getDaysInMonth(y, m);
        }

        function compareBsDates(d1, d2, format, op) {
            var ext1 = extractDateObject(d1, format);
            var ext2 = extractDateObject(d2, format);
            var obj1 = ext1.dateObject;
            var obj2 = ext2.dateObject;
            if (!obj1 || !obj2) return null;
            var t1, t2;
            if (validateBsDate(obj1) && validateBsDate(obj2)) {
                var ad1 = bs2ad(obj1);
                var ad2 = bs2ad(obj2);
                t1 = new Date(ad1.year, ad1.month - 1, ad1.day).getTime();
                t2 = new Date(ad2.year, ad2.month - 1, ad2.day).getTime();
            } else {
                t1 = 10000 * obj1.year + 100 * obj1.month + obj1.day;
                t2 = 10000 * obj2.year + 100 * obj2.month + obj2.day;
            }
            switch (op) {
                case "==": return t1 === t2;
                case ">":  return t1 > t2;
                case ">=": return t1 >= t2;
                case "<":  return t1 < t2;
                case "<=": return t1 <= t2;
            }
            return false;
        }

        return {
            AvailableFormats: availableFormats,
            IsValidDateFormat: isValidFormat,
            Get2DigitNo: function(val) { return String(val).padStart(2, "0"); },
            ConvertToDateObject: parseDateString,
            ConvertToDateFormat: formatDateObj,
            AD2BS: ad2bs,
            BS2AD: bs2ad,
            ConvertToUnicode: convertToUnicode,
            ConvertToNumber: convertToNumber,
            DefaultBsDateFormat: defaultBsFormat,
            DefaultAdDateFormat: defaultAdFormat,
            AD: {
                GetCurrentDate: getAdCurrentDate,
                GetCurrentYear: function() { return Number(getAdCurrentDate().year); },
                GetCurrentMonth: function() { return Number(getAdCurrentDate().month); },
                GetCurrentDay: function() { return Number(getAdCurrentDate().day); },
                GetMonths: getAdMonths,
                GetMonth: function(idx) { return getAdMonths()[Number(idx)] || null; },
                GetDays: getAdDays,
                GetDay: function(idx) { return getAdDays()[Number(idx)] || null; },
                GetDaysShort: getAdDaysShort,
                GetDayShort: function(idx) { return getAdDaysShort()[Number(idx)] || null; },
                GetDaysInMonth: function(y, m) { return new Date(y, m, 0).getDate(); }
            },
            BS: {
                ValidateDate: validateBsDate,
                GetCurrentDate: getBsCurrentDate,
                GetCurrentYear: function() { return Number(getBsCurrentDate().year); },
                GetCurrentMonth: function() { return Number(getBsCurrentDate().month); },
                GetCurrentDay: function() { return Number(getBsCurrentDate().day); },
                GetMonths: getBsMonths,
                GetMonth: function(idx) { return getBsMonths()[Number(idx)] || null; },
                GetMonthsInUnicode: getBsMonthsUnicode,
                GetMonthInUnicode: function(idx) { return getBsMonthsUnicode()[Number(idx)] || null; },
                GetDaysUnicode: getBsDaysUnicode,
                GetDayUnicode: function(idx) { return getBsDaysUnicode()[Number(idx)] || null; },
                GetDaysUnicodeShort: getBsDaysUnicodeShort,
                GetDayUnicodeShort: function(idx) { return getBsDaysUnicodeShort()[Number(idx)] || null; },
                GetFullDay: function(bsObj, format) {
                    var ext = extractDateObject(bsObj, format);
                    if (!ext.dateObject) return null;
                    var ad = bs2ad(ext.dateObject);
                    return getAdDays()[new Date(ad.year, ad.month - 1, ad.day).getDay()];
                },
                GetDaysInMonth: getDaysInBsMonth,
                AddDays: function(bsObj, days, format) {
                    var ext = extractDateObject(bsObj, format);
                    if (!ext.dateObject) return null;
                    var ad = bs2ad(ext.dateObject);
                    var date = new Date(ad.year, ad.month - 1, ad.day);
                    date.setDate(date.getDate() + days);
                    var newAd = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
                    var newBs = ad2bs(newAd);
                    return format ? formatDateObj(newBs, format) : newBs;
                },
                IsEqualTo: function(d1, d2, fmt) { return compareBsDates(d1, d2, fmt, "=="); },
                IsGreaterThan: function(d1, d2, fmt) { return compareBsDates(d1, d2, fmt, ">"); },
                IsLessThan: function(d1, d2, fmt) { return compareBsDates(d1, d2, fmt, "<"); },
                IsGreaterThanOrEqualTo: function(d1, d2, fmt) { return compareBsDates(d1, d2, fmt, ">="); },
                IsLessThanOrEqualTo: function(d1, d2, fmt) { return compareBsDates(d1, d2, fmt, "<="); },
                MinimumDate: function() { return getBsCalendarData().minDate(); },
                MaximumDate: function() { return getBsCalendarData().maxDate(); }
            }
        };
    })();

    // =========================================================================
    // NepaliDatePicker Class & Engine
    // =========================================================================
    class NepaliDatePicker {
        constructor(element, options = {}) {
            if (options === "destroy") {
                this.destroy(element);
                return;
            }

            if (typeof element === 'string') {
                element = document.querySelector(element);
            }

            if (!element) {
                console.error("NepaliDatePicker: Element not found");
                return;
            }

            // Auto-create input inside container element if target is div and not inline
            if (element.tagName !== "INPUT" && !options.inline) {
                let inputField = element.querySelector("input.ndp-input");
                if (!inputField) {
                    inputField = document.createElement("input");
                    inputField.type = "text";
                    inputField.className = "ndp-input";
                    const placeholder = options.language === "english" ? (options.placeholderEn || "Select Date") : (options.placeholder || "मिति छान्नुहोस्");
                    inputField.placeholder = placeholder;
                    element.innerHTML = "";
                    element.appendChild(inputField);
                }
                this.inputElement = inputField;
            } else {
                this.inputElement = element;
            }

            this.defaultDateFormat = "YYYY-MM-DD";
            this.isInputValue = false;
            this.animations = ["fade", "slide"];
            this.range = [];

            this.options = Object.assign({
                debug: false,
                dateFormat: this.defaultDateFormat,
                minDate: NepaliFunctions.BS.MinimumDate(),
                maxDate: NepaliFunctions.BS.MaximumDate(),
                onSelect: null,
                onClose: null,
                multiple: false,
                range: false,
                animation: "fade",
                language: "nepali",
                disableDates: [],
                disableToday: false,
                disableDaysBefore: 0,
                disableDaysAfter: 0,
                mode: "light",
                theme: "default",
                unicodeDate: false,
                inline: false,
                container: "body",
                miniEnglishDates: false,
                value: null
            }, options);

            // Backwards-compatibility for mode/dark flag
            if (options.dark === true || options.mode === "dark") {
                this.options.mode = "dark";
            }

            this.yearsPerPage = 12;
            this.currentBsDate = NepaliFunctions.BS.GetCurrentDate();
            this.currentDate = {};
            this.selectedDates = [];
            this.datePickerDiv = null;

            if (!NepaliFunctions.IsValidDateFormat(this.options.dateFormat)) {
                this.options.dateFormat = this.defaultDateFormat;
            }

            if (this.options.disableDates.length > 0) {
                this.options.disableDates = this.options.disableDates.map(d => {
                    if (NepaliFunctions.BS.ValidateDate(d)) {
                        return typeof d === "object" ? d : NepaliFunctions.ConvertToDateObject(d, this.options.dateFormat);
                    }
                }).filter(Boolean);
            }

            if (this.options.disableDaysBefore > 0) {
                var minLimit = NepaliFunctions.BS.AddDays(this.currentBsDate, -this.options.disableDaysBefore);
                if (NepaliFunctions.BS.IsGreaterThan(minLimit, this.options.minDate)) {
                    this.options.minDate = minLimit;
                }
            }

            if (this.options.disableDaysAfter > 0) {
                var maxLimit = NepaliFunctions.BS.AddDays(this.currentBsDate, this.options.disableDaysAfter);
                if (NepaliFunctions.BS.IsLessThan(maxLimit, this.options.maxDate)) {
                    this.options.maxDate = maxLimit;
                }
            }

            this.init();
        }

        cloneObject(obj) {
            return JSON.parse(JSON.stringify(obj));
        }

        init() {
            if (this.options.inline) {
                this.datePickerDiv = document.createElement("div");
                var themeClass = (this.options.theme && this.options.theme !== "default") ? ` ndp-theme-${this.options.theme}` : "";
                this.datePickerDiv.className = `ndp-container ndp-${this.options.mode} ndp-inline${themeClass}`;
                this.datePickerDiv.setAttribute("role", "dialog");
                this.datePickerDiv.setAttribute("aria-label", "Date Picker");
                this.isInputValue = true;
                this.currentDate = this.cloneObject(this.currentBsDate);
                this.currentYearView = this.currentDate.year;
                this.currentMonthView = this.currentDate.month;
                this.currentYearRange = this.calculateYearRange(this.currentDate.year);
                this.renderCalendar();
                this.inputElement.appendChild(this.datePickerDiv);
            } else {
                if (this.options.value) {
                    this.inputElement.value = this.options.value;
                    var datesArr = [NepaliFunctions.ConvertToDateObject(this.options.value.trim(), this.options.dateFormat)];
                    if (this.options.value.indexOf(",") > -1) {
                        datesArr = this.options.value.split(",").map(s => NepaliFunctions.ConvertToDateObject(s.trim(), this.options.dateFormat));
                    }
                    if (this.options.value.indexOf(" - ") > -1) {
                        datesArr = this.options.value.split(" - ").map(s => NepaliFunctions.ConvertToDateObject(s.trim(), this.options.dateFormat));
                    }
                    this.selectedDates = datesArr.filter(Boolean);
                }

                this.handleFocusRef = this.handleFocus.bind(this);
                this.handleBlurRef = this.handleBlur.bind(this);
                this.handleMouseDownRef = this.handleMouseDown.bind(this);

                this.inputElement.addEventListener("focus", this.handleFocusRef);
                this.inputElement.addEventListener("click", this.handleFocusRef);
                this.inputElement.addEventListener("blur", this.handleBlurRef);
                this.inputElement.setAttribute("aria-haspopup", "true");
                this.inputElement.setAttribute("aria-expanded", "false");
                document.addEventListener("mousedown", this.handleMouseDownRef);

                this.inputElement._ndpHandlers = {
                    focus: this.handleFocusRef,
                    blur: this.handleBlurRef,
                    mousedown: this.handleMouseDownRef
                };
            }
        }

        handleFocus = (e) => this.showDatePicker();

        handleBlur = (e) => {
            const active = document.activeElement;
            if (this.datePickerDiv && (this.datePickerDiv.contains(active) || active === this.inputElement)) {
                return;
            }
            this.hideDatePicker();
        };

        handleMouseDown = (e) => {
            if (this.datePickerDiv && this.datePickerDiv.contains(e.target)) {
                e.preventDefault();
            }
        };

        showDatePicker() {
            if (this.datePickerDiv) return;
            let val = this.inputElement.value;
            if (val) {
                if (this.options.unicodeDate) {
                    val = NepaliFunctions.ConvertToNumber(val);
                }
                if (this.options.multiple || this.options.range) {
                    var sep = ",";
                    if (this.options.range) sep = " - ";
                    this.selectedDates = val.split(sep).map(s => NepaliFunctions.ConvertToDateObject(s.trim(), this.options.dateFormat)).filter(Boolean);
                    if (this.selectedDates.length > 0) {
                        this.currentDate = this.selectedDates[0];
                        this.isInputValue = true;
                    } else {
                        this.currentDate = this.cloneObject(this.options.minDate);
                        this.isInputValue = false;
                    }
                } else {
                    const parsed = NepaliFunctions.ConvertToDateObject(val, this.options.dateFormat);
                    if (parsed) {
                        this.currentDate = parsed;
                        this.isInputValue = true;
                    } else {
                        if (NepaliFunctions.BS.IsGreaterThan(this.currentBsDate, this.options.minDate) && NepaliFunctions.BS.IsLessThan(this.currentBsDate, this.options.maxDate)) {
                            this.currentDate = this.cloneObject(this.currentBsDate);
                        } else {
                            this.currentDate = this.cloneObject(this.options.minDate);
                        }
                        this.isInputValue = false;
                    }
                }
            } else {
                this.currentDate = this.cloneObject(this.currentBsDate);
                this.isInputValue = false;
            }

            this.currentYearView = this.currentDate.year;
            this.currentMonthView = this.currentDate.month;
            this.currentYearRange = this.calculateYearRange(this.currentDate.year);
            this.datePickerDiv = document.createElement("div");

            var themeClass = (this.options.theme && this.options.theme !== "default") ? ` ndp-theme-${this.options.theme}` : "";
            this.datePickerDiv.className = `ndp-container ndp-${this.options.mode}${themeClass}`;
            this.datePickerDiv.setAttribute("role", "dialog");
            this.datePickerDiv.setAttribute("aria-label", "Date Picker");

            if (this.options.animation === "fade") {
                this.datePickerDiv.classList.add("fade");
            } else if (this.options.animation === "slide") {
                this.datePickerDiv.classList.add("slide");
            }

            this.renderCalendar();
            const containerEl = document.querySelector(this.options.container) || document.body;
            containerEl.appendChild(this.datePickerDiv);
            this.positionDatePicker();
            this.inputElement.setAttribute("aria-expanded", "true");

            setTimeout(() => {
                if (this.animations.indexOf(this.options.animation) > -1) {
                    this.datePickerDiv.classList.add("in");
                }
            }, 0);
        }

        hideDatePicker() {
            if (this.options.debug || !this.datePickerDiv) return;
            this.inputElement.setAttribute("aria-expanded", "false");
            if (this.animations.indexOf(this.options.animation) > -1) {
                this.datePickerDiv.classList.remove("in");
                setTimeout(() => {
                    if (this.datePickerDiv) {
                        this.datePickerDiv.remove();
                        this.datePickerDiv = null;
                    }
                    this.handleClose();
                }, 300);
            } else {
                this.datePickerDiv.remove();
                this.datePickerDiv = null;
                this.handleClose();
            }
        }

        handleClose() {
            if (typeof this.options.onClose === "function") {
                if (!this.datePickerDiv) {
                    this.inputElement.blur();
                    setTimeout(() => {
                        this.options.onClose(this.selectedDates);
                    }, 0);
                }
            }
            this.inputElement.blur();
        }

        positionDatePicker() {
            var el = this.inputElement;
            var pos = this.getPosition(el);
            var spaceAbove = this.getSpaceAbove(pos);
            var spaceBelow = this.getSpaceBelow(el, pos);
            var picker = this.datePickerDiv;
            if (!picker) return;
            var h = picker.offsetHeight;
            var top = pos.y + el.offsetHeight + 2;

            if (spaceBelow < h && spaceBelow < spaceAbove) {
                top = pos.y - h - 4;
            }
            picker.style.top = top + "px";
            picker.style.left = pos.x + "px";
        }

        getPosition(el) {
            if (this.options.container !== "body") {
                var rect = el.getBoundingClientRect();
                return { x: rect.x, y: rect.y };
            }
            return {
                x: this.getOffsetLeft(el),
                y: this.getOffsetTop(el)
            };
        }

        getOffsetLeft(el) {
            var x = 0;
            while (el) {
                x += el.offsetLeft;
                el = el.offsetParent;
            }
            return x + (document.firstChild.offsetLeft || 0);
        }

        getOffsetTop(el) {
            var y = 0;
            while (el) {
                y += el.offsetTop;
                el = el.offsetParent;
            }
            return y + (document.firstChild.offsetTop || 0);
        }

        getSpaceAbove(pos) {
            var scroll = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
            return pos.y - scroll;
        }

        getSpaceBelow(el, pos) {
            var scroll = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
            return window.innerHeight - pos.y - el.offsetHeight + scroll;
        }

        renderCalendar() {
            if (!this.datePickerDiv) return;
            this.datePickerDiv.innerHTML = "";
            const header = this.createCalendarHeader();
            const body = this.createCalendarBody();
            this.datePickerDiv.appendChild(header);
            this.datePickerDiv.appendChild(body);
        }

        getNavigationButton(dir) {
            const btn = document.createElement("a");
            btn.className = "ndc-nav-button";
            btn.href = "javascript:void(0);";
            const icon = document.createElement("span");
            icon.className = `ndc-chevron ndc-${dir}`;
            btn.appendChild(icon);
            return btn;
        }

        createCalendarHeader(viewType = "calendar") {
            const headerDiv = document.createElement("div");
            headerDiv.className = "ndp-header";
            if (viewType === "year" && !this.currentYearRange) {
                this.currentYearRange = this.calculateYearRange(this.currentYearView);
            }

            const prevBtn = this.getNavigationButton("left");
            let prevMonth = this.addMonth(this.currentYearView, this.currentMonthView, -1);

            if (viewType === "calendar") {
                prevBtn.disabled = (100 * prevMonth.year + prevMonth.month) < (100 * this.options.minDate.year + this.options.minDate.month);
            } else if (viewType === "month") {
                prevBtn.disabled = this.currentYearView <= this.options.minDate.year;
            } else if (viewType === "year") {
                prevBtn.disabled = this.currentYearRange.start <= this.options.minDate.year;
            }

            if (prevBtn.disabled) {
                prevBtn.classList.add("ndp-disabled");
                prevBtn.setAttribute("aria-disabled", "true");
            } else {
                prevBtn.addEventListener("click", (e) => {
                    if (prevBtn.disabled) {
                        e.preventDefault();
                        e.stopPropagation();
                        return;
                    }
                    if (viewType === "calendar") this.changeMonth(-1);
                    else if (viewType === "month") this.changeYear(-1);
                    else if (viewType === "year") this.changeYearGroup(-1);
                });
            }

            const titleLink = document.createElement("a");
            titleLink.className = "ndp-header-link";
            const displaySpan = document.createElement("span");
            displaySpan.className = "ndp-header-display";
            const englishSpan = document.createElement("span");
            englishSpan.className = "ndp-header-display-english";
            englishSpan.innerHTML = this.getEnglishMonthYear(this.currentYearView, this.currentMonthView);

            let monthName = this.options.language === "english"
                ? NepaliFunctions.BS.GetMonth(this.currentMonthView - 1)
                : NepaliFunctions.BS.GetMonthInUnicode(this.currentMonthView - 1);

            let yearStr = this.options.language === "english"
                ? this.currentYearView
                : NepaliFunctions.ConvertToUnicode(this.currentYearView);

            if (viewType === "calendar") {
                displaySpan.innerHTML = `${monthName} ${yearStr}`;
                titleLink.addEventListener("click", () => this.showMonthSelection(this.currentYearView));
            } else if (viewType === "month") {
                displaySpan.innerHTML = `${yearStr}`;
                titleLink.addEventListener("click", () => this.showYearSelection());
            } else if (viewType === "year") {
                if (!this.currentYearRange) {
                    this.currentYearRange = this.calculateYearRange(this.currentYearView);
                }
                let startStr = this.options.language === "english" ? this.currentYearRange.start : NepaliFunctions.ConvertToUnicode(this.currentYearRange.start);
                let endStr = this.options.language === "english" ? this.currentYearRange.end : NepaliFunctions.ConvertToUnicode(this.currentYearRange.end);
                displaySpan.innerHTML = `${startStr} - ${endStr}`;
                titleLink.addEventListener("click", () => this.renderCalendar());
            }

            titleLink.appendChild(displaySpan);
            if (this.options.miniEnglishDates && viewType === "calendar") {
                titleLink.appendChild(englishSpan);
            }

            const nextBtn = this.getNavigationButton("right");
            let nextMonth = this.addMonth(this.currentYearView, this.currentMonthView, 1);

            if (viewType === "calendar") {
                nextBtn.disabled = (100 * nextMonth.year + nextMonth.month) > (100 * this.options.maxDate.year + this.options.maxDate.month);
            } else if (viewType === "month") {
                nextBtn.disabled = this.currentYearView >= this.options.maxDate.year;
            } else if (viewType === "year") {
                nextBtn.disabled = this.currentYearRange.end >= this.options.maxDate.year;
            }

            if (nextBtn.disabled) {
                nextBtn.classList.add("ndp-disabled");
                nextBtn.setAttribute("aria-disabled", "true");
            } else {
                nextBtn.addEventListener("click", (e) => {
                    if (nextBtn.disabled) {
                        e.preventDefault();
                        e.stopPropagation();
                        return;
                    }
                    if (viewType === "calendar") this.changeMonth(1);
                    else if (viewType === "month") this.changeYear(1);
                    else if (viewType === "year") this.changeYearGroup(1);
                });
            }

            headerDiv.appendChild(prevBtn);
            headerDiv.appendChild(titleLink);
            headerDiv.appendChild(nextBtn);
            return headerDiv;
        }

        showYearSelection() {
            if (!this.datePickerDiv) return;
            this.datePickerDiv.innerHTML = "";
            const header = this.createCalendarHeader("year");
            const div = document.createElement("div");
            div.className = "ndp-year-selection";
            this.currentYearRange = this.calculateYearRange(this.currentDate.year);
            this.renderYearButtons(div, this.currentYearRange.start, this.currentYearRange.end);
            this.datePickerDiv.appendChild(header);
            this.datePickerDiv.appendChild(div);
        }

        updateYearSelection(el) {
            if (!el) {
                el = document.createElement("div");
                el.className = "ndp-year-selection";
                this.datePickerDiv.appendChild(el);
            }
            el.innerHTML = "";
            let start = this.currentYearRange.start;
            let end = this.currentYearRange.end;
            if (this.options.minDate && start < this.options.minDate.year) start = this.options.minDate.year;
            if (this.options.maxDate && end > this.options.maxDate.year) end = this.options.maxDate.year;
            this.renderYearButtons(el, start, end);
        }

        showMonthSelection(year) {
            if (!this.datePickerDiv) return;
            this.datePickerDiv.innerHTML = "";
            const header = this.createCalendarHeader("month");
            const div = document.createElement("div");
            div.className = "ndp-month-selection";
            const monthsList = this.options.language === "english" ? NepaliFunctions.BS.GetMonths() : NepaliFunctions.BS.GetMonthsInUnicode();

            monthsList.forEach((monthName, idx) => {
                const btn = document.createElement("a");
                btn.href = "javascript:void(0);";
                btn.className = "ndp-month-button";
                btn.textContent = monthName;

                if (idx + 1 === this.currentBsDate.month && year === this.currentBsDate.year) {
                    btn.classList.add("ndp-current");
                }
                if (this.isInputValue && idx + 1 === this.currentDate.month && year === this.currentDate.year) {
                    btn.classList.add("ndp-selected");
                }

                if (this.isMonthDisabled(year, idx + 1)) {
                    btn.classList.add("ndp-disabled");
                    btn.setAttribute("aria-disabled", "true");
                } else {
                    btn.addEventListener("click", () => {
                        this.currentMonthView = idx + 1;
                        this.renderCalendar();
                    });
                }
                div.appendChild(btn);
            });

            this.datePickerDiv.appendChild(header);
            this.datePickerDiv.appendChild(div);
        }

        createCalendarBody() {
            const table = document.createElement("table");
            table.className = "ndp-table";
            const dayNames = this.options.language === "english" ? NepaliFunctions.AD.GetDaysShort() : NepaliFunctions.BS.GetDaysUnicodeShort();
            const thead = document.createElement("thead");
            const trHead = document.createElement("tr");

            dayNames.forEach(d => {
                const th = document.createElement("th");
                th.innerHTML = d;
                trHead.appendChild(th);
            });
            thead.appendChild(trHead);
            table.appendChild(thead);

            const tbody = document.createElement("tbody");
            const daysInMonth = NepaliFunctions.BS.GetDaysInMonth(this.currentYearView, this.currentMonthView);
            let firstDayName = NepaliFunctions.BS.GetFullDay({ year: this.currentYearView, month: this.currentMonthView, day: 1 });
            let firstDayIndex = NepaliFunctions.AD.GetDays().indexOf(firstDayName);
            let tr = document.createElement("tr");

            for (let i = 0; i < daysInMonth + firstDayIndex; i++) {
                const td = document.createElement("td");
                if (i > firstDayIndex - 1) {
                    let dayNum = i - firstDayIndex + 1;
                    td.innerHTML = this.options.language === "english" ? dayNum : NepaliFunctions.ConvertToUnicode(dayNum);
                    td.setAttribute("data-bs-day", dayNum);
                    var bsObj = this.bsDate(this.currentYearView, this.currentMonthView, dayNum);

                    if (this.options.miniEnglishDates) {
                        var adObj = NepaliFunctions.BS2AD(bsObj);
                        var span = document.createElement("span");
                        span.classList.add("ndp-mini-english-date");
                        span.innerHTML = adObj.day;
                        td.appendChild(span);
                    }

                    if (this.isToday(bsObj)) td.classList.add("ndp-today");
                    if (this.isInputValue && this.isSelected(bsObj)) td.classList.add("ndp-selected");
                    if (this.isInputValue && this.isInRange(bsObj)) td.classList.add("ndp-range-hover");

                    if (this.isDisabled(bsObj)) {
                        td.classList.add("ndp-disabled");
                        td.setAttribute("aria-disabled", "true");
                    } else {
                        td.addEventListener("click", (e) => this.selectDate(e));
                        td.addEventListener("mouseenter", (e) => this.handleMouseEnter(e));
                    }
                }
                tr.appendChild(td);
                if ((i + 1) % 7 === 0) {
                    tbody.appendChild(tr);
                    tr = document.createElement("tr");
                }
            }

            if (tr.children.length > 0) {
                if (tr.children.length < 7) {
                    for (let k = tr.children.length; k < 7; k++) {
                        const emptyTd = document.createElement("td");
                        tr.appendChild(emptyTd);
                    }
                }
                tbody.appendChild(tr);
            }

            table.appendChild(tbody);
            return table;
        }

        handleMouseEnter(e) {
            if (this.options.range && this.selectedDates.length === 1) {
                var target = e.target;
                if (!target.getAttribute("data-bs-day")) target = target.parentElement;
                var day = target ? parseInt(target.getAttribute("data-bs-day")) : NaN;
                if (!isNaN(day)) {
                    this.highlightRange(this.selectedDates[0], this.bsDate(this.currentYearView, this.currentMonthView, day));
                }
            }
        }

        bsDate(y, m, d) {
            return { year: y, month: m, day: d };
        }

        isToday(d) {
            if (!d) return false;
            const today = this.currentBsDate;
            return d.year === today.year && d.month === today.month && d.day === today.day;
        }

        isInRange(d) {
            if (this.options.range && this.selectedDates.length === 2) {
                const [start, end] = this.sortDates(this.selectedDates);
                return NepaliFunctions.BS.IsGreaterThan(d, start) && NepaliFunctions.BS.IsLessThan(d, end);
            }
            return false;
        }

        isSelected(d) {
            return this.selectedDates.some(item => item.year === d.year && item.month === d.month && item.day === d.day);
        }

        isDisabled(d) {
            if (!d) return false;
            const min = this.options.minDate;
            const max = this.options.maxDate;
            let isCustomDisabled = false;
            if (this.options.disableDates.length > 0) {
                isCustomDisabled = this.options.disableDates.some(item => NepaliFunctions.BS.IsEqualTo(d, item));
            }
            return isCustomDisabled || NepaliFunctions.BS.IsLessThan(d, min) || NepaliFunctions.BS.IsGreaterThan(d, max) || (this.isToday(d) && this.options.disableToday);
        }

        isMonthDisabled(y, m) {
            if (!y || !m) return false;
            const min = this.options.minDate;
            const max = this.options.maxDate;
            const start = { year: y, month: m, day: 1 };
            const end = { year: y, month: m, day: NepaliFunctions.BS.GetDaysInMonth(y, m) };
            return NepaliFunctions.BS.IsLessThan(end, min) || NepaliFunctions.BS.IsGreaterThan(start, max);
        }

        highlightRange(startDate, endDate) {
            const [start, end] = this.sortDates([startDate, endDate]);
            if (!this.datePickerDiv) return;
            this.datePickerDiv.querySelectorAll("td[data-bs-day]").forEach(td => {
                const day = parseInt(td.getAttribute("data-bs-day"));
                const cur = this.bsDate(this.currentYearView, this.currentMonthView, day);
                if ((NepaliFunctions.BS.IsGreaterThan(cur, start) || NepaliFunctions.BS.IsEqualTo(cur, start)) &&
                    (NepaliFunctions.BS.IsLessThan(cur, end) || NepaliFunctions.BS.IsEqualTo(cur, end))) {
                    td.classList.add("ndp-range-hover");
                } else {
                    td.classList.remove("ndp-range-hover");
                }
            });
        }

        changeMonth(delta) {
            let res = this.addMonth(this.currentYearView, this.currentMonthView, delta);
            this.currentYearView = res.year;
            this.currentMonthView = res.month;
            this.renderCalendar();
        }

        addMonth(y, m, n) {
            m += n;
            if (m > 12) { m = 1; y += 1; }
            else if (m < 1) { m = 12; y -= 1; }
            return { year: y, month: m };
        }

        changeYear(delta) {
            this.currentYearView += delta;
            this.showMonthSelection(this.currentYearView);
        }

        changeYearGroup(delta) {
            const start = this.currentYearRange.start + delta * this.yearsPerPage;
            this.currentYearRange = this.calculateYearRange(start);
            const sec = this.datePickerDiv.querySelector(".ndp-year-selection");
            if (!sec) return;
            const header = this.createCalendarHeader("year");
            const oldHeader = this.datePickerDiv.querySelector(".ndp-header");
            if (oldHeader) oldHeader.replaceWith(header);
            this.updateYearSelection(sec);
        }

        selectDate(e) {
            var target = e.target;
            if (!target.getAttribute("data-bs-day")) target = target.parentElement;
            const dayVal = parseInt(target.getAttribute("data-bs-day"));
            if (isNaN(dayVal)) return;

            const selectedObj = {
                year: this.currentYearView,
                month: this.currentMonthView,
                day: dayVal
            };
            this.currentDate = selectedObj;

            if (this.options.range) {
                if (this.selectedDates.length === 2) this.clearSelectedRangeDates();
                target.classList.add("ndp-selected");
                this.selectedDates.push(this.currentDate);
                this.selectedDates = this.sortDates(this.selectedDates);
                if (this.selectedDates.length === 2) this.hideDatePicker();
            } else if (this.options.multiple) {
                const idx = this.selectedDates.findIndex(item => item.year === selectedObj.year && item.month === selectedObj.month && item.day === selectedObj.day);
                if (idx === -1) {
                    this.selectedDates.push(this.currentDate);
                    this.selectedDates = this.sortDates(this.selectedDates);
                    target.classList.add("ndp-selected");
                } else {
                    this.selectedDates.splice(idx, 1);
                    this.selectedDates = this.sortDates(this.selectedDates);
                    target.classList.remove("ndp-selected");
                }
            } else {
                if (this.options.inline) {
                    this.clearSelectedRangeDates();
                    this.selectedDates = [this.currentDate];
                    target.classList.add("ndp-selected");
                } else {
                    this.selectedDates = [this.currentDate];
                    target.classList.add("ndp-selected");
                    this.hideDatePicker();
                }
            }

            var sep = "";
            if (this.options.multiple) sep = ", ";
            else if (this.options.range) sep = " - ";

            this.inputElement.value = this.selectedDates.map(item => {
                var str = NepaliFunctions.ConvertToDateFormat(item, this.options.dateFormat);
                if (this.options.unicodeDate) str = NepaliFunctions.ConvertToUnicode(str);
                return str;
            }).join(sep);

            if (typeof this.options.onSelect === "function" || typeof this.options.onChange === "function") {
                var resultList = this.selectedDates.map(item => ({
                    value: NepaliFunctions.ConvertToDateFormat(item, this.options.dateFormat),
                    year: item.year,
                    month: item.month,
                    day: item.day,
                    bs: item,
                    ad: NepaliFunctions.BS2AD(item)
                }));
                var finalRes = (this.options.multiple || this.options.range) ? resultList : resultList[0];
                if (typeof this.options.onSelect === "function") this.options.onSelect(finalRes);
                if (typeof this.options.onChange === "function") this.options.onChange(finalRes);
            }
        }

        clearSelectedRangeDates() {
            this.selectedDates = [];
            this.inputElement.value = "";
            if (this.datePickerDiv) {
                this.datePickerDiv.querySelectorAll("td[data-bs-day]").forEach(td => {
                    td.classList.remove("ndp-selected", "ndp-range-hover");
                });
            }
        }

        sortDates(arr) {
            return arr.sort((a, b) => NepaliFunctions.BS.IsLessThan(a, b) ? -1 : 1);
        }

        goToToday() {
            this.currentDate = this.currentBsDate;
            this.currentYearView = this.currentDate.year;
            this.currentMonthView = this.currentDate.month;
            this.renderCalendar();
        }

        renderYearButtons(container, startYear, endYear) {
            for (let y = startYear; y <= endYear; y++) {
                const btn = document.createElement("a");
                btn.href = "javascript:void(0);";
                btn.className = "ndp-year-button";
                btn.textContent = this.options.language === "english" ? y : NepaliFunctions.ConvertToUnicode(y);

                if (y === this.currentBsDate.year) btn.classList.add("ndp-current");
                if (this.isInputValue && y === this.currentDate.year) btn.classList.add("ndp-selected");

                btn.addEventListener("click", () => {
                    this.currentYearView = y;
                    this.showMonthSelection(y);
                });
                container.appendChild(btn);
            }
        }

        calculateYearRange(year) {
            const perPage = this.yearsPerPage;
            let minYear = NepaliFunctions.BS.MinimumDate().year;
            let maxYear = NepaliFunctions.BS.MaximumDate().year;
            if (this.options.minDate) minYear = this.options.minDate.year;
            if (this.options.maxDate) maxYear = this.options.maxDate.year;

            if (maxYear - minYear >= perPage) {
                minYear += Math.floor((year - minYear) / perPage) * perPage;
                maxYear = minYear + perPage - 1;
                if (maxYear > this.options.maxDate.year) maxYear = this.options.maxDate.year;
            }
            return { start: minYear, end: maxYear };
        }

        getEnglishMonthYear(year, month) {
            const ad = NepaliFunctions.BS2AD({ year: year, month: month, day: 1 });
            var nextMonth = ad.month;
            nextMonth = 12 === nextMonth ? 0 : nextMonth;
            return NepaliFunctions.AD.GetMonth(ad.month - 1).substring(0, 3) +
                   (0 === nextMonth ? " " + ad.year : "") + " / " +
                   NepaliFunctions.AD.GetMonth(nextMonth).substring(0, 3) + " " +
                   (0 === nextMonth ? ad.year + 1 : ad.year);
        }

        getDate() {
            if (!this.selectedDates || this.selectedDates.length === 0) return null;
            var list = this.selectedDates.map(item => ({
                bs: item,
                ad: NepaliFunctions.BS2AD(item),
                formatted: NepaliFunctions.ConvertToDateFormat(item, this.options.dateFormat)
            }));
            return (this.options.multiple || this.options.range) ? list : list[0];
        }

        setDate(y, m, d) {
            if (typeof y === "object" && y !== null) {
                d = y.day;
                m = y.month;
                y = y.year;
            }
            this.currentDate = { year: y, month: m, day: d };
            this.selectedDates = [this.currentDate];
            this.inputElement.value = NepaliFunctions.ConvertToDateFormat(this.currentDate, this.options.dateFormat);
            if (this.datePickerDiv) this.renderCalendar();
        }

        open() {
            this.showDatePicker();
        }

        close() {
            this.hideDatePicker();
        }

        toggle() {
            if (this.datePickerDiv) this.close();
            else this.open();
        }

        clear() {
            this.selectedDates = [];
            this.inputElement.value = "";
            if (this.datePickerDiv) this.renderCalendar();
        }

        setTheme(theme) {
            this.options.theme = theme;
            if (this.datePickerDiv) {
                ['ndp-theme-ocean', 'ndp-theme-forest', 'ndp-theme-sunset', 'ndp-theme-rose'].forEach(cls => {
                    this.datePickerDiv.classList.remove(cls);
                });
                if (theme && theme !== "default") {
                    this.datePickerDiv.classList.add(`ndp-theme-${theme}`);
                }
            }
        }

        setDark(isDark) {
            this.options.mode = isDark ? "dark" : "light";
            if (this.datePickerDiv) {
                this.datePickerDiv.classList.toggle("ndp-dark", isDark);
                this.datePickerDiv.classList.toggle("ndp-light", !isDark);
            }
        }

        destroy(el) {
            var element = el || this.inputElement;
            if (element && element._ndpHandlers) {
                element.removeEventListener("focus", element._ndpHandlers.focus);
                element.removeEventListener("click", element._ndpHandlers.focus);
                element.removeEventListener("blur", element._ndpHandlers.blur);
                document.removeEventListener("mousedown", element._ndpHandlers.mousedown);
                delete element._ndpHandlers;
            }
            if (this.datePickerDiv) {
                this.datePickerDiv.remove();
                this.datePickerDiv = null;
            }
        }
    }

    // Static init method
    NepaliDatePicker.init = function(selector, options) {
        if (typeof selector === 'string') {
            const elements = document.querySelectorAll(selector);
            if (elements.length > 1) {
                const instances = [];
                elements.forEach(el => instances.push(new NepaliDatePicker(el, options)));
                return instances;
            } else if (elements.length === 1) {
                return new NepaliDatePicker(elements[0], options);
            }
        }
        return new NepaliDatePicker(selector, options);
    };

    // Static utils helper
    NepaliDatePicker.utils = Object.assign({}, NepaliFunctions, {
        bsToAd: function(y, m, d) { return NepaliFunctions.BS2AD(typeof y === 'object' ? y : { year: y, month: m, day: d }); },
        adToBs: function(y, m, d) { return NepaliFunctions.AD2BS(typeof y === 'object' ? y : { year: y, month: m, day: d }); },
        toNepali: function(num) { return NepaliFunctions.ConvertToUnicode(num); },
        getToday: function() { return NepaliFunctions.BS.GetCurrentDate(); },
        getDaysInMonth: function(y, m) { return NepaliFunctions.BS.GetDaysInMonth(y, m); }
    });

    // Element prototypes
    if (typeof HTMLElement !== "undefined") {
        HTMLElement.prototype.NepaliDatePicker = function(options) { return new NepaliDatePicker(this, options); };
        HTMLElement.prototype.nepaliDatePicker = function(options) { return new NepaliDatePicker(this, options); };
    }
    if (typeof HTMLCollection !== "undefined") {
        HTMLCollection.prototype.NepaliDatePicker = function(options) { Array.from(this).forEach(el => el.NepaliDatePicker(options)); };
        HTMLCollection.prototype.nepaliDatePicker = function(options) { Array.from(this).forEach(el => el.nepaliDatePicker(options)); };
    }

    // jQuery integration
    if (typeof window !== "undefined" && window.jQuery) {
        window.jQuery.fn.NepaliDatePicker = function(options) {
            return this.each(function() { new NepaliDatePicker(this, options); });
        };
        window.jQuery.fn.nepaliDatePicker = function(options) {
            return this.each(function() { new NepaliDatePicker(this, options); });
        };
    }

    return {
        NepaliFunctions: NepaliFunctions,
        NepaliDatePicker: NepaliDatePicker
    };
});