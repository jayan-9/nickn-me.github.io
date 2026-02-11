// Configuration and Data
let currentCategory = 'love';
let isDarkTheme = false;
let lastScrollTop = 0;
let generatedStyles = [];

// Styles Data - Easy to add more
const stylesByCategory = {
    love: [
        {
            name: 'love_hearts',
            prefix: '❤️ ',
            suffix: ' ❤️',
            map: {
                a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j',
                k: 'k', l: 'l', m: 'm', n: 'n', o: 'o', p: 'p', q: 'q', r: 'r', s: 's', t: 't',
                u: 'u', v: 'v', w: 'w', x: 'x', y: 'y', z: 'z',
                A: 'A', B: 'B', C: 'C', D: 'D', E: 'E', F: 'F', G: 'G', H: 'H', I: 'I', J: 'J',
                K: 'K', L: 'L', M: 'M', N: 'N', O: 'O', P: 'P', Q: 'Q', R: 'R', S: 'S', T: 'T',
                U: 'U', V: 'V', W: 'W', X: 'X', Y: 'Y', Z: 'Z'
            }
        },
        {
            name: 'love_sparkle',
            prefix: '✨ ',
            suffix: ' ✨',
            map: {
                a: '𝒶', b: '𝒷', c: '𝒸', d: '𝒹', e: '𝑒', f: '𝒻', g: '𝑔', h: '𝒽', i: '𝒾', j: '𝒿',
                k: '𝓀', l: '𝓁', m: '𝓂', n: '𝓃', o: '𝑜', p: '𝓅', q: '𝓆', r: '𝓇', s: '𝓈', t: '𝓉',
                u: '𝓊', v: '𝓋', w: '𝓌', x: '𝓍', y: '𝓎', z: '𝓏',
                A: '𝒜', B: 'ℬ', C: '𝒞', D: '𝒟', E: 'ℰ', F: 'ℱ', G: '𝒢', H: 'ℋ', I: 'ℐ', J: '𝒥',
                K: '𝒦', L: 'ℒ', M: 'ℳ', N: '𝒩', O: '𝒪', P: '𝒫', Q: '𝒬', R: 'ℛ', S: '𝒮', T: '𝒯',
                U: '𝒰', V: '𝒱', W: '𝒲', X: '𝒳', Y: '𝒴', Z: '𝒵'
            }
        }
    ],
    gamer: [
        {
            name: 'gamer_bold',
            prefix: '⚔️ ',
            suffix: ' ⚔️',
            map: {
                a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ',
                k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ',
                u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ',
                A: 'ᴀ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ', F: 'ғ', G: 'ɢ', H: 'ʜ', I: 'ɪ', J: 'ᴊ',
                K: 'ᴋ', L: 'ʟ', M: 'ᴍ', N: 'ɴ', O: 'ᴏ', P: 'ᴘ', Q: 'ǫ', R: 'ʀ', S: 's', T: 'ᴛ',
                U: 'ᴜ', V: 'ᴠ', W: 'ᴡ', X: 'x', Y: 'ʏ', Z: 'ᴢ'
            }
        },
        {
            name: 'gamer_tech',
            prefix: '🎮 ',
            suffix: ' 🎮',
            map: {
                a: 'α', b: 'в', c: '¢', d: '∂', e: 'є', f: 'ƒ', g: 'g', h: 'н', i: 'ι', j: 'נ',
                k: 'к', l: 'ℓ', m: 'м', n: 'η', o: 'σ', p: 'ρ', q: 'q', r: 'я', s: 'ѕ', t: 'т',
                u: 'υ', v: 'ν', w: 'ω', x: 'χ', y: 'у', z: 'z',
                A: 'α', B: 'в', C: '¢', D: '∂', E: 'є', F: 'ƒ', G: 'g', H: 'н', I: 'ι', J: 'נ',
                K: 'к', L: 'ℓ', M: 'м', N: 'η', O: 'σ', P: 'ρ', Q: 'q', R: 'я', S: 'ѕ', T: 'т',
                U: 'υ', V: 'ν', W: 'ω', X: 'χ', Y: 'у', Z: 'z'
            }
        }
    ],
    fancy: [
        {
            name: 'fancy_elegant',
            prefix: '👑 ',
            suffix: ' 👑',
            map: {
                a: 'α', b: 'в', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j',
                k: 'k', l: 'l', m: 'm', n: 'n', o: 'o', p: 'p', q: 'q', r: 'r', s: 's', t: 't',
                u: 'u', v: 'v', w: 'w', x: 'x', y: 'y', z: 'z',
                A: 'Å', B: 'ß', C: 'Ç', D: 'Ð', E: 'È', F: 'ƒ', G: 'Ğ', H: 'Ħ', I: 'Ì', J: 'Ĵ',
                K: 'Ķ', L: 'Ł', M: 'Μ', N: 'Ñ', O: 'Ø', P: 'Þ', Q: 'Ǫ', R: 'Ŕ', S: 'Š', T: 'Ť',
                U: 'Û', V: 'V', W: 'Ŵ', X: 'Ж', Y: 'Ý', Z: 'Ž'
            }
        }
    ],
    font: [
        {
            name: 'font_outline',
            prefix: '',
            suffix: '',
            map: {
                a: '𝕒', b: '𝕓', c: '𝕔', d: '𝕕', e: '𝕖', f: '𝕗', g: '𝕘', h: '𝕙', i: '𝕚', j: '𝕛',
                k: '𝕜', l: '𝕝', m: '𝕞', n: '𝕟', o: '𝕠', p: '𝕡', q: '𝕢', r: '𝕣', s: '𝕤', t: '𝕥',
                u: '𝕦', v: '𝕧', w: '𝕨', x: '𝕩', y: '𝕪', z: '𝕫',
                A: '𝔸', B: '𝔹', C: 'ℂ', D: '𝔻', E: '𝔼', F: '𝔽', G: '𝔾', H: 'ℍ', I: '𝕀', J: '𝕁',
                K: '𝕂', L: '𝕃', M: '𝕄', N: 'ℕ', O: '𝕆', P: 'ℙ', Q: 'ℚ', R: 'ℝ', S: '𝕊', T: '𝕋',
                U: '𝕌', V: '𝕍', W: '𝕎', X: '𝕏', Y: '𝕐', Z: 'ℤ'
            }
        },
        {
            name: 'font_script',
            prefix: '',
            suffix: '',
            map: {
                a: '𝒶', b: '𝒷', c: '𝒸', d: '𝒹', e: '𝑒', f: '𝒻', g: '𝑔', h: '𝒽', i: '𝒾', j: '𝒿',
                k: '𝓀', l: '𝓁', m: '𝓂', n: '𝓃', o: '𝑜', p: '𝓅', q: '𝓆', r: '𝓇', s: '𝓈', t: '𝓉',
                u: '𝓊', v: '𝓋', w: '𝓌', x: '𝓍', y: '𝓎', z: '𝓏',
                A: '𝒜', B: 'ℬ', C: '𝒞', D: '𝒟', E: 'ℰ', F: 'ℱ', G: '𝒢', H: 'ℋ', I: 'ℐ', J: '𝒥',
                K: '𝒦', L: 'ℒ', M: 'ℳ', N: '𝒩', O: '𝒪', P: '𝒫', Q: '𝒬', R: 'ℛ', S: '𝒮', T: '𝒯',
                U: '𝒰', V: '𝒱', W: '𝒲', X: '𝒳', Y: '𝒴', Z: '𝒵'
            }
        }
    ]
};

// Symbols Data
const symbolsData = {
    fancy: [
        { symbol: '✨', name: 'Sparkles' },
        { symbol: '❖', name: 'Diamond' },
        { symbol: '✦', name: 'Black Star' },
        { symbol: '✧', name: 'White Star' },
        { symbol: '♡', name: 'Heart' },
        { symbol: '☽', name: 'Moon' },
        { symbol: '☼', name: 'Sun' },
        { symbol: '❈', name: 'Snowflake' }
    ],
    gaming: [
        { symbol: '⚔️', name: 'Swords' },
        { symbol: '🛡️', name: 'Shield' },
        { symbol: '🎮', name: 'Controller' },
        { symbol: '👾', name: 'Alien' },
        { symbol: '🔥', name: 'Fire' },
        { symbol: '💀', name: 'Skull' },
        { symbol: '👑', name: 'Crown' },
        { symbol: '⚡', name: 'Zap' }
    ],
    decorative: [
        { symbol: '𓆩♡𓆪', name: 'Heart Frame' },
        { symbol: '꧁', name: 'Left Ornament' },
        { symbol: '꧂', name: 'Right Ornament' },
        { symbol: '༺', name: 'Left Brace' },
        { symbol: '༻', name: 'Right Brace' },
        { symbol: '『', name: 'Left Corner' },
        { symbol: '』', name: 'Right Corner' },
        { symbol: '«', name: 'Left Arrow' },
        { symbol: '»', name: 'Right Arrow' }
    ]
};

// Quick Symbols (for quick picker)
const quickSymbols = ['✨', '❤️', '⚔️', '🎮', '👑', '🔥', '⚡', '🌟', '💫', '🌸'];

// Suggestions Data
const suggestionsData = {
    love: [
        '❤️ 𝒮𝓌𝑒𝑒𝓉𝑒𝓈𝓉 ❤️',
        '✨ 𝐿𝒶𝓋𝒾𝓈𝒽 𝐿💖𝓋𝑒 ✨',
        '💝 𝐵𝑒𝓁💗𝓋𝑒𝒹 💝',
        '🌹 𝑅💞𝓂𝒶𝓃𝓉𝒾𝒸 🌹'
    ],
    gamer: [
        '⚡ 𝒢𝒶𝓂𝑒𝓇 𝐿💀𝓇𝒹 ⚡',
        '🎮 𝒫𝑅💀 𝒢𝒜𝑀𝐸𝑅 🎮',
        '👑 𝒦𝒾𝓃𝑔 💀𝒻 𝒢𝒶𝓂𝑒𝓈 👑',
        '🔥 𝒩𝑒𝓍𝓊𝓈 🔥'
    ],
    fancy: [
        '👑 𝐹𝒶𝓃𝒸𝓎 𝒢𝑒𝓃𝓉𝓁𝑒𝓂𝒶𝓃 👑',
        '✨ 𝐸𝓁𝑒𝑔𝒶𝓃𝓉 𝒮🍷𝓁𝑒 ✨',
        '🌟 𝒫𝓇𝑒𝓂𝒾𝓊𝓂 𝒱𝒾𝒷𝑒 🌟',
        '💎 𝐿𝓊𝓍𝓊𝓇𝓎 𝒮𝓉𝓎𝓁𝑒 💎'
    ],
    font: [
        '𝒞𝓊𝓇𝓈𝒾𝓋𝑒 𝒮𝓉𝓎𝓁𝑒',
        '𝔹𝕠𝕝𝕕 𝔽𝕠𝕟𝕥',
        '𝕾𝖙𝖞𝖑𝖎𝖘𝖍 𝕿𝖊𝖝𝖙',
        'Ⓒⓘⓡⓒⓛⓔⓓ Ⓣⓔⓧⓣ'
    ]
};

// ============ CORE FUNCTIONS ============

// Function to add new styles (can be called anytime)
function addStyle(category, styleName, prefix, suffix, charMap) {
    if (!stylesByCategory[category]) {
        stylesByCategory[category] = [];
    }
    
    // Check if style already exists
    const exists = stylesByCategory[category].some(s => s.name === styleName);
    if (!exists) {
        stylesByCategory[category].push({
            name: styleName,
            prefix: prefix,
            suffix: suffix,
            map: charMap
        });
        showToast(`New style "${styleName}" added to ${category}`);
    }
    return true;
}

// Function to add new symbols
function addSymbol(category, symbol, name) {
    if (!symbolsData[category]) {
        symbolsData[category] = [];
    }
    
    symbolsData[category].push({ symbol: symbol, name: name });
    showToast(`New symbol added to ${category}`);
    return true;
}

// Function to add new suggestions
function addSuggestion(category, suggestion) {
    if (!suggestionsData[category]) {
        suggestionsData[category] = [];
    }
    
    suggestionsData[category].push(suggestion);
    showToast(`New suggestion added to ${category}`);
    return true;
}

// Convert text based on character map
function convertText(text, charMap) {
    return text.split('').map(char => {
        if (charMap[char] !== undefined) {
            return charMap[char];
        }
        
        const lowerChar = char.toLowerCase();
        if (charMap[lowerChar] !== undefined) {
            return charMap[lowerChar];
        }
        
        const upperChar = char.toUpperCase();
        if (charMap[upperChar] !== undefined) {
            return charMap[upperChar];
        }
        
        return char;
    }).join('');
}

// Generate styles function
function generateStyles() {
    const nameInput = document.getElementById('nameInput');
    const resultDiv = document.getElementById('result');
    const resultsCount = document.getElementById('resultsCount');
    
    const name = nameInput.value.trim();
    
    if (!name) {
        resultDiv.innerHTML = `
            <div class="welcome-msg">
                <i class="fas fa-magic"></i>
                <p>Enter your name and click Generate to see amazing styles!</p>
            </div>
        `;
        resultsCount.textContent = '0 styles';
        showToast('Please enter a name first');
        return;
    }
    
    const styles = stylesByCategory[currentCategory] || [];
    
    if (styles.length === 0) {
        resultDiv.innerHTML = `
            <div class="welcome-msg">
                <i class="fas fa-exclamation-circle"></i>
                <p>No styles available for this category yet.</p>
            </div>
        `;
        resultsCount.textContent = '0 styles';
        return;
    }
    
    // Shuffle styles for random order
    const shuffledStyles = [...styles].sort(() => Math.random() - 0.5);
    generatedStyles = [];
    
    let html = '';
    shuffledStyles.forEach((style, index) => {
        const styledName = style.prefix + convertText(name, style.map) + style.suffix;
        generatedStyles.push(styledName);
        
        html += `
            <div class="style-card">
                <div class="style-text">${styledName}</div>
                <button class="copy-btn" onclick="copyToClipboard('${styledName.replace(/'/g, "\\'")}', this)">
                    <i class="fas fa-copy"></i> Copy Style
                </button>
            </div>
        `;
    });
    
    resultDiv.innerHTML = html;
    resultsCount.textContent = `${styles.length} styles`;
    
    // Show suggestions after generating
    showCategorySuggestions();
}

// Select category function
function selectCategory(category) {
    currentCategory = category;
    
    // Update active category button
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // If there's a name entered, generate styles for new category
    const nameInput = document.getElementById('nameInput');
    if (nameInput.value.trim()) {
        generateStyles();
    }
}

// Copy to clipboard function
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.classList.add('copied');
        
        showToast('Style copied to clipboard!');
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        showToast('Failed to copy. Please try again.');
    });
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Toggle suggestions
function toggleSuggestions() {
    const suggestions = suggestionsData[currentCategory] || [];
    
    if (suggestions.length === 0) {
        showToast('No suggestions available for this category');
        return;
    }
    
    let html = '<h4>Category Suggestions</h4><div class="suggestions-list">';
    suggestions.forEach(suggestion => {
        html += `
            <div class="suggestion-item">
                <span>${suggestion}</span>
                <button onclick="copyToClipboard('${suggestion.replace(/'/g, "\\'")}', this)" class="small-copy-btn">
                    <i class="fas fa-copy"></i>
                </button>
            </div>
        `;
    });
    html += '</div>';
    
    showToast(`Showing ${suggestions.length} suggestions`);
}

// Show category suggestions (called after generation)
function showCategorySuggestions() {
    // This can be expanded to show suggestions in a dedicated section
}

// Open symbol modal
function openSymbolModal() {
    const modal = document.getElementById('symbolModal');
    modal.classList.add('show');
    loadSymbols('fancy');
}

// Close symbol modal
function closeSymbolModal() {
    const modal = document.getElementById('symbolModal');
    modal.classList.remove('show');
}

// Load symbols by category
function loadSymbols(category) {
    const symbolsGrid = document.getElementById('symbolsGrid');
    const symbols = symbolsData[category] || [];
    
    // Update active category button
    document.querySelectorAll('.sym-cat-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    if (symbols.length === 0) {
        symbolsGrid.innerHTML = '<p>No symbols available for this category.</p>';
        return;
    }
    
    let html = '';
    symbols.forEach(symbol => {
        html += `
            <div class="symbol-item" onclick="insertSymbol('${symbol.symbol}')">
                <div class="symbol-display">${symbol.symbol}</div>
                <div class="symbol-name">${symbol.name}</div>
            </div>
        `;
    });
    
    symbolsGrid.innerHTML = html;
}

// Insert symbol into input
function insertSymbol(symbol) {
    const nameInput = document.getElementById('nameInput');
    const cursorPos = nameInput.selectionStart;
    const currentValue = nameInput.value;
    
    nameInput.value = currentValue.substring(0, cursorPos) + symbol + currentValue.substring(cursorPos);
    nameInput.focus();
    nameInput.selectionStart = nameInput.selectionEnd = cursorPos + symbol.length;
    
    closeSymbolModal();
    showToast('Symbol inserted');
}

// Toggle quick symbols
function toggleQuickSymbols() {
    const quickSymbolsDiv = document.getElementById('quickSymbols');
    const isVisible = quickSymbolsDiv.classList.contains('show');
    
    if (isVisible) {
        quickSymbolsDiv.classList.remove('show');
    } else {
        // Load quick symbols
        const quickSymbolsGrid = document.querySelector('.quick-symbols-grid');
        let html = '';
        quickSymbols.forEach(symbol => {
            html += `<div class="quick-symbol" onclick="insertSymbol('${symbol}')">${symbol}</div>`;
        });
        quickSymbolsGrid.innerHTML = html;
        
        // Position near the quick symbol button
        const symbolBtn = document.getElementById('symbolQuickBtn');
        const rect = symbolBtn.getBoundingClientRect();
        quickSymbolsDiv.style.top = `${rect.bottom + window.scrollY}px`;
        quickSymbolsDiv.style.left = `${rect.left}px`;
        quickSymbolsDiv.classList.add('show');
    }
}

// Toggle theme
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme', isDarkTheme);
    
    const themeIcon = document.querySelector('#themeToggle i');
    themeIcon.className = isDarkTheme ? 'fas fa-sun' : 'fas fa-moon';
    
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    showToast(isDarkTheme ? 'Dark theme activated' : 'Light theme activated');
}

// Show guide
function showGuide() {
    const guideContent = `
        <h3>How to Use Nicknáme Generator</h3>
        <ol>
            <li><strong>Enter Your Name:</strong> Type your name in the input box at the top</li>
            <li><strong>Choose Category:</strong> Select from Love, Gamer, Fancy, or Fonts</li>
            <li><strong>Generate Styles:</strong> Click the Generate button</li>
            <li><strong>Copy & Use:</strong> Click Copy on your favorite style and use it anywhere!</li>
        </ol>
        <p><strong>Tip:</strong> Use the Symbols button to add special characters to your name!</p>
    `;
    
    alert(guideContent);
}

// Initialize notes
function initNotes() {
    const notesInput = document.getElementById('notesInput');
    const charCount = document.getElementById('charCount');
    const saveNotesBtn = document.getElementById('saveNotes');
    
    // Load saved notes
    const savedNotes = localStorage.getItem('nicknameNotes');
    if (savedNotes) {
        notesInput.value = savedNotes;
        charCount.textContent = savedNotes.length;
    }
    
    // Update character count
    notesInput.addEventListener('input', () => {
        const length = notesInput.value.length;
        charCount.textContent = length;
        
        if (length >= 100) {
            charCount.style.color = '#ef4444';
        } else {
            charCount.style.color = '';
        }
    });
    
    // Save notes
    saveNotesBtn.addEventListener('click', () => {
        if (notesInput.value.length <= 100) {
            localStorage.setItem('nicknameNotes', notesInput.value);
            showToast('Notes saved successfully');
        } else {
            showToast('Notes must be 100 characters or less');
        }
    });
}

// Scroll to top
function initScrollTop() {
    const scrollBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize sidebar
function initSidebar() {
    const menuToggle = document.getElementById('menuToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    
    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('open');
    });
    
    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
    
    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });
}

// Initialize theme options
function initThemeOptions() {
    const themeOptions = document.querySelectorAll('.theme-option');
    
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            themeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            const theme = option.dataset.theme;
            
            if (theme === 'dark') {
                document.body.classList.add('dark-theme');
                isDarkTheme = true;
            } else if (theme === 'light') {
                document.body.classList.remove('dark-theme');
                isDarkTheme = false;
            } else {
                // Auto theme based on system preference
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                document.body.classList.toggle('dark-theme', prefersDark);
                isDarkTheme = prefersDark;
            }
            
            localStorage.setItem('theme', theme);
            showToast(`Theme set to ${theme}`);
        });
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        isDarkTheme = true;
        document.querySelector('#themeToggle i').className = 'fas fa-sun';
    }
    
    // Set active theme option
    const themeOption = document.querySelector(`.theme-option[data-theme="${savedTheme}"]`);
    if (themeOption) {
        document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
        themeOption.classList.add('active');
    }
    
    // Initialize components
    initSidebar();
    initNotes();
    initScrollTop();
    initThemeOptions();
    
    // Event listeners
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('symbolQuickBtn').addEventListener('click', toggleQuickSymbols);
    document.getElementById('quickSymbolBtn').addEventListener('click', openSymbolModal);
    document.getElementById('howToBtn').addEventListener('click', showGuide);
    document.getElementById('symbolPatternBtn').addEventListener('click', openSymbolModal);
    
    // Symbol category buttons
    document.querySelectorAll('.sym-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            loadSymbols(btn.dataset.category);
        });
    });
    
    // Close quick symbols when clicking outside
    document.addEventListener('click', (e) => {
        const quickSymbols = document.getElementById('quickSymbols');
        const symbolBtn = document.getElementById('symbolQuickBtn');
        
        if (quickSymbols.classList.contains('show') && 
            !quickSymbols.contains(e.target) && 
            !symbolBtn.contains(e.target)) {
            quickSymbols.classList.remove('show');
        }
    });
    
    // Generate on Enter key
    document.getElementById('nameInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateStyles();
        }
    });
    
    // Add CSS for suggestions list
    const style = document.createElement('style');
    style.textContent = `
        .suggestions-list {
            background: white;
            border-radius: 8px;
            padding: 15px;
            margin-top: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .suggestion-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #eee;
        }
        .suggestion-item:last-child {
            border-bottom: none;
        }
        .small-copy-btn {
            background: #4f46e5;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 5px 10px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
    
    // Initial load for symbol categories
    loadSymbols('fancy');
    
    // Show welcome message
    showToast('Welcome to Nicknáme Generator! Start by entering your name.');
});

// Export functions for global access
window.addStyle = addStyle;
window.addSymbol = addSymbol;
window.addSuggestion = addSuggestion;
window.generateStyles = generateStyles;
window.selectCategory = selectCategory;
window.copyToClipboard = copyToClipboard;
window.toggleSuggestions = toggleSuggestions;
window.openSymbolModal = openSymbolModal;
window.closeSymbolModal = closeSymbolModal;
window.insertSymbol = insertSymbol;
window.showGuide = showGuide;

// Add some default styles on load
setTimeout(() => {
    // Add more styles dynamically (example)
    addStyle('love', 'love_circled', '💞 ', ' 💞', {
        a: 'ⓐ', b: 'ⓑ', c: 'ⓒ', d: 'ⓓ', e: 'ⓔ', f: 'ⓕ', g: 'ⓖ', h: 'ⓗ', i: 'ⓘ', j: 'ⓙ',
        k: 'ⓚ', l: 'ⓛ', m: 'ⓜ', n: 'ⓝ', o: 'ⓞ', p: 'ⓟ', q: 'ⓠ', r: 'ⓡ', s: 'ⓢ', t: 'ⓣ',
        u: 'ⓤ', v: 'ⓥ', w: 'ⓦ', x: 'ⓧ', y: 'ⓨ', z: 'ⓩ',
        A: 'Ⓐ', B: 'Ⓑ', C: 'Ⓒ', D: 'Ⓓ', E: 'Ⓔ', F: 'Ⓕ', G: 'Ⓖ', H: 'Ⓗ', I: 'Ⓘ', J: 'Ⓙ',
        K: 'Ⓚ', L: 'Ⓛ', M: 'Ⓜ', N: 'Ⓝ', O: 'Ⓞ', P: 'Ⓟ', Q: 'Ⓠ', R: 'Ⓡ', S: 'Ⓢ', T: 'Ⓣ',
        U: 'Ⓤ', V: 'Ⓥ', W: 'Ⓦ', X: 'Ⓧ', Y: 'Ⓨ', Z: 'Ⓩ'
    });
    
    addStyle('gamer', 'gamer_mono', '[ ', ' ]', {
        a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ',
        k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 'ꜱ', t: 'ᴛ',
        u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
    });
    
    // Add more symbols
    addSymbol('fancy', '♔', 'King');
    addSymbol('fancy', '♕', 'Queen');
    addSymbol('gaming', '🎯', 'Target');
    addSymbol('gaming', '🏆', 'Trophy');
    
    // Add more suggestions
    addSuggestion('love', '💕 𝒮𝓌𝑒𝑒𝓉 𝒮𝓊𝑔𝒶𝓇 💕');
    addSuggestion('gamer', '🕹️ 𝒫𝑅💀 𝒢𝒜𝑀𝐸𝑅 🕹️');
}, 1000);
