// 语言资源文件
const languageResources = {
    'zh-CN': {
        // 导航
        'home': '首页',
        'about': '关于我们',
        'products': '产品中心',
        'blog': '博客',
        'contact': '联系我们',
        
        // 产品分类
        'fuel-dispenser': '加油机',
        'dispenser-parts': '加油机配件',
        'adblue-equipment': '尿素配件',
        'pump-flowmeter': '工业泵和流量计',
        'lpg-equipment': 'LPG 配件',
        'other-equipment': '其他',
        
        // 通用
        'shopping-cart': '购物车',
        'request-quotation': '请求报价',
        'view-products': '查看产品',
        'product-categories': '产品分类',
        'view-more': '查看更多',
        'featured-products': '特色产品',
        'our-advantages': '我们的优势',
        'company': '公司',
        'contact-info': '联系信息',
        'all-rights-reserved': '版权所有',
        'add-to-cart': '加入购物车',
        'name': '姓名',
        'email': '邮箱',
        'phone': '电话',
        'message': '留言',
        'submit': '提交',
        'send-message': '发送消息',
        'login': '登录',
        'logout': '退出',
        'username': '用户名',
        'password': '密码',
        'admin-panel': '管理面板',
        'add-product': '添加产品',
        'add-article': '添加文章',
        'product-name': '产品名称',
        'product-description': '产品描述',
        'product-price': '价格',
        'product-category': '产品分类',
        'product-image': '产品图片',
        'save': '保存',
        'article-title': '文章标题',
        'article-content': '文章内容',
        'read-more': '阅读更多',
        
        // 搜索相关
        'search-placeholder': '搜索产品...',
        'search': '搜索',
        'no-results': '未找到相关产品',
        'view-all-results': '查看全部结果',
        
        // 产品规格
        'accuracy': '精度',
        'flow-rate': '流量范围',
        'material': '材质',
        'power': '电源',
        'display': '显示屏',
        'pressure': '压力范围',
        
        // 博客分类
        'technical': '技术文章',
        'industry': '行业动态',
        'safety': '安全指南',
        'maintenance': '维护保养',
        
        // 交期提醒
        'delivery-alert': '交期紧张，请提前预订',
        
        // 首页内容
        'hero-title': '专业工业设备解决方案',
        'hero-description': '提供高质量的加油机、工业泵、流量计及相关配件',
        'quality-title': '高质量产品',
        'quality-description': '所有产品均通过严格的质量控制',
        'shipping-title': '全球配送',
        'shipping-description': '支持全球范围内的产品配送服务',
        'support-title': '技术支持',
        'support-description': '提供专业的技术支持和售后服务',
        'experience-title': '丰富经验',
        'experience-description': '在工业设备领域拥有多年专业经验',
        'hot-products': '热销产品',
        'recommended-product': '推荐产品',
        
        // 产品页面
        'products-description': '探索我们全面的工业设备解决方案',
        'filter-by-category': '按分类筛选:',
        'all-categories': '所有分类',
        'sort-by': '排序方式:',
        'newest': '最新产品',
        'load-more': '加载更多',
        'view-details': '查看详情',
        
        // 产品详情页面
        'sku': '产品编号:',
        'specifications': '产品规格',
        'quantity': '数量:',
        'request-quote': '立即询价',
        'key-features': '主要特点',
        'related-products': '相关产品',
        
        // 关于我们页面
        'about-us': '关于我们',
        'about-description': '专业工业设备解决方案提供商',
        'company-overview': '公司概述',
        'company-overview-text': '连云港路扬配件有限公司成立于2010年，是一家专业从事工业设备及配件研发、生产和销售的企业。我们致力于为全球客户提供高质量的加油机、工业泵、流量计及相关配件。',
        'years-experience': '年行业经验',
        'clients': '服务客户',
        'countries': '国家地区',
        'products-count': '产品种类',
        'our-mission': '我们的使命',
        'mission-text': '为客户提供可靠、高效的工业设备解决方案，推动行业发展，创造持久价值。',
        'our-vision': '我们的愿景',
        'vision-text': '成为全球领先的工业设备供应商，以创新技术和优质服务赢得客户信赖。',
        'our-values': '我们的价值观',
        'quality-first': '质量第一',
        'quality-first-text': '我们始终坚持最高质量标准，确保每一个产品都经得起考验。',
        'customer-centric': '客户至上',
        'customer-centric-text': '客户需求是我们行动的指南，我们致力于超越客户期望。',
        'innovation': '创新驱动',
        'innovation-text': '持续创新是我们发展的动力，不断推出更优质的产品和服务。',
        'global-mindset': '全球视野',
        'global-mindset-text': '我们以全球化的视角开展业务，服务世界各地的客户。',
        'development-history': '发展历程',
        'company-founded': '公司成立',
        'founded-text': '在连云港成立，开始专注于工业设备配件贸易',
        'expansion': '业务扩展',
        'expansion-text': '在上海设立分公司，业务范围扩展到全国',
        'international': '国际化发展',
        'international-text': '开始拓展国际市场，产品出口到多个国家',
        'innovation-center': '创新中心',
        'innovation-center-text': '建立研发中心，加强产品创新能力',
        'digital-transformation': '数字化转型',
        'digital-transformation-text': '启动数字化平台建设，提升客户服务体验',
        'our-team': '我们的团队',
        'sales-director': '销售总监',
        'manager-zhang-desc': '15年行业经验，精通国际市场开发',
        'tech-director': '技术总监',
        'engineer-li-desc': '专注于产品研发和技术创新',
        'customer-service': '客户服务经理',
        'advisor-wang-desc': '为客户提供专业的技术支持和服务',
        
        // 博客页面
        'blog-description': '行业见解、技术文章和最新动态',
        
        // 联系页面
        'contact-us': '联系我们',
        'contact-description': '我们很乐意听到您的声音，请随时与我们联系',
        'company-name1': '连云港路扬配件有限公司',
        'address1': '地址: 江苏省灌云县义凡广场1号楼 邮编:222200',
        'company-name2': '路扬配件有限公司',
        'address2': '地址: 上海市灵山路958号5号楼',
        'business-hours': '营业时间',
        'monday-friday': '周一至周五',
        'saturday': '周六',
        'sunday': '周日',
        'closed': '休息',
        'subject': '主题',
        'select-subject': '选择主题',
        'product-inquiry': '产品咨询',
        'technical-support': '技术支持',
        'quotation-request': '报价请求',
        'partnership': '合作咨询',
        'other': '其他',
        'our-locations': '我们的位置',
        'lianyungang-office': '连云港办公室',
        'shanghai-office': '上海办公室',
        'map-loading': '地图加载中...',
        'faq': '常见问题',
        'faq-shipping': '配送时间和费用？',
        'faq-shipping-answer': '根据目的地和产品重量计算，通常7-15个工作日到达。',
        'faq-warranty': '产品保修政策？',
        'faq-warranty-answer': '我们提供12个月的产品质量保证。',
        'faq-payment': '支持哪些支付方式？',
        'faq-payment-answer': '支持电汇、信用证等多种国际支付方式。',
        'faq-support': '如何获得技术支持？',
        'faq-support-answer': '通过电话、邮件或在线聊天获得专业技术支持。',
        
        // 快速联系
        'quick-contact': '快速联系',
        'email-placeholder': '您的邮箱',
        'message-placeholder': '您的留言',
        
        // 成功消息
        'success': '成功',
        'cart-empty': '购物车为空',
        'quotation-request-sent': '报价请求已发送',
        'fill-required-fields': '请填写所有必填字段',
        'message-sent': '消息已发送',
        'login-failed': '登录失败',
        'product-saved': '产品已保存',
        'article-saved': '文章已保存'
    },
    'en': {
        // Navigation
        'home': 'Home',
        'about': 'About Us',
        'products': 'Products',
        'blog': 'Blog',
        'contact': 'Contact',
        
        // Product categories
        'fuel-dispenser': 'Fuel Dispenser',
        'dispenser-parts': 'Fuel Dispenser Parts',
        'adblue-equipment': 'Adblue Equipment',
        'pump-flowmeter': 'Industrial Pump & Flowmeter',
        'lpg-equipment': 'LPG Equipment',
        'other-equipment': 'Other Equipment',
        
        // Common
        'shopping-cart': 'Shopping Cart',
        'request-quotation': 'Request Quotation',
        'view-products': 'View Products',
        'product-categories': 'Product Categories',
        'view-more': 'View More',
        'featured-products': 'Featured Products',
        'our-advantages': 'Our Advantages',
        'company': 'Company',
        'contact-info': 'Contact Information',
        'all-rights-reserved': 'All Rights Reserved',
        'add-to-cart': 'Add to Cart',
        'name': 'Name',
        'email': 'Email',
        'phone': 'Phone',
        'message': 'Message',
        'submit': 'Submit',
        'send-message': 'Send Message',
        'login': 'Login',
        'logout': 'Logout',
        'username': 'Username',
        'password': 'Password',
        'admin-panel': 'Admin Panel',
        'add-product': 'Add Product',
        'add-article': 'Add Article',
        'product-name': 'Product Name',
        'product-description': 'Product Description',
        'product-price': 'Price',
        'product-category': 'Product Category',
        'product-image': 'Product Image',
        'save': 'Save',
        'article-title': 'Article Title',
        'article-content': 'Article Content',
        'read-more': 'Read More',
        
        // Search related
        'search-placeholder': 'Search products...',
        'search': 'Search',
        'no-results': 'No products found',
        'view-all-results': 'View all results',
        
        // Product specifications
        'accuracy': 'Accuracy',
        'flow-rate': 'Flow Rate',
        'material': 'Material',
        'power': 'Power',
        'display': 'Display',
        'pressure': 'Pressure Range',
        
        // Blog categories
        'technical': 'Technical',
        'industry': 'Industry',
        'safety': 'Safety',
        'maintenance': 'Maintenance',
        
        // Delivery alert
        'delivery-alert': 'Tight delivery schedule, please book in advance',
        
        // Home page content
        'hero-title': 'Professional Industrial Equipment Solutions',
        'hero-description': 'Providing high-quality fuel dispensers, industrial pumps, flowmeters and related parts',
        'quality-title': 'High Quality Products',
        'quality-description': 'All products pass strict quality control',
        'shipping-title': 'Global Shipping',
        'shipping-description': 'Support worldwide product delivery services',
        'support-title': 'Technical Support',
        'support-description': 'Provide professional technical support and after-sales service',
        'experience-title': 'Rich Experience',
        'experience-description': 'Years of professional experience in industrial equipment field',
        'hot-products': 'Hot Products',
        'recommended-product': 'Recommended Product',
        
        // Products page
        'products-description': 'Explore our comprehensive industrial equipment solutions',
        'filter-by-category': 'Filter by category:',
        'all-categories': 'All categories',
        'sort-by': 'Sort by:',
        'newest': 'Newest',
        'load-more': 'Load More',
        'view-details': 'View Details',
        
        // Product details page
        'sku': 'SKU:',
        'specifications': 'Specifications',
        'quantity': 'Quantity:',
        'request-quote': 'Request Quote',
        'key-features': 'Key Features',
        'related-products': 'Related Products',
        
        // About us page
        'about-us': 'About Us',
        'about-description': 'Professional Industrial Equipment Solutions Provider',
        'company-overview': 'Company Overview',
        'company-overview-text': 'LUIANG PARTS LIANYUNGANG CO.,LTD was established in 2010, specializing in the research, production and sales of industrial equipment and parts. We are committed to providing global customers with high-quality fuel dispensers, industrial pumps, flowmeters and related parts.',
        'years-experience': 'Years Experience',
        'clients': 'Clients',
        'countries': 'Countries',
        'products-count': 'Product Types',
        'our-mission': 'Our Mission',
        'mission-text': 'Provide customers with reliable and efficient industrial equipment solutions, promote industry development, and create lasting value.',
        'our-vision': 'Our Vision',
        'vision-text': 'Become a leading global industrial equipment supplier, winning customer trust with innovative technology and quality service.',
        'our-values': 'Our Values',
        'quality-first': 'Quality First',
        'quality-first-text': 'We always adhere to the highest quality standards to ensure every product stands the test.',
        'customer-centric': 'Customer Centric',
        'customer-centric-text': 'Customer needs guide our actions, we strive to exceed customer expectations.',
        'innovation': 'Innovation Driven',
        'innovation-text': 'Continuous innovation is our driving force, constantly launching better products and services.',
        'global-mindset': 'Global Mindset',
        'global-mindset-text': 'We conduct business with a global perspective, serving customers worldwide.',
        'development-history': 'Development History',
        'company-founded': 'Company Founded',
        'founded-text': 'Established in Lianyungang, focusing on industrial equipment parts trade',
        'expansion': 'Business Expansion',
        'expansion-text': 'Set up branch in Shanghai, expanded business nationwide',
        'international': 'International Development',
        'international-text': 'Started expanding international market, products exported to multiple countries',
        'innovation-center': 'Innovation Center',
        'innovation-center-text': 'Established R&D center to enhance product innovation capability',
        'digital-transformation': 'Digital Transformation',
        'digital-transformation-text': 'Launched digital platform construction to improve customer service experience',
        'our-team': 'Our Team',
        'sales-director': 'Sales Director',
        'manager-zhang-desc': '15 years industry experience, proficient in international market development',
        'tech-director': 'Technical Director',
        'engineer-li-desc': 'Focus on product R&D and technological innovation',
        'customer-service': 'Customer Service Manager',
        'advisor-wang-desc': 'Provide professional technical support and services for customers',
        
        // Blog page
        'blog-description': 'Industry insights, technical articles and latest updates',
        
        // Contact page
        'contact-us': 'Contact Us',
        'contact-description': 'We would love to hear from you, please feel free to contact us',
        'company-name1': 'LUIANG PARTS LIANYUNGANG CO.,LTD',
        'address1': 'Add: #1 Building Yifan Plaza Guanyun County Jiangsu China.222200',
        'company-name2': 'LUIANG PARTS CO.,LTD',
        'address2': 'Add: 5th Building, No 958 Rd Lingshan Shanghai China',
        'business-hours': 'Business Hours',
        'monday-friday': 'Monday - Friday',
        'saturday': 'Saturday',
        'sunday': 'Sunday',
        'closed': 'Closed',
        'subject': 'Subject',
        'select-subject': 'Select Subject',
        'product-inquiry': 'Product Inquiry',
        'technical-support': 'Technical Support',
        'quotation-request': 'Quotation Request',
        'partnership': 'Partnership',
        'other': 'Other',
        'our-locations': 'Our Locations',
        'lianyungang-office': 'Lianyungang Office',
        'shanghai-office': 'Shanghai Office',
        'map-loading': 'Map loading...',
        'faq': 'FAQ',
        'faq-shipping': 'Delivery time and cost?',
        'faq-shipping-answer': 'Calculated based on destination and product weight, usually 7-15 working days.',
        'faq-warranty': 'Product warranty policy?',
        'faq-warranty-answer': 'We provide 12 months product quality guarantee.',
        'faq-payment': 'What payment methods are supported?',
        'faq-payment-answer': 'Support various international payment methods including wire transfer, letter of credit.',
        'faq-support': 'How to get technical support?',
        'faq-support-answer': 'Get professional technical support through phone, email or online chat.',
        
        // Quick contact
        'quick-contact': 'Quick Contact',
        'email-placeholder': 'Your email',
        'message-placeholder': 'Your message',
        
        // Success messages
        'success': 'Success',
        'cart-empty': 'Cart is empty',
        'quotation-request-sent': 'Quotation request sent',
        'fill-required-fields': 'Please fill all required fields',
        'message-sent': 'Message sent',
        'login-failed': 'Login failed',
        'product-saved': 'Product saved',
        'article-saved': 'Article saved'
    },
    'ru': {
        // Russian translations would go here...
        // For brevity, I'm showing the structure but not all translations
        'home': 'Главная',
        'about': 'О нас',
        'products': 'Продукты',
        'blog': 'Блог',
        'contact': 'Контакты',
        'search-placeholder': 'Поиск продуктов...',
        // ... more Russian translations
    },
    'vi': {
        // Vietnamese translations would go here...
        // For brevity, I'm showing the structure but not all translations
        'home': 'Trang chủ',
        'about': 'Về chúng tôi',
        'products': 'Sản phẩm',
        'blog': 'Blog',
        'contact': 'Liên hệ',
        'search-placeholder': 'Tìm kiếm sản phẩm...',
        // ... more Vietnamese translations
    }
};

// 当前语言
let currentLanguage = 'zh-CN';

// 初始化语言系统
function initLanguageSystem() {
    // 从本地存储获取保存的语言设置
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    
    // 设置语言选择器的值
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
        
        // 添加语言切换事件监听器
        languageSelect.addEventListener('change', function(e) {
            switchLanguage(e.target.value);
        });
    }
    
    // 应用当前语言
    applyLanguage();
}

// 切换语言
function switchLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('preferred-language', language);
    applyLanguage();
}

// 应用当前语言到页面
function applyLanguage() {
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (languageResources[currentLanguage] && languageResources[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = languageResources[currentLanguage][key];
            } else {
                element.textContent = languageResources[currentLanguage][key];
            }
        }
    });
    
    // 更新页面标题
    updatePageTitle();
    
    // 更新购物车侧边栏（如果已打开）
    if (typeof updateCartSidebar === 'function') {
        updateCartSidebar();
    }
}

// 更新页面标题
function updatePageTitle() {
    const pageTitles = {
        'index.html': {
            'zh-CN': 'LUIANG MACHINE - 专业工业设备供应商',
            'en': 'LUIANG MACHINE - Professional Industrial Equipment Supplier',
            'ru': 'LUIANG MACHINE - Профессиональный поставщик промышленного оборудования',
            'vi': 'LUIANG MACHINE - Nhà cung cấp thiết bị công nghiệp chuyên nghiệp'
        },
        'products.html': {
            'zh-CN': '产品中心 - LUIANG MACHINE',
            'en': 'Products - LUIANG MACHINE',
            'ru': 'Продукты - LUIANG MACHINE',
            'vi': 'Sản phẩm - LUIANG MACHINE'
        },
        'product-details.html': {
            'zh-CN': '产品详情 - LUIANG MACHINE',
            'en': 'Product Details - LUIANG MACHINE',
            'ru': 'Детали продукта - LUIANG MACHINE',
            'vi': 'Chi tiết sản phẩm - LUIANG MACHINE'
        },
        'about.html': {
            'zh-CN': '关于我们 - LUIANG MACHINE',
            'en': 'About Us - LUIANG MACHINE',
            'ru': 'О нас - LUIANG MACHINE',
            'vi': 'Về chúng tôi - LUIANG MACHINE'
        },
        'blog.html': {
            'zh-CN': '博客 - LUIANG MACHINE',
            'en': 'Blog - LUIANG MACHINE',
            'ru': 'Блог - LUIANG MACHINE',
            'vi': 'Blog - LUIANG MACHINE'
        },
        'contact.html': {
            'zh-CN': '联系我们 - LUIANG MACHINE',
            'en': 'Contact Us - LUIANG MACHINE',
            'ru': 'Контакты - LUIANG MACHINE',
            'vi': 'Liên hệ - LUIANG MACHINE'
        },
        'admin.html': {
            'zh-CN': '管理后台 - LUIANG MACHINE',
            'en': 'Admin Panel - LUIANG MACHINE',
            'ru': 'Панель администратора - LUIANG MACHINE',
            'vi': 'Bảng quản trị - LUIANG MACHINE'
        }
    };
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (pageTitles[currentPage] && pageTitles[currentPage][currentLanguage]) {
        document.title = pageTitles[currentPage][currentLanguage];
    }
}

// 获取翻译文本
function getTranslation(key) {
    return languageResources[currentLanguage] && languageResources[currentLanguage][key] 
        ? languageResources[currentLanguage][key] 
        : key;
}

// 页面加载完成后初始化语言系统
document.addEventListener('DOMContentLoaded', initLanguageSystem);