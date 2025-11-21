// 搜索功能
class SearchSystem {
    constructor() {
        this.searchInput = document.getElementById('search-input');
        this.searchBtn = document.getElementById('search-btn');
        this.searchResults = document.getElementById('search-results');
        this.products = [];
        
        this.init();
    }
    
    init() {
        this.loadProducts();
        this.setupEventListeners();
    }
    
    loadProducts() {
        const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
        
        if (savedProducts.length === 0) {
            // 默认产品数据
            this.products = [
                {
                    id: '1',
                    name: '高端加油机',
                    description: '高性能加油机，适用于各种加油站',
                    category: 'fuel-dispenser',
                    price: '询价'
                },
                {
                    id: '2',
                    name: '流量计配件',
                    description: '精密流量计配件，确保准确测量',
                    category: 'pump-flowmeter',
                    price: '询价'
                },
                {
                    id: '3',
                    name: 'LPG设备',
                    description: '安全可靠的LPG设备解决方案',
                    category: 'lpg-equipment',
                    price: '询价'
                },
                {
                    id: '4',
                    name: '尿素泵',
                    description: '高效尿素输送泵',
                    category: 'adblue-equipment',
                    price: '询价'
                },
                {
                    id: '5',
                    name: 'LC型流量计',
                    description: '高精度LC型流量计，适用于各种工业流体测量',
                    category: 'pump-flowmeter',
                    price: '询价'
                },
                {
                    id: '6',
                    name: '加油枪',
                    description: '高品质加油枪，防滴漏设计',
                    category: 'dispenser-parts',
                    price: '询价'
                },
                {
                    id: '7',
                    name: '工业泵',
                    description: '重型工业泵，适用于各种流体输送',
                    category: 'pump-flowmeter',
                    price: '询价'
                },
                {
                    id: '8',
                    name: 'LPG阀门',
                    description: '安全阀门系统，确保LPG设备安全运行',
                    category: 'lpg-equipment',
                    price: '询价'
                }
            ];
        } else {
            this.products = savedProducts;
        }
    }
    
    setupEventListeners() {
        if (this.searchInput) {
            // 输入时实时搜索
            this.searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
            
            // 回车键搜索
            this.searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleSearch(e.target.value);
                }
            });
            
            // 获得焦点时显示最近搜索
            this.searchInput.addEventListener('focus', () => {
                this.showRecentSearches();
            });
        }
        
        if (this.searchBtn) {
            this.searchBtn.addEventListener('click', () => {
                this.handleSearch(this.searchInput.value);
            });
        }
        
        // 点击页面其他地方关闭搜索结果
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                this.hideResults();
            }
        });
    }
    
    handleSearch(query) {
        if (!query.trim()) {
            this.showRecentSearches();
            return;
        }
        
        const results = this.searchProducts(query);
        this.displayResults(results, query);
        this.saveSearchQuery(query);
    }
    
    searchProducts(query) {
        const searchTerm = query.toLowerCase();
        
        return this.products.filter(product => {
            return product.name.toLowerCase().includes(searchTerm) ||
                   product.description.toLowerCase().includes(searchTerm) ||
                   (typeof getTranslation === 'function' && getTranslation(product.category).toLowerCase().includes(searchTerm));
        });
    }
    
    displayResults(results, query) {
        if (!this.searchResults) return;
        
        if (results.length === 0) {
            this.searchResults.innerHTML = `
                <div class="search-result-item no-results">
                    <span data-lang="no-results">${typeof getTranslation === 'function' ? getTranslation('no-results') : '未找到相关产品'}</span>
                </div>
            `;
        } else {
            let html = '';
            results.slice(0, 5).forEach(product => {
                html += `
                    <div class="search-result-item" data-product-id="${product.id}">
                        <div class="result-info">
                            <h4>${product.name}</h4>
                            <p>${product.description}</p>
                            <span class="result-category">${typeof getTranslation === 'function' ? getTranslation(product.category) : product.category}</span>
                        </div>
                        <div class="result-price">${product.price}</div>
                    </div>
                `;
            });
            
            // 如果结果多于5个，显示查看全部
            if (results.length > 5) {
                html += `
                    <div class="search-result-item view-all">
                        <a href="products.html?search=${encodeURIComponent(query)}" data-lang="view-all-results">
                            ${typeof getTranslation === 'function' ? getTranslation('view-all-results') : '查看全部'} ${results.length} ${typeof getTranslation === 'function' ? getTranslation('results') : '个结果'}
                        </a>
                    </div>
                `;
            }
            
            this.searchResults.innerHTML = html;
            
            // 添加点击事件
            this.addResultClickEvents();
        }
        
        this.searchResults.classList.add('active');
        
        // 应用语言
        if (typeof applyLanguage === 'function') {
            applyLanguage();
        }
    }
    
    showRecentSearches() {
        if (!this.searchResults) return;
        
        const recentSearches = this.getRecentSearches();
        
        if (recentSearches.length === 0) {
            this.hideResults();
            return;
        }
        
        let html = '<div class="search-result-item recent-header"><small>最近搜索</small></div>';
        recentSearches.forEach(search => {
            html += `
                <div class="search-result-item recent-search" data-query="${search}">
                    <div class="result-info">
                        <h4>${search}</h4>
                    </div>
                    <button class="clear-recent" data-query="${search}">&times;</button>
                </div>
            `;
        });
        
        this.searchResults.innerHTML = html;
        this.searchResults.classList.add('active');
        
        // 添加点击事件
        this.addRecentSearchEvents();
    }
    
    addResultClickEvents() {
        const resultItems = this.searchResults.querySelectorAll('.search-result-item:not(.no-results):not(.view-all)');
        
        resultItems.forEach(item => {
            item.addEventListener('click', () => {
                const productId = item.dataset.productId;
                window.location.href = `product-details.html?id=${productId}`;
            });
        });
    }
    
    addRecentSearchEvents() {
        const recentSearches = this.searchResults.querySelectorAll('.recent-search');
        
        recentSearches.forEach(item => {
            item.addEventListener('click', () => {
                const query = item.dataset.query;
                this.searchInput.value = query;
                this.handleSearch(query);
            });
        });
        
        const clearButtons = this.searchResults.querySelectorAll('.clear-recent');
        clearButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const query = btn.dataset.query;
                this.removeSearchQuery(query);
                this.showRecentSearches();
            });
        });
    }
    
    saveSearchQuery(query) {
        let searches = JSON.parse(localStorage.getItem('recent-searches')) || [];
        searches = searches.filter(s => s !== query); // 移除重复
        searches.unshift(query); // 添加到开头
        searches = searches.slice(0, 5); // 只保留最近5个
        localStorage.setItem('recent-searches', JSON.stringify(searches));
    }
    
    getRecentSearches() {
        return JSON.parse(localStorage.getItem('recent-searches')) || [];
    }
    
    removeSearchQuery(query) {
        let searches = this.getRecentSearches();
        searches = searches.filter(s => s !== query);
        localStorage.setItem('recent-searches', JSON.stringify(searches));
    }
    
    hideResults() {
        if (this.searchResults) {
            this.searchResults.classList.remove('active');
        }
    }
}

// 初始化搜索系统
document.addEventListener('DOMContentLoaded', function() {
    new SearchSystem();
});