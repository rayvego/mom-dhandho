"use client";

import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";

const orders = [
  {
    id: "1",
    photo: "/placeholder.svg?height=50&width=50",
    name: "Silk Saree",
    price: 15000,
    status: "completed",
    date: "2023-12-20",
    customer: {
      name: "Priya Sharma",
      contact: "+91 98765 43210",
    },
    paymentMethod: "UPI",
    notes: "Gift wrap requested",
  },
  {
    id: "2",
    photo: "/placeholder.svg?height=50&width=50",
    name: "Designer Kurti",
    price: 2500,
    status: "pending",
    date: "2023-12-19",
    customer: {
      name: "Anjali Patel",
      contact: "anjali@example.com",
    },
    paymentMethod: "Card",
    notes: "Size: M",
  },
  // Add more orders as needed
];

export function OrdersTable() {
  return (
    <div className="rounded-md border shadow-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead>Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Image src={order.photo} alt={order.name} width={50} height={50} className="rounded-md" />
                  <span>{order.name}</span>
                </div>
              </TableCell>
              <TableCell>{formatCurrency(order.price)}</TableCell>
              <TableCell>
                <Badge variant={order.status === "completed" ? "default" : "destructive"}>{order.status}</Badge>
              </TableCell>
              <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
              <TableCell>{order.customer.name}</TableCell>
              <TableCell>{order.customer.contact}</TableCell>
              <TableCell>{order.paymentMethod}</TableCell>
              <TableCell>{order.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
