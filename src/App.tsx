import { useState } from 'react'

import './App.css'

import { AppSidebar } from './components/layout/AppSidebar'
import {Inventory} from './components/pages/Inventory'

function App() {
  const [activePage,setActivePage] = useState("Dashboard");



  return (
    
    <>
     <div className="flex min-h-screen bg-background ">
      <AppSidebar
        activePage={activePage}
        onNavigate={setActivePage}
      />

      <main className="min-w-0 flex-1 p-8">
        {activePage === "Inventory" ? (
          <Inventory />
        ) : (
          <>
            <h1 className="text-3xl font-bold">{activePage}</h1>
            <p className="mt-2 text-muted-foreground">
              Welcome to your ERP workspace.
            </p>
          </>
        )}
      </main>
    </div>

    </>
  )
}

export default App
