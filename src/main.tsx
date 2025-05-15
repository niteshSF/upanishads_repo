// import { StrictMode } from "react"
// import { createRoot } from "react-dom/client"
// import App from "./App.tsx"
// import "./index.css"
// import { BrowserRouter } from "react-router-dom"
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// const queryClient = new QueryClient()

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <BrowserRouter basename="/upanishads_repo">
//       <QueryClientProvider client={queryClient}>
//         <App />
//         <ReactQueryDevtools initialIsOpen={false} />
//       </QueryClientProvider>
//     </BrowserRouter>
//   </StrictMode>,
// )


import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

// Use basename only in production (GitHub Pages)
const basename = process.env.NODE_ENV === "production" ? "/upanishads_repo" : "/"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
