/**
 * 事件订阅，发布
 */
export default class Observer {
    constructor (){
        this.event = {}
    }
    /**
     * 监听事件
     * @param {String} name 监听事件名称
     * @param {Function} fn 监听事件回调
     */
    on(name, fn) {
        if(typeof fn !== 'function'){
            return new Error('Parameter error,The second argument must be a function')
        }
        if(!this.event[name]){
            this.event[name] = []
            this.event[name].push(fn)
        }else{
            this.event[name].push(fn)
        }

        return this
    }
    /**
     * 删除监听事件
     * @param {String} name 关闭监听事件名称
     */
    off(name) {
        if(this.event[name]){
          for(let i in this.event){
              if(name === i){
                delete this.event[i]
              }
          }
       }  
       return this
    }
    /**
     * 触发事件
     * @param {String} name 触发事件名称
     * @param {[]} arg 参数
     */
    trigger(name, arg) {
       if(this.event[name] && Array.isArray(this.event[name])){
           let event = this.event[name].slice()
            for(let i = 0, len = event.length; i < len; i++){
                if(typeof event[i] === 'function'){
                    event[i].apply(null, [arg])
                }
            }
       }     
    }
}