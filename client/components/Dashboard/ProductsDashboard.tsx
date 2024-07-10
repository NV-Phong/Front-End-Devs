"use client";
import Image from "next/image";

import Link from "next/link";
import {
   File,
   Home,
   LineChart,
   ListFilter,
   MoreHorizontal,
   Package,
   Package2,
   PanelLeft,
   PlusCircle,
   Search,
   Settings,
   ShoppingCart,
   User,
   Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import {
   DropdownMenu,
   DropdownMenuCheckboxItem,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@/components/ui/tooltip";
import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from "../ui/pagination";
import { DockDemo } from "../Custom/Dock";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import axios from "axios";
// import {product-demo} from'publ'
const SERVER_PORT = process.env.NEXT_PUBLIC_PORT;
export function ProductsDashboard() {
   const router = useRouter();
   const handleLogout = async () => {
      try {
         await axios.post(`${SERVER_PORT}Auth/Logout`, {
            withCredentials: true,
         });
         Cookies.remove("token");
         router.push("/Auth");
      } catch (error) {
         console.error("Logout Error:", error);
      }
   };

   return (
      <TooltipProvider>
         <div className="h-screen w-screen flex flex-col">
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
               <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                  <Link
                     href="#"
                     className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                  >
                     <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                     <span className="sr-only">Acme Inc</span>
                  </Link>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <Link
                           href="/"
                           // className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                           className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                           <Home className="h-5 w-5" />
                           <span className="sr-only">Dashboard</span>
                        </Link>
                     </TooltipTrigger>
                     <TooltipContent side="right">Dashboard</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <Link
                           href="/dashboard/orders"
                           className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                           <ShoppingCart className="h-5 w-5" />
                           <span className="sr-only">Orders</span>
                        </Link>
                     </TooltipTrigger>
                     <TooltipContent side="right">Orders</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <Link
                           href="/dashboard/products"
                           className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                           <Package className="h-5 w-5" />
                           <span className="sr-only">Products</span>
                        </Link>
                     </TooltipTrigger>
                     <TooltipContent side="right">Products</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <Link
                           href="#"
                           className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                           <Users2 className="h-5 w-5" />
                           <span className="sr-only">Customers</span>
                        </Link>
                     </TooltipTrigger>
                     <TooltipContent side="right">Customers</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <Link
                           href="#"
                           className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                           <LineChart className="h-5 w-5" />
                           <span className="sr-only">Analytics</span>
                        </Link>
                     </TooltipTrigger>
                     <TooltipContent side="right">Analytics</TooltipContent>
                  </Tooltip>
               </nav>
               <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <Link
                           href="#"
                           className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                           <Settings className="h-5 w-5" />
                           <span className="sr-only">Settings</span>
                        </Link>
                     </TooltipTrigger>
                     <TooltipContent side="right">Settings</TooltipContent>
                  </Tooltip>
               </nav>
            </aside>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
               <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                  <Sheet>
                     <SheetTrigger asChild>
                        <Button
                           size="icon"
                           variant="outline"
                           className="sm:hidden"
                        >
                           <PanelLeft className="h-5 w-5" />
                           <span className="sr-only">Toggle Menu</span>
                        </Button>
                     </SheetTrigger>
                     <SheetContent side="left" className="sm:max-w-xs">
                        <nav className="grid gap-6 text-lg font-medium">
                           <Link
                              href="#"
                              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                           >
                              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                              <span className="sr-only">Acme Inc</span>
                           </Link>
                           <Link
                              href="#"
                              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                           >
                              <Home className="h-5 w-5" />
                              Dashboard
                           </Link>
                           <Link
                              href="#"
                              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                           >
                              <ShoppingCart className="h-5 w-5" />
                              Orders
                           </Link>
                           <Link
                              href="#"
                              className="flex items-center gap-4 px-2.5 text-foreground"
                           >
                              <Package className="h-5 w-5" />
                              Products
                           </Link>
                           <Link
                              href="#"
                              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                           >
                              <Users2 className="h-5 w-5" />
                              Customers
                           </Link>
                           <Link
                              href="#"
                              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                           >
                              <LineChart className="h-5 w-5" />
                              Settings
                           </Link>
                        </nav>
                     </SheetContent>
                  </Sheet>
                  <Breadcrumb className="hidden md:flex">
                     <BreadcrumbList>
                        <BreadcrumbItem>
                           <BreadcrumbLink asChild>
                              <Link href="#">Dashboard</Link>
                           </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                           <BreadcrumbLink asChild>
                              <Link href="#">Products</Link>
                           </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                           <BreadcrumbPage>All Products</BreadcrumbPage>
                        </BreadcrumbItem>
                     </BreadcrumbList>
                  </Breadcrumb>
                  <DockDemo />
                  <div className="relative ml-auto flex-1 md:grow-0">
                     <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                     <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                     />
                  </div>
                  <DropdownMenu>
                     <DropdownMenuTrigger asChild>
                        <Button
                           variant="outline"
                           size="icon"
                           className="overflow-hidden rounded-full"
                        >
                           {/* <Image
                              src="/placeholder-user.jpg"
                              width={36}
                              height={36}
                              alt="Avatar"
                              className="overflow-hidden rounded-full"
                           /> */}
                           <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 opacity="0.4"
                                 d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z"
                                 fill="#292D32"
                              />
                              <path
                                 d="M11.9999 12.0001C13.2867 12.0001 14.3299 10.9569 14.3299 9.67004C14.3299 8.38322 13.2867 7.34009 11.9999 7.34009C10.7131 7.34009 9.66992 8.38322 9.66992 9.67004C9.66992 10.9569 10.7131 12.0001 11.9999 12.0001Z"
                                 fill="#292D32"
                              />
                              <path
                                 d="M14.6792 16.6601C15.4892 16.6601 15.9592 15.7601 15.5092 15.0901C14.8292 14.0801 13.5092 13.4001 11.9992 13.4001C10.4892 13.4001 9.16919 14.0801 8.48919 15.0901C8.03919 15.7601 8.50919 16.6601 9.31919 16.6601H14.6792Z"
                                 fill="#292D32"
                              />
                           </svg>
                        </Button>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                           Logout
                        </DropdownMenuItem>
                     </DropdownMenuContent>
                  </DropdownMenu>
               </header>
               <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                  <Tabs defaultValue="all">
                     <div className="flex items-center">
                        <TabsList>
                           <TabsTrigger value="all">All</TabsTrigger>
                           <TabsTrigger value="active">Active</TabsTrigger>
                           <TabsTrigger value="draft">Draft</TabsTrigger>
                           <TabsTrigger
                              value="archived"
                              className="hidden sm:flex"
                           >
                              Archived
                           </TabsTrigger>
                        </TabsList>
                        <div className="ml-auto flex items-center gap-2">
                           <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                 <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 gap-1"
                                 >
                                    <ListFilter className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                       Filter
                                    </span>
                                 </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                 <DropdownMenuLabel>
                                    Filter by
                                 </DropdownMenuLabel>
                                 <DropdownMenuSeparator />
                                 <DropdownMenuCheckboxItem checked>
                                    Active
                                 </DropdownMenuCheckboxItem>
                                 <DropdownMenuCheckboxItem>
                                    Draft
                                 </DropdownMenuCheckboxItem>
                                 <DropdownMenuCheckboxItem>
                                    Archived
                                 </DropdownMenuCheckboxItem>
                              </DropdownMenuContent>
                           </DropdownMenu>
                           <Button
                              size="sm"
                              variant="outline"
                              className="h-8 gap-1"
                           >
                              <File className="h-3.5 w-3.5" />
                              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                 Export
                              </span>
                           </Button>
                           <Button size="sm" className="h-8 gap-1">
                              <PlusCircle className="h-3.5 w-3.5" />
                              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                 Add Product
                              </span>
                           </Button>
                        </div>
                     </div>
                     <TabsContent value="all">
                        <Card x-chunk="dashboard-06-chunk-0">
                           <CardHeader>
                              <CardTitle>Products</CardTitle>
                              <CardDescription>
                                 Manage your products and view their sales
                                 performance.
                              </CardDescription>
                           </CardHeader>
                           <CardContent>
                              <Table>
                                 <TableHeader>
                                    <TableRow>
                                       <TableHead className="hidden w-[100px] sm:table-cell">
                                          <span className="sr-only">Image</span>
                                       </TableHead>
                                       <TableHead>Name</TableHead>
                                       <TableHead>Status</TableHead>
                                       <TableHead className="hidden md:table-cell">
                                          Price
                                       </TableHead>
                                       <TableHead className="hidden md:table-cell">
                                          Total Sales
                                       </TableHead>
                                       <TableHead className="hidden md:table-cell">
                                          Created at
                                       </TableHead>
                                       <TableHead>
                                          <span className="sr-only">
                                             Actions
                                          </span>
                                       </TableHead>
                                    </TableRow>
                                 </TableHeader>
                                 <TableBody>
                                    <TableRow>
                                       <TableCell className="hidden sm:table-cell">
                                          <Image
                                             alt="Product image"
                                             className="aspect-square rounded-md object-cover"
                                             height="64"
                                             // src="/product-demo.png"
                                             src="/product-demo.png"
                                             width="64"
                                          />
                                       </TableCell>
                                       <TableCell className="font-medium">
                                          Laser Lemonade Machine
                                       </TableCell>
                                       <TableCell>
                                          <Badge variant="outline">Draft</Badge>
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          $499.99
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          25
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          2023-07-12 10:42 AM
                                       </TableCell>
                                       <TableCell>
                                          <DropdownMenu>
                                             <DropdownMenuTrigger asChild>
                                                <Button
                                                   aria-haspopup="true"
                                                   size="icon"
                                                   variant="ghost"
                                                >
                                                   <MoreHorizontal className="h-4 w-4" />
                                                   <span className="sr-only">
                                                      Toggle menu
                                                   </span>
                                                </Button>
                                             </DropdownMenuTrigger>
                                             <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>
                                                   Actions
                                                </DropdownMenuLabel>
                                                <DropdownMenuItem>
                                                   Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                   Delete
                                                </DropdownMenuItem>
                                             </DropdownMenuContent>
                                          </DropdownMenu>
                                       </TableCell>
                                    </TableRow>
                                    <TableRow>
                                       <TableCell className="hidden sm:table-cell">
                                          <Image
                                             alt="Product image"
                                             className="aspect-square rounded-md object-cover"
                                             height="64"
                                             src="/product-demo.png"
                                             width="64"
                                          />
                                       </TableCell>
                                       <TableCell className="font-medium">
                                          Hypernova Headphones
                                       </TableCell>
                                       <TableCell>
                                          <Badge variant="outline">
                                             Active
                                          </Badge>
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          $129.99
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          100
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          2023-10-18 03:21 PM
                                       </TableCell>
                                       <TableCell>
                                          <DropdownMenu>
                                             <DropdownMenuTrigger asChild>
                                                <Button
                                                   aria-haspopup="true"
                                                   size="icon"
                                                   variant="ghost"
                                                >
                                                   <MoreHorizontal className="h-4 w-4" />
                                                   <span className="sr-only">
                                                      Toggle menu
                                                   </span>
                                                </Button>
                                             </DropdownMenuTrigger>
                                             <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>
                                                   Actions
                                                </DropdownMenuLabel>
                                                <DropdownMenuItem>
                                                   Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                   Delete
                                                </DropdownMenuItem>
                                             </DropdownMenuContent>
                                          </DropdownMenu>
                                       </TableCell>
                                    </TableRow>
                                    <TableRow>
                                       <TableCell className="hidden sm:table-cell">
                                          <Image
                                             alt="Product image"
                                             className="aspect-square rounded-md object-cover"
                                             height="64"
                                             src="/product-demo.png"
                                             width="64"
                                          />
                                       </TableCell>
                                       <TableCell className="font-medium">
                                          AeroGlow Desk Lamp
                                       </TableCell>
                                       <TableCell>
                                          <Badge variant="outline">
                                             Active
                                          </Badge>
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          $39.99
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          50
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          2023-11-29 08:15 AM
                                       </TableCell>
                                       <TableCell>
                                          <DropdownMenu>
                                             <DropdownMenuTrigger asChild>
                                                <Button
                                                   aria-haspopup="true"
                                                   size="icon"
                                                   variant="ghost"
                                                >
                                                   <MoreHorizontal className="h-4 w-4" />
                                                   <span className="sr-only">
                                                      Toggle menu
                                                   </span>
                                                </Button>
                                             </DropdownMenuTrigger>
                                             <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>
                                                   Actions
                                                </DropdownMenuLabel>
                                                <DropdownMenuItem>
                                                   Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                   Delete
                                                </DropdownMenuItem>
                                             </DropdownMenuContent>
                                          </DropdownMenu>
                                       </TableCell>
                                    </TableRow>
                                    <TableRow>
                                       <TableCell className="hidden sm:table-cell">
                                          <Image
                                             alt="Product image"
                                             className="aspect-square rounded-md object-cover"
                                             height="64"
                                             src="/product-demo.png"
                                             width="64"
                                          />
                                       </TableCell>
                                       <TableCell className="font-medium">
                                          TechTonic Energy Drink
                                       </TableCell>
                                       <TableCell>
                                          <Badge variant="secondary">
                                             Draft
                                          </Badge>
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          $2.99
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          0
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          2023-12-25 11:59 PM
                                       </TableCell>
                                       <TableCell>
                                          <DropdownMenu>
                                             <DropdownMenuTrigger asChild>
                                                <Button
                                                   aria-haspopup="true"
                                                   size="icon"
                                                   variant="ghost"
                                                >
                                                   <MoreHorizontal className="h-4 w-4" />
                                                   <span className="sr-only">
                                                      Toggle menu
                                                   </span>
                                                </Button>
                                             </DropdownMenuTrigger>
                                             <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>
                                                   Actions
                                                </DropdownMenuLabel>
                                                <DropdownMenuItem>
                                                   Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                   Delete
                                                </DropdownMenuItem>
                                             </DropdownMenuContent>
                                          </DropdownMenu>
                                       </TableCell>
                                    </TableRow>
                                    <TableRow>
                                       <TableCell className="hidden sm:table-cell">
                                          <Image
                                             alt="Product image"
                                             className="aspect-square rounded-md object-cover"
                                             height="64"
                                             src="/product-demo.png"
                                             width="64"
                                          />
                                       </TableCell>
                                       <TableCell className="font-medium">
                                          Gamer Gear Pro Controller
                                       </TableCell>
                                       <TableCell>
                                          <Badge variant="outline">
                                             Active
                                          </Badge>
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          $59.99
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          75
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          2024-01-01 12:00 AM
                                       </TableCell>
                                       <TableCell>
                                          <DropdownMenu>
                                             <DropdownMenuTrigger asChild>
                                                <Button
                                                   aria-haspopup="true"
                                                   size="icon"
                                                   variant="ghost"
                                                >
                                                   <MoreHorizontal className="h-4 w-4" />
                                                   <span className="sr-only">
                                                      Toggle menu
                                                   </span>
                                                </Button>
                                             </DropdownMenuTrigger>
                                             <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>
                                                   Actions
                                                </DropdownMenuLabel>
                                                <DropdownMenuItem>
                                                   Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                   Delete
                                                </DropdownMenuItem>
                                             </DropdownMenuContent>
                                          </DropdownMenu>
                                       </TableCell>
                                    </TableRow>
                                    <TableRow>
                                       <TableCell className="hidden sm:table-cell">
                                          <Image
                                             alt="Product image"
                                             className="aspect-square rounded-md object-cover"
                                             height="64"
                                             src="/product-demo.png"
                                             width="64"
                                          />
                                       </TableCell>
                                       <TableCell className="font-medium">
                                          Luminous VR Headset
                                       </TableCell>
                                       <TableCell>
                                          <Badge variant="outline">
                                             Active
                                          </Badge>
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          $199.99
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          30
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          2024-02-14 02:14 PM
                                       </TableCell>
                                       <TableCell>
                                          <DropdownMenu>
                                             <DropdownMenuTrigger asChild>
                                                <Button
                                                   aria-haspopup="true"
                                                   size="icon"
                                                   variant="ghost"
                                                >
                                                   <MoreHorizontal className="h-4 w-4" />
                                                   <span className="sr-only">
                                                      Toggle menu
                                                   </span>
                                                </Button>
                                             </DropdownMenuTrigger>
                                             <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>
                                                   Actions
                                                </DropdownMenuLabel>
                                                <DropdownMenuItem>
                                                   Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                   Delete
                                                </DropdownMenuItem>
                                             </DropdownMenuContent>
                                          </DropdownMenu>
                                       </TableCell>
                                    </TableRow>
                                 </TableBody>
                              </Table>
                           </CardContent>
                           <CardFooter>
                              <div className="text-xs text-muted-foreground">
                                 Showing <strong>1-10</strong> of{" "}
                                 <strong>32</strong> products
                              </div>
                              <Pagination className="mr-10">
                                 <PaginationContent>
                                    <PaginationItem>
                                       <PaginationPrevious href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                       <PaginationLink href="#">
                                          1
                                       </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                       <PaginationLink href="#" isActive>
                                          2
                                       </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                       <PaginationLink href="#">
                                          3
                                       </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                       <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                       <PaginationNext href="#" />
                                    </PaginationItem>
                                 </PaginationContent>
                              </Pagination>
                           </CardFooter>
                        </Card>
                     </TabsContent>
                  </Tabs>
               </main>
            </div>
         </div>
      </TooltipProvider>
   );
}
