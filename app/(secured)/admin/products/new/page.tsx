import { ProductForm } from "@/components/product/ProductForm";

export default function NewProduct() {
  return (
    <div className="flex flex-col">
      <header className="border-b p-6">
        <h1 className="text-2xl font-semibold">New Product</h1>
      </header>
      <main>
          <ProductForm />
      </main>
    </div>
  );
}
