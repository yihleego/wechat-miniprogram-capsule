const app = getApp();
Component({
    options: {
        addGlobalClass: true
    },
    properties: {
        backgroundColor: {
            type: String,
            value: "#ffffff",
        },
        showTitle: {
            type: Boolean,
            value: true,
        },
        scrollTop: {
            type: Number,
            value: 0,
        },
    },
    data: {
        statusHeight: app.globalData.statusHeight,
        navbarHeight: app.globalData.navbarHeight,
        capsuleHeight: app.globalData.capsuleHeight,
        totalHeight: app.globalData.totalHeight,
    },
    methods: {},
});
