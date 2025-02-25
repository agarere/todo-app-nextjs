"use client"
import React from 'react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from 'next/navigation'

export default function TabComponent() {
  const router = useRouter()

  const tabClick = (tabName) => {
    router.push(`/${tabName}`)
  }

  return (
    <Tabs defaultValue="todo" className="tabs-container">
      <TabsList className="tabs-list">
        <TabsTrigger
          value="todo"
          className="tab-button"
          onClick={() => tabClick("todo")}
        >
          Todo
        </TabsTrigger>
        <TabsTrigger
          value="done"
          className="tab-button"
          onClick={() => tabClick("done")}
        >
          Done
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
