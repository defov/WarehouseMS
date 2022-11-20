import { FieldInput } from ".."

const SelectField = ({ field, onChange }: FieldInput) => {
  const { label, name, type, options, value, required } = field

  const handleChange = (e: any) => {
    onChange({
      label,
      name,
      type,
      options,
      value: e.target.value,
    })
  }

  return (
    <div>
      <label>
        {label}
        <select
          onChange={handleChange}
          name={name}
          required={!!required}
          value={value || ""}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        >
          <option></option>
          {options &&
            options.map(({ id, text }, i) => (
              <option key={i} value={id}>
                {text}
              </option>
            ))}
        </select>
      </label>
    </div>
  )
}

export default SelectField
