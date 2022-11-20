import InputField from "./InputField"
import SelectField from "./SelectField"
import DatePicker from "./DatePicker"
import { Product } from "../../generated/graphql"

export interface Option {
  id: string
  text: string
}

export interface Field {
  value: string | number
  type: "input" | "number" | "checkbox" | "select" | "date"
  name: string
  label: string
  required?: boolean
  options?: Option[]
}

export interface FieldInput {
  field: Field
  onChange: (field: Field) => void
}

export const createField = (
  key: number,
  field: Field,
  onChange: (field: Field) => void
): JSX.Element => {
  switch (field.type) {
    case "select":
      return <SelectField key={key} field={field} onChange={onChange} />
    case "date":
      return <DatePicker key={key} field={field} onChange={onChange} />
    default:
      return <InputField key={key} field={field} onChange={onChange} />
  }
}

export const getProductFields = (): Field[] => {
  return [
    {
      name: "name",
      value: "",
      type: "input",
      label: "Enter name",
      required: true,
    },
    {
      name: "sizePerUnit",
      value: "",
      type: "number",
      label: "Enter size per unit",
      required: true,
    },
    {
      name: "isHazardous",
      value: "",
      type: "checkbox",
      label: "Is hazardous",
    },
  ]
}

export const getTransactionFields = (products?: Product[]): Field[] => {
  return [
    {
      name: "productId",
      value: "",
      type: "select",
      label: "Select Product",
      required: true,
      options: products?.map((product) => ({
        id: product.id.toString(),
        text: product.name,
      })),
    },
    {
      name: "amount",
      value: "",
      type: "number",
      label: "Enter amount",
      required: true,
    },
    {
      name: "type",
      value: "",
      type: "select",
      label: "Select type",
      required: true,
      options: [
        {
          id: "import",
          text: "Import",
        },
        {
          id: "export",
          text: "Export",
        },
      ],
    },
    {
      name: "createdAt",
      value: "",
      type: "date",
      label: "Date",
      required: true,
    },
  ]
}

export { InputField, SelectField, DatePicker }
