/* =========================================================
   Workout Plan Parser & Generator
   ========================================================= */

// --- Constants & Globals ---
const $ = id => document.getElementById(id);

// Load exercises into a flat map for easy lookup
const exerciseMap = new Map();
window.addEventListener('DOMContentLoaded', () => {
    // Flatten the categorized data into a single map (Name -> Link)
    if (typeof exercisesData !== 'undefined') {
        for (const category in exercisesData) {
            exercisesData[category].forEach(ex => {
                exerciseMap.set(ex.name.trim().toUpperCase(), ex.link);
            });
        }
    }

    // Preload Background Image for smoother printing
    const bgImg = new Image();
    bgImg.src = 'background.jpg';

    // Set default input if empty
    if ($('inputText') && !$('inputText').value) {
        $('inputText').value = `ملاحظات عامة
هدفك تنشيف ومع قلة الحركة اليومية، التزامك بالخطة كامل هو العامل الأساسي للنتيجة. ركّز على التحكم في الأداء مش الوزن، وحافظ على راحة الركبة اليمين بتقليل الاندفاع وعدم القفل الكامل للمفصل. الذراعين والبطن محتاجين صبر واستمرارية، ومع انتظامك 5 أيام هتشوف فرق واضح في الشكل والقوة. الكارديو جزء أساسي من نجاحك فمتفوتوش.

⸻

🗓️ Workout Plan – 5 Days (Gym) – Mohamed ElTawil

⸻

Day 1 – Chest + Triceps + Cardio

15-DEGREE INCLINE DB PRESS
4 × 10–12 — Rest 90 sec

FLAT DB PRESS
4 × 8–10 — Rest 90 sec

STERNAL CABLE FLY
3 × 12–15 — Rest 60 sec

INCLINE PUSH UP
3 × 12–15 — Rest 60 sec

TRICEPS PUSH DOWN
4 × 10–12 — Rest 60 sec

SA DB OVERHEAD EXTENSION
3 × 10–12 — Rest 60 sec

DB SKULL CRUSHER
3 × 8–10 — Rest 75 sec

TREADMILL
20–25 min

⸻

Day 2 – Back + Biceps + Abs

LAT PULLDOWN
4 × 10–12 — Rest 90 sec

CHEST SUPPORTED DB ROW
4 × 10–12 — Rest 90 sec

SA DB LAT ROW
3 × 10–12 — Rest 75 sec

STRAIGHT ARM CABLE PULLDOWN
3 × 12–15 — Rest 60 sec

STANDING DB BICEPS CURL
4 × 10–12 — Rest 60 sec

DB HAMMER CURL
3 × 10–12 — Rest 60 sec

FACE-AWAY CABLE CURL
3 × 12–15 — Rest 60 sec

CABLE ROPE CRUNCH
3 × 12–15 — Rest 45 sec

PLANK
3 × 30–45 sec — Rest 45 sec

⸻

Day 3 – Legs + Glutes + Cardio

DB GOBLET SQUAT
4 × 10–12 — Rest 90 sec

LEG EXTENSION MACHINE (QUADS)
3 × 12–15 — Rest 60 sec

STANDING LEG CURL
3 × 12–15 — Rest 60 sec

DB REVERSE LUNGES
3 × 10 each leg — Rest 75 sec

KAS GLUTE BRIDGE
4 × 12–15 — Rest 75 sec

SEATED CALF RAISE MACHINE
4 × 12–15 — Rest 60 sec

TREADMILL
20 min

⸻

Day 4 – Shoulders + Triceps + Abs

60-DEGREE INCLINE DB PRESS
4 × 8–10 — Rest 90 sec

CS DB LATERAL RAISE
4 × 12–15 — Rest 60 sec

PRONE DB REAR DELT FLY
3 × 12–15 — Rest 60 sec

DB SHRUGS
4 × 12–15 — Rest 60 sec

DUAL ROPE TRICEPS EXTENSION
4 × 10–12 — Rest 60 sec

SA CROSS-BODY TRICEPS EXTENSION
3 × 12–15 — Rest 60 sec

DEAD BUG
3 × 10 each side — Rest 45 sec

SIDE PLANK
3 × 30 sec each side — Rest 45 sec

⸻

Day 5 – Arms + Abs + Cardio

INCLINE DB CURL
4 × 10–12 — Rest 60 sec

SA DB CONCENTRATION CURL
3 × 10–12 — Rest 60 sec

HAMMER CABLE ROPE CURL
3 × 12–15 — Rest 60 sec

CROSS-CABLE TRICEPS EXTENSION (TRICEPS)
4 × 10–12 — Rest 60 sec

DUAL ROPE OHT EXTENSION
3 × 10–12 — Rest 60 sec

HANGING LEG RAISE
3 × 10–15 — Rest 60 sec

RUSSIAN TWIST
3 × 20 total — Rest 45 sec

TREADMILL
25–30 min`;
    }
});

// --- Parsing Logic ---

function parseWorkoutPlan(text) {
    const lines = text.split('\n').map(l => l.trim()).filter(l => l);
    const result = {
        title: '',
        notes: '',
        days: []
    };

    let currentSection = null; // 'notes', 'days'
    let currentDay = null;

    // Regex Patterns
    const promoPattern = /1️⃣|2️⃣|3️⃣|🗓️/g;
    // Relaxed Day Pattern: Matches "Day 1" or "اليوم 1" with any separator or none
    const dayPattern = /^(?:Day|اليوم)[\s\-_]*(\d+)(?:[\s:\-–\.]+(.*))?$/i;
    const statsPattern = /(\d+\s*(?:Sets|Sets|x|×).*)/i;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // Clean Markdown formatting (Bold **, * etc)
        line = line.replace(/[*_#]/g, '').trim();

        // 1. Detect General Notes (Flexible)
        if (line.includes('ملاحظات عامة') || line.startsWith('1️⃣')) {
            if (!line.includes('Workout Plan')) {
                currentSection = 'notes';
                line = line.replace(/^[1️⃣\d\.]*\s*ملاحظات عامة\s*[:\-–]?/, '').trim();
                if (line) result.notes += line + '\n';
                continue;
            }
        }

        // 2. Detect Title (Global Check)
        if (line.includes('Workout Plan') || line.includes('Mohamed El-Tawil') || line.includes('Mohamed ElTawil')) {
            result.title = line.replace(promoPattern, '').replace(/^[-\s]+/, '').trim();
            currentSection = 'days';
            continue;
        }

        // 3. Detect Separators (ignore)
        if (line.match(/^[-—⸻_]+$/)) continue;

        // 4. Detect Day Headers (Global Check)
        const dayMatch = line.match(dayPattern);
        if (dayMatch) {
            currentSection = 'days';
            const dayNum = dayMatch[1];
            const dayFocus = dayMatch[2] ? dayMatch[2].trim() : '';

            currentDay = {
                id: `Day ${dayNum}`,
                focus: dayFocus,
                exercises: []
            };
            result.days.push(currentDay);
            continue;
        }

        // 5. Content Parsing based on Section
        if (currentSection === 'notes') {
            // Check if we missed a Day Header (Backtrack Safety)
            if (dayPattern.test(line)) {
                i--;
                continue;
            }
            result.notes += line + '\n';
        } else if (currentSection === 'days') {
            // Handle "Cardio & Abs" Special Section at end
            if (line.toLowerCase().includes('cardio & abs')) {
                if (currentDay) {
                    currentDay.exercises.push({ name: line, isHeader: true, stats: '' });
                }
                continue;
            }

            if (!currentDay) continue; // Skip if no day started

            const statsMatch = line.match(statsPattern);

            if (statsMatch) {
                // Formatting: "Name 4 Sets..." or Just "4 Sets..."
                const splitIndex = statsMatch.index;
                const namePart = line.substring(0, splitIndex).trim();
                const statsPart = line.substring(splitIndex).trim();

                if (namePart.length > 2) {
                    // Single line
                    const link = exerciseMap.get(namePart.replace(/[^\w\s]/g, '').toUpperCase()) || '';
                    currentDay.exercises.push({
                        name: namePart,
                        stats: statsPart,
                        link: link
                    });
                } else {
                    // Stats for previous
                    if (currentDay.exercises.length > 0) {
                        currentDay.exercises[currentDay.exercises.length - 1].stats = line;
                    }
                }
            } else {
                // Exercise Name OR Section Header
                if (line.includes(':') && line.length < 40) {
                    currentDay.exercises.push({
                        name: line,
                        isHeader: true,
                        stats: ''
                    });
                } else {
                    const exName = line;
                    const cleanName = exName.replace(/[^\w\s]/g, '').toUpperCase();
                    const link = exerciseMap.get(cleanName) || '';
                    currentDay.exercises.push({
                        name: exName,
                        stats: '',
                        link: link
                    });
                }
            }
        }
    }
    return result;
}

// --- Rendering Logic ---

function render() {
    const text = $('inputText').value;
    const data = parseWorkoutPlan(text);
    const output = $('output');
    output.innerHTML = '';

    // 1. Render Notes Page (if notes exist)
    if (data.notes.trim()) {
        const notesPage = document.createElement('div');
        notesPage.className = 'page notes-page';
        notesPage.innerHTML = `
            <h1>ملاحظات عامة 📝</h1>
            <div class="notes-content">
                ${data.notes.replace(/\n/g, '<br>')}
            </div>
        `;
        output.appendChild(notesPage);
    }

    // 2. Render Title Page (if title exists)
    if (data.title) {
        const titlePage = document.createElement('div');
        titlePage.className = 'page title-page';
        titlePage.innerHTML = `
            <div class="title-container">
                <div class="main-title">WORKOUT PLAN</div>
                <div class="sub-title">${data.title}</div>
            </div>
        `;
        output.appendChild(titlePage);
    }

    // 3. Render Day Pages
    data.days.forEach(day => {
        const dayPage = document.createElement('div');
        dayPage.className = 'page day-page';

        let rows = '';
        day.exercises.forEach((ex, idx) => {
            if (ex.isHeader) {
                rows += `
                <tr class="section-header-row">
                    <td colspan="3" style="text-align: center; background: rgba(0, 255, 255, 0.15); color: var(--accent-color); font-weight: 900;">
                        ${ex.name}
                    </td>
                </tr>`;
                return;
            }

            const hasLink = !!ex.link;
            const nameHtml = hasLink
                ? `<a href="${ex.link}" target="_blank" class="ex-link">${ex.name} 🔗</a>`
                : ex.name;

            rows += `
                <tr>
                    <td class="index-cell">${idx + 1}</td>
                    <td class="ex-name-cell">${nameHtml}</td>
                    <td class="stats-cell">${ex.stats}</td>
                </tr>
            `;
        });

        dayPage.innerHTML = `
            <div class="day-header">
                <h2>${day.id}</h2>
                <h3>${day.focus}</h3>
            </div>
            <div class="table-container">
                <table class="workout-table">
                    <thead>
                        <tr>
                            <th style="width: 60px">#</th>
                            <th>التمرين</th>
                            <th style="width: 35%">المجموعات / التكرار</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>
            </div>
        `;
        output.appendChild(dayPage);
    });
}

function clearAll() {
    $('inputText').value = '';
    $('output').innerHTML = '';
}

// --- PDF Merge Logic ---

let masterPdfBytes = null;

async function checkMasterFile() {
    const statusEl = document.getElementById('masterStatus');

    try {
        const res = await fetch('Training_Master.pdf');
        if (!res.ok) throw new Error('Not Found');
        masterPdfBytes = await res.arrayBuffer();
        statusEl.textContent = '✅ ملف Training_Master.pdf جاهز';
        statusEl.style.color = '#00ff99';
    } catch (err) {
        statusEl.textContent = '⚠️ المتصفح منع تحميل الملف تلقائياً';
        statusEl.style.color = '#ffcc00';
    }
}

async function handleManualFile(input) {
    const statusEl = document.getElementById('masterStatus');
    const file = input.files[0];
    if (file) {
        masterPdfBytes = await file.arrayBuffer();
        statusEl.textContent = `✅ تم اختيار: ${file.name}`;
        statusEl.style.color = '#00ff99';
    }
}

// Call on load
window.addEventListener('DOMContentLoaded', checkMasterFile);

async function mergeAndDownload() {
    render();

    // Parse again to get Title for Filename
    const text = document.getElementById('inputText').value;
    const data = parseWorkoutPlan(text);

    // Construct Filename: Name + Date + Time
    let safeTitle = 'Workout';

    if (data && data.title) {
        const parts = data.title.split(/[–-]/);
        if (parts.length > 1) {
            safeTitle = parts[parts.length - 1].trim();
        } else {
            safeTitle = data.title;
        }
        safeTitle = safeTitle.replace(/[\\/:"*?<>|]/g, '').replace(/\s+/g, '_').trim();
    }

    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10);
    const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }).replace(/:/g, '-');

    const finalFileName = `${safeTitle}_${dateStr}_${timeStr}.pdf`;

    const msgEl = document.getElementById('msg');

    if (!masterPdfBytes) {
        const manualInput = document.getElementById('manualMasterPdf');
        if (manualInput.files && manualInput.files[0]) {
            masterPdfBytes = await manualInput.files[0].arrayBuffer();
        }
    }

    if (!masterPdfBytes) {
        msgEl.textContent = '❌ يجب اختيار ملف PDF الرئيسي أولاً!';
        msgEl.style.color = '#ff4d4d';
        return;
    }

    const pagesContainer = document.getElementById('output');
    const pages = pagesContainer.querySelectorAll('.page');
    if (pages.length === 0) {
        msgEl.textContent = '❌ لا توجد صفحات لدمجها!';
        msgEl.style.color = '#ff4d4d';
        return;
    }

    const totalLinks = pagesContainer.querySelectorAll('a').length;
    if (totalLinks === 0) {
        msgEl.textContent = '⚠️ تحذير: لم يتم العثور على أي روابط في الخطة!';
        msgEl.style.color = '#ffcc00';
    }

    msgEl.textContent = `⏳ جاري معالجة ${pages.length} صفحات...`;
    msgEl.style.color = '#ffcc00';

    try {
        const { PDFDocument, PDFName, PDFString } = PDFLib;
        const pdfDoc = await PDFDocument.load(masterPdfBytes);

        const insertAfterPage = parseInt(document.getElementById('insertPage').value) || 8;
        let insertIndex = insertAfterPage;

        const A4_WIDTH = 595.28;
        const A4_HEIGHT = 841.89;
        const bgDataUrl = (typeof BG_DATA !== 'undefined') ? BG_DATA : null;

        for (let i = 0; i < pages.length; i++) {
            const pageEl = pages[i];
            const originalBg = getComputedStyle(pageEl).backgroundImage;
            if (bgDataUrl) {
                pageEl.style.setProperty('background-image', `url("${bgDataUrl}")`, 'important');
            }

            const canvas = await html2canvas(pageEl, {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                backgroundColor: null
            });
            const imgData = canvas.toDataURL('image/jpeg', 0.85);
            const imgImage = await pdfDoc.embedJpg(imgData);

            if (bgDataUrl) {
                pageEl.style.backgroundImage = '';
            }

            const newPage = pdfDoc.insertPage(insertIndex + i, [A4_WIDTH, A4_HEIGHT]);

            newPage.drawImage(imgImage, {
                x: 0,
                y: 0,
                width: A4_WIDTH,
                height: A4_HEIGHT
            });

            const links = pageEl.querySelectorAll('a');
            const pageRect = pageEl.getBoundingClientRect();
            const annotations = [];

            links.forEach(link => {
                if (!link.href) return;
                const linkRect = link.getBoundingClientRect();
                const relX = (linkRect.left - pageRect.left) / pageRect.width;
                const relY = (linkRect.top - pageRect.top) / pageRect.height;
                const relW = linkRect.width / pageRect.width;
                const relH = linkRect.height / pageRect.height;

                const x = relX * A4_WIDTH;
                const w = relW * A4_WIDTH;
                const h = relH * A4_HEIGHT;
                const y = (A4_HEIGHT * (1 - relY)) - h;

                const linkAnnotation = pdfDoc.context.register(
                    pdfDoc.context.obj({
                        Type: 'Annot',
                        Subtype: 'Link',
                        Rect: [x, y, x + w, y + h],
                        Border: [0, 0, 0],
                        A: {
                            Type: 'Action',
                            S: 'URI',
                            URI: PDFString.of(link.href),
                        },
                    })
                );
                annotations.push(linkAnnotation);
            });

            if (annotations.length > 0) {
                const annotsRef = newPage.node.lookup(PDFName.of('Annots'));
                let annotsArray;
                if (annotsRef) {
                    annotsArray = annotsRef;
                } else {
                    annotsArray = pdfDoc.context.obj([]);
                    newPage.node.set(PDFName.of('Annots'), annotsArray);
                }
                annotations.forEach(ref => annotsArray.push(ref));
            }
            msgEl.textContent = `⏳ جاري معالجة صفحة ${i + 1}...`;
        }

        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        const link = document.getElementById('downloadLink');
        link.href = url;
        link.download = finalFileName;
        link.click();

        msgEl.textContent = `✅ تم الحفظ باسم: ${finalFileName}`;
        msgEl.style.color = '#00ff99';
        setTimeout(() => URL.revokeObjectURL(url), 1000);

    } catch (err) {
        console.error(err);
        msgEl.textContent = '❌ حدث خطأ: ' + err.message;
        msgEl.style.color = '#ff4d4d';
    }
}

/* --- AI Integration Logic --- */

// On Load
window.addEventListener('DOMContentLoaded', () => {
    loadApiKey();
    setMode('manual'); // Default

    // Apply background for printing
    window.addEventListener('beforeprint', () => {
        const bgDataUrl = (typeof BG_DATA !== 'undefined') ? BG_DATA : null;
        if (bgDataUrl) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => {
                page.style.setProperty('background-image', `url("${bgDataUrl}")`, 'important');
                page.style.setProperty('background-size', '100% 100%', 'important');
            });
        }
    });
});

function setMode(mode) {
    const btnManual = document.getElementById('btnManual');
    const btnAI = document.getElementById('btnAI');
    const aiInputContainer = document.getElementById('aiInputContainer');
    const aiSettings = document.getElementById('aiSettings');
    const mainInput = document.getElementById('inputText');

    if (mode === 'manual') {
        btnManual.classList.add('active');
        btnAI.classList.remove('active');
        aiInputContainer.style.display = 'none';
        aiSettings.style.display = 'none';
        mainInput.placeholder = "الصق الخطة هنا...";
    } else {
        btnManual.classList.remove('active');
        btnAI.classList.add('active');
        aiInputContainer.style.display = 'block';
        mainInput.placeholder = "النتيجة ستظهر هنا (الخطة الجاهزة)...";

        if (!document.getElementById('apiKey').value) {
            aiSettings.style.display = 'block';
        }
    }
}

function toggleSettings() {
    const el = document.getElementById('aiSettings');
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function saveApiKey() {
    const key = document.getElementById('apiKey').value.trim();
    if (key) {
        localStorage.setItem('gemini_api_key', key);
        alert('تم حفظ المفتاح بنجاح! ✅');
    }
}

// ✅ SECURE: Load API key from localStorage only (never hardcode keys!)
function loadApiKey() {
    // Read key from localStorage - user must enter their own key
    const savedKey = localStorage.getItem('gemini_api_key') || '';
    document.getElementById('apiKey').value = savedKey;

    // Show settings panel if no key is saved
    if (!savedKey) {
        console.log('ℹ️ No API key found. Please enter your key in settings.');
    }
}

async function generateWorkout() {
    const aiInputEl = document.getElementById('aiInputText'); // Input
    const outputEl = document.getElementById('inputText'); // Output
    const apiKey = document.getElementById('apiKey').value.trim();
    const btn = document.querySelector('.generate-btn');

    if (!apiKey) {
        alert('⚠️ الرجاء إدخال مفتاح API أولاً (اضغط على علامة الترس)');
        toggleSettings();
        return;
    }

    if (!aiInputEl.value.trim()) {
        alert('⚠️ الرجاء إدخال بيانات العميل في الصندوق المخصص (بيانات العميل)');
        return;
    }

    // UI Loading State
    const originalText = btn.innerText;
    btn.innerText = '⏳ جاري التفكير والكتابة... (يرجى الانتظار)';
    btn.disabled = true;

    try {
        const userContent = aiInputEl.value;
        // Make sure SYSTEM_PROMPT is defined in your HTML or another file
        const fullPrompt = (typeof SYSTEM_PROMPT !== 'undefined' ? SYSTEM_PROMPT : "") + "\n\n🚀 CLIENT DATA:\n" + userContent;
        let generatedText = "";

        // Detect Provider based on key prefix
        if (apiKey.startsWith('sk-')) {
            // --- OPENAI API (ChatGPT) ---
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'gpt-4o-mini',
                    messages: [
                        { role: 'system', content: (typeof SYSTEM_PROMPT !== 'undefined' ? SYSTEM_PROMPT : "") },
                        { role: 'user', content: "🚀 CLIENT DATA:\n" + userContent }
                    ],
                    temperature: 0.3
                })
            });

            const data = await response.json();
            if (data.error) throw new Error(data.error.message || "OpenAI API Error");
            generatedText = data.choices[0].message.content;

        } else if (apiKey.startsWith('pplx-')) {
            // --- PERPLEXITY API ---
            const response = await fetch('https://api.perplexity.ai/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'llama-3.1-sonar-large-128k-online',
                    messages: [
                        { role: 'system', content: (typeof SYSTEM_PROMPT !== 'undefined' ? SYSTEM_PROMPT : "") },
                        { role: 'user', content: "🚀 CLIENT DATA:\n" + userContent }
                    ],
                    temperature: 0.2
                })
            });

            const data = await response.json();
            if (data.error) throw new Error(data.error.message || "Perplexity API Error");
            generatedText = data.choices[0].message.content;

        } else {
            // --- GOOGLE GEMINI API ---
            // ✅ Updated based on ListModels test - supports latest 2.5 Flash!
            const models = [
                'gemini-2.5-flash',       // Newest stable (June 2025)
                'gemini-2.5-pro',         // Newest pro
                'gemini-flash-latest',    // Always points to latest
                'gemini-2.0-flash'        // Fallback
            ];

            let data = null;
            let success = false;
            let lastError = null;

            for (const model of models) {
                try {
                    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            contents: [{
                                parts: [{ text: fullPrompt }]
                            }]
                        })
                    });

                    data = await response.json();

                    // Specific Error Handling
                    if (data.error) {
                        // If Rate Limit (429), stop trying and tell user immediately
                        if (data.error.code === 429 || data.error.status === 'RESOURCE_EXHAUSTED') {
                            throw new Error(`⚠️ ضغط كبير على السيرفر (Rate Limit). يرجى الانتظار دقيقة والمحاولة مجدداً.`);
                        }
                        throw new Error(data.error.message);
                    }

                    // If we get here, it worked!
                    success = true;
                    break;
                } catch (err) {
                    // Rethrow rate limits immediately
                    if (err.message.includes('Rate Limit') || err.message.includes('ضغط كبير')) {
                        throw err;
                    }

                    console.warn(`Model ${model} failed:`, err);
                    lastError = err;
                }
            }

            if (!success) {
                throw lastError || new Error('All Gemini models failed.');
            }
            generatedText = data.candidates[0].content.parts[0].text;
        }

        // Success!
        outputEl.value = generatedText;
        render(); // Auto-render

        // Success Animation
        setTimeout(() => {
            btn.innerText = originalText;
            btn.disabled = false;
        }, 2000);

    } catch (err) {
        console.error(err);
        alert('❌ حدث خطأ أثناء التوليد:\n' + err.message);
        btn.innerText = originalText;
        btn.disabled = false;
    }
}

async function generateWorkout() {
    const aiInputEl = document.getElementById('aiInputText'); // Input
    const outputEl = document.getElementById('inputText'); // Output
    const apiKey = document.getElementById('apiKey').value.trim();
    const btn = document.querySelector('.generate-btn');

    if (!apiKey) {
        alert('⚠️ الرجاء إدخال مفتاح API أولاً (اضغط على علامة الترس)');
        toggleSettings();
        return;
    }

    if (!aiInputEl.value.trim()) {
        alert('⚠️ الرجاء إدخال بيانات العميل في الصندوق المخصص (بيانات العميل)');
        return;
    }

    // UI Loading State
    const originalText = btn.innerText;
    btn.innerText = '⏳ جاري التفكير والكتابة... (يرجى الانتظار)';
    btn.disabled = true;

    try {
        const userContent = aiInputEl.value;
        // Make sure SYSTEM_PROMPT is defined in your HTML or another file
        const fullPrompt = (typeof SYSTEM_PROMPT !== 'undefined' ? SYSTEM_PROMPT : "") + "\n\n🚀 CLIENT DATA:\n" + userContent;
        let generatedText = "";

        // Detect Provider based on key prefix
        if (apiKey.startsWith('sk-')) {
            // --- OPENAI API (ChatGPT) ---
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'gpt-4o-mini',
                    messages: [
                        { role: 'system', content: (typeof SYSTEM_PROMPT !== 'undefined' ? SYSTEM_PROMPT : "") },
                        { role: 'user', content: "🚀 CLIENT DATA:\n" + userContent }
                    ],
                    temperature: 0.3
                })
            });

            const data = await response.json();
            if (data.error) throw new Error(data.error.message || "OpenAI API Error");
            generatedText = data.choices[0].message.content;

        } else if (apiKey.startsWith('pplx-')) {
            // --- PERPLEXITY API ---
            const response = await fetch('https://api.perplexity.ai/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'llama-3.1-sonar-large-128k-online',
                    messages: [
                        { role: 'system', content: (typeof SYSTEM_PROMPT !== 'undefined' ? SYSTEM_PROMPT : "") },
                        { role: 'user', content: "🚀 CLIENT DATA:\n" + userContent }
                    ],
                    temperature: 0.2
                })
            });

            const data = await response.json();
            if (data.error) throw new Error(data.error.message || "Perplexity API Error");
            generatedText = data.choices[0].message.content;

        } else {
            // --- GOOGLE GEMINI API ---
            // ✅ Updated based on ListModels test - supports latest 2.5 Flash!
            const models = [
                'gemini-2.5-flash',       // Newest stable (June 2025)
                'gemini-2.5-pro',         // Newest pro
                'gemini-flash-latest',    // Always points to latest
                'gemini-2.0-flash'        // Fallback
            ];

            let data = null;
            let success = false;
            let lastError = null;

            for (const model of models) {
                try {
                    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            contents: [{
                                parts: [{ text: fullPrompt }]
                            }]
                        })
                    });

                    data = await response.json();

                    // Specific Error Handling
                    if (data.error) {
                        // If Rate Limit (429), stop trying and tell user immediately
                        if (data.error.code === 429 || data.error.status === 'RESOURCE_EXHAUSTED') {
                            throw new Error(`⚠️ ضغط كبير على السيرفر (Rate Limit). يرجى الانتظار دقيقة والمحاولة مجدداً.`);
                        }
                        throw new Error(data.error.message);
                    }

                    // If we get here, it worked!
                    success = true;
                    break;
                } catch (err) {
                    // Rethrow rate limits immediately
                    if (err.message.includes('Rate Limit') || err.message.includes('ضغط كبير')) {
                        throw err;
                    }

                    console.warn(`Model ${model} failed:`, err);
                    lastError = err;
                }
            }

            if (!success) {
                throw lastError || new Error('All Gemini models failed.');
            }
            generatedText = data.candidates[0].content.parts[0].text;
        }

        // Success!
        outputEl.value = generatedText;
        render(); // Auto-render

        // Success Animation
        btn.innerText = '✅ تم التوليد بنجاح!';
        setTimeout(() => {
            btn.innerText = originalText;
            btn.disabled = false;
        }, 2000);

    } catch (err) {
        console.error(err);
        alert('❌ حدث خطأ أثناء التوليد:\n' + err.message);
        btn.innerText = originalText;
        btn.disabled = false;
    }
}

/* =========================================================
   Security: Disable Inspection but Allow Input Interaction
   ========================================================= */

// 1. منع كليك يمين في كل الصفحة "ما عدا" حقول الكتابة
document.addEventListener('contextmenu', function (e) {
    // نتحقق من العنصر الذي تم الضغط عليه
    var target = e.target;

    // لو العنصر هو مربع إدخال نص أو منطقة نصية -> اسمح بالقائمة (عشان النسخ واللصق)
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return true;
    }

    // غير كده -> امنع القائمة
    e.preventDefault();
}, false);

// 2. منع اختصارات لوحة المفاتيح الخاصة بالمطورين (F12, Ctrl+Shift+I, etc)
document.onkeydown = function (e) {
    // منع F12
    if (e.keyCode == 123) {
        return false;
    }
    // منع Ctrl+Shift+I (فتح التبويب Elements)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    // منع Ctrl+Shift+J (فتح الكونسول)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    // منع Ctrl+Shift+C (Inspect Element Cursor)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    // منع Ctrl+U (عرض مصدر الصفحة)
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}