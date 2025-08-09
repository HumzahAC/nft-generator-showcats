// Python NFT Generator Project Showcase
class NFTGeneratorShowcase {
    constructor() {
        console.log('🎨 Initializing Python NFT Generator Showcase...');
        
        this.particles = [];
        this.isScrolling = false;
        this.codeData = null;
        
        this.init();
    }

    init() {
        console.log('🚀 Setting up showcase components...');
        this.loadProjectData();
        this.setupNavigation();
        this.setupParticles();
        this.setupScrollEffects();
        this.setupCounters();
        this.setupCodeSections();
        this.setupIntersectionObserver();
        this.setupSmoothScrolling();
        this.startAnimationLoop();
        
        // Initialize syntax highlighting
        if (typeof hljs !== 'undefined') {
            hljs.highlightAll();
        }
        
        console.log('✅ NFT Generator Showcase initialized!');
    }

    loadProjectData() {
        console.log('📊 Loading project data...');
        
        // Code sections data
        this.codeData = [
            {
                title: "Trait Configuration System",
                description: "Define traits with weighted rarity distribution for balanced collections",
                code: `# Traits and their rarity weights
traits = {
    "Background": (["Blue", "Gold", "Green"], [40, 10, 50]),
    "Cat": (["Blue", "Gold", "Green"], [40, 10, 50]),
    "Nose": (["Blue", "Gold", "Green"], [40, 10, 50])
}

trait_files = {
    "Background": {"Blue": "blue", "Gold": "gold", "Green": "green"},
    "Cat": {"Blue": "cat-blue", "Gold": "cat-gold", "Green": "cat-green"},
    "Nose": {"Blue": "nose-blue", "Gold": "nose-gold", "Green": "nose-green"}
}`
            },
            {
                title: "Unique Image Generation",
                description: "Algorithm ensures no duplicate NFTs in the collection",
                code: `def create_image():
    img = {}
    for trait, (options, weights) in traits.items():
        img[trait] = random.choices(options, weights)[0]
    return img

# Generate unique images only
while len(all_images) < TOTAL_IMAGES:
    new = create_image()
    if new not in all_images:
        all_images.append(new)

# Assign sequential token IDs
for i, img in enumerate(all_images):
    img["tokenId"] = i`
            },
            {
                title: "Layer Composition Engine",
                description: "Combine multiple PNG layers using alpha compositing",
                code: `for item in all_images:
    layers = []
    # Load all trait layers for this NFT
    for trait in ["Background", "Cat", "Nose"]:
        path = f"trait-layers/{trait.lower()}/{trait_files[trait][item[trait]]}.png"
        layers.append(Image.open(path).convert("RGBA"))
    
    # Composite all layers
    composite = layers[0]
    for layer in layers[1:]:
        composite = Image.alpha_composite(composite, layer)
    
    # Save final image
    composite.convert("RGB").save(f"images/{item['tokenId']}.png")`
            },
            {
                title: "Metadata Management",
                description: "Export comprehensive JSON metadata for blockchain integration",
                code: `# Save all metadata to JSON file
with open('all-traits.json', 'w') as f:
    json.dump(all_images, f, indent=2)

# Create organized file structure
os.makedirs("images", exist_ok=True)
os.makedirs("metadata", exist_ok=True)

# Example metadata structure:
# {
#   "tokenId": 0,
#   "Background": "Blue",
#   "Cat": "Gold", 
#   "Nose": "Green"
# }`
            }
        ];
    }

    setupNavigation() {
        console.log('🧭 Setting up navigation...');
        
        const nav = document.getElementById('nav');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Scroll effect for navigation
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                nav.classList.add('nav--scrolled');
            } else {
                nav.classList.remove('nav--scrolled');
            }
            
            // Update active navigation link
            this.updateActiveNavLink();
            lastScrollY = currentScrollY;
        });

        // Navigation link click handlers with proper event handling
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                console.log('🎯 Navigation clicked:', targetId);
                
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    console.log('✅ Target section found:', targetSection);
                    
                    // Update active state
                    navLinks.forEach(l => l.classList.remove('nav-link--active'));
                    link.classList.add('nav-link--active');
                    
                    // Calculate offset for fixed nav
                    const navHeight = nav.offsetHeight;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                    
                    // Smooth scroll to section
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                } else {
                    console.error('❌ Target section not found:', targetId);
                }
            });
        });
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        const navHeight = document.getElementById('nav').offsetHeight;
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= navHeight + 50 && rect.bottom >= navHeight + 50) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('nav-link--active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('nav-link--active');
            }
        });
    }

    setupParticles() {
        console.log('✨ Creating particle system...');
        
        const particleContainer = document.getElementById('particles');
        if (!particleContainer) return;

        // Create floating particles with blockchain theme
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const delay = Math.random() * 4;
            const duration = 3 + Math.random() * 2;
            
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.animationDelay = delay + 's';
            particle.style.animationDuration = duration + 's';
            
            particleContainer.appendChild(particle);
        }

        // Add some special blockchain-themed particles
        this.createSpecialParticles(particleContainer);
    }

    createSpecialParticles(container) {
        const blockchainSymbols = ['⛓️', '🔗', '💎', '🚀', '⚡'];
        
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'blockchain-particle';
            particle.textContent = blockchainSymbols[Math.floor(Math.random() * blockchainSymbols.length)];
            
            particle.style.position = 'absolute';
            particle.style.fontSize = '20px';
            particle.style.opacity = '0.3';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = Math.random() * window.innerHeight + 'px';
            particle.style.animation = `float ${6 + Math.random() * 4}s ease-in-out infinite`;
            particle.style.animationDelay = Math.random() * 3 + 's';
            
            container.appendChild(particle);
        }
    }

    setupScrollEffects() {
        console.log('📜 Setting up scroll effects...');
        
        const floatingElements = document.querySelectorAll('.floating-nft');
        
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            
            floatingElements.forEach(element => {
                const speed = parseFloat(element.dataset.speed) || 0.5;
                const y = scrollY * speed * 0.3;
                element.style.transform = `translateY(${y}px) rotate(${scrollY * 0.05}deg)`;
            });
        });

        // Setup scroll indicator with proper event handling
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', (e) => {
                e.preventDefault();
                const overviewSection = document.getElementById('overview');
                if (overviewSection) {
                    const navHeight = document.getElementById('nav').offsetHeight;
                    const targetPosition = overviewSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
    }

    setupCounters() {
        console.log('📊 Setting up animated counters...');
        
        const counterElements = document.querySelectorAll('[data-count]');
        
        const animateCounter = (element) => {
            const target = parseInt(element.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    if (current > target) current = target;
                    
                    if (target >= 1000) {
                        element.textContent = Math.floor(current).toLocaleString();
                    } else {
                        element.textContent = Math.floor(current);
                    }
                    
                    requestAnimationFrame(updateCounter);
                } else {
                    if (target >= 1000) {
                        element.textContent = target.toLocaleString();
                    } else {
                        element.textContent = target;
                    }
                }
            };
            
            updateCounter();
        };

        // Observe counters and animate when visible
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target._animated) {
                    animateCounter(entry.target);
                    entry.target._animated = true;
                }
            });
        }, { threshold: 0.5 });

        counterElements.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    setupCodeSections() {
        console.log('💻 Setting up code sections...');
        
        const codeSectionsContainer = document.getElementById('codeSections');
        if (!codeSectionsContainer || !this.codeData) return;

        codeSectionsContainer.innerHTML = this.codeData.map((section, index) => `
            <div class="code-section fade-in" style="animation-delay: ${index * 0.2}s">
                <div class="code-header">
                    <h3 class="code-title">${section.title}</h3>
                    <p class="code-description">${section.description}</p>
                </div>
                <div class="code-block">
                    <button class="code-copy-btn" data-code-index="${index}">
                        <i class="fas fa-copy"></i> Copy
                    </button>
                    <pre><code class="language-python">${this.escapeHtml(section.code)}</code></pre>
                </div>
            </div>
        `).join('');

        // Setup copy functionality
        this.setupCodeCopy();
        
        // Re-highlight syntax if hljs is available
        if (typeof hljs !== 'undefined') {
            setTimeout(() => {
                hljs.highlightAll();
            }, 100);
        }
    }

    setupCodeCopy() {
        console.log('📋 Setting up code copy functionality...');
        
        const copyButtons = document.querySelectorAll('.code-copy-btn');
        
        copyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const codeIndex = parseInt(button.getAttribute('data-code-index'));
                const codeText = this.codeData[codeIndex].code;
                
                navigator.clipboard.writeText(codeText).then(() => {
                    const originalContent = button.innerHTML;
                    button.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    button.style.background = 'var(--nft-green)';
                    
                    setTimeout(() => {
                        button.innerHTML = originalContent;
                        button.style.background = '';
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy code:', err);
                    button.innerHTML = '<i class="fas fa-times"></i> Error';
                    setTimeout(() => {
                        button.innerHTML = '<i class="fas fa-copy"></i> Copy';
                    }, 2000);
                });
            });
        });
    }

    setupSmoothScrolling() {
        console.log('🔄 Setting up smooth scrolling for hero buttons...');
        
        // Wait for DOM to be fully ready
        setTimeout(() => {
            // Hero action buttons - with more specific selectors
            const viewCodeBtn = document.querySelector('.hero-actions .btn--primary');
            const seeProcessBtn = document.querySelector('.hero-actions .btn--outline');
            
            if (viewCodeBtn) {
                console.log('✅ Found View Code button');
                viewCodeBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('🎯 View Code button clicked');
                    
                    const targetSection = document.getElementById('implementation');
                    if (targetSection) {
                        const navHeight = document.getElementById('nav').offsetHeight;
                        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        console.log('🚀 Scrolling to implementation section');
                    } else {
                        console.error('❌ Implementation section not found');
                    }
                });
            } else {
                console.error('❌ View Code button not found');
            }
            
            if (seeProcessBtn) {
                console.log('✅ Found See Process button');
                seeProcessBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('🎯 See Process button clicked');
                    
                    const targetSection = document.getElementById('process');
                    if (targetSection) {
                        const navHeight = document.getElementById('nav').offsetHeight;
                        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        console.log('🚀 Scrolling to process section');
                    } else {
                        console.error('❌ Process section not found');
                    }
                });
            } else {
                console.error('❌ See Process button not found');
            }
        }, 500); // Give time for DOM to fully load
    }

    setupIntersectionObserver() {
        console.log('👁️ Setting up intersection observer for animations...');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    
                    // Special animations for specific elements
                    if (entry.target.classList.contains('nft-sample')) {
                        entry.target.style.animationDelay = '0.2s';
                    }
                    if (entry.target.classList.contains('feature-card')) {
                        const cards = document.querySelectorAll('.feature-card');
                        const index = Array.from(cards).indexOf(entry.target);
                        entry.target.style.animationDelay = `${index * 0.1}s`;
                    }
                }
            });
        }, observerOptions);

        // Observe all sections and cards
        const elementsToObserve = document.querySelectorAll(`
            section,
            .stat-card,
            .challenge-card,
            .solution-card,
            .tech-stack,
            .arch-layer,
            .code-section,
            .feature-card,
            .timeline-item,
            .innovation-item,
            .highlight-item,
            .nft-sample
        `);

        elementsToObserve.forEach(el => observer.observe(el));
    }

    startAnimationLoop() {
        console.log('🎬 Starting animation loop...');
        
        const animate = () => {
            // Add subtle mouse-following effect for hero elements
            this.updateMouseEffects();
            
            // Update floating elements
            this.updateFloatingElements();
            
            requestAnimationFrame(animate);
        };

        animate();
    }

    updateMouseEffects() {
        // Add subtle parallax effect based on mouse position
        document.addEventListener('mousemove', (e) => {
            const mouseX = (e.clientX - window.innerWidth / 2) / window.innerWidth;
            const mouseY = (e.clientY - window.innerHeight / 2) / window.innerHeight;
            
            const nftSamples = document.querySelectorAll('.nft-sample');
            nftSamples.forEach((sample, index) => {
                const intensity = 10 + index * 5;
                const x = mouseX * intensity;
                const y = mouseY * intensity;
                
                sample.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }

    updateFloatingElements() {
        // Add some dynamic movement to floating elements
        const time = Date.now() * 0.001;
        const floatingElements = document.querySelectorAll('.floating-nft');
        
        floatingElements.forEach((element, index) => {
            const offset = index * 2;
            const x = Math.sin(time + offset) * 10;
            const y = Math.cos(time * 0.7 + offset) * 15;
            const currentTransform = element.style.transform || '';
            
            // Preserve existing scroll-based transforms
            if (currentTransform.includes('translateY')) {
                const scrollY = window.pageYOffset;
                const speed = parseFloat(element.dataset.speed) || 0.5;
                const scrollOffset = scrollY * speed * 0.3;
                element.style.transform = `translateY(${scrollOffset + y}px) translateX(${x}px) rotate(${scrollY * 0.05 + time * 10}deg)`;
            } else {
                element.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${time * 10}deg)`;
            }
        });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Enhanced loading and initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎉 DOM loaded, initializing NFT Generator Showcase...');
    
    // Initialize the showcase
    window.nftShowcase = new NFTGeneratorShowcase();
    
    // Add some additional interactive features
    setTimeout(() => {
        addInteractiveFeatures();
    }, 1000);
});

function addInteractiveFeatures() {
    console.log('🎮 Adding interactive features...');
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.stat-card, .feature-card, .innovation-item, .highlight-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
            card.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Add click effects to NFT samples
    const nftSamples = document.querySelectorAll('.nft-sample');
    nftSamples.forEach(sample => {
        sample.addEventListener('click', () => {
            sample.style.animation = 'none';
            setTimeout(() => {
                sample.style.animation = '';
            }, 10);
            
            // Add a pulse effect
            sample.style.transform = 'scale(1.1)';
            setTimeout(() => {
                sample.style.transform = '';
            }, 200);
        });
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === ' ') {
            e.preventDefault();
            scrollToNextSection();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            scrollToPreviousSection();
        }
    });
}

function scrollToNextSection() {
    const sections = document.querySelectorAll('section[id]');
    const currentScroll = window.pageYOffset;
    const navHeight = document.getElementById('nav').offsetHeight;
    
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        
        if (rect.top > navHeight + 50) {
            const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            break;
        }
    }
}

function scrollToPreviousSection() {
    const sections = Array.from(document.querySelectorAll('section[id]')).reverse();
    const currentScroll = window.pageYOffset;
    const navHeight = document.getElementById('nav').offsetHeight;
    
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        
        if (rect.top < -100) {
            const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            break;
        }
    }
}

// Performance optimizations
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        console.log('📏 Window resized, updating particles...');
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            particle.style.left = Math.random() * window.innerWidth + 'px';
        });
    }, 150);
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('❌ Showcase Error:', e.error);
});

// Console signature
console.log(`
╔══════════════════════════════════════════════╗
║     🎨 PYTHON NFT GENERATOR SHOWCASE 🎨     ║
║                                              ║
║  A comprehensive project case study          ║
║  showcasing blockchain development skills    ║
║                                              ║
║  ✨ Features:                               ║
║  • Interactive code examples                 ║
║  • Animated statistics                       ║
║  • Process visualization                     ║
║  • Technical deep-dive                       ║
║  • Responsive design                         ║
║                                              ║
║  Built by Humzah Chowdry with ❤️           ║
╚══════════════════════════════════════════════╝
`);

// Export for debugging
window.NFTGeneratorShowcase = NFTGeneratorShowcase;