<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Career Pivot Navigator</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #e2e8f0;
            color: #1e293b;
        }
        .container {
            max-width: 900px;
        }
        .card {
            background-color: #ffffff;
            border: 1px solid #cbd5e1;
        }
        .loading-spinner {
            border: 4px solid #cbd5e1;
            border-top: 4px solid #2563eb;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .aspirational-resume-container {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-out;
        }
        .aspirational-resume-container.visible {
            max-height: 2000px; /* A large value to ensure the entire content is visible */
            transition: max-height 1s ease-in;
        }
        .resume-section h2 {
            border-bottom: 2px solid #2563eb;
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
        }
    </style>
</head>
<body class="p-4 md:p-8 flex items-center justify-center min-h-screen">

    <div class="container mx-auto p-6 md:p-10 card rounded-2xl shadow-lg">
        <h1 class="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800">Career Pivot Navigator</h1>
        <p class="text-center text-gray-600 mb-8">
            Explore simple and complex career pivots based on your current role and visualize your future.
        </p>

        <div class="space-y-6">
            <div class="flex flex-col md:flex-row gap-4 mb-6">
                <input id="current-role-input" type="text" placeholder="e.g., Teacher, Accountant, Chef" class="flex-1 p-3 rounded-xl card focus:outline-none focus:border-blue-500 text-gray-800">
                <button id="generate-button" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md hover:shadow-lg">
                    Generate Pivots
                </button>
            </div>
            
            <div class="flex items-center justify-center space-x-4 mb-6">
                <label class="inline-flex items-center text-gray-700">
                    <input type="radio" class="form-radio text-blue-500" name="pivot-type" value="simple" checked>
                    <span class="ml-2">Simple Pivots</span>
                </label>
                <label class="inline-flex items-center text-gray-700">
                    <input type="radio" class="form-radio text-blue-500" name="pivot-type" value="complex">
                    <span class="ml-2">Complex Pivots</span>
                </label>
            </div>
            
            <div id="loading-container" class="hidden flex justify-center items-center py-8">
                <div class="loading-spinner"></div>
            </div>

            <div id="error-message" class="hidden bg-red-100 border border-red-300 text-red-700 p-4 rounded-xl"></div>

            <div id="results-container" class="space-y-8 hidden">
                <div>
                    <h2 id="results-heading" class="text-2xl font-semibold mb-4 text-blue-700"></h2>
                    <ul id="pivots-list" class="space-y-3"></ul>
                </div>
            </div>

            <div id="aspirational-resume-section" class="hidden">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-2xl font-semibold text-blue-700">Your Aspirational Resume</h2>
                    <button id="toggle-resume-button" class="text-blue-700 hover:text-blue-500 transition-colors">
                        <svg id="arrow-icon" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
                <div id="aspirational-resume-container" class="aspirational-resume-container rounded-xl p-6 card">
                    <p class="text-sm text-center text-gray-500 mb-6">
                        This is a vision of your future resume, based on completing the upskilling and projects outlined above. It is for inspiration only and cannot be downloaded.
                    </p>
                    <div id="resume-content" class="space-y-8 text-sm"></div>
                </div>
            </div>

        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const currentRoleInput = document.getElementById('current-role-input');
            const generateButton = document.getElementById('generate-button');
            const pivotTypeRadios = document.getElementsByName('pivot-type');
            const loadingContainer = document.getElementById('loading-container');
            const errorContainer = document.getElementById('error-message');
            const resultsContainer = document.getElementById('results-container');
            const resultsHeading = document.getElementById('results-heading');
            const pivotsList = document.getElementById('pivots-list');
            const aspirationalResumeSection = document.getElementById('aspirational-resume-section');
            const aspirationalResumeContainer = document.getElementById('aspirational-resume-container');
            const toggleResumeButton = document.getElementById('toggle-resume-button');
            const arrowIcon = document.getElementById('arrow-icon');
            const resumeContent = document.getElementById('resume-content');
            
            toggleResumeButton.addEventListener('click', () => {
                aspirationalResumeContainer.classList.toggle('visible');
                arrowIcon.classList.toggle('rotate-180');
            });

            generateButton.addEventListener('click', async () => {
                const currentRole = currentRoleInput.value.trim();
                let selectedPivotType;
                for (const radio of pivotTypeRadios) {
                    if (radio.checked) {
                        selectedPivotType = radio.value;
                        break;
                    }
                }

                if (!currentRole) {
                    displayError('Please enter your current role.');
                    return;
                }

                resetUI();
                showLoading();

                try {
                    let prompt;
                    let responseSchema;

                    if (selectedPivotType === 'simple') {
                        prompt = `I am a mid-career professional currently working as a ${currentRole}. I am looking for a "simple pivot" where my existing skills are highly transferable. Please provide two or three simple career pivots.
                        
                        Please format your response as a JSON array of strings.`;
                        responseSchema = { type: "ARRAY", items: { type: "STRING" } };

                    } else if (selectedPivotType === 'complex') {
                        prompt = `I am a mid-career professional currently working as a ${currentRole}. I am looking to make a "complex pivot" that requires significant upskilling or entry into a new industry. Please provide a detailed response that includes:
                        1.  Two or three "complex pivots" that require significant upskilling or entry into a new industry, along with a suggested timeline in months for each.
                        2.  An "aspirational resume" for a new role based on one of the complex pivots, showing what my resume could look like in three years after completing upskilling and a few side projects.
                        
                        Please format your response as a JSON object with the following schema:
                        {
                            "complexPivots": [{ "role": "string", "timelineMonths": "number" }],
                            "aspirationalResume": {
                                "name": "string",
                                "contact": { "email": "string", "phone": "string", "linkedin": "string" },
                                "summary": "string",
                                "skills": ["string"],
                                "experience": [{ "title": "string", "company": "string", "dates": "string", "responsibilities": ["string"] }],
                                "projects": [{ "title": "string", "description": "string" }]
                            }
                        }`;
                        responseSchema = {
                            type: "OBJECT",
                            properties: {
                                "complexPivots": {
                                    type: "ARRAY",
                                    items: {
                                        type: "OBJECT",
                                        properties: {
                                            "role": { "type": "STRING" },
                                            "timelineMonths": { "type": "NUMBER" }
                                        }
                                    }
                                },
                                "aspirationalResume": {
                                    type: "OBJECT",
                                    properties: {
                                        "name": { "type": "STRING" },
                                        "contact": {
                                            "type": "OBJECT",
                                            "properties": {
                                                "email": { "type": "STRING" },
                                                "phone": { "type": "STRING" },
                                                "linkedin": { "type": "STRING" }
                                            }
                                        },
                                        "summary": { "type": "STRING" },
                                        "skills": { "type": "ARRAY", "items": { "type": "STRING" } },
                                        "experience": {
                                            "type": "ARRAY",
                                            "items": {
                                                "type": "OBJECT",
                                                "properties": {
                                                    "title": { "type": "STRING" },
                                                    "company": { "type": "STRING" },
                                                    "dates": { "type": "STRING" },
                                                    "responsibilities": { "type": "ARRAY", "items": { "type": "STRING" } }
                                                }
                                            }
                                        },
                                        "projects": {
                                            "type": "ARRAY",
                                            "items": {
                                                "type": "OBJECT",
                                                "properties": {
                                                    "title": { "type": "STRING" },
                                                    "description": { "type": "STRING" }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        };
                    }

                    const payload = {
                        contents: [{ parts: [{ text: prompt }] }],
                        tools: [{ "google_search": {} }],
                        generationConfig: {
                            responseMimeType: "application/json",
                            responseSchema: responseSchema
                        }
                    };
                    const apiKey = "";
                    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
                    
                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    
                    if (!response.ok) {
                        throw new Error(`API call failed with status: ${response.status}`);
                    }
                    
                    const result = await response.json();
                    const jsonString = result.candidates?.[0]?.content?.parts?.[0]?.text;
                    if (!jsonString) {
                        throw new Error('No content received from the API.');
                    }
                    
                    const data = JSON.parse(jsonString);

                    if (selectedPivotType === 'simple') {
                        renderSimplePivots(data, pivotsList);
                    } else if (selectedPivotType === 'complex') {
                        renderComplexPivots(data.complexPivots, pivotsList);
                        renderAspirationalResume(data.aspirationalResume, resumeContent);
                        aspirationalResumeSection.classList.remove('hidden');
                    }
                    
                    hideLoading();
                    showResults(selectedPivotType);
                    aspirationalResumeContainer.classList.remove('visible');
                    arrowIcon.classList.remove('rotate-180');

                } catch (error) {
                    console.error('An error occurred:', error);
                    hideLoading();
                    displayError('An error occurred. Please try again. ' + error.message);
                }
            });

            function renderSimplePivots(data, listElement) {
                listElement.innerHTML = '';
                data.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    li.className = 'bg-gray-800 p-3 rounded-lg shadow-inner';
                    listElement.appendChild(li);
                });
            }

            function renderComplexPivots(data, listElement) {
                listElement.innerHTML = '';
                data.forEach(item => {
                    const li = document.createElement('li');
                    li.className = 'bg-gray-800 p-3 rounded-lg shadow-inner';
                    li.innerHTML = `
                        <div class="font-semibold text-blue-300">${item.role}</div>
                        <div class="text-sm text-gray-400 mt-1">Timeline: Est. ${item.timelineMonths} months of upskilling</div>
                    `;
                    listElement.appendChild(li);
                });
            }

            function renderAspirationalResume(data, element) {
                element.innerHTML = `
                    <div class="text-center mb-6">
                        <h1 class="text-2xl font-bold">${data.name}</h1>
                        <p class="text-gray-400">
                            ${data.contact.email} | ${data.contact.phone} | ${data.contact.linkedin}
                        </p>
                    </div>
                    
                    <div class="resume-section">
                        <h2 class="text-xl font-bold">Summary</h2>
                        <p>${data.summary}</p>
                    </div>

                    <div class="resume-section mt-6">
                        <h2 class="text-xl font-bold">Skills</h2>
                        <ul class="list-disc list-inside space-y-1">
                            ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="resume-section mt-6">
                        <h2 class="text-xl font-bold">Experience</h2>
                        <div class="space-y-4">
                            ${data.experience.map(exp => `
                                <div>
                                    <div class="flex justify-between items-center font-semibold">
                                        <span>${exp.title} at ${exp.company}</span>
                                        <span class="text-gray-400 text-xs">${exp.dates}</span>
                                    </div>
                                    <ul class="list-disc list-inside ml-4 mt-1 space-y-1">
                                        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                                    </ul>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="resume-section mt-6">
                        <h2 class="text-xl font-bold">Projects</h2>
                        <div class="space-y-4">
                            ${data.projects.map(proj => `
                                <div>
                                    <div class="font-semibold">${proj.title}</div>
                                    <p class="text-sm text-gray-400">${proj.description}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            function showLoading() {
                loadingContainer.classList.remove('hidden');
            }

            function hideLoading() {
                loadingContainer.classList.add('hidden');
            }

            function displayError(message) {
                errorContainer.textContent = message;
                errorContainer.classList.remove('hidden');
            }

            function hideError() {
                errorContainer.classList.add('hidden');
            }

            function showResults(type) {
                resultsContainer.classList.remove('hidden');
                resultsHeading.textContent = type === 'simple' ? 'Simple Pivots' : 'Complex Pivots';
            }

            function resetUI() {
                hideError();
                resultsContainer.classList.add('hidden');
                aspirationalResumeSection.classList.add('hidden');
                pivotsList.innerHTML = '';
                resumeContent.innerHTML = '';
            }
        });
    </script>
</body>
</html>
