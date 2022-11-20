import { ProductsQuery } from "../../generated/graphql"

interface Props {
  cols: string[]
  rows: string[][]
}

const Table: React.FC<Props> = ({ cols, rows }: Props) => (
  <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-200">
        <tr>
          {cols &&
            cols.map((label, i) => (
              <th key={i} scope="col" className="py-3 px-6">
                {label}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {rows &&
          rows.map(
            (row, i) =>
              row && (
                <tr key={i} className="bg-white border-b">
                  {row.map((label, index) => (
                    <td
                      key={index}
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {label}
                    </td>
                  ))}
                </tr>
              )
          )}
      </tbody>
    </table>
  </div>
)

export default Table
