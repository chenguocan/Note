function debounce(fn, delay=1000){
    let timerId = null
    return function(){
        if(timerId){ window.clearTimeout(timerId)}
        timerId = setTimeout(()=>{
            this[fn]();
        },delay)
    }
}
export default debounce;
