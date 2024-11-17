////////////////////////////////////////
//! LANGKAH-LANGKAH INSTALL TAILWIND !//
////////////////////////////////////////

1. Di terminal ketik
npm i -D tailwindcss postcss autoprefixer

2. ketik
npx tailwindcss init -p

3. Ketik difile tailwind.config.js

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

4. 	Ketik di global.css
	@tailwind base;
    @tailwind components;
    @tailwind utilities;

5. Ketik difile main.jsx
import './global.css'

5. CARA PENGGUNAAN
    didalam tag className=""
    
export default function Navbar() {
    return(
        <div className="h-[50px] flex justify-center items-center bg-teal-500 text-white">
        {/** ini bisa CUSTOM [] seperti h-[50px]  */}
            Navbar
        </div>
    )
}

6. lihat website    "tailwindcss.com"
    turunannya      "flowbite.com daisyui.com"

    jika diperlukan edit tailwind.config.js

    Plugins: [ ],

7. RESPONSIVE DESIGN TAILWIND @media screen
   jadi jika layar dibawah dri lebar itu kembali default

    sm      => min width 640px
    md      => min width 768px
    lg      => min width 1024px
    xl      => min width 1280px
    2xl     => min width 1536px