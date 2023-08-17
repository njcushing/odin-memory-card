const SliderBasic = ({

    labelText = "Slider: ",
    id = "",
    minValue = 0,
    maxValue = 0,
    currentValue = 0,
    classNames = [],
    changeHandler = null,
    enabled = true,
    valid = true,

}) => {

    const labelElement = (
        <label
            htmlFor={id}
            className={["SliderBasic-label"]}
        >
            {labelText}
        </label>
    )

    const inputElement = (
        <input
            id={id}
            type="range"
            min={minValue}
            max={maxValue}
            value={currentValue}
            onChange={changeHandler}
            className={[`SliderBasic-input${valid ? "" : " invalid-field"}`]}
            disabled={!enabled}
        ></input>
    )
    
    return (
        <div className={["SliderBasic"].concat(classNames).join(" ")} >
        {labelElement}
        {inputElement}
        </div>
    )

}

export default SliderBasic;