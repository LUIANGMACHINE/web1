// 购物车数据
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 初始化购物车
function initCart() {
    updateCartCount();
    
    // 购物车事件监听
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart') || e.target.parentElement.classList.contains('add-to-cart')) {
            const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.parentElement;
            const productId = button.dataset.productId;
            const productName = button.dataset.productName;
            addToCart(productId, productName);
        }
        
        if (e.target.classList.contains('cart-icon') || e.target.parentElement.classList.contains('cart-icon')) {
            toggleCartSidebar();
        }
        
        if (e.target.classList.contains('close-cart')) {
            closeCartSidebar();
        }
        
        if (e.target.id === 'request-quotation') {
            requestQuotation();
        }
        
        if (e.target.classList.contains('remove-item')) {
            const productId = e.target.dataset.productId;
            removeFromCart(productId);
        }
    });
}

// 添加到购物车
function addToCart(productId, productName) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            quantity: 1
        });
    }
    
    // 保存到本地存储
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // 更新购物车显示
    updateCartCount();
    updateCartSidebar();
    
    // 显示添加成功消息
    showMessage(getTranslation('add-to-cart') + ' ' + getTranslation('success'));
}

// 更新购物车数量显示
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// 切换购物车侧边栏
function toggleCartSidebar() {
    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
        cartSidebar.classList.toggle('active');
        updateCartSidebar();
    }
}

// 关闭购物车侧边栏
function closeCartSidebar() {
    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
        cartSidebar.classList.remove('active');
    }
}

// 更新购物车侧边栏内容
function updateCartSidebar() {
    const cartItems = document.querySelector('.cart-items');
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `<p class="empty-cart">${getTranslation('cart-empty') || '购物车为空'}</p>`;
        return;
    }
    
    let html = '';
    cart.forEach(item => {
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${getTranslation('quantity')}: ${item.quantity}</p>
                </div>
                <button class="remove-item" data-product-id="${item.id}">&times;</button>
            </div>
        `;
    });
    
    cartItems.innerHTML = html;
    
    // 添加删除按钮事件
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.productId;
            removeFromCart(productId);
        });
    });
}

// 从购物车移除商品
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartSidebar();
}

// 请求报价
function requestQuotation() {
    if (cart.length === 0) {
        showMessage(getTranslation('cart-empty') || '购物车为空');
        return;
    }
    
    const emailContent = generateQuotationEmail();
    sendEmail(emailContent);
}

// 生成报价邮件内容
function generateQuotationEmail() {
    let content = `${getTranslation('quotation-request')} - LUIANG MACHINE\n\n`;
    content += `${getTranslation('request-quotation')} ${getTranslation('from')}: ${window.location.href}\n\n`;
    content += `${getTranslation('requested-products')}:\n`;
    
    cart.forEach(item => {
        content += `- ${item.name} (${getTranslation('quantity')}: ${item.quantity})\n`;
    });
    
    content += `\n${getTranslation('request-time')}: ${new Date().toLocaleString()}`;
    content += `\n\n${getTranslation('contact-info-prompt')}:`;
    content += `\n${getTranslation('name')}: `;
    content += `\n${getTranslation('company')}: `;
    content += `\n${getTranslation('email')}: `;
    content += `\n${getTranslation('phone')}: `;
    
    return content;
}

// 发送邮件
function sendEmail(content, subject = 'Quotation Request - LUIANG MACHINE') {
    const email = 'luiangparts@luiangparts.com';
    const emailSubject = getTranslation('quotation-request') + ' - LUIANG MACHINE';
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(content)}`;
    
    // 清空购物车
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartSidebar();
    closeCartSidebar();
    
    showMessage(getTranslation('quotation-request-sent') || '报价请求已发送');
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

// 页面加载完成后初始化购物车
document.addEventListener('DOMContentLoaded', initCart);