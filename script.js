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
