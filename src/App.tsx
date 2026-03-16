import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib"
import { Home } from "@/pages"
import { Header } from "@/components"

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="page">
        <Header title={'Dog Breed Viewer'}/>
        <Home />
      </div>
    </QueryClientProvider>
  )
}

export default App
