// Main Configuration
const config = {
    currentCategory: 'love',
    isDarkTheme: false,
    selectedSymbol: null
};

// Data Structures
const stylesByCategory = {
    love: [],
    gamer: [],
    fancy: [],
    font: []
};

const suggestionsData = {
    love: [],
    gamer: [],
    fancy: [],
    font: []
};

const symbolsData = {
    frames: [],
    emojis: [],
    gaming: [],
    special: []
};

// Initialize Data
function initializeData() {
    // Love Styles
    stylesByCategory.love = [
        {
            name: 'love_heart_style',
            prefix: '❤️ ',
            suffix: ' ❤️',
            map: {
                a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "𝑒", f: "𝒻", g: "𝑔", h: "𝒽", i: "𝒾", j: "𝒿",
                k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "𝑜", p: "𝓅", q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉",
                u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍", y: "𝓎", z: "𝓏",
                A: "𝒜", B: "𝐵", C: "𝒞", D: "𝒟", E: "ℰ", F: "𝐹", G: "𝒢", H: "𝐻", I: "𝐼", J: "𝒥",
                K: "𝒦", L: "𝐿", M: "𝑀", N: "𝒩", O: "𝒪", P: "𝒫", Q: "𝒬", R: "𝑅", S: "𝒮", T: "𝒯",
                U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳", Y: "𝒴", Z: "𝒵"
            }
        },
        {
            name: 'love_cute_style',
            prefix: '💖 ',
            suffix: ' 💖',
            map: {
                a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ",
                k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᑫ", r: "ʳ", s: "ˢ", t: "ᵗ",
                u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
                A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "ᶠ", G: "ᴳ", H: "ᴴ", I: "ᴵ", J: "ᴶ",
                K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ", Q: "Q", R: "ᴿ", S: "ˢ", T: "ᵀ",
                U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ", Y: "ʸ", Z: "ᶻ"
            }
        }
    ];

    // Gamer Styles
    stylesByCategory.gamer = [
        {
            name: 'gamer_pro_style',
            prefix: '⚡ ',
            suffix: ' ⚡',
            map: {
                a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ғ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
                k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "s", t: "ᴛ",
                u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
                A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ғ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
                K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "s", T: "ᴛ",
                U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
            }
        },
        {
            name: 'gamer_extreme_style',
            prefix: '🔥 ',
            suffix: ' 🔥',
            map: {
                a: "卂", b: "乃", c: "匚", d: "ᗪ", e: "乇", f: "千", g: "Ꮆ", h: "卄", i: "丨", j: "ﾌ",
                k: "Ҝ", l: "ㄥ", m: "爪", n: "几", o: "ㄖ", p: "卩", q: "Ɋ", r: "尺", s: "丂", t: "ㄒ",
                u: "ㄩ", v: "ᐯ", w: "山", x: "乂", y: "ㄚ", z: "乙",
                A: "卂", B: "乃", C: "匚", D: "ᗪ", E: "乇", F: "千", G: "Ꮆ", H: "卄", I: "丨", J: "ﾌ",
                K: "Ҝ", L: "ㄥ", M: "爪", N: "几", O: "ㄖ", P: "卩", Q: "Ɋ", R: "尺", S: "丂", T: "ㄒ",
                U: "ㄩ", V: "ᐯ", W: "山", X: "乂", Y: "ㄚ", Z: "乙"
            }
        }
    ];

    // Fancy Styles
    stylesByCategory.fancy = [
        {
            name: 'fancy_elegant_style',
            prefix: '✨ ',
            suffix: ' ✨',
            map: {
                a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
                k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
                u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉",
                A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
                K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
                U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉"
            }
        }
    ];

    // Font Styles
    stylesByCategory.font = [
        {
            name: 'font_bold_style',
            prefix: '',
            suffix: '',
            map: {
                a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
                k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
                u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇",
                A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
                K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
                U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
            }
        },
        {
            name: 'font_italic_style',
            prefix: '',
            suffix: '',
            map: {
                a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
                k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
                u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
                A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
                K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
                U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
            }
        }
    ];

    // Suggestions
    suggestionsData.love = [
        '❤️ 𝐋𝐨𝐯𝐞𝐛𝐢𝐫𝐝 ❤️',
        '💕 𝑺𝒘𝒆𝒆𝒕𝒉𝒆𝒂𝒓𝒕 💕',
        '💖 𝓒𝓾𝓽𝓲𝓮𝓹𝓲𝓮 💖',
        '💝 𝒟𝒶𝓇𝓁𝒾𝓃𝑔 💝',
        '💗 ℬ𝒶𝒷𝓎𝑔𝒾𝓇𝓁 💗'
    ];

    suggestionsData.gamer = [
        '⚡ 𝕲𝖆𝖒𝖊𝖗𝕷𝖔𝖗𝖉 ⚡',
        '🎮 𝙿𝚛𝚘𝙿𝚕𝚊𝚢𝚎𝚛 🎮',
        '🔥 𝓥𝓮𝓷𝓸𝓶𝓢𝓽𝓻𝓲𝓴𝓮 🔥',
        '💀 𝕯𝖊𝖆𝖉𝖑𝖞𝕬𝖎𝖒 💀',
        '🌟 𝙼𝚊𝚜𝚝𝚎𝚛𝚂𝚑𝚘𝚝 🌟'
    ];

    suggestionsData.fancy = [
        '✨ 𝔉𝔞𝔫𝔠𝔶𝔎𝔦𝔫𝔤 ✨',
        '👑 𝓡𝓸𝔂𝓪𝓵𝓣𝓪𝓼𝓽𝓮 👑',
        '💎 ℰ𝓁𝒾𝓉ℯ𝒮𝓉𝓎𝓁ℯ 💎',
        '🌹 𝒱𝒾𝒷𝑒𝑀𝒶𝓈𝓉𝑒𝓇 🌹',
        '🎩 𝒞𝓁𝒶𝓈𝓈𝒶𝒸𝓉 🎩'
    ];

    suggestionsData.font = [
        '𝔉𝔯𝔞𝔨𝔱𝔲𝔯 𝔉𝔬𝔫𝔱',
        '𝕋𝕖𝕩𝕥 𝕊𝕥𝕪𝕝𝕖',
        '𝒮𝒸𝓇𝒾𝓅𝓉 ℒℯ𝓉𝓉ℯ𝓇𝓈',
        '𝗕𝗼𝗹𝗱 𝗙𝗼𝗿𝗺𝗮𝘁',
        '𝘊𝘶𝘳𝘴𝘪𝘷𝘦 𝘚𝘵𝘺𝘭𝘦'
    ];

    // Symbols
    symbolsData.frames = [
        { symbol: '꧁', name: 'Left Frame' },
        { symbol: '꧂', name: 'Right Frame' },
        { symbol: '❖', name: 'Black Diamond' },
        { symbol: '✦', name: 'Black Star' },
        { symbol: '✧', name: 'White Star' }
    ];

    symbolsData.emojis = [
        { symbol: '😊', name: 'Smiley' },
        { symbol: '❤️', name: 'Heart' },
        { symbol: '✨', name: 'Sparkles' },
        { symbol: '🔥', name: 'Fire' },
        { symbol: '⭐', name: 'Star' }
    ];

    symbolsData.gaming = [
        { symbol: '🎮', name: 'Gamepad' },
        { symbol: '⚔️', name: 'Swords' },
        { symbol: '🛡️', name: 'Shield' },
        { symbol: '🎯', name: 'Target' },
        { symbol: '🏆', name: 'Trophy' }
    ];

    symbolsData.special = [
        { symbol: '∞', name: 'Infinity' },
        { symbol: '©', name: 'Copyright' },
        { symbol: '®', name: 'Registered' },
        { symbol: '™', name: 'Trademark' },
        { symbol: '☯', name: 'Yin Yang' }
    ];
}

// Core Functions
function convertName(name, map) {
    return name.split('').map(char => {
        if (map[char] !== undefined) return map[char];
        
        const lowerChar = char.toLowerCase();
        if (map[lowerChar] !== undefined) return map[lowerChar];
        
        const upperChar = char.toUpperCase();
        if (map[upperChar] !== undefined) return map[upperChar];
        
        return char;
    }).join('');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateStyles() {
    const nameInput = document.getElementById('nameInput');
    const resultsContainer = document.getElementById('resultsContainer');
    const stylesCount = document.getElementById('stylesCount');
    
    const name = nameInput.value.trim();
    
    if (!name) {
        showToast('Please enter a name first!');
        nameInput.focus();
        return;
    }
    
    const styles = stylesByCategory[config.currentCategory];
    
    if (!styles || styles.length === 0) {
        resultsContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                    <i class="fas fa-exclamation-circle"></i>
                </div>
                <h3>No Styles Available</h3>
                <p>No styles found for this category. Try another category.</p>
            </div>
        `;
        stylesCount.textContent = '0';
        return;
    }
    
    // Shuffle styles for random order
    const shuffledStyles = shuffleArray([...styles]);
    
    let resultsHTML = '<div class="results-grid">';
    
    shuffledStyles.forEach((style, index) => {
        const styledName = style.prefix + convertName(name, style.map) + style.suffix;
        
        resultsHTML += `
            <div class="style-card">
                <div class="style-text">${styledName}</div>
                <div class="style-actions">
                    <button class="style-btn primary" onclick="copyToClipboard('${styledName.replace(/'/g, "\\'")}', this)">
                        <i class="fas fa-copy"></i> Copy
                    </button>
                    <button class="style-btn" onclick="useStyle('${styledName.replace(/'/g, "\\'")}')">
                        <i class="fas fa-check"></i> Use
                    </button>
                </div>
            </div>
        `;
    });
    
    resultsHTML += '</div>';
    resultsContainer.innerHTML = resultsHTML;
    stylesCount.textContent = shuffledStyles.length.toString();
    
    showToast(`${shuffledStyles.length} styles generated successfully!`);
}

function selectCategory(category) {
    config.currentCategory = category;
    
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Update active category in suggestions section
    const suggestionsSection = document.getElementById('suggestionsSection');
    if (suggestionsSection.classList.contains('active')) {
        loadSuggestions();
    }
    
    // Generate styles if there's a name
    const nameInput = document.getElementById('nameInput');
    if (nameInput.value.trim()) {
        generateStyles();
    }
}

function loadSuggestions() {
    const suggestionsGrid = document.getElementById('suggestionsGrid');
    const suggestions = suggestionsData[config.currentCategory] || [];
    
    if (suggestions.length === 0) {
        suggestionsGrid.innerHTML = '<p class="empty">No suggestions available for this category.</p>';
        return;
    }
    
    let html = '';
    suggestions.forEach(suggestion => {
        html += `
            <div class="suggestion-item">
                <div class="suggestion-text">${suggestion}</div>
                <div class="suggestion-actions">
                    <button class="suggestion-btn" onclick="copyToClipboard('${suggestion.replace(/'/g, "\\'")}', this)">
                        Copy
                    </button>
                    <button class="suggestion-btn" onclick="useSuggestion('${suggestion.replace(/'/g, "\\'")}')">
                        Use
                    </button>
                </div>
            </div>
        `;
    });
    
    suggestionsGrid.innerHTML = html;
}

function toggleSuggestions() {
    const suggestionsSection = document.getElementById('suggestionsSection');
    suggestionsSection.classList.toggle('active');
    
    if (suggestionsSection.classList.contains('active')) {
        loadSuggestions();
    }
}

function loadSymbolCategories() {
    const symbolCategories = document.getElementById('symbolCategories');
    let html = '';
    
    Object.keys(symbolsData).forEach(category => {
        html += `<button class="symbol-category" onclick="loadSymbols('${category}')">${category.charAt(0).toUpperCase() + category.slice(1)}</button>`;
    });
    
    symbolCategories.innerHTML = html;
    
    // Load first category by default
    if (Object.keys(symbolsData).length > 0) {
        loadSymbols(Object.keys(symbolsData)[0]);
    }
}

function loadSymbols(category) {
    const symbolsGrid = document.getElementById('symbolsGrid');
    const symbols = symbolsData[category] || [];
    
    // Update active category
    document.querySelectorAll('.symbol-category').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === category.toLowerCase()) {
            btn.classList.add('active');
        }
    });
    
    if (symbols.length === 0) {
        symbolsGrid.innerHTML = '<p class="empty">No symbols available for this category.</p>';
        return;
    }
    
    let html = '';
    symbols.forEach(symbol => {
        html += `
            <div class="symbol-item" onclick="selectSymbol('${symbol.symbol.replace(/'/g, "\\'")}')">
                <div class="symbol-display">${symbol.symbol}</div>
                <div class="symbol-name">${symbol.name}</div>
                <div class="symbol-actions">
                    <button class="symbol-action-btn" onclick="event.stopPropagation(); copyToClipboard('${symbol.symbol.replace(/'/g, "\\'")}', this)">
                        Copy
                    </button>
                </div>
            </div>
        `;
    });
    
    symbolsGrid.innerHTML = html;
}

function selectSymbol(symbol) {
    config.selectedSymbol = symbol;
    
    // Highlight selected symbol
    document.querySelectorAll('.symbol-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    event.currentTarget.classList.add('selected');
}

function openSymbolModal() {
    const modal = document.getElementById('symbolModal');
    modal.classList.add('active');
    loadSymbolCategories();
}

function closeSymbolModal() {
    const modal = document.getElementById('symbolModal');
    modal.classList.remove('active');
}

function insertSymbol() {
    if (!config.selectedSymbol) {
        showToast('Please select a symbol first!');
        return;
    }
    
    const nameInput = document.getElementById('nameInput');
    const cursorPos = nameInput.selectionStart;
    const currentValue = nameInput.value;
    
    nameInput.value = currentValue.substring(0, cursorPos) + config.selectedSymbol + currentValue.substring(cursorPos);
    nameInput.focus();
    nameInput.selectionStart = nameInput.selectionEnd = cursorPos + config.selectedSymbol.length;
    
    closeSymbolModal();
    config.selectedSymbol = null;
}

function copyToClipboard(text, button = null) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard!');
        
        if (button) {
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i> Copied!';
            button.disabled = true;
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
            }, 2000);
        }
    }).catch(err => {
        console.error('Failed to copy:', err);
        showToast('Failed to copy. Please try again.');
    });
}

function useStyle(text) {
    const nameInput = document.getElementById('nameInput');
    nameInput.value = text;
    showToast('Style applied to input field!');
}

function useSuggestion(text) {
    const nameInput = document.getElementById('nameInput');
    nameInput.value = text;
    generateStyles();
    showToast('Suggestion applied!');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Public API functions for adding new content
window.addStyle = function(category, styleName, prefix, suffix, characterMap) {
    if (!stylesByCategory[category]) {
        stylesByCategory[category] = [];
    }
    
    stylesByCategory[category].push({
        name: styleName,
        prefix: prefix,
        suffix: suffix,
        map: characterMap
    });
    
    console.log(`Style "${styleName}" added to ${category} category`);
    return true;
};

window.addSuggestion = function(category, suggestion) {
    if (!suggestionsData[category]) {
        suggestionsData[category] = [];
    }
    
    suggestionsData[category].push(suggestion);
    console.log(`Suggestion added to ${category} category`);
    return true;
};

window.addSymbol = function(category, symbol, name) {
    if (!symbolsData[category]) {
        symbolsData[category] = [];
    }
    
    symbolsData[category].push({ symbol: symbol, name: name });
    console.log(`Symbol "${name}" added to ${category} category`);
    return true;
};

// UI Functions
function toggleTheme() {
    config.isDarkTheme = !config.isDarkTheme;
    document.body.classList.toggle('dark-theme', config.isDarkTheme);
    
    const themeBtn = document.getElementById('themeToggle');
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    if (config.isDarkTheme) {
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        darkModeToggle.checked = true;
        localStorage.setItem('theme', 'dark');
    } else {
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        darkModeToggle.checked = false;
        localStorage.setItem('theme', 'light');
    }
}

function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('active');
}

function closeMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.remove('active');
}

function closeSuggestions() {
    const suggestionsSection = document.getElementById('suggestionsSection');
    suggestionsSection.classList.remove('active');
}

// Scroll to top
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    // Initialize data
    initializeData();
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        config.isDarkTheme = true;
        document.body.classList.add('dark-theme');
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-sun"></i>';
        document.getElementById('darkModeToggle').checked = true;
    }
    
    // Event Listeners
    document.getElementById('generateBtn').addEventListener('click', generateStyles);
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('darkModeToggle').addEventListener('change', toggleTheme);
    document.getElementById('menuToggle').addEventListener('click', toggleMenu);
    document.getElementById('closeMenu').addEventListener('click', closeMenu);
    document.getElementById('suggestionsBtn').addEventListener('click', toggleSuggestions);
    document.getElementById('closeSuggestions').addEventListener('click', closeSuggestions);
    document.getElementById('symbolPickerBtn').addEventListener('click', openSymbolModal);
    document.getElementById('closeSymbolModal').addEventListener('click', closeSymbolModal);
    document.getElementById('insertSymbol').addEventListener('click', insertSymbol);
    
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectCategory(this.dataset.category);
        });
    });
    
    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });
    
    // Auto-generate on Enter key
    document.getElementById('nameInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generateStyles();
        }
    });
    
    // Initialize scroll to top
    initScrollTop();
    
    // Generate initial styles if there's a name in URL or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const nameFromUrl = urlParams.get('name');
    if (nameFromUrl) {
        document.getElementById('nameInput').value = nameFromUrl;
        generateStyles();
    }
    
    console.log('NickName Generator initialized successfully!');
});

// Add example styles using the public API (you can remove these later)
setTimeout(() => {
    // Example of adding a new style via API
    window.addStyle('love', 'love_sparkle_style', '🌟 ', ' 🌟', {
        a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
        k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
        u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
    });
    
    // Example of adding a new suggestion
    window.addSuggestion('gamer', '🎯 𝕾𝖓𝖎𝖕𝖊𝖗𝕰𝖑𝖎𝖙𝖊 🎯');
    
    // Example of adding a new symbol
    window.addSymbol('special', '♾️', 'Permanent');
}, 1000);
