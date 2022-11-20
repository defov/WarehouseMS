import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { WarehouseList } from "../../components/Lists"
import Modal from "../../components/Modal"
import Table from "../../components/Table"
import { Warehouse, WarehousesDocument } from "../../generated/graphql"
import Layout from "../Layout"
import TransactionContainer from "../TransactionContainer"

const WarehousesPage = () => {
  const [modalVisibility, setModalVisibility] = useState(false)
  const [warehouseId, setWarehouseId] = useState(0)

  const { data, error, loading } = useQuery(WarehousesDocument)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>ERROR</div>
  }

  return (
    <>
      <Layout>
        <h1 className="mb-2 text-xl font-medium tracking-tight leading-none text-gray-900 md:text-2xl">
          Warehouses
        </h1>

        <select
          onChange={(e) => setWarehouseId(Number.parseInt(e.target.value))}
          value={warehouseId}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        >
          <option value={0}>Choose a Warehouse</option>
          {data.warehouses.map(({ id, name }, i) => (
            <option key={i} value={id}>
              {name}
            </option>
          ))}
        </select>
        {warehouseId > 0 ? (
          <TransactionContainer warehouseId={warehouseId} />
        ) : (
          <WarehouseList warehousesQuery={data} />
        )}
      </Layout>
      {/* {modalVisibility && (
        <Modal
          title="Add Transaction"
          onSubmit={() => setModalVisibility(false)}
          onClose={() => setModalVisibility(false)}
        />
      )} */}
    </>
  )
}

export default WarehousesPage
