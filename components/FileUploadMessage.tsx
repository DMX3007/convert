"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { File, Upload, X } from "lucide-react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

interface FileMessage {
  id: string
  name: string
  size: number
}

export default function Component({ onFilesUploaded }: { onFilesUploaded: (files: FileMessage[])  => void }) {
  const [files, setFiles] = useState<FileMessage[]>([])

  const onDrop = (acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
    }))
    setFiles((prevFiles) => [...prevFiles, ...newFiles])
		onFilesUploaded(newFiles);
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const removeFile = (id: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <Card className="mb-4">
        <CardContent>
          <div
            {...getRootProps()}
            className={`mt-6 p-8 border-2 border-dashed rounded-lg text-center cursor-pointer ${
              isDragActive ? "border-primary bg-primary/10" : "border-muted"
            }`}
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
            <p className="mt-2 text-sm text-muted-foreground">
              Drag &apos;n&apos; drop some files here, or click to select files
            </p>
          </div>
        </CardContent>
      </Card>
      <h2 className="text-2xl font-bold mb-4">Uploaded files</h2>
      <ScrollArea className="h-[200px] rounded-md border">
        {files.map((file) => (
          <Card key={file.id} className="mb-2 mx-2 mt-2">
            <CardContent className="flex items-center p-4">
              <File className="h-8 w-8 text-primary mr-4" />
              <div className="flex-grow">
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {formatFileSize(file.size)}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeFile(file.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </ScrollArea>
    </div>
  )
}