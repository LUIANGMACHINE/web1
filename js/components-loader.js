// 加载页面组件
function loadComponents() {
    loadHeader();
    loadFooter();
}

// 加载头部
function loadHeader() {
    // 直接插入默认头部，不通过fetch加载
    insertDefaultHeader();
}

// 加载页脚
function loadFooter() {
    // 直接插入默认页脚，不通过fetch加载
    insertDefaultFooter();
}

// 插入默认头部
function insertDefaultHeader() {
    const defaultHeader = `
        <header>
            <div class="container">
                <div class="logo">
                    <h1>LUIANG MACHINE</h1>
                </div>
                <nav>
                    <ul class="nav-links">
                        <li><a href="index.html" data-lang="home">首页</a></li>
                        <li><a href="about.html" data-lang="about">关于我们</a></li>
                        <li class="dropdown">
                            <a href="products.html" data-lang="products">产品中心</a>
                            <ul class="dropdown-menu">
                                <li><a href="products.html?category=fuel-dispenser" data-category="fuel-dispenser" data-lang="fuel-dispenser">加油机</a></li>
                                <li><a href="products.html?category=dispenser-parts" data-category="dispenser-parts" data-lang="dispenser-parts">加油机配件</a></li>
                                <li><a href="products.html?category=adblue-equipment" data-category="adblue-equipment" data-lang="adblue-equipment">尿素配件</a></li>
                                <li><a href="products.html?category=pump-flowmeter" data-category="pump-flowmeter" data-lang="pump-flowmeter">工业泵和流量计</a></li>
                                <li><a href="products.html?category=lpg-equipment" data-category="lpg-equipment" data-lang="lpg-equipment">LPG 配件</a></li>
                                <li><a href="products.html?category=other-equipment" data-category="other-equipment" data-lang="other-equipment">其他</a></li>
                            </ul>
                        </li>
                        <li><a href="blog.html" data-lang="blog">博客</a></li>
                        <li><a href="contact.html" data-lang="contact">联系我们</a></li>
                    </ul>
                </nav>
                <div class="header-actions">
                    <div class="search-container">
                        <input type="text" id="search-input" placeholder="搜索产品..." data-lang="search-placeholder">
                        <button id="search-btn" class="search-btn">
                            <i class="fas fa-search"></i>
                        </button>
                        <div id="search-results" class="search-results"></div>
                    </div>
                    <div class="language-switcher">
                        <select id="language-select">
                            <option value="zh-CN">中文</option>
                            <option value="en">English</option>
                            <option value="ru">Русский</option>
                            <option value="vi">Tiếng Việt</option>
                        </select>
                    </div>
                    <div class="cart-icon">
                        <i class="fas fa-shopping-cart"></i>
                        <span id="cart-count">0</span>
                    </div>
                </div>
                <div class="mobile-menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>

        <!-- 购物车侧边栏 -->
        <div id="cart-sidebar" class="cart-sidebar">
            <div class="cart-header">
                <h3 data-lang="shopping-cart">购物车</h3>
                <button class="close-cart">&times;</button>
            </div>
            <div class="cart-items">
                <!-- 购物车项目将动态添加 -->
            </div>
            <div class="cart-footer">
                <button id="request-quotation" class="btn-primary" data-lang="request-quotation">请求报价</button>
            </div>
        </div>
    `;
    
    // 插入到页面开始处
    document.body.insertAdjacentHTML('afterbegin', defaultHeader);
    
    // 初始化头部组件
    initHeaderComponents();
}

// 插入默认页脚
function insertDefaultFooter() {
    const defaultFooter = `
        <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3 data-lang="company">公司</h3>
                        <ul>
                            <li><a href="about.html" data-lang="about">关于我们</a></li>
                            <li><a href="contact.html" data-lang="contact">联系我们</a></li>
                            <li><a href="admin.html" data-lang="admin-panel">管理后台</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3 data-lang="products">产品</h3>
                        <ul>
                            <li><a href="products.html?category=fuel-dispenser" data-lang="fuel-dispenser">加油机</a></li>
                            <li><a href="products.html?category=dispenser-parts" data-lang="dispenser-parts">加油机配件</a></li>
                            <li><a href="products.html?category=adblue-equipment" data-lang="adblue-equipment">尿素配件</a></li>
                            <li><a href="products.html?category=pump-flowmeter" data-lang="pump-flowmeter">工业泵和流量计</a></li>
                            <li><a href="products.html?category=lpg-equipment" data-lang="lpg-equipment">LPG 配件</a></li>
                            <li><a href="products.html?category=other-equipment" data-lang="other-equipment">其他</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3 data-lang="contact-info">联系信息</h3>
                        <p><strong data-lang="company-name1">连云港路扬配件有限公司 LUIANG PARTS LIANYUNGANG CO.,LTD</strong></p>
                        <p data-lang="address1">地址: 江苏省灌云县义凡广场1号楼 邮编:222200</p>
                        <p><strong data-lang="company-name2">路扬配件有限公司 LUIANG PARTS CO.,LTD</strong></p>
                        <p data-lang="address2">地址: 上海市灵山路958号5号楼</p>
                        <p><i class="fas fa-phone"></i> +86-177 1287 5791</p>
                        <p><i class="fas fa-envelope"></i> luiangparts@luiangparts.com</p>
                    </div>
                    <div class="footer-section">
                        <h3 data-lang="quick-contact">快速联系</h3>
                        <form class="footer-contact-form">
                            <input type="email" placeholder="您的邮箱" data-lang="email-placeholder" required>
                            <textarea placeholder="您的留言" data-lang="message-placeholder" required></textarea>
                            <button type="submit" class="btn-primary" data-lang="send-message">发送消息</button>
                        </form>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2023 LUIANG MACHINE. <span data-lang="all-rights-reserved">版权所有</span></p>
                </div>
            </div>
        </footer>
    `;
    
    // 插入到页面结束前
    document.body.insertAdjacentHTML('beforeend', defaultFooter);
    
    // 初始化页脚组件
    initFooterComponents();
}

// 初始化头部组件
function initHeaderComponents() {
    initMobileMenu();
    initLanguageSelector();
    
    // 应用当前语言
    if (typeof applyLanguage === 'function') {
        applyLanguage();
    }
    
    // 初始化购物车
    if (typeof initCart === 'function') {
        initCart();
    }
    
    // 初始化搜索
    if (typeof SearchSystem === 'function') {
        new SearchSystem();
    }
}

// 初始化页脚组件
function initFooterComponents() {
    initFooterContactForm();
    
    // 应用当前语言
    if (typeof applyLanguage === 'function') {
        applyLanguage();
    }
}

// 初始化移动菜单
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // 点击其他地方关闭菜单
        document.addEventListener('click', function(e) {
            if (!e.target.closest('header')) {
                if (navLinks) navLinks.classList.remove('active');
                if (mobileToggle) mobileToggle.classList.remove('active');
            }
        });
    }
}

// 初始化语言选择器
function initLanguageSelector() {
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        // 设置当前语言
        const currentLang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'zh-CN';
        languageSelect.value = currentLang;
        
        // 添加事件监听器
        languageSelect.addEventListener('change', function(e) {
            if (typeof switchLanguage === 'function') {
                switchLanguage(e.target.value);
            }
        });
    }
}

// 初始化页脚联系表单
function initFooterContactForm() {
    const footerForm = document.querySelector('.footer-contact-form');
    if (footerForm) {
        footerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            if (email && message) {
                // 使用联系表单的功能发送邮件
                if (typeof sendQuickContactEmail === 'function') {
                    sendQuickContactEmail(email, message);
                } else {
                    // 备用方案
                    const emailContent = `快速联系来自: ${email}\n\n消息: ${message}`;
                    const toEmail = 'luiangparts@luiangparts.com';
                    const subject = '网站快速联系';
                    window.location.href = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
                }
                this.reset();
                if (typeof showMessage === 'function') {
                    showMessage('消息已发送');
                }
            }
        });
    }
}

// 页面加载完成后加载组件
document.addEventListener('DOMContentLoaded', function() {
    console.log('开始加载组件...');
    
    // 先初始化语言系统（如果存在）
    if (typeof initLanguageSystem === 'function') {
        console.log('初始化语言系统...');
        initLanguageSystem();
    }
    
    // 然后加载组件
    console.log('加载Header和Footer...');
    loadComponents();
    
    // 初始化社交链接（如果存在）
    if (typeof initSocialLinks === 'function') {
        console.log('初始化社交链接...');
        initSocialLinks();
    }
    
    console.log('组件加载完成');
});

// 添加错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
});

// 确保CSS加载
function ensureCSSLoaded() {
    const stylesheets = document.styleSheets;
    for (let i = 0; i < stylesheets.length; i++) {
        try {
            const rules = stylesheets[i].cssRules || stylesheets[i].rules;
            if (rules && rules.length > 0) {
                console.log('CSS文件已加载:', stylesheets[i].href);
            }
        } catch (e) {
            console.warn('无法访问CSS规则:', e);
        }
    }
}

// 检查CSS是否加载
setTimeout(ensureCSSLoaded, 1000);