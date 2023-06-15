const app = getApp();
Page({
    data: {
        scrollTop: 0,
        navbarHeight: app.globalData.totalHeight,
    },
    onLoad() {
    },
    onPageScroll(e) {
        const t = e.scrollTop;
        const h = this.data.navbarHeight;
        if (t <= h) {
            this.setData({scrollTop: t});
        } else {
            if (this.data.scrollTop < h) {
                this.setData({scrollTop: h});
            }
        }
    },
})

