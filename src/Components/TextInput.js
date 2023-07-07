export const SimpleTextInput = ({value="",setValue=() => {},placeholderTxt="",inputStyle={},type="text"}) => {
  return(
    <input 
      className="fnt-sz-2 clr-white"
      type={type}
      style={{...{
        backgroundColor:"#333333",
        border:"none",
        borderRadius:10,
        padding:"1.5vh 2vw",
        margin:"1vh 0",
      },...inputStyle}}
      placeholder={placeholderTxt}
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
    />
  )
}