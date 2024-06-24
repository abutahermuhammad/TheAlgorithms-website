import clsx from "clsx";

export default function Container({ className, children, ...rest }: { className?: string, children: React.ReactNode, [key: string]: any }) {
  return (
    <div className={clsx('w-full max-w-[1280px] px-5 mx-auto border-box', className)} {...rest}>
      {children}
    </div>
  )
}
