import { useMutation, useQuery } from "@apollo/client"
import {
  CreateProductDocument,
  CreateProductInput,
  ProductsDocument,
} from "../../generated/graphql"
import { ProductList } from "../../components/Lists"
import Layout from "../Layout"
import Modal from "../../components/Modal"
import { useCallback, useEffect, useRef, useState } from "react"
import { createField, Field, getProductFields } from "../../components/Fields"

const ProductsPage = () => {
  const { data, error, loading, refetch } = useQuery(ProductsDocument)

  const useCreateProductMutation = useMutation(CreateProductDocument)

  const [modalVisibility, setModalVisibility] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const [fields, setFields] = useState(getProductFields())

  const handleChange = (field: Field): void => {
    setFields(fields.map((f) => (f.name !== field.name ? f : field)))
  }

  const refreshForm = useCallback(() => {
    setFields(fields.map((field) => ({ ...field, value: "" })))
  }, [fields])

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const name = String(fields.find((field) => field.name === "name")?.value)
    const sizePerUnit = Number.parseInt(
      String(fields.find((field) => field.name === "sizePerUnit")?.value || 0)
    )
    const isHazardous = !!Number.parseInt(
      String(fields.find((field) => field.name === "isHazardous")?.value || 0)
    )

    const data: CreateProductInput = {
      name,
      sizePerUnit,
      isHazardous,
    }

    useCreateProductMutation[0]({
      variables: { input: data },
    })
  }

  useEffect(() => {
    const resultMutation = useCreateProductMutation[1]
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
  }, [useCreateProductMutation, refetch, refreshForm])

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
          Products
        </h1>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setModalVisibility(true)}
        >
          Add Product
        </button>
        <ProductList products={data.products} />
      </Layout>
      {modalVisibility && (
        <Modal
          title="Add Product"
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

export default ProductsPage
