import { api } from '@/lib/axios'

export interface GetOrdersQuery {
  orderId?: string | null
  customerName?: string | null
  status?: string | null
  pageIndex?: number | null
}

export interface GetOrdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({
  pageIndex,
  customerName,
  orderId,
  status,
}: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      customerName,
      orderId,
      status,
      pageIndex,
    },
  })

  return response.data
}
