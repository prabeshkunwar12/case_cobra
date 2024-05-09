"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"
import Dropzone,  { FileRejection } from "react-dropzone"

const UploadPage = () => {
    const [isDragOver, setIsDragOver] = useState<boolean>(false)
    const onDropRejected = () => {}
    const onDropAccepted = () => {}
    return (
        <div 
            className={
                cn(
                    "relative h-full w-full flex-1 my-16 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex flex-col justify-center items-center",
                    {
                        "ring-blue-900/25 bg-blue-900/10": isDragOver,
                    }
                )
            }
        >
            <div className="relative flex flex-1 flex-col items-center justify-center w-full">
                <Dropzone 
                    onDropRejected={onDropRejected} 
                    onDropAccepted={onDropAccepted}
                    accept={{ 
                        "image/png": [".png"],
                        "image/jpg": [".jpg"],
                        "image/jpeg": [".jpeg"],
                    }}
                    onDragEnter={() => setIsDragOver(true)}
                    onDragLeave={() => setIsDragOver(false)}
                >
                    {({getRootProps, getInputProps}) => (
                        <div className="h-full w-full flex flex-1 flex-col items-center justify-center" {...getRootProps()}>
                            <input {...getInputProps} />
                        </div>
                    )}
                </Dropzone>
            </div>
        </div>
    )
}

export default UploadPage
