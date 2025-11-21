// 社交链接功能
function initSocialLinks() {
    // 社交链接已经在HTML中静态定义
    // 这里可以添加额外的交互功能
    
    // 添加悬停效果
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(-5px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
        
        // 点击统计（可选）
        link.addEventListener('click', function(e) {
            const platform = this.href.split('.')[1]; // 提取平台名称
            console.log(`Social link clicked: ${platform}`);
            // 这里可以添加 analytics 跟踪代码
        });
    });
    
    // 移动端隐藏社交链接
    checkMobileView();
    window.addEventListener('resize', checkMobileView);
}

// 检查移动端视图
function checkMobileView() {
    const socialSidebar = document.querySelector('.social-sidebar');
    if (!socialSidebar) return;
    
    if (window.innerWidth <= 768) {
        socialSidebar.style.display = 'none';
    } else {
        socialSidebar.style.display = 'flex';
    }
}

// 页面加载完成后初始化社交链接
document.addEventListener('DOMContentLoaded', initSocialLinks);