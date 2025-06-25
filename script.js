// AI Governance Checklist Interactive Functionality
class GovernanceChecklist {
    constructor() {
        this.checklistData = this.initializeChecklistData();
        this.init();
    }

    initializeChecklistData() {
        return [
            {
                id: 0,
                title: "Purpose & Scope",
                items: [
                    {
                        id: "0.1",
                        description: "Have we defined the precise accountancy task the AI will support (e.g. lease classification, variance commentary)?",
                        evidence: "Business-case document",
                        status: "pending"
                    },
                    {
                        id: "0.2",
                        description: "Have we confirmed that AI is the best tool compared with RPA, SQL, or manual review?",
                        evidence: "Options-appraisal matrix",
                        status: "pending"
                    },
                    {
                        id: "0.3",
                        description: "Are success KPIs (accuracy %, time saved, cost/transaction) agreed and baselined?",
                        evidence: "KPI sheet",
                        status: "pending"
                    }
                ]
            },
            {
                id: 1,
                title: "Data Governance",
                items: [
                    {
                        id: "1.1",
                        description: "Have all input data classes been mapped and classified (public, internal, confidential, personal)?",
                        evidence: "Data-dictionary.xlsx",
                        status: "pending"
                    },
                    {
                        id: "1.2",
                        description: "Is data lineage (source ➜ transformation ➜ model) documented end-to-end?",
                        evidence: "Lineage diagram",
                        status: "pending"
                    },
                    {
                        id: "1.3",
                        description: "Is data stored and processed within an approved jurisdiction (e.g. UK/EU)?",
                        evidence: "DPA / contract clause",
                        status: "pending"
                    },
                    {
                        id: "1.4",
                        description: "Do retention and deletion schedules align with firm policy & UK GDPR?",
                        evidence: "Retention log",
                        status: "pending"
                    }
                ]
            },
            {
                id: 2,
                title: "Privacy & Security",
                items: [
                    {
                        id: "2.1",
                        description: "Is a Data-Protection Impact Assessment (DPIA) on file?",
                        evidence: "DPIA-signed.pdf",
                        status: "pending"
                    },
                    {
                        id: "2.2",
                        description: "Are prompts free of personal data or client identifiers (use placeholders)?",
                        evidence: "Prompt-redaction guide",
                        status: "pending"
                    },
                    {
                        id: "2.3",
                        description: "Is all traffic to the model encrypted in transit and at rest (TLS 1.2+, AES-256)?",
                        evidence: "Pen-test report",
                        status: "pending"
                    },
                    {
                        id: "2.4",
                        description: "Are access controls role-based and logged (MFA, least privilege)?",
                        evidence: "RBAC matrix",
                        status: "pending"
                    }
                ]
            },
            {
                id: 3,
                title: "Model Governance & Explainability",
                items: [
                    {
                        id: "3.1",
                        description: "Is the model (or API) version pinned, and recorded in a model registry?",
                        evidence: "Registry entry",
                        status: "pending"
                    },
                    {
                        id: "3.2",
                        description: "Can we trace each AI output back to its prompts and data sources (audit trail)?",
                        evidence: "Prompt-output log",
                        status: "pending"
                    },
                    {
                        id: "3.3",
                        description: "Is an \"explainability\" report available in plain English for non-technical reviewers?",
                        evidence: "Explain-AI.pdf",
                        status: "pending"
                    }
                ]
            },
            {
                id: 4,
                title: "Accuracy & Assurance",
                items: [
                    {
                        id: "4.1",
                        description: "Has accuracy been benchmarked against a human control sample?",
                        evidence: "Validation.xlsx",
                        status: "pending"
                    },
                    {
                        id: "4.2",
                        description: "Is an acceptable error rate (< x %) formally agreed for this task?",
                        evidence: "Risk-register entry",
                        status: "pending"
                    },
                    {
                        id: "4.3",
                        description: "Are hallucinations or misclassifications auto-flagged for human review?",
                        evidence: "Exception workflow",
                        status: "pending"
                    }
                ]
            },
            {
                id: 5,
                title: "Bias & Fairness",
                items: [
                    {
                        id: "5.1",
                        description: "Have we tested outputs for protected-class bias or systemic skew?",
                        evidence: "Bias-audit.csv",
                        status: "pending"
                    },
                    {
                        id: "5.2",
                        description: "Is there a documented mitigation plan if bias is detected?",
                        evidence: "Mitigation log",
                        status: "pending"
                    }
                ]
            },
            {
                id: 6,
                title: "Legal & Regulatory Compliance",
                items: [
                    {
                        id: "6.1",
                        description: "Does the use-case comply with ISA 315, UK GDPR, EU AI Act, and local laws?",
                        evidence: "Legal memo",
                        status: "pending"
                    },
                    {
                        id: "6.2",
                        description: "Do engagement letters/ToS disclose AI usage to clients?",
                        evidence: "Client-letter template",
                        status: "pending"
                    },
                    {
                        id: "6.3",
                        description: "Are export-control restrictions (e.g. US-hosted LLMs) understood and respected?",
                        evidence: "Vendor T&Cs",
                        status: "pending"
                    }
                ]
            },
            {
                id: 7,
                title: "Ethical & Professional Standards",
                items: [
                    {
                        id: "7.1",
                        description: "Does the workflow preserve IFAC and IESBA Code principles (integrity, objectivity etc.)?",
                        evidence: "Ethics checklist",
                        status: "pending"
                    },
                    {
                        id: "7.2",
                        description: "Is human professional judgement retained for final sign-off?",
                        evidence: "Sign-off procedure",
                        status: "pending"
                    }
                ]
            },
            {
                id: 8,
                title: "Environmental Responsibility",
                items: [
                    {
                        id: "8.1",
                        description: "Have we estimated the energy/carbon footprint of model inference or training?",
                        evidence: "Carbon-calc.xlsx",
                        status: "pending"
                    },
                    {
                        id: "8.2",
                        description: "Can we select a lower-footprint provider or schedule off-peak compute?",
                        evidence: "Provider comparison",
                        status: "pending"
                    }
                ]
            },
            {
                id: 9,
                title: "Vendor & Contract Management",
                items: [
                    {
                        id: "9.1",
                        description: "Has the vendor's security posture been independently assessed (ISO 27001, SOC 2)?",
                        evidence: "Due-diligence file",
                        status: "pending"
                    },
                    {
                        id: "9.2",
                        description: "Does the contract include right-to-audit and data-return clauses?",
                        evidence: "Contract.pdf",
                        status: "pending"
                    }
                ]
            },
            {
                id: 10,
                title: "Skills & Training",
                items: [
                    {
                        id: "10.1",
                        description: "Have all users completed AI-safety and data-privacy training?",
                        evidence: "CPD records",
                        status: "pending"
                    },
                    {
                        id: "10.2",
                        description: "Is prompt-engineering guidance available internally?",
                        evidence: "Prompt cheat-sheet",
                        status: "pending"
                    }
                ]
            },
            {
                id: 11,
                title: "Monitoring & Incident Response",
                items: [
                    {
                        id: "11.1",
                        description: "Are performance metrics (accuracy, latency, drift) monitored in real time?",
                        evidence: "Monitoring dashboard",
                        status: "pending"
                    },
                    {
                        id: "11.2",
                        description: "Is there an AI-specific incident-response playbook?",
                        evidence: "IR-playbook.docx",
                        status: "pending"
                    }
                ]
            },
            {
                id: 12,
                title: "Documentation & Reporting",
                items: [
                    {
                        id: "12.1",
                        description: "Is every lifecycle decision (data, model, deployment) documented and version-controlled?",
                        evidence: "Git/SharePoint",
                        status: "pending"
                    },
                    {
                        id: "12.2",
                        description: "Can we produce evidence packs quickly for audit, regulator, or client?",
                        evidence: "Evidence index",
                        status: "pending"
                    }
                ]
            }
        ];
    }

    init() {
        this.loadFromLocalStorage();
        this.renderChecklist();
        this.renderSectionProgress();
        this.updateOverallProgress();
        this.attachEventListeners();
        this.animateOnScroll();
    }

    loadFromLocalStorage() {
        const saved = localStorage.getItem('aiGovernanceChecklist');
        if (saved) {
            const savedData = JSON.parse(saved);
            // Merge saved data with default structure
            savedData.forEach(savedSection => {
                const section = this.checklistData.find(s => s.id === savedSection.id);
                if (section) {
                    savedSection.items.forEach(savedItem => {
                        const item = section.items.find(i => i.id === savedItem.id);
                        if (item) {
                            item.status = savedItem.status;
                            item.evidence = savedItem.evidence;
                        }
                    });
                }
            });
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('aiGovernanceChecklist', JSON.stringify(this.checklistData));
    }

    renderChecklist() {
        const container = document.getElementById('checklist-sections');
        container.innerHTML = '';

        this.checklistData.forEach(section => {
            const sectionElement = this.createSectionElement(section);
            container.appendChild(sectionElement);
        });
    }

    createSectionElement(section) {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'checklist-section';
        sectionDiv.dataset.sectionId = section.id;

        const completedItems = section.items.filter(item => item.status === 'complete').length;
        const totalItems = section.items.length;
        const progressText = `${completedItems}/${totalItems} completed`;

        sectionDiv.innerHTML = `
            <div class="section-header" onclick="toggleSection(${section.id})">
                <div class="section-header-left">
                    <div class="section-number">${section.id}</div>
                    <div class="section-title-text">${section.title}</div>
                </div>
                <div class="section-header-right">
                    <div class="section-progress">${progressText}</div>
                    <div class="expand-icon"></div>
                </div>
            </div>
            <div class="section-content">
                <table class="checklist-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Check Item</th>
                            <th>Status</th>
                            <th>Evidence / Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${section.items.map(item => this.createItemRow(item)).join('')}
                    </tbody>
                </table>
            </div>
        `;

        return sectionDiv;
    }

    createItemRow(item) {
        const statusOptions = [
            { value: 'pending', label: '☐ Pending', class: 'pending' },
            { value: 'in-progress', label: '🟡 In Progress', class: 'in-progress' },
            { value: 'complete', label: '✅ Complete', class: 'complete' },
            { value: 'na', label: '❌ N/A', class: 'na' }
        ];

        return `
            <tr data-item-id="${item.id}">
                <td class="item-number">${item.id}</td>
                <td class="item-description">${item.description}</td>
                <td>
                    <select class="status-select" onchange="updateItemStatus('${item.id}', this.value)">
                        ${statusOptions.map(option => 
                            `<option value="${option.value}" ${item.status === option.value ? 'selected' : ''}>
                                ${option.label}
                            </option>`
                        ).join('')}
                    </select>
                </td>
                <td>
                    <input type="text" class="evidence-input" value="${item.evidence}" 
                           onchange="updateItemEvidence('${item.id}', this.value)"
                           placeholder="Enter evidence or link">
                </td>
            </tr>
        `;
    }

    renderSectionProgress() {
        const container = document.getElementById('section-progress');
        container.innerHTML = '';

        this.checklistData.forEach(section => {
            const completedItems = section.items.filter(item => item.status === 'complete').length;
            const totalItems = section.items.length;
            const percentage = Math.round((completedItems / totalItems) * 100);

            const card = document.createElement('div');
            card.className = 'section-progress-card';
            card.innerHTML = `
                <div class="section-progress-header">
                    <div class="section-progress-title">${section.id}. ${section.title}</div>
                    <div class="section-progress-percentage">${percentage}%</div>
                </div>
                <div class="section-progress-bar">
                    <div class="section-progress-fill" style="width: ${percentage}%"></div>
                </div>
            `;

            container.appendChild(card);
        });
    }

    updateOverallProgress() {
        const totalItems = this.checklistData.reduce((sum, section) => sum + section.items.length, 0);
        const completedItems = this.checklistData.reduce((sum, section) => 
            sum + section.items.filter(item => item.status === 'complete').length, 0);
        
        const percentage = Math.round((completedItems / totalItems) * 100);

        // Update hero stats
        document.getElementById('total-items').textContent = totalItems;
        document.getElementById('completed-items').textContent = completedItems;
        document.getElementById('progress-percentage').textContent = `${percentage}%`;

        // Update main progress bar
        document.getElementById('main-progress-bar').style.width = `${percentage}%`;
        document.getElementById('progress-text').textContent = `${percentage}% Complete`;
    }

    updateItemStatus(itemId, status) {
        // Find and update the item
        for (let section of this.checklistData) {
            const item = section.items.find(i => i.id === itemId);
            if (item) {
                item.status = status;
                break;
            }
        }

        // Save to localStorage
        this.saveToLocalStorage();

        // Update UI
        this.updateSectionProgress();
        this.updateOverallProgress();
        this.renderSectionProgress();
    }

    updateItemEvidence(itemId, evidence) {
        // Find and update the item
        for (let section of this.checklistData) {
            const item = section.items.find(i => i.id === itemId);
            if (item) {
                item.evidence = evidence;
                break;
            }
        }

        // Save to localStorage
        this.saveToLocalStorage();
    }

    updateSectionProgress() {
        this.checklistData.forEach(section => {
            const sectionElement = document.querySelector(`[data-section-id="${section.id}"]`);
            if (sectionElement) {
                const completedItems = section.items.filter(item => item.status === 'complete').length;
                const totalItems = section.items.length;
                const progressText = `${completedItems}/${totalItems} completed`;
                
                const progressElement = sectionElement.querySelector('.section-progress');
                if (progressElement) {
                    progressElement.textContent = progressText;
                }
            }
        });
    }

    attachEventListeners() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Export functionality
        this.attachExportListeners();
    }

    attachExportListeners() {
        // Add export button to navigation
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu && !document.getElementById('export-btn')) {
            const exportBtn = document.createElement('button');
            exportBtn.id = 'export-btn';
            exportBtn.textContent = 'Export Data';
            exportBtn.className = 'nav-link export-btn';
            exportBtn.style.cssText = `
                background: var(--primary-blue);
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 6px;
                cursor: pointer;
                transition: all 0.2s ease;
            `;
            exportBtn.addEventListener('click', () => this.exportData());
            navMenu.appendChild(exportBtn);
        }
    }

    exportData() {
        const today = new Date().toISOString().split('T')[0];
        
        // Create modal for export options
        const modal = document.createElement('div');
        modal.className = 'export-modal';
        modal.innerHTML = `
            <div class="export-modal-content">
                <div class="export-modal-header">
                    <h3>Export Checklist Data</h3>
                    <button class="export-close-btn">&times;</button>
                </div>
                <div class="export-modal-body">
                    <p>Choose an export format:</p>
                    <div class="export-options">
                        <button class="export-option-btn" data-format="json">
                            <div class="export-option-icon">📄</div>
                            <div class="export-option-label">JSON</div>
                            <div class="export-option-desc">For developers or data import</div>
                        </button>
                        <button class="export-option-btn" data-format="csv">
                            <div class="export-option-icon">📊</div>
                            <div class="export-option-label">CSV</div>
                            <div class="export-option-desc">For Excel or spreadsheet programmes</div>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add event listeners
        const closeBtn = modal.querySelector('.export-close-btn');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // Close when clicking outside modal content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });

        // Export option buttons event listeners
        const exportButtons = modal.querySelectorAll('.export-option-btn');
        exportButtons.forEach(button => {
            button.addEventListener('click', () => {
                const format = button.getAttribute('data-format');
                document.body.removeChild(modal);
                
                // Handle different export formats
                if (format === 'json') {
                    this.exportAsJSON(today);
                } else if (format === 'csv') {
                    this.exportAsCSV(today);
                }
            });
        });

        // Style the modal
        const style = document.createElement('style');
        style.textContent = `
            .export-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            }
            .export-modal-content {
                background-color: white;
                border-radius: 12px;
                max-width: 500px;
                width: 90%;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                animation: modal-slide-up 0.3s ease;
            }
            .export-modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px 24px;
                border-bottom: 1px solid #eee;
            }
            .export-modal-header h3 {
                margin: 0;
                font-weight: 500;
            }
            .export-close-btn {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #555;
            }
            .export-modal-body {
                padding: 24px;
            }
            .export-options {
                display: flex;
                gap: 16px;
                margin-top: 16px;
            }
            .export-option-btn {
                flex: 1;
                background-color: #f8f8f8;
                border: 1px solid #ddd;
                border-radius: 8px;
                padding: 16px;
                cursor: pointer;
                transition: all 0.2s ease;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            .export-option-btn:hover {
                background-color: #f0f0f0;
                border-color: var(--primary-blue);
            }
            .export-option-icon {
                font-size: 24px;
                margin-bottom: 8px;
            }
            .export-option-label {
                font-weight: 500;
                margin-bottom: 4px;
            }
            .export-option-desc {
                font-size: 12px;
                color: #666;
            }
            @keyframes modal-slide-up {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    exportAsJSON(date) {
        const exportData = {
            exportDate: new Date().toISOString(),
            sections: this.checklistData.map(section => ({
                id: section.id,
                title: section.title,
                items: section.items.map(item => ({
                    id: item.id,
                    description: item.description,
                    status: item.status,
                    evidence: item.evidence
                }))
            }))
        };

        const blob = new Blob([JSON.stringify(exportData, null, 2)], {
            type: 'application/json'
        });
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ai-governance-checklist-${date}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
    exportAsCSV(date) {
        // Prepare CSV header
        let csv = 'Section ID,Section Title,Item ID,Description,Status,Evidence\n';
        
        // Add data rows
        this.checklistData.forEach(section => {
            section.items.forEach(item => {
                // Properly escape fields for CSV format
                const escapedDescription = `"${item.description.replace(/"/g, '""')}"`;
                const escapedEvidence = `"${item.evidence.replace(/"/g, '""')}"`;
                
                csv += `${section.id},"${section.title}",${item.id},${escapedDescription},${item.status},${escapedEvidence}\n`;
            });
        });
        
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ai-governance-checklist-${date}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    animateOnScroll() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.checklist-section, .legend-item, .section-progress-card').forEach(el => {
            observer.observe(el);
        });
    }
}

// Global functions for inline event handlers
function toggleSection(sectionId) {
    const section = document.querySelector(`[data-section-id="${sectionId}"]`);
    if (section) {
        section.classList.toggle('expanded');
    }
}

function updateItemStatus(itemId, status) {
    if (window.checklistApp) {
        window.checklistApp.updateItemStatus(itemId, status);
    }
}

function updateItemEvidence(itemId, evidence) {
    if (window.checklistApp) {
        window.checklistApp.updateItemEvidence(itemId, evidence);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.checklistApp = new GovernanceChecklist();
    
    // Set up How to Use modal
    const modal = document.getElementById('how-to-use-modal');
    const howToUseBtn = document.getElementById('how-to-use-btn');
    const closeBtn = document.querySelector('.modal-close');
    
    howToUseBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
    });
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // Add navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        // Add background opacity based on scroll
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + E to export
        if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
            e.preventDefault();
            window.checklistApp.exportData();
        }
        
        // Ctrl/Cmd + / to show keyboard shortcuts
        if ((e.ctrlKey || e.metaKey) && e.key === '/') {
            e.preventDefault();
            showKeyboardShortcuts();
        }
    });

    // Add print support
    window.addEventListener('beforeprint', () => {
        // Expand all sections for printing
        document.querySelectorAll('.checklist-section').forEach(section => {
            section.classList.add('expanded');
        });
    });
});

function showKeyboardShortcuts() {
    alert(`Keyboard Shortcuts:
    
Ctrl/Cmd + E: Open export options
Ctrl/Cmd + /: Show this help
    
Navigation:
- Use Tab to navigate between form elements
- Use Space/Enter to toggle dropdowns
- Use arrow keys in dropdowns

Export Options:
- JSON: For developers or data import
- CSV: For Excel or spreadsheet programmes`);
}

// Add service worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
