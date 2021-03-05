import FunctionInputWidget from "./FunctionInputWidget/FunctionInputWidget.jsx"
import InputHeader from "./InputHeader/InputHeader.jsx"

const InputWidget = () => {
    return (
      <div>
        <div className="bg-light-gray bb pa2">
          <InputHeader />
        </div>
          <FunctionInputWidget fieldCount={3}/>
      </div>
    )
}

export default InputWidget;