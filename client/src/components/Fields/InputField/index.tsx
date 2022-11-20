import { FieldInput } from ".."

const InputField = ({ field, onChange }: FieldInput) => {
  const { label, name, type, value, options, required } = field

  const handleChange = (e: any) => {
    console.log(e)
    const newValue =
      type === "checkbox" ? (e.target.checked ? 1 : 0) : e.target.value
    onChange({
      label,
      name,
      type,
      options,
      value: newValue,
    })
  }

  return (
    <div>
      <label>
        {label}
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          name={name}
          type={type}
          required={!!required}
          value={type !== "checkbox" ? value : ""}
          checked={type === "checkbox" && !!value}
          min={1}
          onChange={handleChange}
        />
      </label>
    </div>
  )
}

export default InputField
