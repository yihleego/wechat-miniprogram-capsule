Component({
    options: {
        addGlobalClass: true
    },
    properties: {
        mode: {
            type: String,
            value: "back", // back, home
        }
    },
    data: {},
    methods: {
        home() {
            wx.redirectTo({url: "/pages/index/index"})
        },
        back() {
            wx.navigateBack({delta: 1})
        },
        more() {
            console.log("more")
        },
    }
});
