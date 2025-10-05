"use client"

import React from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, PieLabelRenderProps } from 'recharts'

const Card = ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>;
const CardContent = ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>;
const CardDescription = ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>;
const CardHeader = ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>;
const CardTitle = ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>;

const TabsRoot = ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>;
const TabsContent = ({ children, ...props }: { children: React.ReactNode } & { tabValue?: string; value?: string } & React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>;
const TabsList = ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>;
const TabsTrigger = ({ children, ...props }: { children: React.ReactNode } & { tabValue?: string; value?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) => <button {...props}>{children}</button>;

const Avatar = ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>;
const AvatarFallback = ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>;

// Icon components
const BarChart3 = ({ ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span {...props} className="inline-block">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/>
      <path d="M18 17V9"/>
      <path d="M13 17V5"/>
      <path d="M8 17v-3"/>
    </svg>
  </span>
);

const Mail = ({ size = 16, ...props }: { size?: number } & React.HTMLAttributes<HTMLSpanElement>) => (
  <span {...props} className="inline-block">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-10 5L2 7"/>
    </svg>
  </span>
);

const statsData = [
  { label: "Total Users", value: "10" },
  { label: "Total Posts", value: "100" },
  { label: "Total Comments", value: "500" },
  { label: "Avg Comments Per Post", value: "5.0" },
]

const barChartData = [
  { name: "Users", count: 10 },
  { name: "Posts", count: 100 },
  { name: "Comments", count: 500 },
]

const pieChartData = [
  { name: "Users", value: 10, color: "#8b5cf6" }, 
  { name: "Posts", value: 100, color: "#10b981" }, 
  { name: "Comments", value: 500, color: "#f59e0b" } 
];

const usersData = [
  {
    name: "Leanne Graham",
    username: "@Bret",
    email: "Sincere@april.biz",
    initials: "LG",
  },
  {
    name: "Ervin Howell",
    username: "@Antonette",
    email: "Shanna@melissa.tv",
    initials: "EH",
  },
  {
    name: "Clementine Bauch",
    username: "@Samantha",
    email: "Nathan@yesenia.net",
    initials: "CB",
  },
  {
    name: "Patricia Lebsack",
    username: "@Karianne",
    email: "Julianne.OConner@kory.org",
    initials: "PL",
  },
]

export default function DashboardPage() {
  // const total = pieChartData.reduce((sum, item) => sum + item.value, 0)
  const [activeTab, setActiveTab] = React.useState<'users' | 'posts'>('users')
  const [activeNav, setActiveNav] = React.useState<'home' | 'users' | 'posts'>('home')

  return (
    <div className="min-h-screen bg-purple-50">
     
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="text-purple-600">
              <BarChart3 />
            </div>
            <h1 className="text-xl font-semibold text-gray-800">Dynamic Analytics Data</h1>
          </div>
          <nav className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveNav('home')}
              aria-current={activeNav === 'home' ? 'page' : undefined}
              data-active={activeNav === 'home' ? '' : undefined}
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-purple-600 data-[active]:bg-purple-100 data-[active]:text-purple-800"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => setActiveNav('users')}
              aria-current={activeNav === 'users' ? 'page' : undefined}
              data-active={activeNav === 'users' ? '' : undefined}
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-purple-600 data-[active]:bg-purple-100 data-[active]:text-purple-800"
            >
              Users
            </button>
            <button
              type="button"
              onClick={() => setActiveNav('posts')}
              aria-current={activeNav === 'posts' ? 'page' : undefined}
              data-active={activeNav === 'posts' ? '' : undefined}
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-purple-600 data-[active]:bg-purple-100 data-[active]:text-purple-800"
            >
              Posts
            </button>
          </nav>
        </div>
      </header>

     
      <main className="container mx-auto px-6 py-8">
       
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <Card key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <CardHeader className="pb-2">
                <CardTitle>
                  <span className="text-sm font-medium text-gray-500">{stat.label}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

       
        <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
          
          <Card className="bg-white rounded-lg shadow-sm border border-gray-100">
            <CardHeader className="pb-4">
              <CardTitle>
                <span className="flex justify-center px-6 py-3 text-xl font-bold text-gray-800">Data Visualization</span>
              </CardTitle>
              <CardDescription>
                <span className="flex justify-center px-2 text-sm text-gray-500">Overview of users, posts, and comments</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-2">
                {/* Bar Chart */}
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="name" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#6b7280", fontSize: 12 }}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#6b7280", fontSize: 12 }}
                        label={{
                          value: "Count",
                          angle: -90,
                          position: "insideLeft",
                          style: { fill: "#6b7280", fontSize: 12 },
                        }}
                      />
                      <Tooltip />
                      <Bar dataKey="count" radius={[4, 4, 0, 0]} fill="#8b5cf6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="h-[240px] w-[240px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieChartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={0}
                          outerRadius={100}
                          paddingAngle={0}
                          dataKey="value"
                          stroke="#ffffff"
                          strokeWidth={0}
                          label={(props: PieLabelRenderProps) => {
                            const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props
                           
                            if (typeof percent !== "number" || percent < 0.15) return null

                            const RADIAN = Math.PI / 180
                            const safeInnerRadius = typeof innerRadius === "number" ? innerRadius : 0
                            const safeOuterRadius = typeof outerRadius === "number" ? outerRadius : 0
                            const safeCx = typeof cx === "number" ? cx : 0
                            const safeCy = typeof cy === "number" ? cy : 0
                            const safeMidAngle = typeof midAngle === "number" ? midAngle : 0

                           
                            const radius = safeInnerRadius + (safeOuterRadius - safeInnerRadius) * 0.3
                            const x = safeCx + radius * Math.cos(-safeMidAngle * RADIAN)
                            const y = safeCy + radius * Math.sin(-safeMidAngle * RADIAN)

                            return (
                              <text
                                x={x}
                                y={y}
                                fill="white"
                                textAnchor="middle"
                                dominantBaseline="central"
                                className="font-bold"
                                fontSize={12}
                              >
                                {`${(percent * 100).toFixed(0)}%`}
                              </text>
                            )
                          }}
                        >
                          {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-6 flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-purple-600" />
                      <span className="text-sm text-gray-500">Users</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                      <span className="text-sm text-gray-500">Posts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-orange-500" />
                      <span className="text-sm text-gray-500">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

         
          <Card className="bg-white rounded-lg shadow-sm border border-gray-100">
            <CardHeader className="pb-4">
              <CardTitle className="flex justify-center px-8 py-1 text-xl font-semibold text-gray-800">Activity</CardTitle>
              <CardDescription>
                <span className="flex justify-center text-sm text-gray-500">Recent users and posts</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TabsRoot defaultValue={activeTab} className="w-full">
                <TabsList role="tablist" className="flex justify-center gap-4 bg-white-100 rounded-lg p-2 mb-4">
                  <TabsTrigger
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'users'}
                    data-active={activeTab === 'users' ? '' : undefined}
                    onClick={() => setActiveTab('users')}
                    tabValue="users"
                    className="px-6 py-2 rounded-md text-sm font-medium transition-colors data-[active]:bg-purple data-[active]:text-purple-900 data-[active]:shadow-sm text-purple-600"
                  >
                    Users
                  </TabsTrigger>
                  <TabsTrigger
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'posts'}
                    data-active={activeTab === 'posts' ? '' : undefined}
                    onClick={() => setActiveTab('posts')}
                    tabValue="posts"
                    className="px-6 py-2 rounded-md text-sm font-medium transition-colors data-[active]:bg-purple data-[active]:text-purple-900 data-[active]:shadow-sm text-purple-600"
                  >
                    Posts
                  </TabsTrigger>
                </TabsList>
                <TabsContent role="tabpanel" tabValue="users" className={`space-y-4 px-2 ${activeTab === 'users' ? '' : 'hidden'}`}>
                  {usersData.map((user, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-lg border border-purple-200 p-4 transition-colors hover:bg-purple-50"
                    >
                      <Avatar className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <AvatarFallback className="bg-purple-100 text-sm font-semibold text-purple-700">
                          {user.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <p className="font-semibold leading-none text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.username}</p>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Mail size={12} />
                          <span>{user.email}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent role="tabpanel" tabValue="posts" className={`mt-4 px-2 ${activeTab === 'posts' ? '' : 'hidden'}`}>
                  <div className="text-center text-sm text-gray-500 py-8">No posts to display</div>
                </TabsContent>
              </TabsRoot>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
