"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Download, Eye, File } from "lucide-react";
import { useState } from "react";

interface ConvertedFile {
  id: string
  name: string
  size: number
  url: string
  type: string
}

export default function Component() {
  const [convertedFiles, setConvertedFiles] = useState<ConvertedFile[]>([
    { id: "1", name: "Document1.pdf", size: 1024000, url: "/files/document1.pdf", type: "application/pdf" },
    // { id: "2", name: "Image1.jpg", size: 2048000, url: "/files/image1.jpg", type: "image/jpeg" },
    // { id: "3", name: "Spreadsheet1.xlsx", size: 512000, url: "/files/spreadsheet1.xlsx", type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" },
  ])

  const [selectedFile, setSelectedFile] = useState<ConvertedFile | null>(null)

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const handleView = (file: ConvertedFile) => {
    setSelectedFile(file)
  }

  const handleDownload = (file: ConvertedFile) => {
    // In a real application, you would implement the download logic here
    console.log(`Downloading file: ${file.name}`)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 flex">
      <div className="w-1/2 pr-4">
        <h2 className="text-2xl font-bold mb-4">Converted Files</h2>
        <ScrollArea className="h-[400px] rounded-md border">
          {convertedFiles.map((file) => (
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
                  onClick={() => handleView(file)}
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDownload(file)}
                >
                  <Download className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </ScrollArea>
      </div>
      <div className="w-1/2 pl-4">
        <h2 className="text-2xl font-bold mb-4">File Preview</h2>
        <Card className="h-[400px]">
          <CardContent className="p-4 h-full">
            {selectedFile ? (
              selectedFile.type.startsWith("image/") ? (
                <img
                  src={selectedFile.url}
                  alt={selectedFile.name}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <iframe
                  src={selectedFile.url}
                  title={selectedFile.name}
                  className="w-full h-full"
                />
              )
            ) : (
              <div className="flex text-center items-center justify-center h-full text-muted-foreground">
                Select a file to preview
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}