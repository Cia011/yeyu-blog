import { Code } from 'lucide-react'

function AdminLogo() {
  return (
    <div className="flex items-center gap-1">
      <h2 className="font-bold text-sm sm:text-base">ciao的后台管理界面</h2>
      <Code size={16} className="sm:size-[18px]" />
    </div>
  )
}

export default AdminLogo
