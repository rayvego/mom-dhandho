import { OrdersTable } from "@/components/OrdersTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedCounter from "@/components/AnimatedCounter";
import DoughnutChart from "@/components/DoughnutChart";

const orderData = {
  datasets: [
    {
      label: "Orders",
      data: [300, 50, 100],
      backgroundColor: ["#074766", "#2265d8", "#2f91fa"],
    },
  ],
  labels: ["Sarees", "Kurtis", "Lehengas"],
};

const inventoryData = {
  datasets: [
    {
      label: "Inventory",
      data: [100, 50, 200],
      backgroundColor: ["#074766", "#2265d8", "#2f91fa"],
    },
  ],
  labels: ["Sarees", "Kurtis", "Lehengas"],
}

export default function Dashboard() {
  return (
    <div className="min-h-screen p-8 space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Orders Chart */}
        <div className="shadow-xl">
          <Card>
            <CardHeader>
              <CardTitle>Total Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center">
                <DoughnutChart data={orderData} />
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Inventory Card */}
        <div className="shadow-xl">
          <Card>
            <CardHeader>
              <CardTitle>Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center">
                <DoughnutChart data={inventoryData} />
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Revenue Card */}
        <div className="shadow-xl">
          <Card>
            <CardHeader>
              <CardTitle>Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">
                <AnimatedCounter amount={1200000} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="rounded-lg border bg-card">
        <div className="p-6">
          <h2 className="text-2xl font-semibold">Order History</h2>
        </div>
        <OrdersTable />
      </div>
    </div>
  );
}
