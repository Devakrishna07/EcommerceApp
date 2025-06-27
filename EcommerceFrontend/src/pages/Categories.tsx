import React, { useEffect, useState } from 'react'
import api from '../services/Api'
import InfoCard from '../components/ProductCard' // adjust path if needed

type ImageItem = {
  id: number
  title: string
  image_url: string
  category: string
  description: string // ensure this exists in the backend response
}

type CategoriesProps = {
  categoryName?: string // default to "jeans"
}

const Categories: React.FC<CategoriesProps> = ({ categoryName = 'jeans' }) => {
  const [data, setData] = useState<ImageItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await api.get<ImageItem[]>('product/products/')
        setData(response)
      } catch (err) {
        setError('Failed to load products')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredItems = data
    .filter((item) => item.category.toLowerCase() === categoryName.toLowerCase())
    .slice(0, 4)

  if (loading) return <p className="text-white p-4">Loading...</p>
  if (error) return <p className="text-red-500 p-4">{error}</p>

  return (
    <div className="p-2 overflow-x-hidden">
      <h2 className="text-2xl font-bold text-white mb-4 capitalize">
        {categoryName} Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 overflow-hidden mx-1">
        {filteredItems.map((item) => (
          <InfoCard
            key={item.id}
            image={item.image_url}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Categories
