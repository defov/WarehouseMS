import { Field, FieldInput } from ".."

const DatePicker = ({ field, onChange }: FieldInput) => {
  const { label, name, type, value, options, required } = field

  const handleChange = (e: any) => {
    const f: Field = {
      label,
      name,
      type,
      options,
      value: new Date(e.target.value).valueOf(),
    }
    console.log(f)
    onChange(f)
  }

  const formatDate = (value: string | number) => {
    const date = new Date(value)
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`
  }

  return (
    <div>
      <label>
        {label}
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          name={name}
          type="date"
          required={!!required}
          value={formatDate(value)}
          onChange={handleChange}
        />
      </label>
    </div>
  )
}

export default DatePicker
