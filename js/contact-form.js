// 初始化联系表单
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
    
    // 初始化页脚联系表单
    const footerForm = document.querySelector('.footer-contact-form');
    if (footerForm) {
        footerForm.addEventListener('submit', handleFooterContactFormSubmit);
    }
    
    // 初始化地图
    initMap();
}

// 处理联系表单提交
function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const company = formData.get('company');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // 简单验证
    if (!name || !email || !subject || !message) {
        showMessage(getTranslation('fill-required-fields') || '请填写所有必填字段');
        return;
    }
    
    // 发送邮件
    sendContactEmail(name, email, phone, company, subject, message);
    
    // 重置表单
    e.target.reset();
    
    showMessage(getTranslation('message-sent') || '消息已发送');
}

// 处理页脚联系表单提交
function handleFooterContactFormSubmit(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;
    
    if (!email || !message) {
        showMessage(getTranslation('fill-required-fields') || '请填写所有必填字段');
        return;
    }
    
    sendQuickContactEmail(email, message);
    e.target.reset();
    
    showMessage(getTranslation('message-sent') || '消息已发送');
}

// 发送联系邮件
function sendContactEmail(name, email, phone, company, subject, message) {
    const subjectText = getTranslation(subject) || subject;
    
    const emailContent = `
${getTranslation('name')}: ${name}
${getTranslation('email')}: ${email}
${getTranslation('phone')}: ${phone || getTranslation('not-provided')}
${getTranslation('company')}: ${company || getTranslation('not-provided')}
${getTranslation('subject')}: ${subjectText}

${getTranslation('message')}:
${message}

${getTranslation('sent-time')}: ${new Date().toLocaleString()}
${getTranslation('page')}: ${window.location.href}
    `;
    
    const toEmail = 'luiangparts@luiangparts.com';
    const emailSubject = `${getTranslation('website-message')} - ${subjectText} - ${getTranslation('from')} ${name}`;
    
    window.location.href = `mailto:${toEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailContent)}`;
}

// 发送快速联系邮件
function sendQuickContactEmail(email, message) {
    const emailContent = `
${getTranslation('quick-contact')} ${getTranslation('from')}: ${email}

${getTranslation('message')}:
${message}

${getTranslation('sent-time')}: ${new Date().toLocaleString()}
${getTranslation('page')}: ${window.location.href}
    `;
    
    const toEmail = 'luiangparts@luiangparts.com';
    const subject = `${getTranslation('website-quick-contact')} - ${getTranslation('from')} ${email}`;
    
    window.location.href = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
}

// 初始化地图
function initMap() {
    // 检查是否在联系页面
    if (!window.location.pathname.includes('contact.html')) {
        return;
    }
    
    // 创建简单的地图占位符
    createMapPlaceholders();
}

// 创建地图占位符
function createMapPlaceholders() {
    const lianyungangMap = document.getElementById('lianyungang-map');
    const shanghaiMap = document.getElementById('shanghai-map');
    
    if (lianyungangMap) {
        lianyungangMap.innerHTML = `
            <div class="map-placeholder-content">
                <h4>${getTranslation('lianyungang-office')}</h4>
                <p>${getTranslation('address1')}</p>
                <div class="map-static">
                    <div class="map-marker">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                </div>
                <p><small>${getTranslation('map-placeholder-note')}</small></p>
            </div>
        `;
    }
    
    if (shanghaiMap) {
        shanghaiMap.innerHTML = `
            <div class="map-placeholder-content">
                <h4>${getTranslation('shanghai-office')}</h4>
                <p>${getTranslation('address2')}</p>
                <div class="map-static">
                    <div class="map-marker">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                </div>
                <p><small>${getTranslation('map-placeholder-note')}</small></p>
            </div>
        `;
    }
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
    // 为联系表单添加额外的翻译
    languageResources['zh-CN'] = {
        ...languageResources['zh-CN'],
        'not-provided': '未提供',
        'website-message': '网站留言',
        'from': '来自',
        'sent-time': '发送时间',
        'page': '页面',
        'website-quick-contact': '网站快速联系',
        'map-placeholder-note': '地图功能需要Google Maps API密钥'
    };
    
    languageResources['en'] = {
        ...languageResources['en'],
        'not-provided': 'Not provided',
        'website-message': 'Website Message',
        'from': 'From',
        'sent-time': 'Sent Time',
        'page': 'Page',
        'website-quick-contact': 'Website Quick Contact',
        'map-placeholder-note': 'Map feature requires Google Maps API key'
    };
}

// 页面加载完成后初始化联系表单
document.addEventListener('DOMContentLoaded', initContactForm);