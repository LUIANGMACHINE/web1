// 产品轮播功能
class ProductSlider {
    constructor() {
        this.sliderTrack = document.querySelector('.slider-track');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.sliderItems = document.querySelectorAll('.slider-item');
        this.currentIndex = 0;
        this.itemWidth = 0;
        this.autoSlideInterval = null;
        
        this.init();
    }
    
    init() {
        if (!this.sliderTrack || this.sliderItems.length === 0) return;
        
        this.calculateItemWidth();
        this.updateSliderPosition();
        
        // 事件监听
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());
        
        // 自动轮播
        this.startAutoSlide();
        
        // 鼠标悬停时暂停自动轮播
        this.sliderTrack.addEventListener('mouseenter', () => this.stopAutoSlide());
        this.sliderTrack.addEventListener('mouseleave', () => this.startAutoSlide());
        
        // 窗口大小改变时重新计算
        window.addEventListener('resize', () => this.handleResize());
        
        // 触摸滑动支持
        this.addTouchSupport();
    }
    
    calculateItemWidth() {
        if (this.sliderItems.length > 0) {
            this.itemWidth = this.sliderItems[0].offsetWidth;
        }
    }
    
    handleResize() {
        this.calculateItemWidth();
        this.updateSliderPosition();
    }
    
    updateSliderPosition() {
        if (this.sliderTrack) {
            this.sliderTrack.style.transform = `translateX(-${this.currentIndex * this.itemWidth}px)`;
        }
    }
    
    prevSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = Math.max(0, this.sliderItems.length - this.getVisibleItemsCount());
        }
        this.updateSliderPosition();
        this.restartAutoSlide();
    }
    
    nextSlide() {
        const maxIndex = Math.max(0, this.sliderItems.length - this.getVisibleItemsCount());
        if (this.currentIndex < maxIndex) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0;
        }
        this.updateSliderPosition();
        this.restartAutoSlide();
    }
    
    getVisibleItemsCount() {
        // 根据屏幕宽度返回可见项目数量
        if (window.innerWidth < 480) return 1;
        if (window.innerWidth < 768) return 2;
        if (window.innerWidth < 1024) return 3;
        return 4;
    }
    
    startAutoSlide() {
        if (this.autoSlideInterval) return;
        
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 4000); // 4秒自动切换
    }
    
    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
    
    restartAutoSlide() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }
    
    addTouchSupport() {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        this.sliderTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            this.stopAutoSlide();
        });
        
        this.sliderTrack.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });
        
        this.sliderTrack.addEventListener('touchend', () => {
            if (!isDragging) return;
            
            const diff = startX - currentX;
            const threshold = 50; // 滑动阈值
            
            if (diff > threshold) {
                this.nextSlide();
            } else if (diff < -threshold) {
                this.prevSlide();
            }
            
            isDragging = false;
            this.startAutoSlide();
        });
    }
}

// 初始化轮播
document.addEventListener('DOMContentLoaded', function() {
    new ProductSlider();
});