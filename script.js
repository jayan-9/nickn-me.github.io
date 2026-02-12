// ===== GLOBAL VARIABLES =====
let currentFilter = "love";
let suggestionsVisible = false;
let isDarkTheme = false;

// ===== DATA STRUCTURES =====
let suggestionsData = {
    love: [
        "𝓛𝓸𝓿𝓮𝓻 𝓫𝓸𝔂 💕",
        "❤️ ᴛʀᴜᴇ ʟᴏᴠᴇʀ",
        "𓆩♡𓆪 ʙᴀʙʏɢɪʀʟ 𓆩♡𓆪",
        "𝒮𝓌𝑒𝑒𝓉𝒽𝑒𝒶𝓇𝓉",
        "✨ 𝕃𝕆𝕍𝔼ℝ 𝔾𝕀ℝ𝕃 ✨",
        "💝 𝓒𝓾𝓽𝓮 𝓟𝓲𝓮 💝",
        "ℜ𝔬𝔪𝔞𝔫𝔱𝔦𝔠 𝔖𝔬𝔲𝔩 🌹",
        "💑 𝐂𝐨𝐮𝐩𝐥𝐞 𝐆𝐨𝐚𝐥𝐬 💑"
    ],
    gamer: [
        "⚔️ 𝕲𝖆𝖒𝖊𝖗 𝕷𝖔𝖗𝖉 ⚔️",
        "🔥 ᴘʀᴏ ᴘʟᴀʏᴇʀ 🔥",
        "🎮 ɢᴀᴍɪɴɢ ʟᴇɢᴇɴᴅ 🎮",
        "👑 ᴄʟᴀɴ ʟᴇᴀᴅᴇʀ 👑",
        "💀 ɴᴏ sᴄᴏᴘᴇ ɴᴇᴇᴅᴇᴅ 💀",
        "⚡ ʟᴀɢ ғʀᴇᴇ ɢᴀᴍᴇʀ ⚡",
        "🎯 ʜᴇᴀᴅsʜᴏᴛ ᴋɪɴɢ 🎯",
        "🛡️ ɪɴᴠɪɴᴄɪʙʟᴇ ᴡᴀʀʀɪᴏʀ 🛡️"
    ],
    fancy: [
        "👑 𝕱𝖆𝖓𝖈𝖞 𝕶𝖎𝖓𝖌 👑",
        "✨ ꧁༒☬𝓕𝓪𝓷𝓬𝔂☬༒꧂ ✨",
        "💎 ʟᴜxᴜʀʏ ʟɪғᴇ 💎",
        "🌟 𝓢𝓽𝔂𝓵𝓲𝓼𝓱 𝓥𝓲𝓫𝓮 🌟",
        "💫 𝒞𝓁𝒶𝓈𝓈𝓎 𝒞𝒽𝒾𝒸 💫",
        "🌠 𝔼𝕝𝕖𝕘𝕒𝕟𝕥 𝕊𝕠𝕦𝕝 🌠",
        "🎩 𝒢ℯ𝓃𝓉𝓁ℯ𝓂𝒶𝓃 𝒮𝓉𝓎𝓁ℯ 🎩",
        "🌹 𝔉𝔞𝔫𝔠𝔶 𝔇𝔯𝔢𝔞𝔪 🌹"
    ],
    font: [
        "𝒮𝒸𝓇𝒾𝓅𝓉 𝒮𝓉𝓎𝓁𝑒",
        "𝕆𝕦𝕥𝕝𝕚𝕟𝕖 𝔽𝕠𝕟𝕥",
        "𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎 𝙻𝚘𝚘𝚔",
        "𝖲𝖺𝗇𝗌 𝖲𝖾𝗋𝗂𝖿 𝖲𝗍𝗒𝗅𝖾",
        "🅒🅘🅡🅒🅛🅔🅓 🅕🅞🅝🅣",
        "ⓑⓤⓑⓑⓛⓔ ⓣⓔⓧⓣ",
        "𝔊𝔬𝔱𝔥𝔦𝔠 𝔖𝔱𝔶𝔩𝔢",
        "ᑕOᑌTᕼ ᖴOᑎT"
    ]
};

let stylesByCategory = {
    love: [
        {
            name: "love_heart_style",
            prefix: "💖 ",
            suffix: " 💖",
            map: {
                a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
                k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
                u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃",
                A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
                K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
                U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩"
            }
        },
        {
            name: "love_sparkle_style",
            prefix: "✨ ",
            suffix: " ✨",
            map: {
                a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ",
                k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ",
                u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ",
                A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ",
                K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ",
                U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ"
            }
        }
    ],
    gamer: [
        {
            name: "gamer_bold_style",
            prefix: "🎮 ",
            suffix: " 🎮",
            map: {
                a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
                k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
                u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩",
                A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
                K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
                U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩"
            }
        },
        {
            name: "gamer_monospace_style",
            prefix: "🔥 ",
            suffix: " 🔥",
            map: {
                a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
                k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
                u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
                A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
                K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
                U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
            }
        }
    ],
    fancy: [
        {
            name: "fancy_script_style",
            prefix: "👑 ",
            suffix: " 👑",
            map: {
                a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "𝑒", f: "𝒻", g: "𝑔", h: "𝒽", i: "𝒾", j: "𝒿",
                k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "𝑜", p: "𝓅", q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉",
                u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍", y: "𝓎", z: "𝓏",
                A: "𝒜", B: "ℬ", C: "𝒞", D: "𝒟", E: "ℰ", F: "ℱ", G: "𝒢", H: "ℋ", I: "ℐ", J: "𝒥",
                K: "𝒦", L: "ℒ", M: "ℳ", N: "𝒩", O: "𝒪", P: "𝒫", Q: "𝒬", R: "ℛ", S: "𝒮", T: "𝒯",
                U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳", Y: "𝒴", Z: "𝒵"
            }
        },
        {
            name: "fancy_outline_style",
            prefix: "✨ ",
            suffix: " ✨",
            map: {
                a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
                k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
                u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
                A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
                K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
                U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
            }
        }
    ],
    font: [
        {
            name: "font_cursive_style",
            prefix: "",
            suffix: "",
            map: {
                a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
                k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
                u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃",
                A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
                K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
                U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩"
            }
        },
        {
            name: "font_bubble_style",
            prefix: "",
            suffix: "",
            map: {
                a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
                k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
                u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ",
                A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
                K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
                U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ"
            }
        }
    ]
};

let symbolsData = {
    faces: [
        { symbol: "☺", name: "Smiling Face" },
        { symbol: "😊", name: "Blushing Face" },
        { symbol: "😎", name: "Cool Face" },
        { symbol: "🤩", name: "Star-Struck" },
        { symbol: "🥰", name: "Smiling with Hearts" },
        { symbol: "😍", name: "Heart Eyes" }
    ],
    gaming: [
        { symbol: "🎮", name: "Game Controller" },
        { symbol: "⚔️", name: "Crossed Swords" },
        { symbol: "🛡️", name: "Shield" },
        { symbol: "🎯", name: "Bullseye" },
        { symbol: "🏆", name: "Trophy" },
        { symbol: '☯', name: 'Yin Yang' },
    { symbol: '모', name: 'Korean Character' },
    { symbol: '☂', name: 'Umbrella' },
    { symbol: 'ⓥ', name: 'Circled V' },
    { symbol: '𖹭', name: 'Ethiopic Syllable' },
    { symbol: '么', name: 'Chinese Character' },
    { symbol: '✓', name: 'Check Mark' },
        { symbol: "👑", name: "Crown" }
    ],
    hearts: [
        { symbol: "❤️", name: "Red Heart" },
        { symbol: "💖", name: "Sparkling Heart" },
        { symbol: "💕", name: "Two Hearts" },
        { symbol: "💙", name: "Blue Heart" },
        { symbol: "💜", name: "Purple Heart" },
        { symbol: "💚", name: "Green Heart" }
    ],
    stars: [
        { symbol: "⭐", name: "Star" },
        { symbol: "🌟", name: "Glowing Star" },
        { symbol: "✨", name: "Sparkles" },
        { symbol: "💫", name: "Dizzy" },
        { symbol: "☄️", name: "Comet" },
        { symbol: "🌠", name: "Shooting Star" }
    ],
    arrows: [
        { symbol: "➡️", name: "Right Arrow" },
        { symbol: "⬅️", name: "Left Arrow" },
        { symbol: "⬆️", name: "Up Arrow" },
        { symbol: "⬇️", name: "Down Arrow" },
        { symbol: "↗️", name: "Up-Right Arrow" },
        { symbol: "↘️", name: "Down-Right Arrow" }
    ],
    decorative: [
        { symbol: "❄️", name: "Snowflake" },
        { symbol: "🌸", name: "Cherry Blossom" },
        { symbol: "🎵", name: "Musical Note" },
        { symbol: "🔮", name: "Crystal Ball" },
        { symbol: "💎", name: "Gem Stone" },
        { symbol: "🎀", name: "Ribbon" }
    ]
};

// ===== CORE FUNCTIONS =====
function convert(name, map) {
    return name.split("").map(ch => {
        if (map[ch] !== undefined) {
            return map[ch];
        }
        
        const lowerChar = ch.toLowerCase();
        if (map[lowerChar] !== undefined) {
            return map[lowerChar];
        }
        
        const upperChar = ch.toUpperCase();
        if (map[upperChar] !== undefined) {
            return map[upperChar];
        }
        
        return ch;
    }).join("");
}

function generateStyles() {
    const name = document.getElementById('nameInput').value.trim();
    const result = document.getElementById('result');
    const resultsCount = document.getElementById('resultsCount');
    
    result.innerHTML = "";
    
    if (!name) {
        result.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-magic"></i>
                <p>Enter your name above to generate stylish nicknames</p>
                <p class="sub-text">Perfect for Free Fire, PUBG, BGMI, Instagram, and YouTube</p>
            </div>
        `;
        resultsCount.textContent = "0 styles";
        return;
    }
    
    const styles = stylesByCategory[currentFilter] || [];
    
    if (styles.length === 0) {
        result.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-exclamation-circle"></i>
                <p>No styles available for this category yet.</p>
                <p class="sub-text">Check back soon for updates!</p>
            </div>
        `;
        resultsCount.textContent = "0 styles";
        return;
    }
    
    // Randomize the order of styles
    const shuffled = [...styles].sort(() => Math.random() - 0.5);
    
    shuffled.forEach(style => {
        const styled = style.prefix + convert(name, style.map) + style.suffix;
        const escapedStyled = styled.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        
        const div = document.createElement('div');
        div.className = 'style-card';
        div.innerHTML = `
            <div class="style-text">${styled}</div>
            <button class="copy-btn" onclick="copyText('${escapedStyled}', this)">
                <i class="fas fa-copy"></i> Copy
            </button>
        `;
        result.appendChild(div);
    });
    
    resultsCount.textContent = `${styles.length} styles`;
}

function selectCategory(type) {
    currentFilter = type;
    
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        const text = btn.textContent.toLowerCase().replace(/\s/g, '');
        if (text.includes(type)) {
            btn.classList.add('active');
        }
    });
    
    // Generate styles if name exists
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
        generateStyles();
    }
    
    // Update suggestions if visible
    if (suggestionsVisible) {
        loadSuggestions();
    }
}

// ===== SUGGESTIONS =====
function toggleSuggestions() {
    const suggestionsSection = document.getElementById('suggestionsSection');
    suggestionsVisible = !suggestionsVisible;
    
    if (suggestionsVisible) {
        suggestionsSection.classList.add('show');
        loadSuggestions();
    } else {
        suggestionsSection.classList.remove('show');
    }
}

function loadSuggestions() {
    const suggestionsGrid = document.getElementById('suggestionsGrid');
    const currentSuggestions = suggestionsData[currentFilter] || [];
    
    if (currentSuggestions.length === 0) {
        suggestionsGrid.innerHTML = '<p>No suggestions available for this category.</p>';
        return;
    }
    
    let html = '';
    currentSuggestions.forEach(suggestion => {
        const escapedSuggestion = suggestion.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        html += `
            <div class="suggestion-card">
                <div class="suggestion-text">${suggestion}</div>
                <button class="suggestion-copy" onclick="copyText('${escapedSuggestion}')">
                    <i class="fas fa-copy"></i> Copy Suggestion
                </button>
            </div>
        `;
    });
    
    suggestionsGrid.innerHTML = html;
}

// ===== SYMBOL PICKER =====
function openSymbolModal() {
    document.getElementById('symbolModal').classList.add('show');
    loadSymbolCategories();
}

function closeSymbolModal() {
    document.getElementById('symbolModal').classList.remove('show');
}

function loadSymbolCategories() {
    const categoriesDiv = document.getElementById('symbolCategories');
    const symbolsGrid = document.getElementById('symbolsGrid');
    
    let categoriesHtml = '';
    let firstCategory = '';
    
    Object.keys(symbolsData).forEach((category, index) => {
        if (index === 0) firstCategory = category;
        categoriesHtml += `
            <button class="symbol-category ${index === 0 ? 'active' : ''}" 
                    onclick="loadSymbols('${category}')">
                ${category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
        `;
    });
    
    categoriesDiv.innerHTML = categoriesHtml;
    loadSymbols(firstCategory);
}

function loadSymbols(category) {
    const symbolsGrid = document.getElementById('symbolsGrid');
    const symbols = symbolsData[category] || [];
    
    // Update active category button
    document.querySelectorAll('.symbol-category').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.querySelectorAll('.symbol-category').forEach(btn => {
        if (btn.textContent.toLowerCase().includes(category.toLowerCase())) {
            btn.classList.add('active');
        }
    });
    
    if (symbols.length === 0) {
        symbolsGrid.innerHTML = '<p>No symbols available in this category.</p>';
        return;
    }
    
    let html = '';
    symbols.forEach(symbol => {
        const escapedSymbol = symbol.symbol.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        html += `
            <div class="symbol-item">
                <div class="symbol-display">${symbol.symbol}</div>
                <div class="symbol-name">${symbol.name}</div>
                <div class="symbol-actions">
                    <button class="insert-btn" onclick="insertSymbol('${escapedSymbol}')">
                        <i class="fas fa-plus"></i> Insert
                    </button>
                    <button class="copy-symbol-btn" onclick="copyText('${escapedSymbol}')">
                        <i class="fas fa-copy"></i> Copy
                    </button>
                </div>
            </div>
        `;
    });
    
    symbolsGrid.innerHTML = html;
}

function insertSymbol(symbol) {
    const nameInput = document.getElementById('nameInput');
    const currentValue = nameInput.value;
    const cursorPos = nameInput.selectionStart;
    
    nameInput.value = currentValue.substring(0, cursorPos) + symbol + currentValue.substring(cursorPos);
    nameInput.selectionStart = nameInput.selectionEnd = cursorPos + symbol.length;
    nameInput.focus();
    
    closeSymbolModal();
    showToast('Symbol inserted!');
}

// ===== UTILITY FUNCTIONS =====
function copyText(text, buttonElement = null) {
    navigator.clipboard.writeText(text)
        .then(() => {
            if (buttonElement) {
                const originalText = buttonElement.innerHTML;
                const originalClass = buttonElement.className;
                
                buttonElement.innerHTML = '<i class="fas fa-check"></i> Copied!';
                buttonElement.classList.add('copied');
                
                setTimeout(() => {
                    buttonElement.innerHTML = originalText;
                    buttonElement.className = originalClass;
                }, 2000);
            }
            showToast('Copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            showToast('Failed to copy. Please try again.');
        });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    
    // Clear any existing timeout
    if (window.toastTimeout) {
        clearTimeout(window.toastTimeout);
    }
    
    // Auto hide after 2.5 seconds
    window.toastTimeout = setTimeout(() => {
        toast.style.display = 'none';
    }, 2500);
}

// ===== THEME FUNCTIONS =====
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    const themeStatus = document.getElementById('themeStatus');
    
    if (isDarkTheme) {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        themeStatus.textContent = 'Dark';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeStatus.textContent = 'Light';
        localStorage.setItem('theme', 'light');
    }
}

// ===== SIDEBAR FUNCTIONS =====
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');
}

function showGuide() {
    document.getElementById('guideModal').classList.add('show');
    closeSidebar();
}

function closeGuide() {
    document.getElementById('guideModal').classList.remove('show');
}

// ===== NOTES FUNCTIONS =====
function updateNoteCount() {
    const noteText = document.getElementById('noteText');
    const noteCount = document.getElementById('noteCount');
    const words = noteText.value.trim().split(/\s+/).filter(word => word.length > 0);
    noteCount.textContent = `${words.length}/100`;
    
    if (words.length > 100) {
        noteCount.style.color = '#ef4444';
    } else {
        noteCount.style.color = '';
    }
}

function saveNote() {
    const noteText = document.getElementById('noteText').value;
    localStorage.setItem('nicknameNotes', noteText);
    showToast('Note saved!');
}

function clearNote() {
    document.getElementById('noteText').value = '';
    updateNoteCount();
    localStorage.removeItem('nicknameNotes');
    showToast('Note cleared!');
}

function loadNote() {
    const savedNote = localStorage.getItem('nicknameNotes');
    if (savedNote) {
        document.getElementById('noteText').value = savedNote;
        updateNoteCount();
    }
}

// ===== SCROLL TO TOP =====
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== EASY ADD FUNCTIONS =====
window.addStyle = function(category, styleName, prefix, suffix, charMap) {
    if (!stylesByCategory[category]) {
        stylesByCategory[category] = [];
    }
    
    const exists = stylesByCategory[category].find(s => s.name === styleName);
    if (exists) {
        showToast(`Style "${styleName}" already exists in ${category}`);
        return false;
    }
    
    const newStyle = {
        name: styleName,
        prefix: prefix || "",
        suffix: suffix || "",
        map: charMap
    };
    
    stylesByCategory[category].push(newStyle);
    showToast(`New style "${styleName}" added to ${category}`);
    
    if (currentFilter === category) {
        const name = document.getElementById('nameInput').value.trim();
        if (name) {
            generateStyles();
        }
    }
    
    return true;
};

window.addSuggestion = function(category, suggestionText) {
    if (!suggestionsData[category]) {
        suggestionsData[category] = [];
    }
    
    suggestionsData[category].push(suggestionText);
    showToast(`New suggestion added to ${category}`);
    
    if (suggestionsVisible && currentFilter === category) {
        loadSuggestions();
    }
    
    return true;
};

window.addSymbols = function(symbolCategory, symbol, name) {
    if (!symbolsData[symbolCategory]) {
        symbolsData[symbolCategory] = [];
    }
    
    symbolsData[symbolCategory].push({ symbol: symbol, name: name });
    showToast(`New symbol "${name}" added to ${symbolCategory}`);
    
    const modal = document.getElementById('symbolModal');
    if (modal.classList.contains('show')) {
        loadSymbolCategories();
    }
    
    return true;
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        isDarkTheme = true;
        document.body.classList.add('dark-theme');
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-sun"></i>';
        document.getElementById('themeStatus').textContent = 'Dark';
    }
    
    // Load saved note
    loadNote();
    
    // Setup event listeners
    document.getElementById('menuToggle').addEventListener('click', toggleSidebar);
    document.getElementById('closeSidebar').addEventListener('click', closeSidebar);
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('noteText').addEventListener('input', updateNoteCount);
    
    // Close modals on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                if (this.id === 'symbolModal') closeSymbolModal();
                if (this.id === 'guideModal') closeGuide();
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
    
    // Add more initial styles
    addStyle('love', 'love_angel_style', '😇 ', ' 😇', {
        a: "α", b: "ß", c: "¢", d: "Ð", e: "ε", f: "ƒ", g: "g", h: "н", i: "ι", j: "נ",
        k: "к", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "q", r: "я", s: "ѕ", t: "т",
        u: "υ", v: "ν", w: "ω", x: "χ", y: "у", z: "z",
        A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
        K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
        U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
    });
    
    addStyle('gamer', 'gamer_danger_style', '💀 ', ' 💀', {
        a: "ค", b: "๖", c: "¢", d: "໓", e: "ē", f: "f", g: "ງ", h: "h", i: "i", j: "ว",
        k: "k", l: "l", m: "๓", n: "ຖ", o: "໐", p: "p", q: "๑", r: "r", s: "Ş", t: "t",
        u: "น", v: "ง", w: "ຟ", x: "x", y: "ฯ", z: "ຊ",
        A: "ค", B: "๖", C: "¢", D: "໓", E: "ē", F: "f", G: "ງ", H: "h", I: "i", J: "ว",
        K: "k", L: "l", M: "๓", N: "ຖ", O: "໐", P: "p", Q: "๑", R: "r", S: "Ş", T: "t",
        U: "น", V: "ง", W: "ຟ", X: "x", Y: "ฯ", Z: "ຊ"
    });
    
    addStyle('font', 'font_small_caps', '', '', {
        a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ғ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
        k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "s", t: "ᴛ",
        u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
        A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ғ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
        K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "s", T: "ᴛ",
        U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
    });

// Style 7: Bold Love Style
addStyle('love', 'bold_love_style', '—͟͞͞✰', 'ᯓ✈︎⋆ˎˊ˗', {
    a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
    k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
    u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇",
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
});

// Style 8: Small Caps Love Style
addStyle('love', 'smallcaps_love_style', '—͟͞͞✞', '✞𓂃✍︎', {
    a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ",
    k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᑫ", r: "ʳ", s: "ˢ", t: "ᵗ",
    u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
    A: "ᵃ", B: "ᵇ", C: "ᶜ", D: "ᵈ", E: "ᵉ", F: "ᶠ", G: "ᵍ", H: "ʰ", I: "ⁱ", J: "ʲ",
    K: "ᵏ", L: "ˡ", M: "ᵐ", N: "ⁿ", O: "ᵒ", P: "ᵖ", Q: "ᑫ", R: "ʳ", S: "ˢ", T: "ᵗ",
    U: "ᵘ", V: "ᵛ", W: "ʷ", X: "ˣ", Y: "ʸ", Z: "ᶻ"
});

    // ============ ADD GAMING SYMBOLS ============
addSymbols('gaming', '࿐', 'Flower Swirl');
addSymbols('gaming', '☯', 'Yin Yang');
addSymbols('gaming', '모', 'Korean Character');
addSymbols('gaming', '☂', 'Umbrella');
addSymbols('gaming', 'ⓥ', 'Circled V');
addSymbols('gaming', '𖹭', 'Ethiopic Syllable');
addSymbols('gaming', '么', 'Chinese Character');
addSymbols('gaming', '✓', 'Check Mark');
addSymbols('gaming', '☫', 'Farsi Symbol');
addSymbols('gaming', '☬', 'Adi Shakti');
addSymbols('gaming', '『', 'Left Corner Bracket');
addSymbols('gaming', '』', 'Right Corner Bracket');
addSymbols('gaming', '༒', 'Tibetan Sign');
addSymbols('gaming', '☠', 'Skull and Crossbones');
addSymbols('gaming', 'メ', 'Japanese Character');
addSymbols('gaming', '𐚁', 'Cypriot Syllable');

    // ============ ADD FANCY SUGGESTIONS ============
addSuggestion('fancy', '➬ ✿⃟मां का मगरमच्छ ⨳࿐');
addSuggestion('fancy', '┊◯┊𝙷𝙴𝙰𝚁𝚃𝙻𝙴𝚂𝚂 ☻┊◯꫟');
addSuggestion('fancy', '𝐓𝐨✗𝐢𝐜 𝐀𝐭𝐭𝐢𝐭𝐮𝐝𝐞 ˣ‿ˣ');
addSuggestion('fancy', '➵N̷i̷g̷h̷t̷𓄂S̷h̷a̷d̷e̷ꪶ乡');
    
    // Initial load
    generateStyles();
});
