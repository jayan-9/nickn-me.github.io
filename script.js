// ===== CONFIGURATION =====
let currentFilter = "love";
let suggestionsVisible = false;
let isDarkTheme = false;

// ===== DATA STRUCTURES =====

// Suggestions Data
let suggestionsData = {
  love: [
    "💖 Lσʋҽɾ Bσყ 💖",
    "🌸 𝒮𝓌𝑒𝑒𝓉 𝒫𝑒𝒶 🌸",
    "✨ ℒℴѵℯ ℒιgнт ✨",
    "🐰 𝐁𝐚𝐛𝐲 𝐆𝐢𝐫𝐥 🐰"
  ],
  gamer: [
    "⚡ 𝒢𝒶𝓂𝑒𝓇 𝐿𝑜𝓇𝒹 ⚡",
    "🎮 𝒫𝑅𝑂 𝐿𝐸𝒢𝐸𝒩𝒟 🎮",
    "🔥 𝒱𝐼𝒫 𝐵𝒪𝒴 🔥",
    "👑 𝐾𝐼𝑁𝐺 𝒢𝒜𝑀𝐸𝑅 👑"
  ],
  fancy: [
    "🌟 𝐹𝒜𝒩𝒞𝒴 𝐵𝒪𝒴 🌟",
    "💎 𝒞𝐻𝒜𝑅𝑀𝐸𝑅 𝒮𝒯𝒴𝐿𝐸 💎",
    "✨ 𝒮𝒯𝒴𝐿𝐸 𝑀𝒜𝒮𝒯𝐸𝑅 ✨",
    "🎩 𝐸𝐿𝐸𝒢𝒜𝒩𝒯 𝒮𝒪𝒰𝐿 🎩"
  ],
  font: [
    "𝒮𝒸𝓇𝒾𝓅𝓉 𝐹𝑜𝓃𝓉",
    "𝕭𝖔𝖑𝖉 𝕾𝖙𝖞𝖑𝖊",
    "🅒🅘🅡🅒🅛🅔🅓 🅕🅞🅝🅣",
    "𝔉𝔯𝔞𝔨𝔱𝔲𝔯 𝔉𝔬𝔫𝔱"
  ]
};

// Styles Data
let stylesByCategory = {
  love: [
    {
      name: "love_hearts",
      prefix: "💝 ",
      suffix: " 💝",
      map: {
        a: "α", b: "в", c: "¢", d: "∂", e: "є", f: "ƒ", g: "g", h: "н", i: "ι", j: "נ",
        k: "к", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "q", r: "я", s: "ѕ", t: "т",
        u: "υ", v: "ν", w: "ω", x: "χ", y: "у", z: "z"
      }
    }
  ],
  gamer: [
    {
      name: "gamer_style1",
      prefix: "🎮 ",
      suffix: " 🎮",
      map: {
        a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ғ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
        k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "s", t: "ᴛ",
        u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
      }
    }
  ],
  fancy: [
    {
      name: "fancy_script",
      prefix: "✨ ",
      suffix: " ✨",
      map: {
        a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "𝑒", f: "𝒻", g: "𝑔", h: "𝒽", i: "𝒾", j: "𝒿",
        k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "𝑜", p: "𝓅", q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉",
        u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍", y: "𝓎", z: "𝓏"
      }
    }
  ],
  font: [
    {
      name: "font_script",
      prefix: "",
      suffix: "",
      map: {
        a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
        k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
        u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
      }
    }
  ]
};

// Symbols Data
let symbolsData = {
  popular: [
    { symbol: "❤️", name: "Red Heart" },
    { symbol: "✨", name: "Sparkles" },
    { symbol: "🔥", name: "Fire" },
    { symbol: "⭐", name: "Star" },
    { symbol: "💎", name: "Gem Stone" },
    { symbol: "👑", name: "Crown" }
  ],
  gaming: [
    { symbol: "🎮", name: "Game Controller" },
    { symbol: "⚔️", name: "Crossed Swords" },
    { symbol: "🛡️", name: "Shield" },
    { symbol: "🏆", name: "Trophy" },
    { symbol: "🎯", name: "Bullseye" },
    { symbol: "🎪", name: "Circus Tent" }
  ],
  fancy: [
    { symbol: "♛", name: "Chess Queen" },
    { symbol: "❖", name: "Black Diamond" },
    { symbol: "✦", name: "Black Star" },
    { symbol: "✧", name: "White Star" },
    { symbol: "⌘", name: "Place of Interest" },
    { symbol: "⚜", name: "Fleur-de-lis" }
  ]
};

// ===== CORE FUNCTIONS =====

// Convert name using character map
function convert(name, map) {
  return name.split("").map(ch => {
    if (map[ch] !== undefined) return map[ch];
    const lowerChar = ch.toLowerCase();
    if (map[lowerChar] !== undefined) return map[lowerChar];
    const upperChar = ch.toUpperCase();
    if (map[upperChar] !== undefined) return map[upperChar];
    return ch;
  }).join("");
}

// Generate styles with randomization
function generateStyles() {
  const name = document.getElementById('nameInput').value.trim();
  const result = document.getElementById('result');
  const resultsCount = document.querySelector('.results-count');
  
  if (!name) {
    showToast('Please enter a name first!');
    return;
  }
  
  const styles = stylesByCategory[currentFilter] || [];
  
  if (styles.length === 0) {
    result.innerHTML = `
      <div class="welcome-message">
        <i class="fas fa-exclamation-circle"></i>
        <h3>No styles available for this category</h3>
        <p>More styles will be added soon!</p>
      </div>
    `;
    resultsCount.textContent = "0 styles";
    return;
  }
  
  // Clear previous results
  result.innerHTML = '';
  
  // Randomize styles order
  const shuffledStyles = [...styles].sort(() => Math.random() - 0.5);
  
  shuffledStyles.forEach(style => {
    const styledName = style.prefix + convert(name, style.map) + style.suffix;
    const escapedName = styledName.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    
    const styleItem = document.createElement('div');
    styleItem.className = 'style-item';
    styleItem.innerHTML = `
      <div class="style-text">${styledName}</div>
      <div class="style-actions">
        <button class="copy-btn" onclick="copyText('${escapedName}', this)">
          <i class="fas fa-copy"></i> Copy
        </button>
      </div>
    `;
    result.appendChild(styleItem);
  });
  
  resultsCount.textContent = `${styles.length} styles`;
}

// Select category
function selectCategory(category) {
  currentFilter = category;
  
  // Update active category button
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.includes(category.charAt(0).toUpperCase())) {
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
  const suggestions = suggestionsData[currentFilter] || [];
  
  if (suggestions.length === 0) {
    suggestionsGrid.innerHTML = '<p>No suggestions available for this category.</p>';
    return;
  }
  
  let html = '';
  suggestions.forEach(suggestion => {
    const escapedSuggestion = suggestion.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    html += `
      <div class="suggestion-item">
        <div class="suggestion-text">${suggestion}</div>
        <button class="suggestion-copy" onclick="copyText('${escapedSuggestion}', this)">
          <i class="fas fa-copy"></i> Copy
        </button>
      </div>
    `;
  });
  
  suggestionsGrid.innerHTML = html;
}

// ===== SYMBOL PICKER =====

function openSymbolModal() {
  const modal = document.getElementById('symbolModal');
  modal.classList.add('show');
  loadSymbolTabs();
}

function closeSymbolModal() {
  const modal = document.getElementById('symbolModal');
  modal.classList.remove('show');
}

function loadSymbolTabs() {
  const symbolTabs = document.getElementById('symbolTabs');
  const symbolsGrid = document.getElementById('symbolsGrid');
  
  let tabsHtml = '';
  let symbolsHtml = '';
  
  Object.keys(symbolsData).forEach((category, index) => {
    const activeClass = index === 0 ? 'active' : '';
    tabsHtml += `
      <button class="symbol-tab ${activeClass}" onclick="showSymbolCategory('${category}')">
        ${category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    `;
  });
  
  symbolTabs.innerHTML = tabsHtml;
  
  // Load first category symbols
  const firstCategory = Object.keys(symbolsData)[0];
  if (firstCategory) {
    showSymbolCategory(firstCategory);
  }
}

function showSymbolCategory(category) {
  const symbolTabs = document.querySelectorAll('.symbol-tab');
  const symbolsGrid = document.getElementById('symbolsGrid');
  
  // Update active tab
  symbolTabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.textContent.trim().toLowerCase().includes(category.toLowerCase())) {
      tab.classList.add('active');
    }
  });
  
  // Load symbols
  const symbols = symbolsData[category] || [];
  let html = '';
  
  symbols.forEach(symbol => {
    const escapedSymbol = symbol.symbol.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    html += `
      <div class="symbol-item">
        <div class="symbol-display">${symbol.symbol}</div>
        <div class="symbol-name">${symbol.name}</div>
        <div class="symbol-actions">
          <button class="symbol-insert" onclick="insertSymbol('${escapedSymbol}')">
            <i class="fas fa-plus"></i>
          </button>
          <button class="symbol-copy" onclick="copyText('${escapedSymbol}', this)">
            <i class="fas fa-copy"></i>
          </button>
        </div>
      </div>
    `;
  });
  
  symbolsGrid.innerHTML = html;
}

function insertSymbol(symbol) {
  const nameInput = document.getElementById('nameInput');
  const cursorPos = nameInput.selectionStart;
  const currentValue = nameInput.value;
  
  nameInput.value = currentValue.substring(0, cursorPos) + symbol + currentValue.substring(cursorPos);
  nameInput.selectionStart = nameInput.selectionEnd = cursorPos + symbol.length;
  nameInput.focus();
  
  // Generate styles if name exists
  if (nameInput.value.trim()) {
    generateStyles();
  }
  
  closeSymbolModal();
}

// ===== COPY FUNCTION =====

function copyText(text, buttonElement = null) {
  navigator.clipboard.writeText(text)
    .then(() => {
      if (buttonElement) {
        const originalText = buttonElement.innerHTML;
        buttonElement.innerHTML = '<i class="fas fa-check"></i> Copied!';
        buttonElement.classList.add('copied');
        
        setTimeout(() => {
          buttonElement.innerHTML = originalText;
          buttonElement.classList.remove('copied');
        }, 2000);
      }
      showToast('Copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy:', err);
      showToast('Failed to copy. Please try again.');
    });
}

// ===== TOAST MESSAGE =====

function showToast(message) {
  // Remove existing toast
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    z-index: 3000;
    animation: toastSlide 0.3s ease;
  `;
  
  document.body.appendChild(toast);
  
  // Add animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes toastSlide {
      from { bottom: 0; opacity: 0; }
      to { bottom: 20px; opacity: 1; }
    }
  `;
  document.head.appendChild(style);
  
  setTimeout(() => {
    toast.style.animation = 'toastSlideOut 0.3s ease';
    const outStyle = document.createElement('style');
    outStyle.textContent = `
      @keyframes toastSlideOut {
        from { bottom: 20px; opacity: 1; }
        to { bottom: 0; opacity: 0; }
      }
    `;
    document.head.appendChild(outStyle);
    
    setTimeout(() => {
      toast.remove();
      outStyle.remove();
    }, 300);
  }, 3000);
}

// ===== MOBILE MENU =====

function openMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// ===== THEME TOGGLE =====

function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  document.body.classList.toggle('dark-theme', isDarkTheme);
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

// ===== ADD NEW STYLES/SUGGESTIONS/SYMBOLS =====

// Function to add new style
window.addStyle = function(category, styleName, prefix, suffix, charMap) {
  if (!stylesByCategory[category]) {
    stylesByCategory[category] = [];
  }
  
  stylesByCategory[category].push({
    name: styleName,
    prefix: prefix || "",
    suffix: suffix || "",
    map: charMap
  });
  
  showToast(`New style added to ${category}!`);
  if (currentFilter === category) generateStyles();
};

// Function to add new suggestion
window.addSuggestion = function(category, suggestionText) {
  if (!suggestionsData[category]) {
    suggestionsData[category] = [];
  }
  
  suggestionsData[category].push(suggestionText);
  showToast(`New suggestion added to ${category}!`);
  if (suggestionsVisible && currentFilter === category) loadSuggestions();
};

// Function to add new symbols
window.addSymbols = function(symbolCategory, symbol, name) {
  if (!symbolsData[symbolCategory]) {
    symbolsData[symbolCategory] = [];
  }
  
  symbolsData[symbolCategory].push({ symbol: symbol, name: name });
  showToast(`New symbol added to ${symbolCategory}!`);
  
  const modal = document.getElementById('symbolModal');
  if (modal.classList.contains('show')) {
    loadSymbolTabs();
  }
};

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', function() {
  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDarkTheme = true;
    document.body.classList.add('dark-theme');
  }
  
  // Setup mobile theme toggle
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');
  if (mobileThemeToggle) {
    mobileThemeToggle.checked = isDarkTheme;
    mobileThemeToggle.addEventListener('change', toggleTheme);
  }
  
  // Setup note word counter
  const noteBox = document.getElementById('noteBox');
  const wordCount = document.getElementById('wordCount');
  
  if (noteBox && wordCount) {
    noteBox.addEventListener('input', function() {
      const words = this.value.trim().split(/\s+/).filter(word => word.length > 0);
      wordCount.textContent = words.length;
    });
  }
  
  // Auto-generate on input
  const nameInput = document.getElementById('nameInput');
  let inputTimer;
  
  if (nameInput) {
    nameInput.addEventListener('input', function() {
      clearTimeout(inputTimer);
      inputTimer = setTimeout(() => {
        if (this.value.trim()) {
          generateStyles();
        }
      }, 500);
    });
  }
  
  // Close modal on outside click
  const symbolModal = document.getElementById('symbolModal');
  if (symbolModal) {
    symbolModal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeSymbolModal();
      }
    });
  }
  
  // Close mobile menu on escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });
  
  // Add initial styles (you can add more here)
  addStyle('love', 'love_hearts_double', '💕 ', ' 💕', {
    a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
    k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
    u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
  });
  
  addStyle('gamer', 'gamer_bold', '⚡ ', ' ⚡', {
    a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
    k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
    u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇"
  });
  
  // Add initial suggestions
  addSuggestion('love', '💕 Lყσʋҽ Mყ Lιϝҽ 💕');
  addSuggestion('gamer', '🎮 𝒫𝑅𝑂 𝒢𝒜𝑀𝐸𝑅 𝒫𝑅𝐼𝒩𝒞𝐸 🎮');
  
  // Add initial symbols
  addSymbols('popular', '🌟', 'Glowing Star');
  addSymbols('gaming', '🏹', 'Bow and Arrow');
});

// ===== SCROLL TO TOP =====

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show back to top button on scroll
window.addEventListener('scroll', function() {
  const backToTop = document.querySelector('.back-to-top');
  if (window.scrollY > 300) {
    backToTop.style.opacity = '1';
    backToTop.style.visibility = 'visible';
  } else {
    backToTop.style.opacity = '0';
    backToTop.style.visibility = 'hidden';
  }
});
