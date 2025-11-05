import { auth } from '@/auth'
import { ModalProvider } from '@/components/provider/modal-provider'
import ReactQueryProvider from '@/components/provider/react-query-provider'
import { Toaster } from '@/components/ui/sonner'
import AdminNavbar from '@/modules/admin/layout/admin-layout-header'
import { SessionProvider } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  if (!session) {
    redirect('/auth/sign-in')
  }
  return (
    <SessionProvider session={session}>
      <ReactQueryProvider>
        <ModalProvider>
          <main className="flex flex-col min-h-screen max-w-screen dark:bg-black dark:text-white">
            <AdminNavbar />
            <div className="flex-1 px-4 sm:px-6 flex mt-2">
              <main className="flex-1 flex">{children}</main>
            </div>
            <Toaster position="top-center" richColors />
          </main>
        </ModalProvider>
      </ReactQueryProvider>
    </SessionProvider>
  )
}
