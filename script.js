// ===== GLOBAL VARIABLES =====
let currentFilter = "love";
let isDarkTheme = false;
let currentMiniSuggestions = [];

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
        "🌹 𝔉𝔞𝔫𝔠𝔶 𝔇𝔯𝔢𝔞𝔪 🌹",
        "➬ ✿⃟मां का मगरमच्छ ⨳࿐",
        "┊◯┊𝙷𝙴𝙰𝚁𝚃𝙻𝙴𝚂𝚂 ☻┊◯꫟",
        "𝐓𝐨✗𝐢𝐜 𝐀𝐭𝐭𝐢𝐭𝐮𝐝𝐞 ˣ‿ˣ",
        "➵N̷i̷g̷h̷t̷𓄂S̷h̷a̷d̷e̷ꪶ乡"
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
        },
        {
            name: "love_angel_style",
            prefix: "😇 ",
            suffix: " 😇",
            map: {
                a: "α", b: "ß", c: "¢", d: "Ð", e: "ε", f: "ƒ", g: "g", h: "н", i: "ι", j: "נ",
                k: "к", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "q", r: "я", s: "ѕ", t: "т",
                u: "υ", v: "ν", w: "ω", x: "χ", y: "у", z: "z",
                A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
                K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
                U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
            }
        },
        {
            name: "bold_love_style",
            prefix: "—͟͞͞✰",
            suffix: "ᯓ✈︎⋆ˎˊ˗",
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
            name: "smallcaps_love_style",
            prefix: "—͟͞͞✞",
            suffix: "✞𓂃✍︎",
            map: {
                a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ",
                k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᑫ", r: "ʳ", s: "ˢ", t: "ᵗ",
                u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
                A: "ᵃ", B: "ᵇ", C: "ᶜ", D: "ᵈ", E: "ᵉ", F: "ᶠ", G: "ᵍ", H: "ʰ", I: "ⁱ", J: "ʲ",
                K: "ᵏ", L: "ˡ", M: "ᵐ", N: "ⁿ", O: "ᵒ", P: "ᵖ", Q: "ᑫ", R: "ʳ", S: "ˢ", T: "ᵗ",
                U: "ᵘ", V: "ᵛ", W: "ʷ", X: "ˣ", Y: "ʸ", Z: "ᶻ"
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
        },
        {
            name: "gamer_danger_style",
            prefix: "💀 ",
            suffix: " 💀",
            map: {
                a: "ค", b: "๖", c: "¢", d: "໓", e: "ē", f: "f", g: "ງ", h: "h", i: "i", j: "ว",
                k: "k", l: "l", m: "๓", n: "ຖ", o: "໐", p: "p", q: "๑", r: "r", s: "Ş", t: "t",
                u: "น", v: "ง", w: "ຟ", x: "x", y: "ฯ", z: "ຊ",
                A: "ค", B: "๖", C: "¢", D: "໓", E: "ē", F: "f", G: "ງ", H: "h", I: "i", J: "ว",
                K: "k", L: "l", M: "๓", N: "ຖ", O: "໐", P: "p", Q: "๑", R: "r", S: "Ş", T: "t",
                U: "น", V: "ง", W: "ຟ", X: "x", Y: "ฯ", Z: "ຊ"
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
        },
        {
            name: "font_small_caps",
            prefix: "",
            suffix: "",
            map: {
                a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ғ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
                k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "s", t: "ᴛ",
                u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
                A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ғ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
                K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "s", T: "ᴛ",
                U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
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
        { symbol: "👑", name: "Crown" },
        { symbol: "࿐", name: "Flower Swirl" },
        { symbol: "☯", name: "Yin Yang" },
        { symbol: "모", name: "Korean Character" },
        { symbol: "☂", name: "Umbrella" },
        { symbol: "ⓥ", name: "Circled V" },
        { symbol: "𖹭", name: "Ethiopic Syllable" },
        { symbol: "么", name: "Chinese Character" },
        { symbol: "✓", name: "Check Mark" },
        { symbol: "☫", name: "Farsi Symbol" },
        { symbol: "☬", name: "Adi Shakti" },
        { symbol: "『", name: "Left Corner Bracket" },
        { symbol: "』", name: "Right Corner Bracket" },
        { symbol: "༒", name: "Tibetan Sign" },
        { symbol: "☠", name: "Skull and Crossbones" },
        { symbol: "メ", name: "Japanese Character" },
        { symbol: "𐚁", name: "Cypriot Syllable" }
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
        { symbol: "🎀", name: "Ribbon" },
        { symbol: "➬", name: "Right Arrow with Tail" },
        { symbol: "✿⃟", name: "Flower with Ring" },
        { symbol: "⨳", name: "Triple Asterisk" },
        { symbol: "┊", name: "Light Separator" },
        { symbol: "◯", name: "White Circle" },
        { symbol: "☻", name: "Black Smiling Face" },
        { symbol: "꫟", name: "Decorative Border" },
        { symbol: "ˣ‿ˣ", name: "Smiley Face" },
        { symbol: "➵", name: "Right Arrow with Loop" },
        { symbol: "𓄂", name: "Egyptian Vulture" },
        { symbol: "ꪶ", name: "Tai Tham Sign" },
        { symbol: "乡", name: "Chinese Town" }
    ]
};

// ===== CORE FUNCTIONS =====
function convert(name, map) {
    return name.split("").map(ch => {
        if (map[ch] !== undefined) return map[ch];
        if (map[ch.toLowerCase()] !== undefined) return map[ch.toLowerCase()];
        if (map[ch.toUpperCase()] !== undefined) return map[ch.toUpperCase()];
        return ch;
    }).join("");
}

function generateStyles() {
    const name = document.getElementById('nameInput')?.value.trim();
    const result = document.getElementById('result');
    const resultsCount = document.getElementById('resultsCount');
    
    if (!result) return;
    result.innerHTML = "";
    
    if (!name) {
        result.innerHTML = `<div class="empty-state"><i class="fas fa-magic"></i><p>Enter your name above to generate stylish nicknames</p><p class="sub-text">Perfect for Free Fire, PUBG, BGMI, Instagram, and YouTube</p></div>`;
        if (resultsCount) resultsCount.textContent = "0 styles";
        return;
    }
    
    const styles = stylesByCategory[currentFilter] || [];
    
    if (styles.length === 0) {
        result.innerHTML = `<div class="empty-state"><i class="fas fa-exclamation-circle"></i><p>No styles available for this category yet.</p><p class="sub-text">Check back soon for updates!</p></div>`;
        if (resultsCount) resultsCount.textContent = "0 styles";
        return;
    }
    
    const shuffled = [...styles].sort(() => Math.random() - 0.5);
    
    shuffled.forEach(style => {
        const styled = style.prefix + convert(name, style.map) + style.suffix;
        const escapedStyled = styled.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        
        const div = document.createElement('div');
        div.className = 'style-card';
        div.innerHTML = `<div class="style-text">${styled}</div><button class="copy-btn" onclick="copyText('${escapedStyled}', this)"><i class="fas fa-copy"></i> Copy</button>`;
        result.appendChild(div);
    });
    
    if (resultsCount) resultsCount.textContent = `${styles.length} styles`;
}

function selectCategory(type) {
    currentFilter = type;
    
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.category-btn').forEach(btn => {
        if (btn.textContent.toLowerCase().replace(/\s/g, '').includes(type)) {
            btn.classList.add('active');
        }
    });
    
    const name = document.getElementById('nameInput')?.value.trim();
    if (name) generateStyles();
    
    loadMiniSuggestions();
}

// ===== SUGGESTIONS TRAY SYSTEM =====
function loadMiniSuggestions() {
    const miniGrid = document.getElementById('miniSuggestions');
    const categoryName = document.getElementById('currentCategoryName');
    const suggestionCount = document.getElementById('suggestionCount');
    
    if (!miniGrid || !categoryName || !suggestionCount) return;
    
    categoryName.textContent = currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1);
    const categorySuggestions = suggestionsData[currentFilter] || [];
    
    if (categorySuggestions.length === 0) {
        miniGrid.innerHTML = '<p style="color: var(--gray); font-size: 0.9rem;">No suggestions yet</p>';
        suggestionCount.textContent = '0 suggestions';
        return;
    }
    
    const shuffled = [...categorySuggestions].sort(() => Math.random() - 0.5);
    currentMiniSuggestions = shuffled.slice(0, 3);
    suggestionCount.textContent = `${categorySuggestions.length} suggestions`;
    
    let html = '';
    currentMiniSuggestions.forEach(suggestion => {
        const escapedSuggestion = suggestion.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        html += `<div class="suggestion-mini-card"><span class="suggestion-mini-text" title="${suggestion}">${suggestion}</span><button class="suggestion-mini-copy" onclick="copyText('${escapedSuggestion}')" title="Copy"><i class="fas fa-copy"></i></button></div>`;
    });
    
    miniGrid.innerHTML = html;
}

function toggleFullSuggestions() {
    const modal = document.getElementById('fullSuggestionsModal');
    const modalCategory = document.getElementById('modalCategoryName');
    
    if (!modal || !modalCategory) return;
    
    modalCategory.textContent = currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1);
    loadFullSuggestions();
    modal.classList.add('show');
}

function closeFullSuggestions() {
    const modal = document.getElementById('fullSuggestionsModal');
    if (modal) modal.classList.remove('show');
}

function loadFullSuggestions() {
    const fullGrid = document.getElementById('fullSuggestionsGrid');
    const categorySuggestions = suggestionsData[currentFilter] || [];
    
    if (!fullGrid) return;
    if (categorySuggestions.length === 0) {
        fullGrid.innerHTML = '<p style="text-align: center; color: var(--gray); padding: 2rem;">No suggestions available</p>';
        return;
    }
    
    let html = '';
    categorySuggestions.forEach(suggestion => {
        const escapedSuggestion = suggestion.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        html += `<div class="suggestion-card"><div class="suggestion-text">${suggestion}</div><button class="suggestion-copy" onclick="copyText('${escapedSuggestion}')"><i class="fas fa-copy"></i> Copy</button></div>`;
    });
    
    fullGrid.innerHTML = html;
}

// ===== SYMBOL PICKER =====
function openSymbolModal() {
    const modal = document.getElementById('symbolModal');
    if (modal) {
        modal.classList.add('show');
        loadSymbolCategories();
    }
}

function closeSymbolModal() {
    const modal = document.getElementById('symbolModal');
    if (modal) modal.classList.remove('show');
}

function loadSymbolCategories() {
    const categoriesDiv = document.getElementById('symbolCategories');
    const symbolsGrid = document.getElementById('symbolsGrid');
    if (!categoriesDiv || !symbolsGrid) return;
    
    let categoriesHtml = '';
    let firstCategory = '';
    
    Object.keys(symbolsData).forEach((category, index) => {
        if (index === 0) firstCategory = category;
        categoriesHtml += `<button class="symbol-category ${index === 0 ? 'active' : ''}" onclick="loadSymbols('${category}')">${category.charAt(0).toUpperCase() + category.slice(1)}</button>`;
    });
    
    categoriesDiv.innerHTML = categoriesHtml;
    loadSymbols(firstCategory);
}

function loadSymbols(category) {
    const symbolsGrid = document.getElementById('symbolsGrid');
    const symbols = symbolsData[category] || [];
    if (!symbolsGrid) return;
    
    document.querySelectorAll('.symbol-category').forEach(btn => btn.classList.remove('active'));
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
        html += `<div class="symbol-item"><div class="symbol-display">${symbol.symbol}</div><div class="symbol-name">${symbol.name}</div><div class="symbol-actions"><button class="insert-btn" onclick="insertSymbol('${escapedSymbol}')"><i class="fas fa-plus"></i> Insert</button><button class="copy-symbol-btn" onclick="copyText('${escapedSymbol}')"><i class="fas fa-copy"></i> Copy</button></div></div>`;
    });
    
    symbolsGrid.innerHTML = html;
}

function insertSymbol(symbol) {
    const nameInput = document.getElementById('nameInput');
    if (!nameInput) return;
    
    const currentValue = nameInput.value;
    const cursorPos = nameInput.selectionStart;
    nameInput.value = currentValue.substring(0, cursorPos) + symbol + currentValue.substring(cursorPos);
    nameInput.selectionStart = nameInput.selectionEnd = cursorPos + symbol.length;
    nameInput.focus();
    
    closeSymbolModal();
    showToast('✅ Symbol inserted');
}

// ===== UTILITY FUNCTIONS =====
function copyText(text, buttonElement = null) {
    navigator.clipboard.writeText(text).then(() => {
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
        showToast('📋 Copied!');
    }).catch(() => showToast('❌ Failed to copy'));
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.style.display = 'block';
    
    if (window.toastTimeout) clearTimeout(window.toastTimeout);
    window.toastTimeout = setTimeout(() => {
        toast.style.display = 'none';
    }, 2000);
}

// ===== THEME FUNCTIONS =====
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    const themeStatus = document.getElementById('themeStatus');
    
    if (isDarkTheme) {
        body.classList.add('dark-theme');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        if (themeStatus) themeStatus.textContent = 'Dark';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        if (themeStatus) themeStatus.textContent = 'Light';
        localStorage.setItem('theme', 'light');
    }
}

// ===== SIDEBAR FUNCTIONS =====
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('open');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('open');
}

function showGuide() {
    const modal = document.getElementById('guideModal');
    if (modal) {
        modal.classList.add('show');
        closeSidebar();
    }
}

function closeGuide() {
    const modal = document.getElementById('guideModal');
    if (modal) modal.classList.remove('show');
}

// ===== NOTES FUNCTIONS =====
function updateNoteCount() {
    const noteText = document.getElementById('noteText');
    const noteCount = document.getElementById('noteCount');
    if (!noteText || !noteCount) return;
    
    const words = noteText.value.trim().split(/\s+/).filter(word => word.length > 0);
    noteCount.textContent = `${words.length}/100`;
    noteCount.style.color = words.length > 100 ? '#ef4444' : '';
}

function saveNote() {
    const noteText = document.getElementById('noteText');
    if (noteText) {
        localStorage.setItem('nicknameNotes', noteText.value);
        showToast('💾 Note saved');
    }
}

function clearNote() {
    const noteText = document.getElementById('noteText');
    if (noteText) {
        noteText.value = '';
        updateNoteCount();
        localStorage.removeItem('nicknameNotes');
        showToast('🗑️ Note cleared');
    }
}

function loadNote() {
    const savedNote = localStorage.getItem('nicknameNotes');
    const noteText = document.getElementById('noteText');
    if (savedNote && noteText) {
        noteText.value = savedNote;
        updateNoteCount();
    }
}

// ===== SCROLL TO TOP =====
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    if (!scrollTopBtn) return;
    
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('show', window.pageYOffset > 300);
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== EASY ADD FUNCTIONS =====
window.addStyle = function(category, styleName, prefix, suffix, charMap) {
    if (!stylesByCategory[category]) stylesByCategory[category] = [];
    if (stylesByCategory[category].find(s => s.name === styleName)) {
        showToast(`⚠️ Style exists`);
        return false;
    }
    
    stylesByCategory[category].push({
        name: styleName,
        prefix: prefix || "",
        suffix: suffix || "",
        map: charMap
    });
    
    showToast(`✨ ${styleName}`);
    if (currentFilter === category) {
        const name = document.getElementById('nameInput')?.value.trim();
        if (name) generateStyles();
    }
    return true;
};

window.addSuggestion = function(category, suggestionText) {
    if (!suggestionsData[category]) suggestionsData[category] = [];
    suggestionsData[category].push(suggestionText);
    showToast(`💡 Added to ${category}`);
    return true;
};

window.addSymbols = function(symbolCategory, symbol, name) {
    if (!symbolsData[symbolCategory]) symbolsData[symbolCategory] = [];
    symbolsData[symbolCategory].push({ symbol: symbol, name: name });
    showToast(`🔣 ${name}`);
    return true;
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        isDarkTheme = true;
        document.body.classList.add('dark-theme');
        const themeToggle = document.getElementById('themeToggle');
        const themeStatus = document.getElementById('themeStatus');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        if (themeStatus) themeStatus.textContent = 'Dark';
    }
    
    // Load note
    loadNote();
    
    // Event listeners
    const menuToggle = document.getElementById('menuToggle');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const themeToggle = document.getElementById('themeToggle');
    const noteText = document.getElementById('noteText');
    const nameInput = document.getElementById('nameInput');
    
    if (menuToggle) menuToggle.addEventListener('click', toggleSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (noteText) noteText.addEventListener('input', updateNoteCount);
    
    // Close modals on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                if (this.id === 'symbolModal') closeSymbolModal();
                if (this.id === 'guideModal') closeGuide();
                if (this.id === 'fullSuggestionsModal') closeFullSuggestions();
            }
        });
    });
    
    // Enter key
    if (nameInput) {
        nameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') generateStyles();
        });
    }
    
    // Initialize
    initScrollTop();

// Style 1: Panda Love Style
addStyle('love', 'panda_love_style', '˗ˏˋ🐼ﮩ٨ـ', 'ـﮩ٨ـ🐼ˎˊ˗', {
    a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
    k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
    u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ",
    A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
    K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
    U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ"
});

    ", Z: "ℤ",
  a: "𝕒̈", b: "𝕓̈", c: "𝕔̈", d: "𝕕̈", e: "𝕖̈", f: "𝕗̈", g: "𝕘̈", h: "𝕙̈", i: "𝕚̈", j: "𝕛̈",
  k: "𝕜̈", l: "𝕝̈", m: "𝕞̈", n: "𝕟̇", o: "𝕠̈", p: "𝕡̈", q: "𝕢̈", r: "𝕣̈", s: "𝕤̈", t: "𝕥̈",
  u: "𝕦̈", v: "𝕧̈", w: "𝕨̈", x: "𝕩̈", y: "𝕪̈", z: "𝕫̈"
});

// Style 67: Exclamation Negative Circle
addStyle('love', 'love_exclamation_negative', '‼ ⋆｡˚', '⋆｡˚🦋⃟💗᪲᪲᪲', {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
  a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
});

// Style 68: Star Xi Accent
addStyle('love', 'love_star_xi_accent', '⋆𐙚‼', '‼♡', {
  A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
  K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
  U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢",
  a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
  k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
  u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢"
});

// Style 69: Tai Viet Greek
addStyle('love', 'love_tai_viet_greek', 'ꪶ ꩜ꫂ ̤̮', ' ̤̮ 💕⃝🕊️ᯓ★', {
  a: "̤̮α", b: "̤̮в", c: "̤̮c", d: "̤̮ɗ", e: "̤̮ε", f: "̤̮ƒ", g: "̤̮ɠ", h: "̤̮н", i: "̤̮ɪ", j: "̤̮נ",
  k: "̤̮κ", l: "̤̮ℓ", m: "̤̮м", n: "̤̮η", o: "̤̮σ", p: "̤̮ρ", q: "̤̮զ", r: "̤̮я", s: "̤̮ѕ", t: "̤̮τ",
  u: "̤̮υ", v: "̤̮ν", w: "̤̮ω", x: "̤̮χ", y: "̤̮γ", z: "̤̮ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 70: Cham Greek
addStyle('love', 'love_cham_greek', '꩜', '𓏧𖹭࿐', {
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
});

// Style 71: Arabic Numbers Italic
addStyle('love', 'love_arabic_numbers_italic', '١٥٧٤♡_', ' ‼♡‼', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 72: Bold Italic with Symbol
addStyle('love', 'love_bold_italic_symbol', '', '', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 73: Kaomoji Greek
addStyle('love', 'love_kaomoji_greek', '(˃͈ ˂͈ ) ', '  ᶻ 𝗓 𐰁', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "h", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 74: Tibetan Greek
addStyle('love', 'love_tibetan_greek', '༝༚༝༚‹ ̤̮', ' ̤̮ 𖹭࿐', {
  a: "̤̮α", b: "̤̮в", c: "̤̮c", d: "̤̮ɗ", e: "̤̮ε", f: "̤̮ƒ", g: "̤̮ɠ", h: "̤̮н", i: "̤̮ɪ", j: "̤̮נ",
  k: "̤̮κ", l: "̤̮ℓ", m: "̤̮м", n: "̤̮η", o: "̤̮σ", p: "̤̮ρ", q: "̤̮զ", r: "̤̮я", s: "̤̮ѕ", t: "̤̮τ",
  u: "̤̮υ", v: "̤̮ν", w: "̤̮ω", x: "̤̮χ", y: "̤̮γ", z: "̤̮ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 75: Simple Greek
addStyle('love', 'love_simple_greek_2', '', ' 🫰🏻♥️', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "h", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 76: Heart Bold Italic
addStyle('love', 'love_heart_bold_italic', '💗᪲᪲᪲ —͟͞͞', ' Ξズ𓏧𖹭', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 77: Arrow Canadian
addStyle('love', 'love_arrow_canadian', '⇝𝄀𝄁𝄃', '𝄀𝄃 𓆩˃ᴗ˂𓆪', {
  A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
  K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
  U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ",
  a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
  k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
  u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ"
});

// Style 78: Heart Wave Accent
addStyle('love', 'love_heart_wave_accent', '𓆩💝𓆪 ֶ', ' ִֶָ🐇་༘࿐', {
  A: "A̾", B: "B̾", C: "C̾", D: "D̾", E: "E̾", F: "F̾", G: "G̾", H: "H̾", I: "I̾", J: "J̾",
  K: "K̾", L: "L̾", M: "M̾", N: "N̾", O: "O̾", P: "P̾", Q: "Q̾", R: "R̾", S: "S̾", T: "T̾",
  U: "U̾", V: "V̾", W: "W̾", X: "X̾", Y: "Y̾", Z: "Z̾",
  a: "a̾", b: "b̾", c: "c̾", d: "d̾", e: "e̾", f: "f̾", g: "g̾", h: "h̾", i: "i̾", j: "j̾",
  k: "k̾", l: "l̾", m: "m̾", n: "n̾", o: "o̾", p: "p̾", q: "q̾", r: "r̾", s: "s̾", t: "t̾",
  u: "u̾", v: "v̾", w: "w̾", x: "x̾", y: "y̾", z: "z̾"
});

// Style 79: Miao Star Accent
addStyle('love', 'love_miao_star_accent', '𖹭 ', ' 𖹭࿐', {
  A: "A⨳", B: "B⨳", C: "C⨳", D: "D⨳", E: "E⨳", F: "F⨳", G: "G⨳", H: "H⨳", I: "I⨳", J: "J⨳",
  K: "K⨳", L: "L⨳", M: "M⨳", N: "N⨳", O: "O⨳", P: "P⨳", Q: "Q⨳", R: "R⨳", S: "S⨳", T: "T⨳",
  U: "U⨳", V: "V⨳", W: "W⨳", X: "X⨳", Y: "Y⨳", Z: "Z⨳",
  a: "a⨳", b: "b⨳", c: "c⨳", d: "d⨳", e: "e⨳", f: "f⨳", g: "g⨳", h: "h⨳", i: "i⨳", j: "j⨳",
  k: "k⨳", l: "l⨳", m: "m⨳", n: "n⨳", o: "o⨳", p: "p⨳", q: "q⨳", r: "r⨳", s: "s⨳", t: "t⨳",
  u: "u⨳", v: "v⨳", w: "w⨳", x: "x⨳", y: "y⨳", z: "z⨳"
});

// Style 80: Hand Xi Accent
addStyle('love', 'love_hand_xi_accent', '🫰🏻𖹭', '𖹭(≧ᴗ≦)ᶻ 𝗓 𐰁', {
  A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
  K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
  U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢",
  a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
  k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
  u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢"
});

// Style 81: Star Decorated
addStyle('love', 'love_star_decorated', '☆', '☆𖹭࿐', {
  A: "☆A☆", B: "☆B☆", C: "☆C☆", D: "☆D☆", E: "☆E☆", F: "☆F☆", G: "☆G☆", H: "☆H☆", I: "☆I☆", J: "☆J☆",
  K: "☆K☆", L: "☆L☆", M: "☆M☆", N: "☆N☆", O: "☆O☆", P: "☆P☆", Q: "☆Q☆", R: "☆R☆", S: "☆S☆", T: "☆T☆",
  U: "☆U☆", V: "☆V☆", W: "☆W☆", X: "☆X☆", Y: "☆Y☆", Z: "☆Z☆",
  a: "☆a☆", b: "☆b☆", c: "☆c☆", d: "☆d☆", e: "☆e☆", f: "☆f☆", g: "☆g☆", h: "☆h☆", i: "☆i☆", j: "☆j☆",
  k: "☆k☆", l: "☆l☆", m: "☆m☆", n: "☆n☆", o: "☆o☆", p: "☆p☆", q: "☆q☆", r: "☆r☆", s: "☆s☆", t: "☆t☆",
  u: "☆u☆", v: "☆v☆", w: "☆w☆", x: "☆x☆", y: "☆y☆", z: "☆z☆"
});

// Style 82: LOVE Miao Star
addStyle('love', 'love_miao_star', 'ᴸᴼⱽᴱ『𖹭』', '『𖹭』💗', {
  A: "A⨳", B: "B⨳", C: "C⨳", D: "D⨳", E: "E⨳", F: "F⨳", G: "G⨳", H: "H⨳", I: "I⨳", J: "J⨳",
  K: "K⨳", L: "L⨳", M: "M⨳", N: "N⨳", O: "O⨳", P: "P⨳", Q: "Q⨳", R: "R⨳", S: "S⨳", T: "T⨳",
  U: "U⨳", V: "V⨳", W: "W⨳", X: "X⨳", Y: "Y⨳", Z: "Z⨳",
  a: "a⨳", b: "b⨳", c: "c⨳", d: "d⨳", e: "e⨳", f: "f⨳", g: "g⨳", h: "h⨳", i: "i⨳", j: "j⨳",
  k: "k⨳", l: "l⨳", m: "m⨳", n: "n⨳", o: "o⨳", p: "p⨳", q: "q⨳", r: "r⨳", s: "s⨳", t: "t⨳",
  u: "u⨳", v: "v⨳", w: "w⨳", x: "x⨳", y: "y⨳", z: "z⨳"
});

// Style 83: Cute Flower Cursive
addStyle('love', 'love_cute_flower_cursive', 'ᶜᵘᵗᵉ❁', '𓏧𖹭࿐', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
});

// Style 84: Tai Star Accent
addStyle('love', 'love_tai_star_accent', 'ꫂ❁🫰🏻', '*(≧ᴗ≦)', {
  A: "A*", B: "B*", C: "C*", D: "D*", E: "E*", F: "F*", G: "G*", H: "H*", I: "I*", J: "J*",
  K: "K*", L: "L*", M: "M*", N: "N*", O: "O*", P: "P*", Q: "Q*", R: "R*", S: "S*", T: "T*",
  U: "U*", V: "V*", W: "W*", X: "X*", Y: "Y*", Z: "Z*",
  a: "a*", b: "b*", c: "c*", d: "d*", e: "e*", f: "f*", g: "g*", h: "h*", i: "i*", j: "j*",
  k: "k*", l: "l*", m: "m*", n: "n*", o: "o*", p: "p*", q: "q*", r: "r*", s: "s*", t: "t*",
  u: "u*", v: "v*", w: "w*", x: "x*", y: "y*", z: "z*"
});

// Style 85: Arrow Short Stroke
addStyle('love', 'love_arrow_short_stroke', '►►►', '°°♡‼࿐', {
  A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶", I: "I̶", J: "J̶",
  K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
  U: "U̶", V: "V̶", W: "W̶", X: "X̶", Y: "Y̶", Z: "Z̶",
  a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶", i: "i̶", j: "j̶",
  k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶", q: "q̶", r: "r̶", s: "s̶", t: "t̶",
  u: "u̶", v: "v̶", w: "w̶", x: "x̶", y: "y̶", z: "z̶"
});

// Style 86: Miao Greek
addStyle('love', 'love_miao_greek', '𓆩𖹭𓆪 ⟆ ', '˚｡ ˃ᴗ˂', {
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 87: Arabic Miao Sans
addStyle('love', 'love_arabic_miao_sans', '١٥٧٤𖹭', '_˃ᴗ˂☂', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 88: Sparkle Double Struck
addStyle('love', 'love_sparkle_double_struck', '❇︎⋆.', '🦋⃟💗᪲᪲᪲꧂', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
});

// Style 89: Star Currency
addStyle('love', 'love_star_currency', '⋆⋅☆⋅⋆ ─', '─⋆⋅☆⋅⋆', {
  A: "₳", B: "₲", C: "₵", D: "Đ", E: "₳", F: "₣", G: "₲", H: "Ⱨ", I: "ł", J: "₲",
  K: "₭", L: "Ⱡ", M: "₥", N: "₦", O: "Ø", P: "₱", Q: "Ꝗ", R: "Ɽ", S: "₴", T: "₮",
  U: "Ṳ", V: "ᐯ", W: "₩", X: "Ӿ", Y: "Ɏ", Z: "ƶ",
  a: "₳", b: "₲", c: "₵", d: "đ", e: "₳", f: "₣", g: "₲", h: "Ⱨ", i: "ł", j: "₲",
  k: "₭", l: "Ⱡ", m: "₥", n: "₦", o: "ø", p: "₱", q: "Ꝗ", r: "Ɽ", s: "₴", t: "₮",
  u: "Ṳ", v: "ᐯ", w: "₩", x: "Ӿ", y: "Ɏ", z: "ƶ"
});

// Style 90: Kaomoji Monospace
addStyle('love', 'love_kaomoji_monospace', '˃ᴗ˂ ˚｡?', '? ୧⍤⃝💐', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 91: Heart Egyptian Greek
addStyle('love', 'love_heart_egyptian_greek', '♡𓍯𓏧', '⋆˙⟡ᶜᵘᵗᵉ', {
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
});

// Style 92: Waifu Lambda
addStyle('love', 'love_waifu_lambda', 'ᴡɪꜰu͢ ⧉ͷ', '⧉🦋⃟💗᪲᪲᪲', {
  A: "Λ", B: "ɮ", C: "Ͷ", D: "ᗫ", E: "Ɛ", F: "Ғ", G: "Ϭ", H: "Ӈ", I: "Ꭵ", J: "Ꮰ",
  K: "Ҡ", L: "ᒪ", M: "ᗰ", N: "ͷ", O: "Ө", P: "Ꭾ", Q: "Ϙ", R: "ᖇ", S: "ᔕ", T: "Ƭ",
  U: "Ա", V: "Ỽ", W: "Ꮃ", X: "Ӿ", Y: "ϓ", Z: "ɀ",
  a: "λ", b: "ɮ", c: "Ͷ", d: "ᗫ", e: "Ɛ", f: "ғ", g: "Ϭ", h: "Ӈ", i: "Ꭵ", j: "Ꮰ",
  k: "ҡ", l: "ᒪ", m: "ᗰ", n: "ͷ", o: "Ө", p: "Ꭾ", q: "Ϙ", r: "ᖇ", s: "ᔕ", t: "Ƭ",
  u: "Ա", v: "Ỽ", w: "Ꮃ", x: "Ӿ", y: "ϓ", z: "ɀ"
});

// Style 93: I Love Thai
addStyle('love', 'love_i_love_thai', 'ｉˡᵒᵛᵉ☆⋅', ' ✿☂', {
  a: "ค", b: "๒", c: "ς", d: "ɗ", e: "є", f: "ſ", g: "ɠ", h: "ħ", i: "เ", j: "ʝ",
  k: "ƙ", l: "ɭ", m: "๓", n: "ภ", o: "σ", p: "ρ", q: "๑", r: "я", s: "ร", t: "Շ",
  u: "υ", v: "ש", w: "ω", x: "ẋ", y: "γ", z: "ƶ",
  A: "ค", B: "๒", C: "ς", D: "ɗ", E: "є", F: "ſ", G: "ɠ", H: "ħ", I: "เ", J: "ʝ",
  K: "ƙ", L: "ɭ", M: "๓", N: "ภ", O: "σ", P: "ρ", Q: "๑", R: "я", S: "ร", T: "Շ",
  U: "υ", V: "ש", W: "ω", X: "ẋ", Y: "γ", Z: "ƶ"
});

// Style 94: Dash Negative Circle
addStyle('love', 'love_dash_negative', '🅝─🅐─🅜─🅔 ', ' 𖹭ᴗ˂', {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
  a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
});

// Style 95: Butterfly Bold Sans
addStyle('love', 'love_butterfly_bold_sans', '🦋⃟', '⋆˙⟡💗᪲᪲᪲🩹', {
  A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
});

// Style 96: Heart Math Bold
addStyle('love', 'love_heart_math_bold', '𓆩💗᪲᪲᪲𓆪⋆⋅', '.. ִֶָ 🪽་༘࿐', {
  a: "𝛂", b: "𝛃", c: "𝛇", d: "𝛅", e: "𝛆", f: "𝛇", g: "𝛓", h: "𝛑", i: "𝖎", j: "𝖏",
  k: "𝛋", l: "𝛊", m: "𝛍", n: "𝛈", o: "𝛐", p: "𝛒", q: "𝛗", r: "𝛑", s: "𝛔", t: "𝛕",
  u: "𝛖", v: "𝛎", w: "𝛚", x: "𝛘", y: "𝛙", z: "𝛏",
  A: "Α", B: "Β", C: "Γ", D: "Δ", E: "Ε", F: "Ζ", G: "Η", H: "Θ", I: "Ι", J: "Κ",
  K: "Λ", L: "Μ", M: "Ν", N: "Ξ", O: "Ο", P: "Π", Q: "Ρ", R: "Σ", S: "Τ", T: "Υ",
  U: "Φ", V: "Χ", W: "Ψ", X: "Ω", Y: "Α", Z: "Β"
});

// Style 97: Arrow Square Accent
addStyle('love', 'love_arrow_square_accent', '➨⟆', '⟅ᯓ♡', {
  A: "ᴬ▢", B: "ᴮ▢", C: "ᶜ▢", D: "ᴰ▢", E: "ᴱ▢", F: "ᶠ▢", G: "ᴳ▢", H: "ᴴ▢", I: "ᴵ▢", J: "ᴶ▢",
  K: "ᴷ▢", L: "ᴸ▢", M: "ᴹ▢", N: "ᴺ▢", O: "ᴼ▢", P: "ᴾ▢", Q: "ᵠ▢", R: "ᴿ▢", S: "ˢ▢", T: "ᵀ▢",
  U: "ᵁ▢", V: "ⱽ▢", W: "ᵂ▢", X: "ˣ▢", Y: "ʸ▢", Z: "ᶻ▢",
  a: "ᵃ▢", b: "ᵇ▢", c: "ᶜ▢", d: "ᵈ▢", e: "ᵉ▢", f: "ᶠ▢", g: "ᵍ▢", h: "ʰ▢", i: "ⁱ▢", j: "ʲ▢",
  k: "ᵏ▢", l: "ˡ▢", m: "ᵐ▢", n: "ⁿ▢", o: "ᵒ▢", p: "ᵖ▢", q: "ᵠ▢", r: "ʳ▢", s: "ˢ▢", t: "ᵗ▢",
  u: "ᵘ▢", v: "ᵛ▢", w: "ʷ▢", x: "ˣ▢", y: "ʸ▢", z: "ᶻ▢"
});

// Style 98: Japanese Brackets
addStyle('love', 'love_japanese_brackets', '亗【', '】𓇢𓆸', {
  A: "【A】", B: "【B】", C: "【C】", D: "【D】", E: "【E】", F: "【F】", G: "【G】", H: "【H】", I: "【I】", J: "【J】",
  K: "【K】", L: "【L】", M: "【M】", N: "【N】", O: "【O】", P: "【P】", Q: "【Q】", R: "【R】", S: "【S】", T: "【T】",
  U: "【U】", V: "【V】", W: "【W】", X: "【X】", Y: "【Y】", Z: "【Z】",
  a: "【a】", b: "【b】", c: "【c】", d: "【d】", e: "【e】", f: "【f】", g: "【g】", h: "【h】", i: "【i】", j: "【j】",
  k: "【k】", l: "【l】", m: "【m】", n: "【n】", o: "【o】", p: "【p】", q: "【q】", r: "【r】", s: "【s】", t: "【t】",
  u: "【u】", v: "【v】", w: "【w】", x: "【x】", y: "【y】", z: "【z】"
});

// Style 99: Baby Greek Sans
addStyle('love', 'love_baby_greek_sans', 'Βαвγܔ ❇︎', '⋆˙⟡🧸', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 100: Koppa Subscript
addStyle('love', 'love_koppa_subscript', 'ϟ ', ' ϟ 💘', {
  A: "Ḁͦ", B: "B̥ͦ", C: "C̥ͦ", D: "D̥ͦ", E: "E̥ͦ", F: "F̥ͦ", G: "G̥ͦ", H: "H̥ͦ", I: "I̥ͦ", J: "J̥ͦ",
  K: "K̥ͦ", L: "L̥ͦ", M: "M̥ͦ", N: "N̥ͦ", O: "O̥ͦ", P: "P̥ͦ", Q: "Q̥ͦ", R: "R̥ͦ", S: "S̥ͦ", T: "T̥ͦ",
  U: "U̥ͦ", V: "V̥ͦ", W: "W̥ͦ", X: "X̥ͦ", Y: "Y̥ͦ", Z: "Z̥ͦ",
  a: "ḁͦ", b: "b̥ͦ", c: "c̥ͦ", d: "d̥ͦ", e: "e̥ͦ", f: "f̥ͦ", g: "g̥ͦ", h: "h̥ͦ", i: "i̥ͦ", j: "j̥ͦ",
  k: "k̥ͦ", l: "l̥ͦ", m: "m̥ͦ", n: "n̥ͦ", o: "o̥ͦ", p: "p̥ͦ", q: "q̥ͦ", r: "r̥ͦ", s: "s̥ͦ", t: "t̥ͦ",
  u: "u̥ͦ", v: "v̥ͦ", w: "w̥ͦ", x: "x̥ͦ", y: "y̥ͦ", z: "z̥ͦ"
});

// Style 101: Gothic Script
addStyle('love', 'love_gothic_script', '㋚ ', '_𝐃𝐚𝐫𝐥𖧷𝐢𝐧𝐠⋆｡˚💗', {
  A: "𐌰", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "𐌻",
  K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍁", R: "𐍂", S: "𐍃", T: "𐍄",
  U: "𐍀", V: "𝚅", W: "𐌸", X: "𐍇", Y: "𐍅", Z: "𐌶",
  a: "𐌰", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𐌻",
  k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍁", r: "𐍂", s: "𐍃", t: "𐍄",
  u: "𐍀", v: "𝚅", w: "𐌸", x: "𐍇", y: "𐍅", z: "𐌶"
});

// Style 102: Cute Pie Greek
addStyle('love', 'love_cute_pie_greek', 'C̶u̶t̶i̶e̶ P̶i̶e̶ 𓆩𓆪', ' 𓆩𓆪💕⃝🕊️', {
  a: "α", b: "в", c: "ċ", d: "ɗ", e: "є", f: "ƒ", g: "ĝ", h: "ħ", i: "ï", j: "ʝ",
  k: "ƙ", l: "ĺ", m: "ɱ", n: "ռ", o: "ο", p: "ք", q: "զ", r: "ř", s: "ֆ", t: "թ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "Α", B: "Β", C: "Ċ", D: "Ɗ", E: "Є", F: "Ƒ", G: "Ĝ", H: "Ħ", I: "Ï", J: "ʝ",
  K: "Ƙ", L: "Ĺ", M: "Μ", N: "Ռ", O: "Ο", P: "Ք", Q: "Ջ", R: "Ř", S: "Ֆ", T: "Թ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Զ"
});

// Style 103: Butterfly Fly Cursive
addStyle('love', 'love_butterfly_fly_cursive', '𝑩𐦍𝒕𝒕𝒆𝒓 𝒇𝒍𝒚 🦋⃟', ' ⋆⋅☆࿐', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
});

// Style 104: Star Monospace
addStyle('love', 'love_star_monospace', '꧁⋆₊˚✧ ', ' ✧˚₊⋆꧂ ᶠᵒʳᵉᵛᵉʳ ツ', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚃", T: "𝚄",
  U: "𝚅", V: "𝚆", W: "𝚇", X: "𝚈", Y: "𝚉", Z: "𝙰",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚝", t: "𝚞",
  u: "𝚟", v: "𝚠", w: "𝚡", x: "𝚢", y: "𝚣", z: "𝚊"
});

// Style 105: Flower Monospace
addStyle('love', 'love_flower_monospace', 'ҩᴜᥱ֟፝ᥱɴ ⟡˙⋆˖ ☘︎ ', ' ☘︎ ˖⋆˙⟡࿐', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 106: Lover Bold Italic
addStyle('love', 'love_lover_bold_italic', 'ℒℴνℯʳ̤̮  -`♡´-', ' -`♡´-', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 107: Forever Fraktur
addStyle('love', 'love_forever_fraktur', ' ᶠᵒʳᵉᵛᵉʳ̤̮ 𓆝 ｡.˚', ' ⭑.ᐟ', {
  a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
  k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
  u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
  A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
  K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
  U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅"
});

// Style 108: Flower Cherokee
addStyle('love', 'love_flower_cherokee', '˗ˏˋ♡ﮩ٨ـ', 'ـﮩ٨ـ♡ˎˊ˗', {
  A: "Ꭺ", B: "Ᏼ", C: "Ꮯ", D: "Ꭰ", E: "Ꭼ", F: "Ꮀ", G: "Ꮐ", H: "Ꮋ", I: "Ꭵ", J: "Ꭻ",
  K: "Ꮶ", L: "Ꮮ", M: "Ꮇ", N: "Ꮑ", O: "Ꮎ", P: "Ꮲ", Q: "Ꭴ", R: "Ꮢ", S: "Ꮪ", T: "Ꭲ",
  U: "Ꮼ", V: "Ꮙ", W: "Ꮗ", X: "X", Y: "Ꮍ", Z: "Ꮓ",
  a: "Ꭺ", b: "Ᏼ", c: "Ꮯ", d: "Ꭰ", e: "Ꭼ", f: "Ꮀ", g: "Ꮐ", h: "Ꮋ", i: "Ꭵ", j: "Ꭻ",
  k: "Ꮶ", l: "Ꮮ", m: "Ꮇ", n: "Ꮑ", o: "Ꮎ", p: "Ꮲ", q: "Ꭴ", r: "Ꮢ", s: "Ꮪ", t: "Ꭲ",
  u: "Ꮼ", v: "Ꮙ", w: "Ꮗ", x: "X", y: "Ꮍ", z: "Ꮓ"
});

// Style 109: Tea Canadian
addStyle('love', 'love_tea_canadian', '', ' ☕︎ˎˊ˗', {
  a: "ᥲ", b: "ᑲ", c: "ᥴ", d: "ᑯ", e: "ᥱ", f: "ᖴ", g: "ᧁ", h: "ᕼ", i: "Ꭵ", j: "ᒎ",
  k: "ᛕ", l: "ᥣ", m: "ᴍ", n: "ᥒ", o: "᥆", p: "ρ", q: "ᑫ", r: "ᖇ", s: "ᔑ", t: "ᥴ",
  u: "ᑌ", v: "ᐯ", w: "᭙", x: "᥊", y: "ᥒ", z: "ɀ",
  A: "ᥲ", B: "ᑲ", C: "ᥴ", D: "ᑯ", E: "ᥱ", F: "ᖴ", G: "ᧁ", H: "ᕼ", I: "Ꭵ", J: "ᒎ",
  K: "ᛕ", L: "ᥣ", M: "ᴍ", N: "ᥒ", O: "᥆", P: "ρ", Q: "ᑫ", R: "ᖇ", S: "ᔑ", T: "ᥴ",
  U: "ᑌ", V: "ᐯ", W: "᭙", X: "᥊", Y: "ᥒ", Z: "ɀ"
});

// Style 110: Cloud Sans
addStyle('love', 'love_cloud_sans', '༒☁︎ ⋆ ｡˚', ' ˚｡⋆ ☁︎༒', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 111: Cute Hittite Double Struck
addStyle('love', 'love_cute_hittite_double', 'ᶜᵘᵗᵉ 𔓎 ₊˚·⛥ ', ' ⛥·˚₊ ✔', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "𝕟", O: "𝕠", P: "𝕡", Q: "𝕢", R: "𝕣", S: "𝕤", T: "𝕥",
  U: "𝕦", V: "𝕧", W: "𝕨", X: "𝕩", Y: "𝕪", Z: "𝕫",
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
});

// Style 112: Heart Canadian
addStyle('love', 'love_heart_canadian', '˗ˏˋ♡·˚₊', '₊˚·♡ˎˊ˗ ✿࿐', {
  a: "ᥲ", b: "ᑲ", c: "ᥴ", d: "ᑯ", e: "ᥱ", f: "ᖴ", g: "ᧁ", h: "ᕼ", i: "Ꭵ", j: "ᒎ",
  k: "ᛕ", l: "ᥣ", m: "ᴍ", n: "ᥒ", o: "᥆", p: "ρ", q: "ᑫ", r: "ᖇ", s: "ᔑ", t: "ᥴ",
  u: "ᑌ", v: "ᐯ", w: "᭙", x: "᥊", y: "ᥒ", z: "ɀ",
  A: "ᥲ", B: "ᑲ", C: "ᥴ", D: "ᑯ", E: "ᥱ", F: "ᖴ", G: "ᧁ", H: "ᕼ", I: "Ꭵ", J: "ᒎ",
  K: "ᛕ", L: "ᥣ", M: "ᴍ", N: "ᥒ", O: "᥆", P: "ρ", Q: "ᑫ", R: "ᖇ", S: "ᔑ", T: "ᥴ",
  U: "ᑌ", V: "ᐯ", W: "᭙", X: "᥊", Y: "ᥒ", Z: "ɀ"
});

// Style 113: Star Flower Monospace
addStyle('love', 'love_star_flower_monospace', '˗ˏ⛥⋆˙𓍊 ', ' 𓍊˙⋆⛥ˎ˗', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 114: Crazy Greek
addStyle('love', 'love_crazy_greek', 'ᶜʳᵃᶻʸ ଳᯓ ', ' ᯓଳ ✔', {
  A: "Δ", B: "β", C: "C", D: "Đ", E: "Σ", F: "Ϝ", G: "Ꮆ", H: "Ħ", I: "I", J: "J",
  K: "К", L: "Ꮭ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ŗ", S: "Ѕ", T: "Ͳ",
  U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "Ψ", Z: "Ẕ",
  a: "δ", b: "β", c: "c", d: "đ", e: "ε", f: "ϝ", g: "g", h: "ħ", i: "ι", j: "j",
  k: "κ", l: "l", m: "m", n: "η", o: "ø", p: "ƥ", q: "ǫ", r: "ŗ", s: "s", t: "t",
  u: "ц", v: "ν", w: "ш", x: "x", y: "ψ", z: "ẑ"
});

// Style 115: Yin Yang Canadian
addStyle('love', 'love_yin_yang_canadian', '⊹˚₊☯ ', ' ☯𓂁﹏𓊝﹏₊˚⊹', {
  A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
  K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
  U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ",
  a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
  k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
  u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ"
});

// Style 116: Double Greek
addStyle('love', 'love_double_greek', '༒⊹˚⚝', '⚝˚⊹༒', {
  A: "Δ", B: "β", C: "C", D: "Đ", E: "Σ", F: "Ϝ", G: "Ꮆ", H: "Ħ", I: "I", J: "J",
  K: "К", L: "Ꮭ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ŗ", S: "Ѕ", T: "Ͳ",
  U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "Ψ", Z: "Ẕ",
  a: "δ", b: "β", c: "c", d: "đ", e: "ε", f: "ϝ", g: "g", h: "ħ", i: "ι", j: "j",
  k: "κ", l: "l", m: "m", n: "η", o: "ø", p: "ƥ", q: "ǫ", r: "ŗ", s: "s", t: "t",
  u: "ц", v: "ν", w: "ш", x: "x", y: "ψ", z: "ẑ"
});

// Style 117: Panda Italic Math
addStyle('love', 'love_panda_italic_math', '🐼⃞ᴵᵐ•', '᭄࿐', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 21: Victory Monospace
addStyle('gamer', 'gamer_victory_monospace', '✌︎︎₊˚⊹', '⊹˚₊✌︎︎⁷⁷⁷', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 22: Chinese Superscript
addStyle('gamer', 'gamer_chinese_superscript', '么𓂃', '𓂃么⁴⁴⁴', {
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ",
  k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᑫ", r: "ʳ", s: "ˢ", t: "ᵗ",
  u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
  A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "ᶠ", G: "ᴳ", H: "ᴴ", I: "ᴵ", J: "ᴶ",
  K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ", Q: "ᑫ", R: "ᴿ", S: "ˢ", T: "ᵀ",
  U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ", Y: "ʸ", Z: "ᶻ"
});

// Style 23: Cross Small Caps
addStyle('gamer', 'gamer_cross_small_caps', '✗ ', ' ✗ⓥ', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 24: Egyptian Skull Circled
addStyle('gamer', 'gamer_egyptian_skull_circled', '𓆩☠𓆪', '_ⓎⓉ', {
  A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
  K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
  U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
  a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
  k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
  u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ"
});

// Style 25: Tibetan Dot Small Caps
addStyle('gamer', 'gamer_tibetan_dot_small_caps', '༺.ᐟ', '.ᐟ༻⁰⁷', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 26: Star Sans Serif
addStyle('gamer', 'gamer_star_sans_serif', '꧁༒⛧', '⛧༒꧂', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 27: Star Circled
addStyle('gamer', 'gamer_star_circled', '꧁༒☯', '☯༒꧂', {
  A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
  K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
  U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
  a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
  k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
  u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ"
});

// Style 28: Simple Monospace
addStyle('gamer', 'gamer_simple_monospace', 'ⓥ ', ' 모', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 29: Hittite Wave Accent
addStyle('gamer', 'gamer_hittite_wave_accent', '𒆜', '𒆜⁰⁷', {
  A: "A̾", B: "B̾", C: "C̾", D: "D̾", E: "E̾", F: "F̾", G: "G̾", H: "H̾", I: "I̾", J: "J̾",
  K: "K̾", L: "L̾", M: "M̾", N: "N̾", O: "O̾", P: "P̾", Q: "Q̾", R: "R̾", S: "S̾", T: "T̾",
  U: "U̾", V: "V̾", W: "W̾", X: "X̾", Y: "Y̾", Z: "Z̾",
  a: "a̾", b: "b̾", c: "c̾", d: "d̾", e: "e̾", f: "f̾", g: "g̾", h: "h̾", i: "i̾", j: "j̾",
  k: "k̾", l: "l̾", m: "m̾", n: "n̾", o: "o̾", p: "p̾", q: "q̾", r: "r̾", s: "s̾", t: "t̾",
  u: "u̾", v: "v̾", w: "w̾", x: "x̾", y: "y̾", z: "z̾"
});

// Style 30: Hittite Negative Circle
addStyle('gamer', 'gamer_hittite_negative_circle', '𒆜┋ ̤̮', ' ̤̮ ┋𒆜࿐', {
  A: "🅐 ̤̮", B: "🅑 ̤̮", C: "🅒 ̤̮", D: "🅓 ̤̮", E: "🅔 ̤̮", F: "🅕 ̤̮", G: "🅖 ̤̮", H: "🅗 ̤̮", I: "🅘 ̤̮", J: "🅙 ̤̮",
  K: "🅚 ̤̮", L: "🅛 ̤̮", M: "🅜 ̤̮", N: "🅝 ̤̮", O: "☻ ̤̮", P: "🅟 ̤̮", Q: "🅠 ̤̮", R: "🅡 ̤̮", S: "🅢 ̤̮", T: "🅣 ̤̮",
  U: "🅤 ̤̮", V: "🅥 ̤̮", W: "🅦 ̤̮", X: "🅧 ̤̮", Y: "🅨 ̤̮", Z: "🅩 ̤̮",
  a: "🅐 ̤̮", b: "🅑 ̤̮", c: "🅒 ̤̮", d: "🅓 ̤̮", e: "🅔 ̤̮", f: "🅕 ̤̮", g: "🅖 ̤̮", h: "🅗 ̤̮", i: "🅘 ̤̮", j: "🅙 ̤̮",
  k: "🅚 ̤̮", l: "🅛 ̤̮", m: "🅜 ̤̮", n: "🅝 ̤̮", o: "☻ ̤̮", p: "🅟 ̤̮", q: "🅠 ̤̮", r: "🅡 ̤̮", s: "🅢 ̤̮", t: "🅣 ̤̮",
  u: "🅤 ̤̮", v: "🅥 ̤̮", w: "🅦 ̤̮", x: "🅧 ̤̮", y: "🅨 ̤̮", z: "🅩 ̤̮"
});

// Style 31: Kaomoji Circular Accent
addStyle('gamer', 'gamer_kaomoji_circular_accent', '༺メ ', ' メ༻', {
  A: "ᴬ⃠", B: "ᴮ⃠", C: "ᶜ⃠", D: "ᴰ⃠", E: "ᴱ⃠", F: "ᶠ⃠", G: "ᴳ⃠", H: "ᴴ⃠", I: "ᴵ⃠", J: "ᴶ⃠",
  K: "ᴷ⃠", L: "ᴸ⃠", M: "ᴹ⃠", N: "ᴺ⃠", O: "ᴼ⃠", P: "ᴾ⃠", Q: "ᵠ⃠", R: "ᴿ⃠", S: "ˢ⃠", T: "ᵀ⃠",
  U: "ᵁ⃠", V: "ⱽ⃠", W: "ᵂ⃠", X: "ˣ⃠", Y: "ʸ⃠", Z: "ᶻ⃠",
  a: "ᵃ⃠", b: "ᵇ⃠", c: "ᶜ⃠", d: "ᵈ⃠", e: "ᵉ⃠", f: "ᶠ⃠", g: "ᵍ⃠", h: "ʰ⃠", i: "ⁱ⃠", j: "ʲ⃠",
  k: "ᵏ⃠", l: "ˡ⃠", m: "ᵐ⃠", n: "ⁿ⃠", o: "ᵒ⃠", p: "ᵖ⃠", q: "ᑫ⃠", r: "ʳ⃠", s: "ˢ⃠", t: "ᵗ⃠",
  u: "ᵘ⃠", v: "ᵛ⃠", w: "ʷ⃠", x: "ˣ⃠", y: "ʸ⃠", z: "ᶻ⃠"
});

// Style 32: Warning Double Struck
addStyle('gamer', 'gamer_warning_double_struck', '༒⚠', '⚠༒', {
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
});

// Style 33: Cross Italic Math
addStyle('gamer', 'gamer_cross_italic_math', '╬⊰⚜', '⚜⊱╬', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 34: Umbrella Greek
addStyle('gamer', 'gamer_umbrella_greek', '*☂⊹˚', '_☂ˎˊ˗࿐', {
  a: "α", b: "в", c: "ċ", d: "ɗ", e: "є", f: "ƒ", g: "ĝ", h: "ħ", i: "ï", j: "ʝ",
  k: "ƙ", l: "ĺ", m: "м", n: "ռ", o: "ο", p: "ք", q: "զ", r: "ř", s: "ֆ", t: "թ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ժ",
  A: "Α", B: "Β", C: "Ċ", D: "Ɗ", E: "Є", F: "Ƒ", G: "Ĝ", H: "Ħ", I: "Ï", J: "ʝ",
  K: "Ƙ", L: "Ĺ", M: "Μ", N: "Ռ", O: "Ο", P: "Ք", Q: "Ջ", R: "Ř", S: "Ֆ", T: "Թ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Զ"
});

// Style 35: Prime Sans
addStyle('gamer', 'gamer_prime_sans', 'ᵖʳⁱᵐᵉ_', '_모', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 36: Sans Prime
addStyle('gamer', 'gamer_sans_prime', '', '_ᵖʳⁱᵐᵉ', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 37: Simple Small Caps with V
addStyle('gamer', 'gamer_simple_small_caps_v', '', 'ⓥ', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 38: V Small Caps V
addStyle('gamer', 'gamer_v_small_caps_v', '༺ⓥ', 'ⓥ༻', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 39: Star Monospace Check
addStyle('gamer', 'gamer_star_monospace_check', '★彡_', '_彡★✓', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 40: Dot Star Monospace
addStyle('gamer', 'gamer_dot_star_monospace', '˚｡⋆', '_├ ┱ ⋯', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 41: Arrow Cursive YT
addStyle('gamer', 'gamer_arrow_cursive_yt', '˚❥━━━»', '«━━━❥˚ʏᴛ', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
});

// Style 42: Simple Small Caps YT
addStyle('gamer', 'gamer_simple_small_caps_yt', '', ' ʏᴛ ✓', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 43: Yin Yang Lambda V
addStyle('gamer', 'gamer_yin_yang_lambda_v', '『☯', '☯』ⓥ', {
  A: "Λ", B: "ɮ", C: "Ͷ", D: "ᗫ", E: "Σ", F: "Ғ", G: "Ɠ", H: "Ӈ", I: "Ί", J: "J",
  K: "Ҡ", L: "Ŀ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ʀ", S: "Ѕ", T: "Ͳ",
  U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "¥", Z: "Ż",
  a: "λ", b: "ɫ", c: "Ϟ", d: "ᒪ", e: "σ", f: "ғ", g: "ɠ", h: "һ", i: "ι", j: "ʝ",
  k: "ҡ", l: "ŀ", m: "ṃ", n: "п", o: "ø", p: "ƥ", q: "ǫ", r: "ʀ", s: "ѕ", t: "ʇ",
  u: "ц", v: "ѵ", w: "ш", x: "χ", y: "¥", z: "ż"
});

// Style 44: Star Double Struck
addStyle('gamer', 'gamer_star_double_struck', '꧁༺', '༻꧂', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
});

// Style 45: Sniper Sans
addStyle('gamer', 'gamer_sniper_sans', 'ꜱɴɪᴘᴇʀメ', 'メ╬࿐', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 46: Smile Sans
addStyle('gamer', 'gamer_smile_sans', 'Sмιℓєメ☺︎', '☺︎メ࿐', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 47: Arrow Superscript Accent
addStyle('gamer', 'gamer_arrow_superscript_accent', '⇝░', '░⇜모', {
  A: "ᴬ͎", B: "ᴮ͎", C: "ᶜ͎", D: "ᴰ͎", E: "ᴱ͎", F: "ᶠ͎", G: "ᴳ͎", H: "ᴴ͎", I: "ᴵ͎", J: "ᴶ͎",
  K: "ᴷ͎", L: "ᴸ͎", M: "ᴹ͎", N: "ᴺ͎", O: "ᴼ͎", P: "ᴾ͎", Q: "ᵠ͎", R: "ᴿ͎", S: "ˢ͎", T: "ᵀ͎",
  U: "ᵁ͎", V: "ⱽ͎", W: "ᵂ͎", X: "ˣ͎", Y: "ʸ͎", Z: "ᶻ͎",
  a: "ᵃ͎", b: "ᵇ͎", c: "ᶜ͎", d: "ᵈ͎", e: "ᵉ͎", f: "ᶠ͎", g: "ᵍ͎", h: "ʰ͎", i: "ⁱ͎", j: "ʲ͎",
  k: "ᵏ͎", l: "ˡ͎", m: "ᵐ͎", n: "ⁿ͎", o: "ᵒ͎", p: "ᵖ͎", q: "ᑫ͎", r: "ʳ͎", s: "ˢ͎", t: "ᵗ͎",
  u: "ᵘ͎", v: "ᵛ͎", w: "ʷ͎", x: "ˣ͎", y: "ʸ͎", z: "ᶻ͎"
});

// Style 48: Yin Yang Double Struck Accent
addStyle('gamer', 'gamer_yin_yang_double_struck_accent', '༒☯⃟', '⃟☯༒', {
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
});

// Style 49: OP Negative Circle
addStyle('gamer', 'gamer_op_negative_circle', 'O͢P͢༺»', '«༻', {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
  a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
});

// Style 50: Box Squared Letters
addStyle('gamer', 'gamer_box_squared_letters', '░', '░', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 51: Xi Negative Circle
addStyle('gamer', 'gamer_xi_negative_circle', 'Ξ', 'Ξ ✔', {
  A: "🅰", B: "🅱", C: "🅲", D: "🅳", E: "🅴", F: "🅵", G: "🅶", H: "🅷", I: "🅸", J: "🅹",
  K: "🅺", L: "🅻", M: "🅼", N: "🅽", O: "🅾", P: "🅿", Q: "🆀", R: "🆁", S: "🆂", T: "🆃",
  U: "🆄", V: "🆅", W: "🆆", X: "🆇", Y: "🆈", Z: "🆉",
  a: "🅰", b: "🅱", c: "🅲", d: "🅳", e: "🅴", f: "🅵", g: "🅶", h: "🅷", i: "🅸", j: "🅹",
  k: "🅺", l: "🅻", m: "🅼", n: "🅽", o: "🅾", p: "🅿", q: "🆀", r: "🆁", s: "🆂", t: "🆃",
  u: "🆄", v: "🆅", w: "🆆", x: "🆇", y: "🆈", z: "🆉"
});

// Style 52: Queen Small Caps
addStyle('gamer', 'gamer_queen_small_caps', 'q͢n͢ ♕メ◯', '◯メ✓', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 53: Sparkle Dot Small Caps
addStyle('gamer', 'gamer_sparkle_dot_small_caps', '｡°✩', '·✩°｡࿐', {
  A: "ᴀ·", B: "ʙ·", C: "ᴄ·", D: "ᴅ·", E: "ᴇ·", F: "ꜰ·", G: "ɢ·", H: "ʜ·", I: "ɪ·", J: "ᴊ·",
  K: "ᴋ·", L: "ʟ·", M: "ᴍ·", N: "ɴ·", O: "ᴏ·", P: "ᴘ·", Q: "ǫ·", R: "ʀ·", S: "ꜱ·", T: "ᴛ·",
  U: "ᴜ·", V: "ᴠ·", W: "ᴡ·", X: "x·", Y: "ʏ·", Z: "ᴢ·",
  a: "ᴀ·", b: "ʙ·", c: "ᴄ·", d: "ᴅ·", e: "ᴇ·", f: "ꜰ·", g: "ɢ·", h: "ʜ·", i: "ɪ·", j: "ᴊ·",
  k: "ᴋ·", l: "ʟ·", m: "ᴍ·", n: "ɴ·", o: "ᴏ·", p: "ᴘ·", q: "ǫ·", r: "ʀ·", s: "ꜱ·", t: "ᴛ·",
  u: "ᴜ·", v: "ᴠ·", w: "ᴡ·", x: "x·", y: "ʏ·", z: "ᴢ·"
});

// Style 54: Pro Circled
addStyle('gamer', 'gamer_pro_circled', 'ᴘʀᴏΞ', '♡࿐', {
  A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
  K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
  U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
  a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
  k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
  u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ"
});

// Style 55: X Sans Serif
addStyle('gamer', 'gamer_x_sans_serif', 'xX_', '_Xx ☠࿐', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 56: Cross Triangle Accent
addStyle('gamer', 'gamer_cross_triangle_accent', '༺✗', '✗༻ᵒᵖ', {
  A: "A̸▵", B: "B̸▵", C: "C̸▵", D: "D̸▵", E: "E̸▵", F: "F̸▵", G: "G̸▵", H: "H̸▵", I: "I̸▵", J: "J̸▵",
  K: "K̸▵", L: "L̸▵", M: "M̸▵", N: "N̸▵", O: "O̸▵", P: "P̸▵", Q: "Q̸▵", R: "R̸▵", S: "S̸▵", T: "T̸▵",
  U: "U̸▵", V: "V̸▵", W: "W̸▵", X: "X̸▵", Y: "Y̸▵", Z: "Z̸▵",
  a: "a̸▵", b: "b̸▵", c: "c̸▵", d: "d̸▵", e: "e̸▵", f: "f̸▵", g: "g̸▵", h: "h̸▵", i: "i̸▵", j: "j̸▵",
  k: "k̸▵", l: "l̸▵", m: "m̸▵", n: "n̸▵", o: "o̸▵", p: "p̸▵", q: "q̸▵", r: "r̸▵", s: "s̸▵", t: "t̸▵",
  u: "u̸▵", v: "v̸▵", w: "w̸▵", x: "x̸▵", y: "y̸▵", z: "z̸▵"
});

// Style 57: Yin Yang Circle Accent
addStyle('gamer', 'gamer_yin_yang_circle_accent', '꧁☯', '☯꧂', {
  A: "A̸◉", B: "B̸◉", C: "C̸◉", D: "D̸◉", E: "E̸◉", F: "F̸◉", G: "G̸◉", H: "H̸◉", I: "I̸◉", J: "J̸◉",
  K: "K̸◉", L: "L̸◉", M: "M̸◉", N: "N̸◉", O: "O̸◉", P: "P̸◉", Q: "Q̸◉", R: "R̸◉", S: "S̸◉", T: "T̸◉",
  U: "U̸◉", V: "V̸◉", W: "W̸◉", X: "X̸◉", Y: "Y̸◉", Z: "Z̸◉",
  a: "a̸◉", b: "b̸◉", c: "c̸◉", d: "d̸◉", e: "e̸◉", f: "f̸◉", g: "g̸◉", h: "h̸◉", i: "i̸◉", j: "j̸◉",
  k: "k̸◉", l: "l̸◉", m: "m̸◉", n: "n̸◉", o: "o̸◉", p: "p̸◉", q: "q̸◉", r: "r̸◉", s: "s̸◉", t: "t̸◉",
  u: "u̸◉", v: "v̸◉", w: "w̸◉", x: "x̸◉", y: "y̸◉", z: "z̸◉"
});

// Style 58: Star Greek
addStyle('gamer', 'gamer_star_greek', '—͟͞͞✰', '⋆✰࿐', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "h", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 59: Simple Small Caps with YT
addStyle('gamer', 'gamer_simple_small_caps_yt', '', '_ʏᴛ', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 60: Simple Xi Accent
addStyle('gamer', 'gamer_simple_xi_accent', '', ' ✔', {
  A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
  K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
  U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢",
  a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
  k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
  u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢"
});

// Style 61: Egyptian Star Double Struck
addStyle('gamer', 'gamer_egyptian_star_double_struck', '𓄀⋆乂', '乂⋆࿐', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
});

// Style 62: Khanda Italic
addStyle('gamer', 'gamer_khanda_italic', '『☬', '☬』ʸᵗ', {
  A: "𝘼", B: "𝘽", C: "𝘾", D: "𝘿", E: "𝙀", F: "𝙁", G: "𝙂", H: "𝙃", I: "𝙄", J: "𝙅",
  K: "𝙆", L: "𝙇", M: "𝙈", N: "𝙉", O: "𝙊", P: "𝙋", Q: "𝙌", R: "𝙍", S: "𝙎", T: "𝙏",
  U: "𝙐", V: "𝙑", W: "𝙒", X: "𝙓", Y: "𝙔", Z: "𝙕",
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
});

// Style 63: Currency Style
addStyle('gamer', 'gamer_currency_style', '꧁༺', '⁰⁷༻꧂', {
  A: "₳", B: "₲", C: "₵", D: "Đ", E: "₳", F: "₣", G: "₲", H: "Ⱨ", I: "ł", J: "₲",
  K: "₭", L: "Ⱡ", M: "₥", N: "₦", O: "Ø", P: "₱", Q: "Ꝗ", R: "Ɽ", S: "₴", T: "₮",
  U: "Ṳ", V: "ᐯ", W: "₩", X: "Ӿ", Y: "Ɏ", Z: "ℤ",
  a: "₳", b: "₲", c: "₵", d: "đ", e: "₳", f: "₣", g: "₲", h: "Ⱨ", i: "ł", j: "₲",
  k: "₭", l: "Ⱡ", m: "₥", n: "₦", o: "ø", p: "₱", q: "Ꝗ", r: "Ɽ", s: "₴", t: "₮",
  u: "Ṳ", v: "ᐯ", w: "₩", x: "Ӿ", y: "Ɏ", z: "ƶ"
});

// Style 64: Xi Accent with Numbers
addStyle('gamer', 'gamer_xi_accent_numbers', '乂', '乂 ⓿❸', {
  A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
  K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
  U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢",
  a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
  k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
  u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢"
});

// Style 65: Japanese Bracket Italic Math
addStyle('gamer', 'gamer_japanese_bracket_italic', '亗⸝⸝⸝『', '』⸝⸝⸝⁹⁹⁹', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 66: Gun Italic Math
addStyle('gamer', 'gamer_gun_italic', '⌐╦╦═─『', '』⋙˚', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 67: MR Monospace
addStyle('gamer', 'gamer_mr_monospace', 'ᴍʀ͢『', '』✓', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 68: V Squared
addStyle('gamer', 'gamer_v_squared', ' ┈━═Ⓥ', 'Ⓥ═━┈', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 69: MR Small Caps
addStyle('gamer', 'gamer_mr_small_caps', 'ᴍr͢ ', ' ⁰⁷', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 70: MR Sans Serif
addStyle('gamer', 'gamer_mr_sans_serif', 'ᴍr͢ ', '━┈모', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 71: Simple Small Caps TM
addStyle('gamer', 'gamer_simple_small_caps_tm', '『', ' 』™', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 3: Sparkle Crossed Love Style
addStyle('love', 'sparkle_crossed_love_style', '𐙚✨˚', '˚✨𐙚 ツ', {
    a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
    k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
    u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷",
    A: "A̷", B: "B̷", C: "C̷", D: "D̷", E: "E̷", F: "F̷", G: "G̷", H: "H̷", I: "I̷", J: "J̷",
    K: "K̷", L: "L̷", M: "M̷", N: "N̷", O: "O̷", P: "P̷", Q: "Q̷", R: "R̷", S: "S̷", T: "T̷",
    U: "U̷", V: "V̷", W: "W̷", X: "X̷", Y: "Y̷", Z: "Z̷"
});

    addStyle('font', 'font_combining_ring', '', '', {
    a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
    k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
    u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢",
    A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
    K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
    U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢"
  });

  // Style 2: Double Struck Circle Style
  addStyle('font', 'font_double_struck_circle', '', '', {
    a: "𝕒⃟", b: "𝕓⃟", c: "𝕔⃟", d: "𝕕⃟", e: "𝕖⃟", f: "𝕗⃟", g: "𝕘⃟", h: "𝕙⃟", i: "𝕚⃟", j: "𝕛⃟",
    k: "𝕜⃟", l: "𝕝⃟", m: "𝕞⃟", n: "𝕟⃟", o: "𝕠⃟", p: "𝕡⃟", q: "𝕢⃟", r: "𝕣⃟", s: "𝕤⃟", t: "𝕥⃟",
    u: "𝕦⃟", v: "𝕧⃟", w: "𝕨⃟", x: "𝕩⃟", y: "𝕪⃟", z: "𝕫⃟",
    A: "𝕒⃟", B: "𝕓⃟", C: "𝕔⃟", D: "𝕕⃟", E: "𝕖⃟", F: "𝕗⃟", G: "𝕘⃟", H: "𝕙⃟", I: "𝕚⃟", J: "𝕛⃟",
    K: "𝕜⃟", L: "𝕝⃟", M: "𝕞⃟", N: "𝕟⃟", O: "𝕠⃟", P: "𝕡⃟", Q: "𝕢⃟", R: "𝕣⃟", S: "𝕤⃟", T: "𝕥⃟",
    U: "𝕦⃟", V: "𝕧⃟", W: "𝕨⃟", X: "𝕩⃟", Y: "𝕪⃟", Z: "𝕫⃟"
  });

  // ============ GAMER STYLES ============
  addStyle('gamer', 'gamer_bold_sans_serif', '', '', {
    a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
    k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
    u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯",
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
  });

  // ============ LOVE STYLES ============
  addStyle('love', 'love_italic', '', '', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
    K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
    U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍"
  });

  // ============ FANCY STYLES ============
  addStyle('fancy', 'fancy_squared', '', '', {
    a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
    k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
    u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉",
    A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
    K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
    U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉"
  });

  // ============ FONT STYLES ============
  addStyle('font', 'font_sans_serif_italic', '', '', {
    a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
    k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
    u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
    A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
    K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
    U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
  });
  // ... yahan baaki ke 110 styles add karo ...
  // Optional success message
  // showToast("All styles loaded successfully!");

   // Initial load
  // Style 4: Egyptian Bold with Decoration
  addStyle('love', 'love_egyptian_bold', '𓆜⋆˚࿔⊹ ࣪', ' 𓆝⋆.˚﹏𓊝₊˚⊹', {
    a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
    k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
    u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ",
    A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
    K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
    U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ"
  });

  // Style 5: Circle with Underline Accent
  addStyle('love', 'love_circle_accent', '̤̮ ', ' ✔', {
    a: "🅐 ̤̮", b: "🅑 ̤̮", c: "🅒 ̤̮", d: "🅓 ̤̮", e: "🅔 ̤̮", f: "🅕 ̤̮", g: "🅖 ̤̮", h: "🅗 ̤̮", i: "🅘 ̤̮", j: "🅙 ̤̮",
    k: "🅚 ̤̮", l: "🅛 ̤̮", m: "🅜 ̤̮", n: "🅝 ☻", o: "🅞 ̤̮", p: "🅟 ̤̮", q: "🅠 ̤̮", r: "🅡 ̤̮", s: "🅢 ̤̮", t: "🅣 ̤̮",
    u: "🅤 ̤̮", v: "🅥 ̤̮", w: "🅦 ̤̮", x: "🅧 ̤̮", y: "🅨 ̤̮", z: "🅩 ̤̮",
    A: "🅐 ̤̮", B: "🅑 ̤̮", C: "🅒 ̤̮", D: "🅓 ̤̮", E: "🅔 ̤̮", F: "🅕 ̤̮", G: "🅖 ̤̮", H: "🅗 ̤̮", I: "🅘 ̤̮", J: "🅙 ̤̮",
    K: "🅚 ̤̮", L: "🅛 ̤̮", M: "🅜 ̤̮", N: "🅝 ☻", O: "🅞 ̤̮", P: "🅟 ̤̮", Q: "🅠 ̤̮", R: "🅡 ̤̮", S: "🅢 ̤̮", T: "🅣 ̤̮",
    U: "🅤 ̤̮", V: "🅥 ̤̮", W: "🅦 ̤̮", X: "🅧 ̤̮", Y: "🅨 ̤̮", Z: "🅩 ̤̮"
  });

  // Style 6: Double Struck with Star Decoration
  addStyle('love', 'love_double_struck_stars', '⊹˚₊𐙚', '𐙚₊˚⊹࿐', {
    a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
    k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
    u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
    A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
    K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
    U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
  });

  // Style 7: Bold Sans Serif with Cross Decoration
  addStyle('love', 'love_bold_sans_serif_cross', '—͟͞͞✰', 'ᯓ✈︎⋆ˎˊ˗', {
    a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
    k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
    u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇",
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
  });

  // Style 8: Superscript with Cross Decoration
  addStyle('love', 'love_superscript_cross', '—͟͞͞✞ ', ' ✞𓂃✍︎', {
    a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ",
    k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᑫ", r: "ʳ", s: "ˢ", t: "ᵗ",
    u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
    A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "ᶠ", G: "ᴳ", H: "ᴴ", I: "ᴵ", J: "ᴶ",
    K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ", Q: "ᵠ", R: "ᴿ", S: "ˢ", T: "ᵀ",
    U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ", Y: "ʸ", Z: "ᶻ"
  });
  
  // Style 1: Greek with Flower Decoration
  addStyle('fancy', 'fancy_greek_flower', '𐙚✿', '𐙚✿.࿐', {
    a: "Δ", b: "β", c: "C", d: "Đ", e: "Σ", f: "Ϝ", g: "Ꮆ", h: "Ħ", i: "I", j: "J",
    k: "К", l: "Ꮭ", m: "M", n: "П", o: "Ø", p: "Ƥ", q: "Ǫ", r: "Ŗ", s: "Ѕ", t: "Ͳ",
    u: "Ц", v: "Ѵ", w: "Ш", x: "X", y: "Ψ", z: "Ẕ",
    A: "Δ", B: "β", C: "C", D: "Đ", E: "Σ", F: "Ϝ", G: "Ꮆ", H: "Ħ", I: "I", J: "J",
    K: "К", L: "Ꮭ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ŗ", S: "Ѕ", T: "Ͳ",
    U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "Ψ", Z: "Ẕ"
  });

  // Style 2: Circled with Butterfly Decoration
  addStyle('fancy', 'fancy_circled_butterfly', '༒➤⃝🦋', '➤⃝🦋༒', {
    a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
    k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
    u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ",
    A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
    K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
    U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ"
  });

  // Style 3: Monospace with Star Decoration
  addStyle('fancy', 'fancy_monospace_stars', '✨✗ ', ' ✗✨࿐', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });

  // Style 4: Sans Serif Italic with Symbol Frame
  addStyle('fancy', 'fancy_sans_serif_frame', '꧁●⃝⛧', '●⃝⛧꧂', {
    a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
    k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
    u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
    A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
    K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
    U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
  });

  // Style 5: Runic with Unicorn Decoration
  addStyle('fancy', 'fancy_runic_unicorn', '𐍆𐍆_', '_₊˚⊹🦄', {
    a: "𐌻", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𝙅",
    k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍀", r: "𐍂", s: "𐍃", t: "𐍄",
    u: "𐍁", v: "𝙑", w: "𐍉", x: "𐍇", y: "𐍅", z: "𐌶",
    A: "𐌻", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "𝙅",
    K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍀", R: "𐍂", S: "𐍃", T: "𐍄",
    U: "𐍁", V: "𝙑", W: "𐍉", X: "𐍇", Y: "𐍅", Z: "𐌶"
  });
  
  // Style 1: Sans Serif Italic with Symbol Prefix
  addStyle('gamer', 'gamer_sans_serif_symbol', 'T͢N͢ ☯', 'メ࿐', {
    a: "𝘢", b: "𝘣", c: "c", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
    k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
    u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
    A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
    K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
    U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
  });

  // Style 2: Small Caps OP Style
  addStyle('gamer', 'gamer_small_caps_op', 'ᴏᴘ メ', 'メ࿐', {
    a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
    A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
    U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
  });

  // Style 3: Currency Symbol Prefix
  addStyle('gamer', 'gamer_currency_prefix', '₦₲ ', ' ™', {
    a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
    k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
    u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
    A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
    K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
    U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
  });

  // Style 4: Bold with Checkmark
  addStyle('gamer', 'gamer_bold_checkmark', '𝚼𝚻_', ' ✔', {
    a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
    k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
    u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ",
    A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
    K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
    U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ"
  });

  // Style 5: Italic with Flower Decoration
  addStyle('gamer', 'gamer_italic_flower', '༒', ' ✿˚₊࿐ ᵒᵖ', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
    K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
    U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍"
  });

  // Style 6: Monospace with Number Suffix
  addStyle('gamer', 'gamer_monospace_number', 'ҩɴ ✗ ', ' ✗ ⁹⁹⁹', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });

  // Style 7: Strikethrough with Korean Symbol
  addStyle('gamer', 'gamer_strikethrough_korean', '𝚾- ', ' 모', {
    a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
    k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
    u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷",
    A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
    K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
    U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
  });

  // Style 8: Superscript Circle with Frame
  addStyle('gamer', 'gamer_superscript_circle_frame', '꧁✞ ', ' ✞꧂', {
    a: "ᵃ͎", b: "ᵇ͎", c: "ᶜ͎", d: "ᵈ͎", e: "ᵉ͎", f: "ᶠ͎", g: "ᵍ͎", h: "ʰ͎", i: "ⁱ͎", j: "ʲ͎",
    k: "ᵏ͎", l: "ˡ͎", m: "ᵐ͎", n: "ⁿ͎", o: "ᵒ͎", p: "ᵖ͎", q: "ᑫ͎", r: "ʳ͎", s: "ˢ͎", t: "ᵗ͎",
    u: "ᵘ͎", v: "ᵛ͎", w: "ʷ͎", x: "ˣ͎", y: "ʸ͎", z: "ᶻ͎",
    A: "ᴬ͎", B: "ᴮ͎", C: "ᶜ͎", D: "ᴰ͎", E: "ᴱ͎", F: "ᶠ͎", G: "ᴳ͎", H: "ᴴ͎", I: "ᴵ͎", J: "ᴶ͎",
    K: "ᴷ͎", L: "ᴸ͎", M: "ᴹ͎", N: "ᴺ͎", O: "ᴼ͎", P: "ᴾ͎", Q: "ᵠ͎", R: "ᴿ͎", S: "ˢ͎", T: "ᵀ͎",
    U: "ᵁ͎", V: "ⱽ͎", W: "ᵂ͎", X: "ˣ͎", Y: "ʸ͎", Z: "ᶻ͎"
  });

  // Style 9: Greek Small Simple
  addStyle('gamer', 'gamer_greek_simple', 'ˢⁱᵐᵖˡᵉ✗', '✗ˎˊ˗࿐', {
    a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
    k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
    u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
    A: "α", B: "в", C: "c", D: "ɗ", E: "ε", F: "ƒ", G: "ɠ", H: "н", I: "ɪ", J: "נ",
    K: "κ", L: "ℓ", M: "м", N: "η", O: "σ", P: "ρ", Q: "զ", R: "я", S: "ѕ", T: "τ",
    U: "υ", V: "ν", W: "ω", X: "χ", Y: "γ", Z: "ƶ"
  });

  // Style 10: Circle Accent with Star Frame
  addStyle('gamer', 'gamer_circle_accent_stars', '༒✰ ', '✰༒', {
    a: "̤̮🅐", b: "̤̮🅑", c: "̤̮🅒", d: "̤̮🅓", e: "̤̮🅔", f: "̤̮🅕", g: "̤̮🅖", h: "̤̮🅗", i: "̤̮🅘", j: "̤̮🅙",
    k: "̤̮🅚", l: "̤̮🅛", m: "̤̮🅜", n: "̤̮🅝 ☻", o: "̤̮🅞", p: "̤̮🅟", q: "̤̮🅠", r: "̤̮🅡", s: "̤̮🅢", t: "̤̮🅣",
    u: "̤̮🅤", v: "̤̮🅥", w: "̤̮🅦", x: "̤̮🅧", y: "̤̮🅨", z: "̤̮🅩",
    A: "̤̮🅐", B: "̤̮🅑", C: "̤̮🅒", D: "̤̮🅓", E: "̤̮🅔", F: "̤̮🅕", G: "̤̮🅖", H: "̤̮🅗", I: "̤̮🅘", J: "̤̮🅙",
    K: "̤̮🅚", L: "̤̮🅛", M: "̤̮🅜", N: "̤̮🅝 ☻", O: "̤̮🅞", P: "̤̮🅟", Q: "̤̮🅠", R: "̤̮🅡", S: "̤̮🅢", T: "̤̮🅣",
    U: "̤̮🅤", V: "̤̮🅥", W: "̤̮🅦", X: "̤̮🅧", Y: "̤̮🅨", Z: "̤̮🅩"
  });

// Style 9: Circular Accent Style
addStyle('love', 'love_circular_accent', '—͟͞͞✨', '🥀🐼ˎˊ˗', {
  A: "ᴬ⃠", B: "ᴮ⃠", C: "ᶜ⃠", D: "ᴰ⃠", E: "ᴱ⃠", F: "ᶠ⃠", G: "ᴳ⃠", H: "ᴴ⃠", I: "ᴵ⃠", J: "ᴶ⃠",
  K: "ᴷ⃠", L: "ᴸ⃠", M: "ᴹ⃠", N: "ᴺ⃠", O: "ᴼ⃠", P: "ᴾ⃠", Q: "ᵠ⃠", R: "ᴿ⃠", S: "ˢ⃠", T: "ᵀ⃠",
  U: "ᵁ⃠", V: "ⱽ⃠", W: "ᵂ⃠", X: "ˣ⃠", Y: "ʸ⃠", Z: "ᶻ⃠",
  a: "ᵃ⃠", b: "ᵇ⃠", c: "ᶜ⃠", d: "ᵈ⃠", e: "ᵉ⃠", f: "ᶠ⃠", g: "ᵍ⃠", h: "ʰ⃠", i: "ⁱ⃠", j: "ʲ⃠",
  k: "ᵏ⃠", l: "ˡ⃠", m: "ᵐ⃠", n: "ⁿ⃠", o: "ᵒ⃠", p: "ᵖ⃠", q: "ᑫ⃠", r: "ʳ⃠", s: "ˢ⃠", t: "ᵗ⃠",
  u: "ᵘ⃠", v: "ᵛ⃠", w: "ʷ⃠", x: "ˣ⃠", y: "ʸ⃠", z: "ᶻ⃠"
});

// Style 10: Greek Alphabet Style
addStyle('love', 'love_greek_style', '𐙚˚⊹', '☺︎ˎˊ˗࿐', {
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 11: Simple Greek Style
addStyle('love', 'love_simple_greek', '', '☕︎ˎˊ˗', {
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 12: Double Struck with Accent
addStyle('love', 'love_double_struck', '༒☯⃟', '⃟☯༒', {
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
});

// Style 13: Italic Math Style
addStyle('love', 'love_italic_math', 'ᵛⁱᵖ₊˚⊹', '𐙚₊˚⊹♕', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "ℎ", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 14: Cursive Bold Style
addStyle('love', 'love_cursive_bold', '༒˗ˏˋᵛ𖦹', '𖦹ᵛˎˊ˗༒🥀', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
});

// Style 15: Underline Accent Style
addStyle('love', 'love_underline_accent', '꧁♡', '♡꧂', {
  A: "A͓̽", B: "B͓̽", C: "C͓̽", D: "D͓̽", E: "E͓̽", F: "F͓̽", G: "G͓̽", H: "H͓̽", I: "I͓̽", J: "J͓̽",
  K: "K͓̽", L: "L͓̽", M: "M͓̽", N: "N͓̽", O: "O͓̽", P: "P͓̽", Q: "Q͓̽", R: "R͓̽", S: "S͓̽", T: "T͓̽",
  U: "U͓̽", V: "V͓̽", W: "W͓̽", X: "X͓̽", Y: "Y͓̽", Z: "Z͓̽",
  a: "a͓̽", b: "b͓̽", c: "c͓̽", d: "d͓̽", e: "e͓̽", f: "f͓̽", g: "g͓̽", h: "h͓̽", i: "i͓̽", j: "j͓̽",
  k: "k͓̽", l: "l͓̽", m: "m͓̽", n: "n͓̽", o: "o͓̽", p: "p͓̽", q: "q͓̽", r: "r͓̽", s: "s͓̽", t: "t͓̽",
  u: "u͓̽", v: "v͓̽", w: "w͓̽", x: "x͓̽", y: "y͓̽", z: "z͓̽"
});

// Style 16: Sans Serif Italic Style
addStyle('love', 'love_sans_serif', '𝕏_—͟͞͞💞', '_—͟͞͞💞', {
  A: "𝘈", B: "𝘉", C: "𝘊̆̈", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 17: Sans Serif with Decorations
addStyle('love', 'love_sans_decorated', '💞₊˚⊹', '₊˚⊹🦋ˎˊ˗࿐', {
  A: "𝘈", B: "𝘉", C: "𝘊̆̈", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 18: Bold Fraktur Style
addStyle('love', 'love_bold_fraktur', '༒₊˚⊹', '⊹˚₊𓅫ˎˊ˗࿐', {
  a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
  k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
  u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
  A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
  K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
  U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅"
});

// Style 19: Greek Bold Style
addStyle('love', 'love_greek_bold', 'ᝰ.', '.ᐟ࿐', {
  A: "𝚨", B: "𝚩", C: "𝚪", D: "𝚫", E: "𝚬", F: "𝚺", G: "𝛀", H: "𝚮", I: "𝚰", J: "𝗝",
  K: "𝚱", L: "𝚲", M: "𝚳", N: "𝚴", O: "𝚶", P: "𝚸", Q: "𝚽", R: "𝗥", S: "𝚵", T: "𝚻",
  U: "𝚷", V: "𝚼", W: "𝗪", X: "𝚾", Y: "𝚿", Z: "𝚭"
});

// Style 20: Small Tsu Accent Style
addStyle('love', 'love_small_tsu', '✨', '🤞🏻💞', {
  A: "Aッ", B: "Bッ", C: "Cッ", D: "Dッ", E: "Eッ", F: "Fッ", G: "Gッ", H: "Hッ", I: "Iッ", J: "Jッ",
  K: "Kッ", L: "Lッ", M: "Mッ", N: "Nッ", O: "Oッ", P: "Pッ", Q: "Qッ", R: "Rッ", S: "Sッ", T: "Tッ",
  U: "Uッ", V: "Vッ", W: "Wッ", X: "Xッ", Y: "Yッ", Z: "Zッ",
  a: "aッ", b: "bッ", c: "cッ", d: "dッ", e: "eッ", f: "fッ", g: "gッ", h: "hッ", i: "iッ", j: "jッ",
  k: "kッ", l: "lッ", m: "mッ", n: "nッ", o: "oッ", p: "pッ", q: "qッ", r: "rッ", s: "sッ", t: "tッ",
  u: "uッ", v: "vッ", w: "wッ", x: "xッ", y: "yッ", z: "zッ"
});

// Style 3: Greek Bold Sans
addStyle('font', 'font_greek_bold', '', '', {
  A: "𝚨", B: "𝚩", C: "𝚪", D: "𝚫", E: "𝚬", F: "𝚺", G: "𝛀", H: "𝚮", I: "𝚰", J: "𝗝",
  K: "𝚱", L: "𝚲", M: "𝚳", N: "𝚴", O: "𝚶", P: "𝚸", Q: "𝚽", R: "𝗥", S: "𝚵", T: "𝚻",
  U: "𝚷", V: "𝚼", W: "𝗪", X: "𝚾", Y: "𝚿", Z: "𝚭",
  a: "α", b: "β", c: "γ", d: "δ", e: "ε", f: "σ", g: "ω", h: "η", i: "ι", j: "ȷ",
  k: "κ", l: "λ", m: "μ", n: "ν", o: "ο", p: "π", q: "φ", r: "ρ", s: "ξ", t: "τ",
  u: "υ", v: "υ", w: "ω", x: "χ", y: "ψ", z: "ζ"
});

// Style 4: Cursive Bold
addStyle('font', 'font_cursive_bold', '', '', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
});

// Style 5: Fraktur Bold
addStyle('font', 'font_fraktur_bold', '', '', {
  A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
  K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
  U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅",
  a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
  k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
  u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟"
});

// Style 6: Script Style
addStyle('font', 'font_script', '', '', {
  A: "𝒜", B: "ℬ", C: "𝒞", D: "𝒟", E: "ℰ", F: "ℱ", G: "𝒢", H: "ℋ", I: "ℐ", J: "𝒥",
  K: "𝒦", L: "ℒ", M: "ℳ", N: "𝒩", O: "𝒪", P: "𝒫", Q: "𝒬", R: "ℛ", S: "𝒮", T: "𝒯",
  U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳", Y: "𝒴", Z: "𝒵",
  a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "ℯ", f: "𝒻", g: "ℊ", h: "𝒽", i: "𝒾", j: "𝒿",
  k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "ℴ", p: "𝓅", q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉",
  u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍", y: "𝓎", z: "𝓏"
});

// Style 7: Double Struck
addStyle('font', 'font_double_struck', '', '', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
});

// Style 8: Monospace Bold
addStyle('font', 'font_monospace_bold', '', '', {
  A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
});

// Style 9: Italic Math
addStyle('font', 'font_italic_math', '', '', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 10: Squared Letters
addStyle('font', 'font_squared', '', '', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 11: Sans Serif Italic
addStyle('font', 'font_sans_serif', '', '', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 12: Negative Circles
addStyle('font', 'font_negative_circles', '', '', {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
  a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
});

// Style 6: Short Stroke Accent
addStyle('fancy', 'fancy_short_stroke', '༺•͜•', '•͜•༻', {
  A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
  K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
  U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷",
  a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
  k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
  u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷"
});

// Style 7: Wave Accent
addStyle('fancy', 'fancy_wave_accent', '𒆜┋', '┋𒆜☂', {
  A: "A̾", B: "B̾", C: "C̾", D: "D̾", E: "E̾", F: "F̾", G: "G̾", H: "H̾", I: "I̾", J: "J̾",
  K: "K̾", L: "L̾", M: "M̾", N: "N̾", O: "O̾", P: "P̾", Q: "Q̾", R: "R̾", S: "S̾", T: "T̾",
  U: "U̾", V: "V̾", W: "W̾", X: "X̾", Y: "Y̾", Z: "Z̾",
  a: "a̾", b: "b̾", c: "c̾", d: "d̾", e: "e̾", f: "f̾", g: "g̾", h: "h̾", i: "i̾", j: "j̾",
  k: "k̾", l: "l̾", m: "m̾", n: "n̾", o: "o̾", p: "p̾", q: "q̾", r: "r̾", s: "s̾", t: "t̾",
  u: "u̾", v: "v̾", w: "w̾", x: "x̾", y: "y̾", z: "z̾"
});

// Style 8: Negative Circle with Space
addStyle('fancy', 'fancy_negative_circle', '●⃝✨ ̤̮', '●⃝✨👀', {
  A: "🅐 ̤̮", B: "🅑 ̤̮", C: "🅒 ̤̮", D: "🅓 ̤̮", E: "🅔 ̤̮", F: "🅕 ̤̮", G: "🅖 ̤̮", H: "🅗 ̤̮", I: "🅘 ̤̮", J: "🅙 ̤̮",
  K: "🅚 ̤̮", L: "🅛 ̤̮", M: "🅜 ̤̮", N: "🅝 ̤̮", O: "☻ ̤̮", P: "🅟 ̤̮", Q: "🅠 ̤̮", R: "🅡 ̤̮", S: "🅢 ̤̮", T: "🅣 ̤̮",
  U: "🅤 ̤̮", V: "🅥 ̤̮", W: "🅦 ̤̮", X: "🅧 ̤̮", Y: "🅨 ̤̮", Z: "🅩 ̤̮",
  a: "🅐 ̤̮", b: "🅑 ̤̮", c: "🅒 ̤̮", d: "🅓 ̤̮", e: "🅔 ̤̮", f: "🅕 ̤̮", g: "🅖 ̤̮", h: "🅗 ̤̮", i: "🅘 ̤̮", j: "🅙 ̤̮",
  k: "🅚 ̤̮", l: "🅛 ̤̮", m: "🅜 ̤̮", n: "🅝 ̤̮", o: "☻ ̤̮", p: "🅟 ̤̮", q: "🅠 ̤̮", r: "🅡 ̤̮", s: "🅢 ̤̮", t: "🅣 ̤̮",
  u: "🅤 ̤̮", v: "🅥 ̤̮", w: "🅦 ̤̮", x: "🅧 ̤̮", y: "🅨 ̤̮", z: "🅩 ̤̮"
});

// Style 9: Greek Style with Panda
addStyle('fancy', 'fancy_greek_panda', '𒆜', '🐼ˎˊ˗࿐', {
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 10: Small Tsu Accent
addStyle('fancy', 'fancy_small_tsu', '', 'ッ✌︎︎ˎˊ˗', {
  A: "Aッ", B: "Bッ", C: "Cッ", D: "Dッ", E: "Eッ", F: "Fッ", G: "Gッ", H: "Hッ", I: "Iッ", J: "Jッ",
  K: "Kッ", L: "Lッ", M: "Mッ", N: "Nッ", O: "Oッ", P: "Pッ", Q: "Qッ", R: "Rッ", S: "Sッ", T: "Tッ",
  U: "Uッ", V: "Vッ", W: "Wッ", X: "Xッ", Y: "Yッ", Z: "Zッ",
  a: "aッ", b: "bッ", c: "cッ", d: "dッ", e: "eッ", f: "fッ", g: "gッ", h: "hッ", i: "iッ", j: "jッ",
  k: "kッ", l: "lッ", m: "mッ", n: "nッ", o: "oッ", p: "pッ", q: "qッ", r: "rッ", s: "sッ", t: "tッ",
  u: "uッ", v: "vッ", w: "wッ", x: "xッ", y: "yッ", z: "zッ"
});

// Style 11: Egyptian Style
addStyle('fancy', 'fancy_egyptian', '𓆩ଳ⟆', '⟅ଳ𓆪', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 12: Cross Accent
addStyle('fancy', 'fancy_cross_accent', '✨┋†', '†┋✨ˎˊ˗࿐', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 13: Symbolic Style
addStyle('fancy', 'fancy_symbolic', '𓂃', '𓂃', {
  A: "𝚲", B: "𝚩", C: "☪", D: "Đ", E: "𝚵", F: "Ϝ", G: "㉿", H: "み", I: "𝖎ᐟ", J: "✔",
  K: "𝚱", L: "𓆗", M: "𓆙", N: "ꫝ", O: "𖦹", P: "☧", Q: "ҩ", R: "𐀪", S: "₴", T: "✞",
  U: "𝔘", V: "✌︎︎", W: "ᝰ", X: "メ", Y: "𓅯", Z: "么",
  a: "𝚲", b: "𝚩", c: "☪", d: "Đ", e: "𝚵", f: "Ϝ", g: "㉿", h: "み", i: "𝖎ᐟ", j: "✔",
  k: "𝚱", l: "𓆗", m: "𓆙", n: "ꫝ", o: "𖦹", p: "☧", q: "ҩ", r: "𐀪", s: "₴", t: "✞",
  u: "𝔘", v: "✌︎︎", w: "ᝰ", x: "メ", y: "𓅯", z: "么"
});

// Style 14: Butterfly Greek
addStyle('fancy', 'fancy_butterfly_greek', '*🦋☂⊹˚', '_☂ˎˊ˗🦋', {
  a: "α", b: "в", c: "ċ", d: "ɗ", e: "є", f: "ƒ", g: "ĝ", h: "ħ", i: "ï", j: "ʝ",
  k: "ƙ", l: "ĺ", m: "м", n: "ռ", o: "ο", p: "ք", q: "զ", r: "ř", s: "ֆ", t: "թ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ժ",
  A: "Α", B: "Β", C: "Ċ", D: "Ɗ", E: "Є", F: "Ƒ", G: "Ĝ", H: "Ħ", I: "Ï", J: "ʝ",
  K: "Ƙ", L: "Ĺ", M: "М", N: "Ռ", O: "Ο", P: "Ք", Q: "Ջ", R: "Ř", S: "Ֆ", T: "Թ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Զ"
});

// Style 15: Rose Sans Serif
addStyle('fancy', 'fancy_rose_sans', '༒🥀●⃝_', '●⃝_🥀༒', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 11: Circular Accent with Decorations
addStyle('gamer', 'gamer_circular_accent', '꧁༒ ', ' ༒꧂', {
  A: "ᴬ⃠", B: "ᴮ⃠", C: "ᶜ⃠", D: "ᴰ⃠", E: "ᴱ⃠", F: "ᶠ⃠", G: "ᴳ⃠", H: "ᴴ⃠", I: "ᴵ⃠", J: "ᴶ⃠",
  K: "ᴷ⃠", L: "ᴸ⃠", M: "ᴹ⃠", N: "ᴺ⃠", O: "ᴼ⃠", P: "ᴾ⃠", Q: "ᵠ⃠", R: "ᴿ⃠", S: "ˢ⃠", T: "ᵀ⃠",
  U: "ᵁ⃠", V: "ⱽ⃠", W: "ᵂ⃠", X: "ˣ⃠", Y: "ʸ⃠", Z: "ᶻ⃠",
  a: "ᵃ⃠", b: "ᵇ⃠", c: "ᶜ⃠", d: "ᵈ⃠", e: "ᵉ⃠", f: "ᶠ⃠", g: "ᵍ⃠", h: "ʰ⃠", i: "ⁱ⃠", j: "ʲ⃠",
  k: "ᵏ⃠", l: "ˡ⃠", m: "ᵐ⃠", n: "ⁿ⃠", o: "ᵒ⃠", p: "ᵖ⃠", q: "ᑫ⃠", r: "ʳ⃠", s: "ˢ⃠", t: "ᵗ⃠",
  u: "ᵘ⃠", v: "ᵛ⃠", w: "ʷ⃠", x: "ˣ⃠", y: "ʸ⃠", z: "ᶻ⃠"
});

// Style 12: CG Style with Underline
addStyle('gamer', 'gamer_cg_underline', 'C͢G͢ ☯ ', ' ༒⋆.࿐', {
  A: "A͓̽", B: "B͓̽", C: "C͓̽", D: "D͓̽", E: "E͓̽", F: "F͓̽", G: "G͓̽", H: "H͓̽", I: "I͓̽", J: "J͓̽",
  K: "K͓̽", L: "L͓̽", M: "M͓̽", N: "N͓̽", O: "O͓̽", P: "P͓̽", Q: "Q͓̽", R: "R͓̽", S: "S͓̽", T: "T͓̽",
  U: "U͓̽", V: "V͓̽", W: "W͓̽", X: "X͓̽", Y: "Y͓̽", Z: "Z͓̽",
  a: "a͓̽", b: "b͓̽", c: "c͓̽", d: "d͓̽", e: "e͓̽", f: "f͓̽", g: "g͓̽", h: "h͓̽", i: "i͓̽", j: "j͓̽",
  k: "k͓̽", l: "l͓̽", m: "m͓̽", n: "n͓̽", o: "o͓̽", p: "p͓̽", q: "q͓̽", r: "r͓̽", s: "s͓̽", t: "t͓̽",
  u: "u͓̽", v: "v͓̽", w: "w͓̽", x: "x͓̽", y: "y͓̽", z: "z͓̽"
});

// Style 13: Smiley Armenian Accent
addStyle('gamer', 'gamer_armenian_accent', '☺︎Ꮶ༒', ' ༒ˎˊ˗࿐', {
  A: "A֟", B: "B֟", C: "C֟", D: "D֟", E: "E֟", F: "F֟", G: "G֟", H: "H֟", I: "I֟", J: "J֟",
  K: "K֟", L: "L֟", M: "M֟", N: "N֟", O: "O֟", P: "P֟", Q: "Q֟", R: "R֟", S: "S֟", T: "T֟",
  U: "U֟", V: "V֟", W: "W֟", X: "X֟", Y: "Y֟", Z: "Z֟",
  a: "a֟", b: "b֟", c: "c֟", d: "d֟", e: "e֟", f: "f֟", g: "g֟", h: "h֟", i: "i֟", j: "j֟",
  k: "k֟", l: "l֟", m: "m֟", n: "n֟", o: "o֟", p: "p֟", q: "q֟", r: "r֟", s: "s֟", t: "t֟",
  u: "u֟", v: "v֟", w: "w֟", x: "x֟", y: "y֟", z: "z֟"
});

// Style 14: NG Style with Wave
addStyle('gamer', 'gamer_ng_wave', 'N͢G͢ ☠ ', ' ☯࿐', {
  A: "A̾", B: "B̾", C: "C̾", D: "D̾", E: "E̾", F: "F̾", G: "G̾", H: "H̾", I: "I̾", J: "J̾",
  K: "K̾", L: "L̾", M: "M̾", N: "N̾", O: "O̾", P: "P̾", Q: "Q̾", R: "R̾", S: "S̾", T: "T̾",
  U: "U̾", V: "V̾", W: "W̾", X: "X̾", Y: "Y̾", Z: "Z̾",
  a: "a̾", b: "b̾", c: "c̾", d: "d̾", e: "e̾", f: "f̾", g: "g̾", h: "h̾", i: "i̾", j: "j̾",
  k: "k̾", l: "l̾", m: "m̾", n: "n̾", o: "o̾", p: "p̾", q: "q̾", r: "r̾", s: "s̾", t: "t̾",
  u: "u̾", v: "v̾", w: "w̾", x: "x̾", y: "y̾", z: "z̾"
});

// Style 15: Cross Wave Accent
addStyle('gamer', 'gamer_cross_wave', '—͟͞͞✗ ', ' —͟͞͞✗𓂃✍︎', {
  A: "A̾", B: "B̾", C: "C̾", D: "D̾", E: "E̾", F: "F̾", G: "G̾", H: "H̾", I: "I̾", J: "J̾",
  K: "K̾", L: "L̾", M: "M̾", N: "N̾", O: "O̾", P: "P̾", Q: "Q̾", R: "R̾", S: "S̾", T: "T̾",
  U: "U̾", V: "V̾", W: "W̾", X: "X̾", Y: "Y̾", Z: "Z̾",
  a: "a̾", b: "b̾", c: "c̾", d: "d̾", e: "e̾", f: "f̾", g: "g̾", h: "h̾", i: "i̾", j: "j̾",
  k: "k̾", l: "l̾", m: "m̾", n: "n̾", o: "o̾", p: "p̾", q: "q̾", r: "r̾", s: "s̾", t: "t̾",
  u: "u̾", v: "v̾", w: "w̾", x: "x̾", y: "y̾", z: "z̾"
});

// Style 16: Pencil Cyrillic Style
addStyle('gamer', 'gamer_pencil_cyrillic', '✎𓂃メ', 'メ⁹⁹⁹', {
  A: "A҉", B: "B҉", C: "C҉", D: "D҉", E: "E҉", F: "F҉", G: "G҉", H: "H҉", I: "I҉", J: "J҉",
  K: "K҉", L: "L҉", M: "M҉", N: "N҉", O: "O҉", P: "P҉", Q: "Q҉", R: "R҉", S: "S҉", T: "T҉",
  U: "U҉", V: "V҉", W: "W҉", X: "X҉", Y: "Y҉", Z: "Z҉",
  a: "a҉", b: "b҉", c: "c҉", d: "d҉", e: "e҉", f: "f҉", g: "g҉", h: "h҉", i: "i҉", j: "j҉",
  k: "k҉", l: "l҉", m: "m҉", n: "n҉", o: "o҉", p: "p҉", q: "q҉", r: "r҉", s: "s҉", t: "t҉",
  u: "u҉", v: "v҉", w: "w҉", x: "x҉", y: "y҉", z: "z҉"
});

// Style 17: Skull Comb Accent
addStyle('gamer', 'gamer_skull_comb', '༺☠︎', ' ᵒᵖ☠︎༻', {
  A: "A̵̔", B: "B̵̔", C: "C̵̔", D: "D̵̔", E: "E̵̔", F: "F̵̔", G: "G̵̔", H: "H̵̔", I: "I̵̔", J: "J̵̔",
  K: "K̵̔", L: "L̵̔", M: "M̵̔", N: "N̵̔", O: "O̵̔", P: "P̵̔", Q: "Q̵̔", R: "R̵̔", S: "S̵̔", T: "T̵̔",
  U: "U̵̔", V: "V̵̔", W: "W̵̔", X: "X̵̔", Y: "Y̵̔", Z: "Z̵̔",
  a: "a̵̔", b: "b̵̔", c: "c̵̔", d: "d̵̔", e: "e̵̔", f: "f̵̔", g: "g̵̔", h: "h̵̔", i: "i̵̔", j: "j̵̔",
  k: "k̵̔", l: "l̵̔", m: "m̵̔", n: "n̵̔", o: "o̵̔", p: "p̵̔", q: "q̵̔", r: "r̵̔", s: "s̵̔", t: "t̵̔",
  u: "u̵̔", v: "v̵̔", w: "w̵̔", x: "x̵̔", y: "y̵̔", z: "z̵̔"
});

// Style 18: Greek Short Stroke
addStyle('gamer', 'gamer_greek_short_stroke', '𝚾-', ' ૐ༻', {
  A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
  K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
  U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷",
  a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
  k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
  u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷"
});

// Style 19: Omega Inverted Style
addStyle('gamer', 'gamer_omega_inverted', '𝛀_', '_𝛀 ♡⊹˚₊', {
  A: "Ɐ", B: "ᴃ", C: "Ƈ", D: "ᴅ", E: "Ɇ", F: "ᶂ", G: "Ɠ", H: "Ħ", I: "ᶤ", J: "ᴊ",
  K: "ƙ", L: "ᶅ", M: "ᴍ", N: "Ƞ", O: "Ø", P: "ᴘ", Q: "Ɋ", R: "ʀ", S: "Ѕ", T: "Ŧ",
  U: "Ữ", V: "Ṽ", W: "Ẅ", X: "Ẋ", Y: "Ỵ", Z: "Ƶ",
  a: "Ɐ", b: "ᴃ", c: "Ƈ", d: "ᴅ", e: "Ɇ", f: "ᶂ", g: "Ɠ", h: "Ħ", i: "ᶤ", j: "ᴊ",
  k: "ƙ", l: "ᶅ", m: "ᴍ", n: "Ƞ", o: "Ø", p: "ᴘ", q: "Ɋ", r: "ʀ", s: "Ѕ", t: "Ŧ",
  u: "Ữ", v: "Ṽ", w: "Ẅ", x: "Ẋ", y: "Ỵ", z: "Ƶ"
});

// Style 20: Gothic Runic Style
addStyle('gamer', 'gamer_gothic_runic', '𐍆𐍆_', '_모 ♡࿐', {
  A: "𐌻", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "J",
  K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍀", R: "𐍂", S: "𐍃", T: "𐍄",
  U: "𐍁", V: "v", W: "𐍉", X: "𐍇", Y: "𐍅", Z: "𐌶",
  a: "𐌻", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "J",
  k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍀", r: "𐍂", s: "𐍃", t: "𐍄",
  u: "𐍁", v: "v", w: "𐍉", x: "𐍇", y: "𐍅", z: "𐌶"
});

// Style 21: Delta Hittite Style
addStyle('love', 'love_delta_hittite', '—͟͞͞𝚫𔓎 ', ' 𔓎—͟͞͞𝚫', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 22: Rose Greek Style
addStyle('love', 'love_rose_greek', '🥀✗✨', '✨✗🥀', {
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "𝘝", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
});

// Style 23: Sparkle Heart Sans
addStyle('love', 'love_sparkle_heart', '✨♡', '♡_✨👀', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 24: Love Flower Sans
addStyle('love', 'love_flower_sans', '𝘓♡𝘝𝘌 ✿₊˚', '˚₊✿_✨', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 25: Umbrella Small Caps
addStyle('love', 'love_umbrella_small_caps', '☂𓆩♡', '♡𓆪.࿐', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 26: Star Cursive
addStyle('love', 'love_star_cursive', '⋆｡˚💞⋆｡', '⋆｡˚💞⋆｡˚', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
});

// Style 27: Bracket Lambda Style
addStyle('love', 'love_bracket_lambda', '『♡', '♡』✨ ❤️‍🔥', {
  A: "Λ", B: "ɮ", C: "Ͷ", D: "ᗫ", E: "Σ", F: "Ғ", G: "Ɠ", H: "Ӈ", I: "Ί", J: "J",
  K: "Ҡ", L: "Ŀ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ʀ", S: "Ѕ", T: "Ͳ",
  U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "¥", Z: "Ż",
  a: "λ", b: "ɫ", c: "Ϟ", d: "ᒪ", e: "σ", f: "ғ", g: "ɠ", h: "һ", i: "ι", j: "ʝ",
  k: "ҡ", l: "ŀ", m: "ṃ", n: "п", o: "ø", p: "ƥ", q: "ǫ", r: "ʀ", s: "ѕ", t: "ʇ",
  u: "ц", v: "ѵ", w: "ш", x: "χ", y: "¥", z: "ż"
});

// Style 28: Flower Heart Double Struck
addStyle('love', 'love_flower_heart', '꧁❀♥︎•', '•♥︎꧂', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
});

// Style 29: Smile Arrow Sans
addStyle('love', 'love_smile_arrow', 'Sмιℓєメ⇝☺︎', '☺︎⇜🦋', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 30: LOVE Monospace
addStyle('love', 'love_monospace', 'ᴸᴼⱽᴱ ', '𝗔 «━❥', {
  A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
});

// Style 13: Circular Accent (Simple)
addStyle('font', 'font_circular_accent_simple', '', '', {
  A: "ᴬ⃠", B: "ᴮ⃠", C: "ᶜ⃠", D: "ᴰ⃠", E: "ᴱ⃠", F: "ᶠ⃠", G: "ᴳ⃠", H: "ᴴ⃠", I: "ᴵ⃠", J: "ᴶ⃠",
  K: "ᴷ⃠", L: "ᴸ⃠", M: "ᴹ⃠", N: "ᴺ⃠", O: "ᴼ⃠", P: "ᴾ⃠", Q: "ᵠ⃠", R: "ᴿ⃠", S: "ˢ⃠", T: "ᵀ⃠",
  U: "ᵁ⃠", V: "ⱽ⃠", W: "ᵂ⃠", X: "ˣ⃠", Y: "ʸ⃠", Z: "ᶻ⃠",
  a: "ᵃ⃠", b: "ᵇ⃠", c: "ᶜ⃠", d: "ᵈ⃠", e: "ᵉ⃠", f: "ᶠ⃠", g: "ᵍ⃠", h: "ʰ⃠", i: "ⁱ⃠", j: "ʲ⃠",
  k: "ᵏ⃠", l: "ˡ⃠", m: "ᵐ⃠", n: "ⁿ⃠", o: "ᵒ⃠", p: "ᵖ⃠", q: "ᑫ⃠", r: "ʳ⃠", s: "ˢ⃠", t: "ᵗ⃠",
  u: "ᵘ⃠", v: "ᵛ⃠", w: "ʷ⃠", x: "ˣ⃠", y: "ʸ⃠", z: "ᶻ⃠"
});

// Style 14: Circled Letters
addStyle('font', 'font_circled', '', '', {
  A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
  K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
  U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
  a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
  k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
  u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ"
});

// Style 15: Bold Italic Math
addStyle('font', 'font_bold_italic', '', '', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 16: Negative Squared
addStyle('font', 'font_negative_squared', '', '', {
  A: "🅰", B: "🅱", C: "🅲", D: "🅳", E: "🅴", F: "🅵", G: "🅶", H: "🅷", I: "🅸", J: "🅹",
  K: "🅺", L: "🅻", M: "🅼", N: "🅽", O: "🅾", P: "🅿", Q: "🆀", R: "🆁", S: "🆂", T: "🆃",
  U: "🆄", V: "🆅", W: "🆆", X: "🆇", Y: "🆈", Z: "🆉",
  a: "🅰", b: "🅱", c: "🅲", d: "🅳", e: "🅴", f: "🅵", g: "🅶", h: "🅷", i: "🅸", j: "🅹",
  k: "🅺", l: "🅻", m: "🅼", n: "🅽", o: "🅾", p: "🅿", q: "🆀", r: "🆁", s: "🆂", t: "🆃",
  u: "🆄", v: "🆅", w: "🆆", x: "🆇", y: "🆈", z: "🆉"
});

// Style 17: Canadian Aboriginal
addStyle('font', 'font_canadian_aboriginal', '', '', {
  A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
  K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
  U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ",
  a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
  k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
  u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ"
});

// Style 18: Greek Modern
addStyle('font', 'font_greek_modern', '', '', {
  A: "Δ", B: "β", C: "C", D: "Đ", E: "Σ", F: "Ϝ", G: "Ꮆ", H: "Ħ", I: "I", J: "J",
  K: "К", L: "Ꮭ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ŗ", S: "Ѕ", T: "Ͳ",
  U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "Ψ", Z: "Ẕ",
  a: "δ", b: "β", c: "c", d: "đ", e: "ε", f: "ϝ", g: "g", h: "ħ", i: "ι", j: "j",
  k: "κ", l: "l", m: "m", n: "η", o: "ø", p: "ƥ", q: "ǫ", r: "ŗ", s: "s", t: "t",
  u: "ц", v: "ν", w: "ш", x: "x", y: "ψ", z: "ẑ"
});

// Style 19: Short Stroke
addStyle('font', 'font_short_stroke', '', '', {
  A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
  K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
  U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷",
  a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
  k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
  u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷"
});

// Style 20: Negative Circle with Space (Font Version)
addStyle('font', 'font_negative_circle_space', ' ̤̮ ', ' ̤̮', {
  A: "🅐 ̤̮", B: "🅑 ̤̮", C: "🅒 ̤̮", D: "🅓 ̤̮", E: "🅔 ̤̮", F: "🅕 ̤̮", G: "🅖 ̤̮", H: "🅗 ̤̮", I: "🅘 ̤̮", J: "🅙 ̤̮",
  K: "🅚 ̤̮", L: "🅛 ̤̮", M: "🅜 ̤̮", N: "🅝 ̤̮", O: "☻ ̤̮", P: "🅟 ̤̮", Q: "🅠 ̤̮", R: "🅡 ̤̮", S: "🅢 ̤̮", T: "🅣 ̤̮",
  U: "🅤 ̤̮", V: "🅥 ̤̮", W: "🅦 ̤̮", X: "🅧 ̤̮", Y: "🅨 ̤̮", Z: "🅩 ̤̮",
  a: "🅐 ̤̮", b: "🅑 ̤̮", c: "🅒 ̤̮", d: "🅓 ̤̮", e: "🅔 ̤̮", f: "🅕 ̤̮", g: "🅖 ̤̮", h: "🅗 ̤̮", i: "🅘 ̤̮", j: "🅙 ̤̮",
  k: "🅚 ̤̮", l: "🅛 ̤̮", m: "🅜 ̤̮", n: "🅝 ̤̮", o: "☻ ̤̮", p: "🅟 ̤̮", q: "🅠 ̤̮", r: "🅡 ̤̮", s: "🅢 ̤̮", t: "🅣 ̤̮",
  u: "🅤 ̤̮", v: "🅥 ̤̮", w: "🅦 ̤̮", x: "🅧 ̤̮", y: "🅨 ̤̮", z: "🅩 ̤̮"
});

// Style 16: Egyptian Skull Small Caps
addStyle('fancy', 'fancy_egyptian_skull', '𓆩☠', '☠𓆪', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 17: Bracket Lambda with Rabbit
addStyle('fancy', 'fancy_bracket_lambda_rabbit', '⟆『☯', '☯』⟅ 🐰', {
  A: "Λ", B: "ɮ", C: "Ͷ", D: "ᗫ", E: "Σ", F: "Ғ", G: "Ɠ", H: "Ӈ", I: "Ί", J: "J",
  K: "Ҡ", L: "Ŀ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ʀ", S: "Ѕ", T: "Ͳ",
  U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "¥", Z: "Ż",
  a: "λ", b: "ɫ", c: "Ϟ", d: "ᒪ", e: "σ", f: "ғ", g: "ɠ", h: "һ", i: "ι", j: "ʝ",
  k: "ҡ", l: "ŀ", m: "ṃ", n: "п", o: "ø", p: "ƥ", q: "ǫ", r: "ʀ", s: "ѕ", t: "ʇ",
  u: "ц", v: "ѵ", w: "ш", x: "χ", y: "¥", z: "ż"
});

// Style 18: Boxed Double Struck
addStyle('fancy', 'fancy_boxed_double_struck', '꧁░Ξ', 'Ξ░꧂', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
});

// Style 19: Butterfly Smile Sans
addStyle('fancy', 'fancy_butterfly_smile', '🦋⇝☺︎', '☺︎⇜🦋', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 20: Bold Sans Serif
addStyle('fancy', 'fancy_bold_sans', '', '', {
  A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
  a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
  k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
  u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇"
});

// Style 31: Butterfly Negative Circle
addStyle('love', 'love_butterfly_negative', '🦋 ', ' ♡࿐', {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
  a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
});

// Style 32: Sparkle Squared with Heart
addStyle('love', 'love_sparkle_squared', '✨', '🦋', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 33: Box Negative Circle
addStyle('love', 'love_box_negative', '░·˚₊', '₊˚·░', {
  A: "🅰", B: "🅱", C: "🅲", D: "🅳", E: "🅴", F: "🅵", G: "🅶", H: "🅷", I: "🅸", J: "🅹",
  K: "🅺", L: "🅻", M: "🅼", N: "🅽", O: "🅾", P: "🅿", Q: "🆀", R: "🆁", S: "🆂", T: "🆃",
  U: "🆄", V: "🆅", W: "🆆", X: "🆇", Y: "🆈", Z: "🆉",
  a: "🅰", b: "🅱", c: "🅲", d: "🅳", e: "🅴", f: "🅵", g: "🅶", h: "🅷", i: "🅸", j: "🅹",
  k: "🅺", l: "🅻", m: "🅼", n: "🅽", o: "🅾", p: "🅿", q: "🆀", r: "🆁", s: "🆂", t: "🆃",
  u: "🆄", v: "🆅", w: "🆆", x: "🆇", y: "🆈", z: "🆉"
});

// Style 34: Smiley Small Caps with Dots
addStyle('love', 'love_smiley_small_caps', '░✰☺︎', '·☺︎✰░ 🫀', {
  A: "ᴀ·", B: "ʙ·", C: "ᴄ·", D: "ᴅ·", E: "ᴇ·", F: "ꜰ·", G: "ɢ·", H: "ʜ·", I: "ɪ·", J: "ᴊ·",
  K: "ᴋ·", L: "ʟ·", M: "ᴍ·", N: "ɴ·", O: "ᴏ·", P: "ᴘ·", Q: "ǫ·", R: "ʀ·", S: "ꜱ·", T: "ᴛ·",
  U: "ᴜ·", V: "ᴠ·", W: "ᴡ·", X: "x·", Y: "ʏ·", Z: "ᴢ·",
  a: "ᴀ·", b: "ʙ·", c: "ᴄ·", d: "ᴅ·", e: "ᴇ·", f: "ꜰ·", g: "ɢ·", h: "ʜ·", i: "ɪ·", j: "ᴊ·",
  k: "ᴋ·", l: "ʟ·", m: "ᴍ·", n: "ɴ·", o: "ᴏ·", p: "ᴘ·", q: "ǫ·", r: "ʀ·", s: "ꜱ·", t: "ᴛ·",
  u: "ᴜ·", v: "ᴠ·", w: "ᴡ·", x: "x·", y: "ʏ·", z: "ᴢ·"
});

// Style 35: Egyptian Music
addStyle('love', 'love_egyptian_music', '𓆩♫𓆪', '𓆩♫𓆪', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 36: Heart Triangle Accent
addStyle('love', 'love_heart_triangle', '♡✨', '✨🦋࿐', {
  A: "A̸▵", B: "B̸▵", C: "C̸▵", D: "D̸▵", E: "E̸▵", F: "F̸▵", G: "G̸▵", H: "H̸▵", I: "I̸▵", J: "J̸▵",
  K: "K̸▵", L: "L̸▵", M: "M̸▵", N: "N̸▵", O: "O̸▵", P: "P̸▵", Q: "Q̸▵", R: "R̸▵", S: "S̸▵", T: "T̸▵",
  U: "U̸▵", V: "V̸▵", W: "W̸▵", X: "X̸▵", Y: "Y̸▵", Z: "Z̸▵",
  a: "a̸▵", b: "b̸▵", c: "c̸▵", d: "d̸▵", e: "e̸▵", f: "f̸▵", g: "g̸▵", h: "h̸▵", i: "i̸▵", j: "j̸▵",
  k: "k̸▵", l: "l̸▵", m: "m̸▵", n: "n̸▵", o: "o̸▵", p: "p̸▵", q: "q̸▵", r: "r̸▵", s: "s̸▵", t: "t̸▵",
  u: "u̸▵", v: "v̸▵", w: "w̸▵", x: "x̸▵", y: "y̸▵", z: "z̸▵"
});

// Style 37: Circle Accent
addStyle('love', 'love_circle_accent', '꧁♡', '♡꧂', {
  A: "A̸◉", B: "B̸◉", C: "C̸◉", D: "D̸◉", E: "E̸◉", F: "F̸◉", G: "G̸◉", H: "H̸◉", I: "I̸◉", J: "J̸◉",
  K: "K̸◉", L: "L̸◉", M: "M̸◉", N: "N̸◉", O: "O̸◉", P: "P̸◉", Q: "Q̸◉", R: "R̸◉", S: "S̸◉", T: "T̸◉",
  U: "U̸◉", V: "V̸◉", W: "W̸◉", X: "X̸◉", Y: "Y̸◉", Z: "Z̸◉",
  a: "a̸◉", b: "b̸◉", c: "c̸◉", d: "d̸◉", e: "e̸◉", f: "f̸◉", g: "g̸◉", h: "h̸◉", i: "i̸◉", j: "j̸◉",
  k: "k̸◉", l: "l̸◉", m: "m̸◉", n: "n̸◉", o: "o̸◉", p: "p̸◉", q: "q̸◉", r: "r̸◉", s: "s̸◉", t: "t̸◉",
  u: "u̸◉", v: "v̸◉", w: "w̸◉", x: "x̸◉", y: "y̸◉", z: "z̸◉"
});

// Style 38: Egyptian Circled
addStyle('love', 'love_egyptian_circled', '𓆩', '𓆪', {
  A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
  K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
  U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
  a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
  k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
  u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ"
});

// Style 39: Simple Small Caps
addStyle('love', 'love_simple_small_caps', '♡', '_☕︎', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 40: Star Bracket Italic
addStyle('love', 'love_star_bracket_italic', '𓆩✩⋆ı⧼', '⧽ı⋆✩𓆪', {
  A: "𝘼", B: "𝘽", C: "𝘾", D: "𝘿", E: "𝙀", F: "𝙁", G: "𝙂", H: "𝙃", I: "𝙄", J: "𝙅",
  K: "𝙆", L: "𝙇", M: "𝙈", N: "𝙉", O: "𝙊", P: "𝙋", Q: "𝙌", R: "𝙍", S: "𝙎", T: "𝙏",
  U: "𝙐", V: "𝙑", W: "𝙒", X: "𝙓", Y: "𝙔", Z: "𝙕",
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
});

// Style 41: Rune Flower Short Stroke
addStyle('love', 'love_rune_flower_short', 'ᛋ「•❀', ' ❀•」ᛋ', {
  A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
  K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
  U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷",
  a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
  k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
  u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷"
});

// Style 42: Xi Accent
addStyle('love', 'love_xi_accent', '乂⸝⸝⸝♡⸝⸝⸝', '⸝⸝⸝♡⸝⸝⸝', {
  A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
  K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
  U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢",
  a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
  k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
  u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢"
});

// Style 43: Love Monospace
addStyle('love', 'love_love_monospace', 'L͢ᵒᵛᵉ『', '』𓆩♡𓆪', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 44: I Love You Cursive
addStyle('love', 'love_iloveyou_cursive', 'Ｉ Lᵒᵛᵉᵧₒᵤ♡', ' (๑′ᴗ‵๑)', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
});

// Style 45: Heart Squared
addStyle('love', 'love_heart_squared', ' ┈━═✨🫀', '🫀✨═━┈', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 46: Chinese Negative Circle
addStyle('love', 'love_chinese_negative', '么➤⃝', '么𓆩♬𓆪', {
  A: "🅰", B: "🅱", C: "🅲", D: "🅳", E: "🅴", F: "🅵", G: "🅶", H: "🅷", I: "🅸", J: "🅹",
  K: "🅺", L: "🅻", M: "🅼", N: "🅽", O: "🅾", P: "🅿", Q: "🆀", R: "🆁", S: "🆂", T: "🆃",
  U: "🆄", V: "🆅", W: "🆆", X: "🆇", Y: "🆈", Z: "🆉",
  a: "🅰", b: "🅱", c: "🅲", d: "🅳", e: "🅴", f: "🅵", g: "🅶", h: "🅷", i: "🅸", j: "🅹",
  k: "🅺", l: "🅻", m: "🅼", n: "🅽", o: "🅾", p: "🅿", q: "🆀", r: "🆁", s: "🆂", t: "🆃",
  u: "🆄", v: "🆅", w: "🆆", x: "🆇", y: "🆈", z: "🆉"
});

// Style 47: Arrow Cursive
addStyle('love', 'love_arrow_cursive', '┈━═❥•·˚', '•˚·❥·˚═━┈', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
});

// Style 48: LOVE Greek
addStyle('love', 'love_greek_with_heart', '『ᴸᴼⱽᴱ』', '『✌︎︎』❤️‍🔥', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "н", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 49: Autumn Italic Math
addStyle('love', 'love_autumn_italic', '🍂⧉', '⧉𝐿𝑜𝑣𝑒𝑟 🌈', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 50: Sweet Bold Italic
addStyle('love', 'love_sweet_bold_italic', '𝑆𝑤𝑒𝑒𝑡 ♡·˚₊', '₊˚·⧉🏝️', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 51: Flower Short Tilde
addStyle('love', 'love_flower_short_tilde', '༄✿░', '░✿༄', {
  A: "A̴", B: "B̴", C: "C̴", D: "D̴", E: "E̴", F: "F̴", G: "G̴", H: "H̴", I: "I̴", J: "J̴",
  K: "K̴", L: "L̴", M: "M̴", N: "N̴", O: "O̴", P: "P̴", Q: "Q̴", R: "R̴", S: "S̴", T: "T̴",
  U: "U̴", V: "V̴", W: "W̴", X: "X̴", Y: "Y̴", Z: "Z̴",
  a: "a̴", b: "b̴", c: "c̴", d: "d̴", e: "e̴", f: "f̴", g: "g̴", h: "h̴", i: "i̴", j: "j̴",
  k: "k̴", l: "l̴", m: "m̴", n: "n̴", o: "o̴", p: "p̴", q: "q̴", r: "r̴", s: "s̴", t: "t̴",
  u: "u̴", v: "v̴", w: "w̴", x: "x̴", y: "y̴", z: "z̴"
});

// Style 52: Arrow Fraktur
addStyle('love', 'love_arrow_fraktur', '➶➶༄', '༄➷➷', {
  a: "𝔞̈", b: "𝔟̈", c: "𝔠̈", d: "𝔡̈", e: "𝔢̈", f: "𝔣̈", g: "𝔤̈", h: "𝔥̈", i: "𝔦̈", j: "𝔧̈",
  k: "𝔨̈", l: "𝔩̈", m: "𝔪̈", n: "𝔫̈", o: "𝔬̈", p: "𝔭̈", q: "𝔮̈", r: "𝔯̈", s: "𝔰̈", t: "𝔱̈",
  u: "𝔲̈", v: "𝔳̈", w: "𝔴̈", x: "𝔵̈", y: "𝔶̈", z: "𝔷̈",
  A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "ℑ", J: "𝔍",
  K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗",
  U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "ℨ"
});

// Style 53: Penguin Star Accent
addStyle('love', 'love_penguin_star', '—͟͞͞★🐧🎀', ' 🎀🐧✧', {
  A: "A⨳", B: "B⨳", C: "C⨳", D: "D⨳", E: "E⨳", F: "F⨳", G: "G⨳", H: "H⨳", I: "I⨳", J: "J⨳",
  K: "K⨳", L: "L⨳", M: "M⨳", N: "N⨳", O: "O⨳", P: "P⨳", Q: "Q⨳", R: "R⨳", S: "S⨳", T: "T⨳",
  U: "U⨳", V: "V⨳", W: "W⨳", X: "X⨳", Y: "Y⨳", Z: "Z⨳",
  a: "a⨳", b: "b⨳", c: "c⨳", d: "d⨳", e: "e⨳", f: "f⨳", g: "g⨳", h: "h⨳", i: "i⨳", j: "j⨳",
  k: "k⨳", l: "l⨳", m: "m⨳", n: "n⨳", o: "o⨳", p: "p⨳", q: "q⨳", r: "r⨳", s: "s⨳", t: "t⨳",
  u: "u⨳", v: "v⨳", w: "w⨳", x: "x⨳", y: "y⨳", z: "z⨳"
});

// Style 54: Arrow Negative Circle
addStyle('love', 'love_arrow_negative_circle', '▶ ●── ̤̮', ' ̤̮ ───▶ ●', {
  A: "🅐 ̤̮", B: "🅑 ̤̮", C: "🅒 ̤̮", D: "🅓 ̤̮", E: "🅔 ̤̮", F: "🅕 ̤̮", G: "🅖 ̤̮", H: "🅗 ̤̮", I: "🅘 ̤̮", J: "🅙 ̤̮",
  K: "🅚 ̤̮", L: "🅛 ̤̮", M: "🅜 ̤̮", N: "🅝 ̤̮", O: "☻ ̤̮", P: "🅟 ̤̮", Q: "🅠 ̤̮", R: "🅡 ̤̮", S: "🅢 ̤̮", T: "🅣 ̤̮",
  U: "🅤 ̤̮", V: "🅥 ̤̮", W: "🅦 ̤̮", X: "🅧 ̤̮", Y: "🅨 ̤̮", Z: "🅩 ̤̮",
  a: "🅐 ̤̮", b: "🅑 ̤̮", c: "🅒 ̤̮", d: "🅓 ̤̮", e: "🅔 ̤̮", f: "🅕 ̤̮", g: "🅖 ̤̮", h: "🅗 ̤̮", i: "🅘 ̤̮", j: "🅙 ̤̮",
  k: "🅚 ̤̮", l: "🅛 ̤̮", m: "🅜 ̤̮", n: "🅝 ̤̮", o: "☻ ̤̮", p: "🅟 ̤̮", q: "🅠 ̤̮", r: "🅡 ̤̮", s: "🅢 ̤̮", t: "🅣 ̤̮",
  u: "🅤 ̤̮", v: "🅥 ̤̮", w: "🅦 ̤̮", x: "🅧 ̤̮", y: "🅨 ̤̮", z: "🅩 ̤̮"
});

// Style 55: Short Stroke Heart
addStyle('love', 'love_short_stroke_heart', '༄♡★', '★♡࿐', {
  A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶", I: "I̶", J: "J̶",
  K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
  U: "U̶", V: "V̶", W: "W̶", X: "X̶", Y: "Y̶", Z: "Z̶",
  a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶", i: "i̶", j: "j̶",
  k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶", q: "q̶", r: "r̶", s: "s̶", t: "t̶",
  u: "u̶", v: "v̶", w: "w̶", x: "x̶", y: "y̶", z: "z̶"
});

// Style 56: Star Sans Serif
addStyle('love', 'love_star_sans', '꧁☆*', '*☆꧂', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 57: Tea Monospace
addStyle('love', 'love_tea_monospace', 'Ƭ͢♨ ', ' ♨⋆✿࿐', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 58: Tea Small Caps
addStyle('love', 'love_tea_small_caps', '♨メ', 'メ♨ᴸᴼⱽᴱ', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 59: Kaomoji Music Accent
addStyle('love', 'love_kaomoji_music', '(◞ꈍ∇ꈍ)っ 🎁', ' (❛0❛⋆)', {
  A: "𝄆A", B: "𝄆B", C: "𝄆C", D: "𝄆D", E: "𝄆E", F: "𝄆F", G: "𝄆G", H: "𝄆H", I: "𝄆I", J: "𝄆J",
  K: "𝄆K", L: "𝄆L", M: "𝄆M", N: "𝄆N", O: "𝄆O", P: "𝄆P", Q: "𝄆Q", R: "𝄆R", S: "𝄆S", T: "𝄆T",
  U: "𝄆U", V: "𝄆V", W: "𝄆W", X: "𝄆X", Y: "𝄆Y", Z: "𝄆Z",
  a: "𝄆a", b: "𝄆b", c: "𝄆c", d: "𝄆d", e: "𝄆e", f: "𝄆f", g: "𝄆g", h: "𝄆h", i: "𝄆i", j: "𝄆j",
  k: "𝄆k", l: "𝄆l", m: "𝄆m", n: "𝄆n", o: "𝄆o", p: "𝄆p", q: "𝄆q", r: "𝄆r", s: "𝄆s", t: "𝄆t",
  u: "𝄆u", v: "𝄆v", w: "𝄆w", x: "𝄆x", y: "𝄆y", z: "𝄆z"
});

// Style 60: Japanese Style
addStyle('love', 'love_japanese_style', 'x͢ ♡', '♡࿐', {
  A: "么", B: "乃", C: "匚", D: "刁", E: "モ", F: "ｷ", G: "ム", H: "廾", I: "工", J: "ﾌ",
  K: "ズ", L: "ﾚ", M: "从", N: "れ", O: "〇", P: "尸", Q: "ゐ", R: "尺", S: "丂", T: "ｲ",
  U: "ひ", V: "√", W: "山", X: "メ", Y: "Ɏ", Z: "乙",
  a: "么", b: "乃", c: "匚", d: "刁", e: "モ", f: "ｷ", g: "ム", h: "廾", i: "工", j: "ﾌ",
  k: "ズ", l: "ﾚ", m: "从", n: "れ", o: "〇", p: "尸", q: "ゐ", r: "尺", s: "丂", t: "ｲ",
  u: "ひ", v: "√", w: "山", x: "メ", y: "Ɏ", z: "乙"
});

// Style 61: VIP Accent Italic
addStyle('love', 'love_vip_accent', 'ᴠͥɪͣᴘͫ ꪶꫂ♛', '♛ꪶꫂ࿐', {
  A: "𝘼̈", B: "𝘽̈", C: "𝘾̈", D: "𝘿̈", E: "𝙀̈", F: "𝙁̈", G: "𝙂̈", H: "𝙃̈", I: "𝙄̈", J: "𝙅̈",
  K: "𝙆̈", L: "𝙇̈", M: "𝙈̈", N: "𝙉̈", O: "𝙊̈", P: "𝙋̈", Q: "𝙌̈", R: "𝙍̈", S: "𝙎̈", T: "𝙏̈",
  U: "𝙐̈", V: "𝙑̈", W: "𝙒̈", X: "𝙓̈", Y: "𝙔̈", Z: "𝙕̈",
  a: "𝙖̈", b: "𝙗̈", c: "𝙘̈", d: "𝙙̈", e: "𝙚̈", f: "𝙛̈", g: "𝙜̈", h: "𝙝̈", i: "𝙞̈", j: "𝙟̈",
  k: "𝙠̈", l: "𝙡̈", m: "𝙢̈", n: "𝙣̈", o: "𝙤̈", p: "𝙥̈", q: "𝙦̈", r: "𝙧̈", s: "𝙨̈", t: "𝙩̈",
  u: "𝙪̈", v: "𝙫̈", w: "𝙬̈", x: "𝙭̈", y: "𝙮̈", z: "𝙯̈"
});

// Style 62: Star Cursive Accent
addStyle('love', 'love_star_cursive_accent', '★', '★࿐', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪̈", b: "𝓫̈", c: "𝓬̈", d: "𝓭̈", e: "𝓮̈", f: "𝓯̈", g: "𝓰̈", h: "𝓱̈", i: "𝓲̈", j: "𝓳̈",
  k: "𝓴̈", l: "𝓵̈", m: "𝓶̈", n: "𝓷̈", o: "𝓸̈", p: "𝓹̈", q: "𝓺̈", r: "𝓻̈", s: "𝓼̈", t: "𝓽̈",
  u: "𝓾̈", v: "𝓿̈", w: "𝔀̈", x: "𝔁̈", y: "𝔂̈", z: "𝔃̈"
});

// Style 63: Egyptian Italic Math
addStyle('love', 'love_egyptian_italic', '𓆩⧉𓆪', '(｡♡‿♡｡)', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 64: Black Heart Script
addStyle('love', 'love_black_heart_script', '🖤⃝🦋⋆.', ' ˚🦋༘⋆', {
  A: "𝒜", B: "ℬ", C: "𝒞", D: "𝒟", E: "ℱ", F: "𝒢", G: "ℋ", H: "ℐ", I: "𝒥", J: "𝒦",
  K: "ℒ", L: "ℳ", M: "𝒩", N: "𝒪", O: "𝒫", P: "𝒬", Q: "ℛ", R: "𝒮", S: "𝒯", T: "𝒰",
  U: "𝒱", V: "𝒲", W: "𝒳", X: "𝒴", Y: "𝒵", Z: "𝒜",
  a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "𝒻", f: "ℊ", g: "𝒽", h: "𝒾", i: "𝒿", j: "𝓀",
  k: "𝓁", l: "𝓂", m: "𝓃", n: "ℴ", o: "𝓅", p: "𝓆", q: "𝓇", r: "𝓈", s: "𝓉", t: "𝓊",
  u: "𝓋", v: "𝓌", w: "𝓍", x: "𝓎", y: "𝓏", z: "𝒶"
});

// Style 65: Flower Greek Bold
addStyle('love', 'love_flower_greek_bold', '✿ ', '..⁠♡🦋', {
  A: "𝚨", B: "𝚩", C: "𝚪", D: "𝚫", E: "𝚬", F: "𝚭", G: "𝚮", H: "𝚯", I: "𝚰", J: "𝚱",
  K: "𝚲", L: "𝚳", M: "𝚴", N: "𝚵", O: "𝚶", P: "𝚷", Q: "𝚸", R: "𝚹", S: "𝚺", T: "𝚻",
  U: "𝚼", V: "𝚽", W: "𝚾", X: "𝚿", Y: "𝛀", Z: "𝚨",
  a: "α", b: "β", c: "γ", d: "δ", e: "ε", f: "ζ", g: "η", h: "θ", i: "ι", j: "κ",
  k: "λ", l: "μ", m: "ν", n: "ξ", o: "ο", p: "π", q: "ρ", r: "ς", s: "σ", t: "τ",
  u: "υ", v: "φ", w: "χ", x: "ψ", y: "ω", z: "α"
});

// ============ ADD ALL GAMING SYMBOLS ============
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
addSymbols('gaming', '♡', 'Heart');
addSymbols('gaming', '乂', 'Chinese Character Yi');
addSymbols('gaming', '✔', 'Heavy Check Mark');
addSymbols('gaming', '☺︎', 'Smiling Face');
addSymbols('gaming', '✗', 'Ballot X');
addSymbols('gaming', '✰', 'Star');
addSymbols('gaming', '✞', 'Cross of Jerusalem');
addSymbols('gaming', '☕︎', 'Coffee');
addSymbols('gaming', '✌︎︎', 'Victory Hand');
addSymbols('gaming', '𖦹', 'Ophiuchus');
addSymbols('gaming', '×͜×', 'Face Mark');
addSymbols('gaming', '⁹⁹⁹', 'Number 999');
addSymbols('gaming', '𓆩', 'Egyptian Vase');
addSymbols('gaming', '♫', 'Music Note');
addSymbols('gaming', '╰⁔╯', 'Bird');
addSymbols('gaming', '𓆪', 'Egyptian Vase');
addSymbols('gaming', '⧉', 'Double Square');
addSymbols('gaming', '☆', 'White Star');
addSymbols('gaming', '⨳', 'Triple Asterisk');
addSymbols('gaming', '⟆', 'Sigmoid');
addSymbols('gaming', 'ૐ', 'Om Symbol');
addSymbols('gaming', 'ꪶꫂ', 'Tai Tham');
addSymbols('gaming', '♛', 'Black Chess Queen');
addSymbols('gaming', '‼', 'Double Exclamation');
addSymbols('gaming', 'ꫝ', 'Tai Tham');
addSymbols('gaming', '亗', 'Samurai');
addSymbols('gaming', '❀', 'White Flower');
addSymbols('gaming', '☛', 'Right Pointer');
addSymbols('gaming', '⇝', 'Right Wave Arrow');
addSymbols('gaming', '⇜', 'Left Wave Arrow');
addSymbols('gaming', '𖤍', 'Cross Mark');
addSymbols('gaming', '⚠', 'Warning Sign');
addSymbols('gaming', '⏱', 'Stopwatch');
addSymbols('gaming', '༄', 'Tibetan');
addSymbols('gaming', '✿', 'Black Flower');
addSymbols('gaming', '★', 'Black Star');
addSymbols('gaming', '㋚', 'Smiley Face');
addSymbols('gaming', 'ϟ', 'Greek Letter');
addSymbols('gaming', '⚐', 'White Flag');
addSymbols('gaming', '𐀪', 'Linear A');
addSymbols('gaming', '᭄', 'Balinese');
addSymbols('gaming', '☸', 'Wheel of Dharma');
addSymbols('gaming', '⎈', 'Helm Symbol');
addSymbols('gaming', '⁍', 'Bullet');
addSymbols('gaming', '៚', 'Khmer Sign');
addSymbols('gaming', '7ꪎ', 'Tai Tham Number');
addSymbols('gaming', 'ᯤ', 'Batak');
addSymbols('gaming', '⊰', 'Left Right Arrow');
addSymbols('gaming', '⊱', 'Right Left Arrow');
addSymbols('gaming', '⊹', 'Hermitian Matrix');
addSymbols('gaming', '╬', 'Double Cross');
addSymbols('gaming', '˃ᴗ˂', 'Cute Face');
addSymbols('gaming', ':)', 'Smiley');
addSymbols('gaming', '∞', 'Infinity');
addSymbols('gaming', 'ꪽ', 'Tai Tham');
addSymbols('gaming', 'ꫝ', 'Tai Tham');
addSymbols('gaming', 'Ꭷ', 'Cherokee');
addSymbols('gaming', '❀', 'White Flower');
addSymbols('gaming', '᪲᪲᪲', 'Triple Asterism');
addSymbols('gaming', '𓄋', 'Egyptian Head');
addSymbols('gaming', '☻', 'Black Smiley');
addSymbols('gaming', '☁︎', 'Cloud');
addSymbols('gaming', 'ꪎ⁔ꪎ', 'Tai Tham Design');
addSymbols('gaming', '⚕', 'Medical Symbol');
addSymbols('gaming', 'c̸u̸t̸e̸᭄', 'Strikethrough Cute');
addSymbols('gaming', 'G̷̷ᴀᴍɪɴɢ', 'Strikethrough Gaming');
addSymbols('gaming', 'ᴸ̸ᵒ̸ⱽ̸ᵉ̸ʳ̸', 'Strikethrough Lover');
addSymbols('gaming', 'ᴍr͢', 'Mr with Ring');
addSymbols('gaming', 'ᛖᚱ', 'Runes');
addSymbols('gaming', 'Ꭾʀᴏ ‹', 'Pro Symbol');
addSymbols('gaming', 'ᴍʀ⨳⟅', 'Mr with Symbols');
addSymbols('gaming', 'βØᎩ', 'Beta Boy');
addSymbols('gaming', 'ᶜᵘᵗᵉ', 'Superscript Cute');
addSymbols('gaming', 'ɢs͢', 'GS with Ring');
addSymbols('gaming', 'ᴡɪꜰu͢', 'Wifu with Ring');
addSymbols('gaming', 'ᴳ̸ᴬ̸ᴹ̸ᴱ̸ᴿ̸', 'Strikethrough Gamer');
addSymbols('gaming', 'ᴮᴬᴰ', 'Bad');
addSymbols('gaming', 'ᴬᴷ', 'AK');
addSymbols('gaming', 'ꫝυяα', 'Tai Tham Hura');
addSymbols('gaming', 'ⁱᵃᵐ', 'Superscript I Am');
addSymbols('gaming', 'ͥ ͣ ͫ', 'Combining Letters');
addSymbols('gaming', '¹⁸⁺', '18 Plus');
addSymbols('gaming', 'ɪᴍ᭄', 'Im with Balinese');
addSymbols('gaming', '𝓲ꪑ', 'Script I with Tai Tham');
addSymbols('gaming', 'ᴮᴼˢˢܔ', 'Boss');
addSymbols('gaming', 'ꫝᥣ᥆ᥒᥱ', 'Alone');
addSymbols('gaming', 'N𖹭.1', 'Number 1 with Heart');
addSymbols('gaming', '𝒪𝒻𝒻𝒾𝒸𝒾𝒶𝓁', 'Script Official');
addSymbols('gaming', '꩜', 'Myanmar');
addSymbols('gaming', '𓄀', 'Egyptian');
addSymbols('gaming', '𓄂', 'Egyptian Vulture');
addSymbols('gaming', '𓅈', 'Egyptian Falcon');
addSymbols('gaming', '▼', 'Black Triangle');
addSymbols('gaming', '┊', 'Light Separator');
addSymbols('gaming', 'ᡣ𐭩', 'Mongolian');
addSymbols('gaming', '〄', 'Japanese Industrial');
addSymbols('gaming', '⛥', 'Pentagram');
addSymbols('gaming', '⸙ㅤ', 'Flower');
addSymbols('gaming', 'ズ', 'Japanese Zu');
addSymbols('gaming', '🂱', 'Playing Card');
addSymbols('gaming', '.ˣ‿ˣ.', 'Smiley Face');
addSymbols('gaming', '乡', 'Chinese Town');
addSymbols('gaming', '፝', 'Ethiopic');
addSymbols('gaming', '🔖', 'Bookmark');
addSymbols('gaming', '꫟', 'Decorative Border');
addSymbols('gaming', '࿐࿆', 'Flower Swirl with Ring');
addSymbols('gaming', '༊', 'Tibetan');
addSymbols('gaming', '࿊', 'Tibetan');
addSymbols('gaming', '»𝕩«', 'Double Arrow X');
addSymbols('gaming', '☕︎ˎˊ˗', 'Coffee with Dash');
addSymbols('gaming', '👀', 'Eyes');
addSymbols('gaming', '𓌉◯𓇋', 'Egyptian Design');
addSymbols('gaming', '🪈', 'Flute');
addSymbols('gaming', '𔘓', 'Egyptian');
addSymbols('gaming', '-`♡´-', 'Heart with Dashes');
addSymbols('gaming', '𓅭', 'Egyptian Vulture');
addSymbols('gaming', '🏚️', 'House');
addSymbols('gaming', '⚓︎', 'Anchor');
addSymbols('gaming', '𓃖', 'Egyptian Animal');
addSymbols('gaming', '˙ᵕ˙', 'Cute Face');
addSymbols('gaming', '×̷̷͜×̷', 'Strikethrough Cross');
addSymbols('gaming', '♔', 'White Chess King');
addSymbols('gaming', '🕯️', 'Candle');
addSymbols('gaming', '♕', 'White Chess Queen');
addSymbols('gaming', '♘', 'White Chess Knight');
addSymbols('gaming', '♙', 'White Chess Pawn');
addSymbols('gaming', '🩹', 'Bandage');
addSymbols('gaming', '𖧷', 'Star');
addSymbols('gaming', '✿.࿐', 'Flower with Swirl');
    
    generateStyles();
    loadMiniSuggestions();
});
