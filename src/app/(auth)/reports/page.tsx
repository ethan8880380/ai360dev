"use client"

import { useState } from 'react'
import { Search, Filter, Home, BarChart2, Layers, ArrowUpRight, HelpCircle, Settings, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SearchResults() {
  const [view, setView] = useState<'grid' | 'list'>('grid')

  const products = [
    {
      name: 'Content Generator',
      launchDate: '02/02/2024',
      tokensConsumed: 'Regression',
      performance: { value: 2.05, change: 0.8 },
      cost: { value: 213, change: 0.8 },
      distinctUsers: { value: 1242, change: 0.8 },
      answeredQuestions: 50000,
      questions: 50000,
    },
    {
      name: 'Translator',
      launchDate: '02/02/2024',
      tokensConsumed: 'Regression',
      performance: { value: 4.02, change: -0.8 },
      cost: { value: 1023, change: 0.8 },
      distinctUsers: { value: 235, change: -0.8 },
      answeredQuestions: 50000,
      questions: 50000,
    },
    {
      name: 'Image Generator',
      launchDate: '02/02/2024',
      tokensConsumed: 'Regression',
      performance: { value: 2.02, change: 0.8 },
      cost: { value: 1023, change: -0.8 },
      distinctUsers: { value: 354, change: 0.8 },
      answeredQuestions: 50000,
      questions: 50000,
    },
    {
        name: 'Image Generator',
        launchDate: '02/02/2024',
        tokensConsumed: 'Regression',
        performance: { value: 2.02, change: 0.8 },
        cost: { value: 1023, change: -0.8 },
        distinctUsers: { value: 354, change: 0.8 },
        answeredQuestions: 50000,
        questions: 50000,
      },
      {
        name: 'Image Generator',
        launchDate: '02/02/2024',
        tokensConsumed: 'Regression',
        performance: { value: 2.02, change: 0.8 },
        cost: { value: 1023, change: -0.8 },
        distinctUsers: { value: 354, change: 0.8 },
        answeredQuestions: 50000,
        questions: 50000,
      },
      {
        name: 'Image Generator',
        launchDate: '02/02/2024',
        tokensConsumed: 'Regression',
        performance: { value: 2.02, change: 0.8 },
        cost: { value: 1023, change: -0.8 },
        distinctUsers: { value: 354, change: 0.8 },
        answeredQuestions: 50000,
        questions: 50000,
      },
      {
        name: 'Image Generator',
        launchDate: '02/02/2024',
        tokensConsumed: 'Regression',
        performance: { value: 2.02, change: 0.8 },
        cost: { value: 1023, change: -0.8 },
        distinctUsers: { value: 354, change: 0.8 },
        answeredQuestions: 50000,
        questions: 50000,
      },
      {
        name: 'Image Generator',
        launchDate: '02/02/2024',
        tokensConsumed: 'Regression',
        performance: { value: 2.02, change: 0.8 },
        cost: { value: 1023, change: -0.8 },
        distinctUsers: { value: 354, change: 0.8 },
        answeredQuestions: 50000,
        questions: 50000,
      },
      {
        name: 'Image Generator',
        launchDate: '02/02/2024',
        tokensConsumed: 'Regression',
        performance: { value: 2.02, change: 0.8 },
        cost: { value: 1023, change: -0.8 },
        distinctUsers: { value: 354, change: 0.8 },
        answeredQuestions: 50000,
        questions: 50000,
      },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-16 bg-white border-r flex flex-col items-center py-4 space-y-4">
        <div className="w-8 h-8 bg-blue-500 rounded-full mb-8"></div>
        <Home className="text-gray-400" />
        <BarChart2 className="text-gray-400" />
        <Layers className="text-gray-400" />
        <ArrowUpRight className="text-gray-400" />
        <div className="flex-grow"></div>
        <HelpCircle className="text-gray-400" />
        <Settings className="text-gray-400" />
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mt-auto"></div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <nav className="flex items-center text-sm mb-4">
              <BarChart2 className="w-4 h-4 mr-2" />
              <span className="text-gray-500">Search</span>
            </nav>
            <h1 className="text-2xl font-bold mb-4">Search Results</h1>
            <div className="flex gap-4">
              <div className="relative flex-grow">
                <Input type="text" placeholder="Violet" className="pl-10 pr-4 py-2 w-full" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Button variant="ghost" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Options</SheetTitle>
                    <SheetDescription>
                      Adjust your search filters here.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="performance-filter">Performance</Label>
                      <Switch id="performance-filter" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="cost-filter">Cost</Label>
                      <Switch id="cost-filter" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="users-filter">Active Users</Label>
                      <Switch id="users-filter" />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </header>

          <div className="flex justify-between items-center mb-4">
            <Tabs defaultValue="products">
              <TabsList>
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs value={view} onValueChange={(value) => setView(value as 'grid' | 'list')}>
              <TabsList>
                <TabsTrigger value="list">List</TabsTrigger>
                <TabsTrigger value="grid">Grid</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {view === 'list' ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Products</TableHead>
                  <TableHead>Launch Date</TableHead>
                  <TableHead>Tokens Consumed</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Cost</TableHead>
                  <TableHead>Distinct Users</TableHead>
                  <TableHead>Answered Questions</TableHead>
                  <TableHead>Questions</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.launchDate}</TableCell>
                    <TableCell>{product.tokensConsumed}</TableCell>
                    <TableCell>
                      {product.performance.value.toFixed(2)}
                      <span className={`ml-2 ${product.performance.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {product.performance.change >= 0 ? '+' : '-'}{Math.abs(product.performance.change)}%
                      </span>
                    </TableCell>
                    <TableCell>
                      ${product.cost.value}
                      <span className={`ml-2 ${product.cost.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {product.cost.change >= 0 ? '+' : '-'}{Math.abs(product.cost.change)}%
                      </span>
                    </TableCell>
                    <TableCell>
                      {product.distinctUsers.value}
                      <span className={`ml-2 ${product.distinctUsers.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {product.distinctUsers.change >= 0 ? '+' : '-'}{Math.abs(product.distinctUsers.change)}%
                      </span>
                    </TableCell>
                    <TableCell>{product.answeredQuestions.toLocaleString()}</TableCell>
                    <TableCell>{product.questions.toLocaleString()}</TableCell>
                    <TableCell>
                      <Button variant="link">View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-2xl">👀</span>
                    </div>
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <span className="ml-auto text-sm text-gray-500">{product.launchDate}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t">
                    <span className="text-gray-600">Performance</span>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">{product.performance.value.toFixed(2)}</span>
                      <span className={`text-sm ${product.performance.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {product.performance.change >= 0 ? '+' : '-'}{Math.abs(product.performance.change)}%
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t">
                    <span className="text-gray-600">Cost</span>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">${product.cost.value}</span>
                      <span className={`text-sm ${product.cost.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {product.cost.change >= 0 ? '+' : '-'}{Math.abs(product.cost.change)}%
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t">
                    <span className="text-gray-600">Distinct Users</span>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">{product.distinctUsers.value}</span>
                      <span className={`text-sm ${product.distinctUsers.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {product.distinctUsers.change >= 0 ? '+' : '-'}{Math.abs(product.distinctUsers.change)}%
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t">
                    <span className="text-gray-600">Questions</span>
                    <span className="font-medium">{product.questions.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t">
                    <span className="text-gray-600">Answered Questions</span>
                    <span className="font-medium">{product.answeredQuestions.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}