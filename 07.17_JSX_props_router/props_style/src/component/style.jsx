export default function Style() {
    return (
        <>
            <h1 className="color-red">Componen Style Bawaan</h1>{/* STYLE CSS menggunakan className (JSX) dan HARUS menggunakan class CSS(.color-red) di App.css */}
            <h2 style={{ color: 'green' }}>Componen Style INLINE</h2>{/* INLINE CSS, jdi tidak perlu menulis class di .css */}
        </>
    )
}