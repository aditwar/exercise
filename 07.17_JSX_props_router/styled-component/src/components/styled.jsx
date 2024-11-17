import styled from 'styled-components' // STYLED COMPONENT pertama harus di IMPORT => lihat website styled-components.com


// STYLED COMPONENTS menggunakan variabel dan BACKTICK ``
const StyledButton = styled.button`
    background-color: black;
    font-size: 32px;
    color: white;
    border-radius: 30px;
`


function Styled() {
    return (
        <div>
            <h1>Component Styled</h1>
            <StyledButton>INI STYLED BUTTON yang di import</StyledButton>{/* ini cara penerapan STYLED dengan <StyledButton> */}
        </div>
    )
}

export default Styled