"use client";
import axios from "axios";
import { useState } from "react";
import { getPresignedUrl } from "@/actions/products.actions";
import { CLOUDFRONT_URL } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ImagePlus, Loader2 } from "lucide-react";
import { Input } from "../ui/input";

export function UploadImage({ onImageAdded, image }: { onImageAdded: (image: string) => void; image?: string }) {
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  async function onFileSelect(e: any) {
    setUploading(true);
    try {
      const file = e.target.files?.[0];
      if (!file) return;

      const response = await getPresignedUrl();
      const presignedUrl = response.preSignedUrl;
      const formData = new FormData();
      formData.set("bucket", response.fields["bucket"]);
      formData.set("X-Amz-Algorithm", response.fields["X-Amz-Algorithm"]);
      formData.set("X-Amz-Credential", response.fields["X-Amz-Credential"]);
      formData.set("X-Amz-Algorithm", response.fields["X-Amz-Algorithm"]);
      formData.set("X-Amz-Date", response.fields["X-Amz-Date"]);
      formData.set("key", response.fields["key"]);
      formData.set("Policy", response.fields["Policy"]);
      formData.set("X-Amz-Signature", response.fields["X-Amz-Signature"]);
      formData.set("X-Amz-Algorithm", response.fields["X-Amz-Algorithm"]);
      formData.append("file", file);

      await axios.post(presignedUrl, formData);
      onImageAdded(`${CLOUDFRONT_URL}/${response.fields["key"]}`);
    } catch (e) {
      console.log(e);
    }
    setUploading(false);
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files?.[0]) {
      const event = { target: { files: [files[0]] } } as any;
      await onFileSelect(event);
    }
  };

  if (image) {
    return (
      <div className="relative group w-full h-full min-h-40">
        <img className="w-full h-full object-cover rounded-md" src={image} alt="Uploaded image" />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
          <p className="text-white text-sm">Image uploaded</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`
        relative w-full h-full
        rounded-md border-dashed
        ${dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"}
        transition-colors duration-200
        flex items-center justify-center
        cursor-pointer
        overflow-hidden
      `}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <Input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={onFileSelect}
        accept="image/*"
      />

      <div className="flex flex-col items-center gap-2 p-4 text-center">
        {uploading ? (
          <>
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Uploading image...</p>
          </>
        ) : (
          <>
            <ImagePlus className="h-8 w-8 text-muted-foreground" />
            <div className="flex flex-col gap-1">
              <p className="text-sm text-muted-foreground">Drag drop or click to upload</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
