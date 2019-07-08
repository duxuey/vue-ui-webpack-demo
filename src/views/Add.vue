<template>
    <div>
        <P>标题1</P>
        <input type="text" v-model="title" /> 
        <p>内容</p>
        <input type="text" v-model="content" />
        <button @click="add()">添加</button>
    </div>
</template>

<script>
import store from '@/store'
export default {
    data(){
       return {
           title: "",
           content: ""
       }
    },
    methods: {
        add () {
            store.commit('addItem', {
                title: this.title,
                content: this.content
            })
        }
    }
}
</script>



