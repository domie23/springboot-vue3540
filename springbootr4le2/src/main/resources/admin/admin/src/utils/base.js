const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootr4le2/",
            name: "springbootr4le2",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "校车调度管理系统"
        } 
    }
}
export default base
