"use client"

import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react"
import { useState, useTransition } from "react"
import Dropzone,  { FileRejection } from "react-dropzone"

const UploadPage = () => {
    const [isDragOver, setIsDragOver] = useState<boolean>(false)
    const [isUploading, setIsUpLoading] = useState<boolean>(false)
    const [uploadProgress, setUploadProgress] = useState<number>(0)
    const [isPending, startTransistion] = useTransition()
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
                    {({ getRootProps, getInputProps }) => (
                        <div 
                            className="h-full w-full flex flex-1 flex-col items-center justify-center" 
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            {isDragOver ? 
                                <MousePointerSquareDashed className="h-6 w-6 text-zinc-500 mb-2" />: 
                                isUploading || isPending ? 
                                    <Loader2 className="animate-spin h-6 w-6 text-zinc-500" />: 
                                    <Image className="h-6 w-6 text-zinc-500 mb-2" />
                            }
                            <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
                                {isUploading ? ( 
                                    <div className="flex flex-col items-center">
                                        <p>Uploading ...</p>
                                        <Progress 
                                            value={uploadProgress} 
                                            className="mt-2 w-40 h-2 bg-gray-300" 
                                        />
                                    </div>
                                ): (
                                    isPending ? (
                                        <div className="flex flex-col items-center">
                                            <p>Redirecting , please wait...</p>
                                        </div> 
                                    ): (
                                        isDragOver ? (
                                            <p>
                                                <span className="font-semibold">Drop File</span>{' '}
                                                to upload
                                            </p>
                                        ): (
                                            <p>
                                                <span className="font-semibold">Click To upload</span>{' '}
                                                or drag and drop
                                            </p>
                                        )
                                    )
                                )}
                            </div>

                            {isPending ? null : (
                                <p className="text-xs text-zinc-500">PNG, JPEG, JPG</p>
                            )}
                        </div>
                    )}
                </Dropzone>
            </div>
        </div>
    )
}

export default UploadPage
