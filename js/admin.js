// 管理后台功能
let isLoggedIn = localStorage.getItem('admin-logged-in') === 'true';

// 初始化管理后台
function initAdmin() {
    if (!isLoggedIn && window.location.pathname.includes('admin.html')) {
        showLoginForm();
    } else if (isLoggedIn && window.location.pathname.includes('admin.html')) {
        showAdminPanel();
    }
    
    // 登录表单事件
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

// 显示登录表单
function showLoginForm() {
    const adminContent = document.getElementById('admin-content');
    if (adminContent) {
        adminContent.innerHTML = `
            <div class="login-form">
                <h2 data-lang="login">登录</h2>
                <form id="login-form">
                    <div class="form-group">
                        <label for="username" data-lang="username">用户名</label>
                        <input type="text" id="username" name="username" required>
                    </div>
                    <div class="form-group">
                        <label for="password" data-lang="password">密码</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <button type="submit" class="btn-primary" data-lang="login">登录</button>
                </form>
            </div>
        `;
        
        // 重新应用语言
        if (typeof applyLanguage === 'function') {
            applyLanguage();
        }
    }
}

// 显示管理面板
function showAdminPanel() {
    const adminContent = document.getElementById('admin-content');
    if (adminContent) {
        adminContent.innerHTML = `
            <div class="admin-header">
                <h2 data-lang="admin-panel">管理面板</h2>
                <button id="logout-btn" class="btn-secondary" data-lang="logout">退出</button>
            </div>
            
            <div class="admin-tabs">
                <button class="tab-btn active" data-tab="products" data-lang="add-product">添加产品</button>
                <button class="tab-btn" data-tab="articles" data-lang="add-article">添加文章</button>
                <button class="tab-btn" data-tab="manage" data-lang="manage-content">管理内容</button>
            </div>
            
            <div id="products-tab" class="tab-content active">
                <form id="product-form" class="admin-form">
                    <div class="form-group">
                        <label for="product-name" data-lang="product-name">产品名称</label>
                        <input type="text" id="product-name" name="product-name" required>
                    </div>
                    <div class="form-group">
                        <label for="product-description" data-lang="product-description">产品描述</label>
                        <textarea id="product-description" name="product-description" required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="product-price" data-lang="product-price">价格</label>
                        <input type="text" id="product-price" name="product-price">
                    </div>
                    <div class="form-group">
                        <label for="product-category" data-lang="product-category">产品分类</label>
                        <select id="product-category" name="product-category" required>
                            <option value="fuel-dispenser" data-lang="fuel-dispenser">加油机</option>
                            <option value="dispenser-parts" data-lang="dispenser-parts">加油机配件</option>
                            <option value="adblue-equipment" data-lang="adblue-equipment">尿素配件</option>
                            <option value="pump-flowmeter" data-lang="pump-flowmeter">工业泵和流量计</option>
                            <option value="lpg-equipment" data-lang="lpg-equipment">LPG 配件</option>
                            <option value="other-equipment" data-lang="other-equipment">其他</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="product-image" data-lang="product-image">产品图片URL</label>
                        <input type="url" id="product-image" name="product-image" placeholder="https://example.com/image.jpg">
                    </div>
                    <button type="submit" class="btn-primary" data-lang="save">保存</button>
                </form>
            </div>
            
            <div id="articles-tab" class="tab-content">
                <form id="article-form" class="admin-form">
                    <div class="form-group">
                        <label for="article-title" data-lang="article-title">文章标题</label>
                        <input type="text" id="article-title" name="article-title" required>
                    </div>
                    <div class="form-group">
                        <label for="article-excerpt" data-lang="article-excerpt">文章摘要</label>
                        <textarea id="article-excerpt" name="article-excerpt" required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="article-content" data-lang="article-content">文章内容</label>
                        <textarea id="article-content" name="article-content" rows="10" required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="article-category" data-lang="article-category">文章分类</label>
                        <select id="article-category" name="article-category" required>
                            <option value="technical" data-lang="technical">技术文章</option>
                            <option value="industry" data-lang="industry">行业动态</option>
                            <option value="safety" data-lang="safety">安全指南</option>
                            <option value="maintenance" data-lang="maintenance">维护保养</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="article-image" data-lang="article-image">文章图片URL</label>
                        <input type="url" id="article-image" name="article-image" placeholder="https://example.com/image.jpg">
                    </div>
                    <button type="submit" class="btn-primary" data-lang="save">保存</button>
                </form>
            </div>
            
            <div id="manage-tab" class="tab-content">
                <div class="manage-section">
                    <h3 data-lang="manage-products">管理产品</h3>
                    <div id="products-list" class="items-list">
                        <!-- 产品列表将动态加载 -->
                    </div>
                </div>
                <div class="manage-section">
                    <h3 data-lang="manage-articles">管理文章</h3>
                    <div id="articles-list" class="items-list">
                        <!-- 文章列表将动态加载 -->
                    </div>
                </div>
            </div>
        `;
        
        // 重新应用语言
        if (typeof applyLanguage === 'function') {
            applyLanguage();
        }
        
        // 初始化标签页
        initTabs();
        
        // 初始化表单
        initForms();
        
        // 加载管理内容
        loadManageContent();
        
        // 初始化退出按钮
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', handleLogout);
        }
    }
}

// 初始化标签页
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // 移除所有活动状态
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // 添加当前活动状态
            this.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
            
            // 如果是管理标签，重新加载内容
            if (tabId === 'manage') {
                loadManageContent();
            }
        });
    });
}

// 初始化表单
function initForms() {
    const productForm = document.getElementById('product-form');
    const articleForm = document.getElementById('article-form');
    
    if (productForm) {
        productForm.addEventListener('submit', handleProductSubmit);
    }
    
    if (articleForm) {
        articleForm.addEventListener('submit', handleArticleSubmit);
    }
}

// 处理登录
function handleLogin(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    
    // 简单的验证（在实际应用中应该使用更安全的方式）
    if (username === 'admin' && password === 'admin123') {
        isLoggedIn = true;
        localStorage.setItem('admin-logged-in', 'true');
        showAdminPanel();
        showMessage(getTranslation('login-success') || '登录成功');
    } else {
        showMessage(getTranslation('login-failed') || '登录失败');
    }
}

// 处理退出登录
function handleLogout() {
    isLoggedIn = false;
    localStorage.setItem('admin-logged-in', 'false');
    showLoginForm();
    showMessage(getTranslation('logout-success') || '退出成功');
}

// 处理产品提交
function handleProductSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const product = {
        id: Date.now().toString(),
        name: formData.get('product-name'),
        description: formData.get('product-description'),
        price: formData.get('product-price') || '询价',
        category: formData.get('product-category'),
        image: formData.get('product-image') || 'images/default-product.jpg',
        date: new Date().toISOString()
    };
    
    saveProduct(product);
    e.target.reset();
    showMessage(getTranslation('product-saved') || '产品已保存');
}

// 保存产品
function saveProduct(product) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}

// 处理文章提交
function handleArticleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const article = {
        id: Date.now().toString(),
        title: formData.get('article-title'),
        excerpt: formData.get('article-excerpt'),
        content: formData.get('article-content'),
        category: formData.get('article-category'),
        image: formData.get('article-image') || 'images/default-blog.jpg',
        date: new Date().toISOString(),
        readTime: Math.ceil(formData.get('article-content').length / 500) + ' min read'
    };
    
    saveArticle(article);
    e.target.reset();
    showMessage(getTranslation('article-saved') || '文章已保存');
}

// 保存文章
function saveArticle(article) {
    let articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles.push(article);
    localStorage.setItem('articles', JSON.stringify(articles));
}

// 加载管理内容
function loadManageContent() {
    loadProductsList();
    loadArticlesList();
}

// 加载产品列表
function loadProductsList() {
    const productsList = document.getElementById('products-list');
    if (!productsList) return;
    
    const products = JSON.parse(localStorage.getItem('products')) || [];
    
    if (products.length === 0) {
        productsList.innerHTML = `<p class="no-items">${getTranslation('no-products') || '暂无产品'}</p>`;
        return;
    }
    
    let html = '';
    products.forEach(product => {
        html += `
            <div class="item-card">
                <div class="item-info">
                    <h4>${product.name}</h4>
                    <p>${product.description}</p>
                    <span class="item-meta">${getTranslation(product.category)} • ${product.price}</span>
                </div>
                <div class="item-actions">
                    <button class="btn-secondary edit-item" data-id="${product.id}" data-type="product">编辑</button>
                    <button class="btn-secondary delete-item" data-id="${product.id}" data-type="product">删除</button>
                </div>
            </div>
        `;
    });
    
    productsList.innerHTML = html;
    
    // 添加删除事件
    document.querySelectorAll('.delete-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.dataset.id;
            const type = this.dataset.type;
            deleteItem(id, type);
        });
    });
}

// 加载文章列表
function loadArticlesList() {
    const articlesList = document.getElementById('articles-list');
    if (!articlesList) return;
    
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    
    if (articles.length === 0) {
        articlesList.innerHTML = `<p class="no-items">${getTranslation('no-articles') || '暂无文章'}</p>`;
        return;
    }
    
    let html = '';
    articles.forEach(article => {
        html += `
            <div class="item-card">
                <div class="item-info">
                    <h4>${article.title}</h4>
                    <p>${article.excerpt}</p>
                    <span class="item-meta">${getTranslation(article.category)} • ${article.readTime}</span>
                </div>
                <div class="item-actions">
                    <button class="btn-secondary edit-item" data-id="${article.id}" data-type="article">编辑</button>
                    <button class="btn-secondary delete-item" data-id="${article.id}" data-type="article">删除</button>
                </div>
            </div>
        `;
    });
    
    articlesList.innerHTML = html;
    
    // 添加删除事件
    document.querySelectorAll('.delete-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.dataset.id;
            const type = this.dataset.type;
            deleteItem(id, type);
        });
    });
}

// 删除项目
function deleteItem(id, type) {
    if (!confirm(getTranslation('confirm-delete') || '确定要删除吗？')) {
        return;
    }
    
    if (type === 'product') {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products = products.filter(item => item.id !== id);
        localStorage.setItem('products', JSON.stringify(products));
        loadProductsList();
    } else if (type === 'article') {
        let articles = JSON.parse(localStorage.getItem('articles')) || [];
        articles = articles.filter(item => item.id !== id);
        localStorage.setItem('articles', JSON.stringify(articles));
        loadArticlesList();
    }
    
    showMessage(getTranslation('item-deleted') || '删除成功');
}

// 显示消息
function showMessage(message) {
    // 移除现有的消息
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // 创建消息元素
    const messageEl = document.createElement('div');
    messageEl.className = 'message';
    messageEl.textContent = message;
    
    // 添加到页面
    document.body.appendChild(messageEl);
    
    // 3秒后移除
    setTimeout(() => {
        messageEl.remove();
    }, 3000);
}

// 添加额外的翻译
if (typeof languageResources !== 'undefined') {
    languageResources['zh-CN'] = {
        ...languageResources['zh-CN'],
        'article-excerpt': '文章摘要',
        'article-category': '文章分类',
        'article-image': '文章图片URL',
        'manage-content': '管理内容',
        'manage-products': '管理产品',
        'manage-articles': '管理文章',
        'no-products': '暂无产品',
        'no-articles': '暂无文章',
        'confirm-delete': '确定要删除吗？',
        'item-deleted': '删除成功',
        'login-success': '登录成功',
        'logout-success': '退出成功'
    };
    
    languageResources['en'] = {
        ...languageResources['en'],
        'article-excerpt': 'Article Excerpt',
        'article-category': 'Article Category',
        'article-image': 'Article Image URL',
        'manage-content': 'Manage Content',
        'manage-products': 'Manage Products',
        'manage-articles': 'Manage Articles',
        'no-products': 'No products',
        'no-articles': 'No articles',
        'confirm-delete': 'Are you sure you want to delete?',
        'item-deleted': 'Item deleted successfully',
        'login-success': 'Login successful',
        'logout-success': 'Logout successful'
    };
}

// 页面加载完成后初始化管理后台
document.addEventListener('DOMContentLoaded', initAdmin);