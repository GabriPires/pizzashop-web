import { tv } from 'tailwind-variants'

export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em preparo',
}

export function OrderStatus({ status }: OrderStatusProps) {
  const indicator = tv({
    base: 'h-2 w-2 rounded-full',
    variants: {
      status: {
        pending: 'bg-slate-400',
        canceled: 'bg-rose-500',
        delivered: 'bg-emerald-500',
        delivering: 'bg-amber-500',
        processing: 'bg-amber-500',
      },
    },
  })

  return (
    <div className="flex items-center gap-2">
      <span className={indicator({ status })}></span>
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
