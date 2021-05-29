module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineClamp: {
10:'10',
12:'12',
      },
      animation: {
        none: 'none',
        spin: 'spin 2s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
      },
      height: {
        cus117:'117rem',
        cus110:'110rem',
        cus105:'105rem',
        cus100:'100rem',
        cus95:'95rem',
        cus90:'90rem',
        cus85:'85rem',
        cus83:'83rem',
        cus80:'80rem',
        cus75:'75rem',
        cus70:'70rem',
        cus65:'65rem',
        cus60:'60rem',
        cus55:'55rem',
        cus50:'50rem',
        cus45:'45rem',
        cus40:'40rem',
      },
      width:{
        cus25:'25rem',
        cus26:'26rem',
        cus27:'27rem',  
cus28:'28rem',
cus30:'30rem',
cus32:'32rem',
cus35:'35rem',
cus38:'38rem',

      }


    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      display: ["group-hover"],
      opacity: ["group-hover"],
      translate: ["group-hover"],
      transform: ["group-hover"],
      width: ["group-hover", "hover"],
      height: ["group-hover", "hover"],
      padding: ["group-hover", "hover"],
      animation: ["group-hover", "hover", 'motion-safe', 'motion-reduce'],
      scale: ["group-hover", "hover"],
    
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}
