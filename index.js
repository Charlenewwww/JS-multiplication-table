var app = new Vue({
    el: '#app',
    data() {
        return {
            tableData:{}
        }
    },
    created() {
        const table99 = (i,j) => {
            if(!this.tableData[i]){this.tableData[i]=[]}
            this.tableData[i].push([i,j,i*j])
            if (j<9) return table99(i,j+1)
            if (i<9) return table99(i+1,1)
        }
       table99(2,1)
       console.log(this.tableData)
    }
})