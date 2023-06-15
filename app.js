App({
    globalData: {},
    onLaunch() {
        const sysInfo = wx.getSystemInfoSync()
        const menuRect = wx.getMenuButtonBoundingClientRect()
        const statusHeight = sysInfo.statusBarHeight
        const navbarHeight = (menuRect.top - sysInfo.statusBarHeight) * 2 + menuRect.height
        const capsuleHeight = menuRect.height
        this.globalData = {
            sysInfo: sysInfo,
            menuRect: menuRect,
            statusHeight: statusHeight,
            navbarHeight: navbarHeight,
            capsuleHeight: capsuleHeight,
            totalHeight: statusHeight + navbarHeight,
        }
    },
})
