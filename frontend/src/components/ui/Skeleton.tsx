import { cn } from '@/lib/utils'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gradient-to-r from-muted/50 via-muted to-muted/50 bg-[length:200%_100%] animate-shimmer',
        className
      )}
      {...props}
    />
  )
}

export function ServiceCardSkeleton() {
  return (
    <div className="rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-sm">
      <Skeleton className="h-14 w-14 rounded-xl mb-6" />
      <Skeleton className="h-6 w-3/4 mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-6" />
      <div className="space-y-2 mb-6">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5" />
        <Skeleton className="h-3 w-3/4" />
      </div>
      <Skeleton className="h-4 w-24" />
    </div>
  )
}

export function StatCardSkeleton() {
  return (
    <div className="rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-8 text-center backdrop-blur-sm">
      <Skeleton className="h-16 w-16 rounded-xl mx-auto mb-4" />
      <Skeleton className="h-8 w-20 mx-auto mb-2" />
      <Skeleton className="h-4 w-32 mx-auto" />
    </div>
  )
}
