import { useMutation, useQuery } from "@apollo/client"
import { useCallback, useEffect, useRef, useState } from "react"
import {
  createField,
  Field,
  getTransactionFields,
} from "../../components/Fields"
import { TransactionList } from "../../components/Lists"
import Modal from "../../components/Modal"
import {
  CreateTransactionDocument,
  CreateTransactionInput,
  ProductsDocument,
  WarehouseDocument,
} from "../../generated/graphql"

interface Props {
  warehouseId: number
}

const TransactionContainer = ({ warehouseId }: Props) => {
  const { data, error, loading, refetch } = useQuery(WarehouseDocument, {
    variables: { warehouseId },
  })

  const productsResult = useQuery(ProductsDocument)

  const useCreateTransactionMutation = useMutation(CreateTransactionDocument)

  const [modalVisibility, setModalVisibility] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const [fields, setFields] = useState(
    getTransactionFields(productsResult.data?.products)
  )

  const handleChange = (field: Field): void => {
    setFields(fields.map((f) => (f.name !== field.name ? f : field)))
  }

  const refreshForm = useCallback(() => {
    setFields(fields.map((field) => ({ ...field, value: "" })))
  }, [fields])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // const pairs = fields.reduce(
    //   (val, field) => {
    //     return { ...val, [field.name]: field.value }
    //   },
    //   {
    //     productId: 0,
    //     amount: 0,
    //     createdAt: 0,
    //     type: "import",
    //   }
    // )

    const productId = Number.parseInt(
      String(fields.find((field) => field.name === "productId")?.value || 0)
    )
    const amount = Number.parseInt(
      String(fields.find((field) => field.name === "amount")?.value || 0)
    )
    const createdAt = Number.parseInt(
      String(fields.find((field) => field.name === "createdAt")?.value || 0)
    )
    const type = String(fields.find((field) => field.name === "type")?.value)

    const data: CreateTransactionInput = {
      warehouseId,
      productId,
      type,
      amount,
      createdAt,
    }

    useCreateTransactionMutation[0]({
      variables: { input: data },
    })
  }

  useEffect(() => {
    const resultMutation = useCreateTransactionMutation[1]
    if (resultMutation.called && !resultMutation.loading) {
      if (resultMutation.error) {
        alert("error")
        console.log(resultMutation.error)
      } else {
        refetch()
        setModalVisibility(false)
        refreshForm()
      }
      resultMutation.reset()
    }
  }, [useCreateTransactionMutation, refetch, refreshForm])

  useEffect(() => {
    if (
      productsResult.data &&
      !productsResult.loading &&
      !productsResult.error
    ) {
      setFields(getTransactionFields(productsResult.data.products))
    }
  }, [productsResult])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>ERROR</div>
  }

  return (
    <>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setModalVisibility(true)}
      >
        Add Transaction
      </button>
      <TransactionList warehouse={data.warehouse} />
      {modalVisibility && (
        <Modal
          title="Add Transaction"
          onSubmit={() => formRef.current?.requestSubmit()}
          onClose={() => {
            refreshForm()
            setModalVisibility(false)
          }}
        >
          <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
            {fields.map((field, key) => createField(key, field, handleChange))}
          </form>
        </Modal>
      )}
    </>
  )
}

export default TransactionContainer
