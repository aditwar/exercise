import { useRef } from "react"

// useRef merupakan HOOK untuk mendapat data input dri user ke DOM
export default function RefComp() {

    // ini untuk mendefinisikan inputRef menggunakan useRef
    const inputRef = useRef()

    const elementRef = useRef()

    const handleSubmit = () => {
        console.log(inputRef.current.value);

        // jadi saat terinput maka elemen itu dapat mengalami perubahan
        elementRef.current.style.backgroundColor = 'orange'
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleSubmit}>submit</button>

            {/* ref={} ini agar dapat mentrigger elementRef di const tersebut */}
            <div style={{
                backgroundColor: 'teal',
                height: '100px'}}
                ref={elementRef}>Element useRef
            </div>
        </div>
    )
}