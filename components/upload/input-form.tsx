"use client";

import { useState } from "react";
import { TypewriterEffect } from "./typewriter-effect";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Upload } from "lucide-react";
import { fileSchema } from "@/types/uploaded-file";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
import { generateSummary, storePdfSummary } from "@/actions/generate-summary";
import { formatFileNameToTitle } from "@/utils/format-filName";

export const UploadDiv = () => {
    const [fileName, setFileName] = useState("");
    const [loading, setLoading] = useState(false);

    const { startUpload } = useUploadThing("pdfUploader");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setFileName(file.name);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const file = formData.get("file") as File;

        const { success } = fileSchema.safeParse({ file });
        if (!success) {
            toast.error("Invalid file. Please upload a valid PDF.");
            setLoading(false);
            return;
        }

        const pdfUploading = toast.loading("Uploading your PDF...🙃");
        try {
            const uploadResponse = await startUpload([file]);
            toast.dismiss(pdfUploading);

            if (!uploadResponse?.length) {
                toast.error("Upload failed. Please try again.");
                return;
            }

            const serverData = uploadResponse[0].serverData;
            if (!serverData) {
                toast.error("Server response is invalid.");
                return;
            }

            const summaryGenerateToast = toast.loading("Generating summary...🙂");
            const response = await generateSummary(serverData);
            toast.dismiss(summaryGenerateToast);

            if (!response.success) {
                toast.error(response.message || "Failed to generate summary.");
                return;
            }

            const { file: { name, url } } = serverData;
            const title = formatFileNameToTitle(name)
            await storePdfSummary({
                title: title,
                summaryText: response.summary || '',
                fileName: name,
                originalFileUrl: url,
            });

            toast.success("Summary generated successfully✨");
        } catch (error) {
            toast.dismiss(pdfUploading);
            toast.error("An error occurred. Please try again.");
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-[50vh] p-6">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8 space-y-6">
                <TypewriterEffect
                    words={[{ text: "Start" }, { text: "Uploading" }, { text: "your" }, { text: "PDFs" }]}
                    className="text-center text-3xl font-bold"
                />
                <p className="text-center text-sm text-gray-600">
                    Upload your PDF and let our AI do the magic ✨
                </p>
                <form className="flex flex-col sm:flex-row gap-4 items-center w-full" onSubmit={handleSubmit}>
                    <label className="w-full sm:max-w-md">
                        <Input id="file" type="file" name="file" className="hidden" onChange={handleFileChange} />
                        <div className="w-full text-center border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
                            {fileName || "Choose File"}
                        </div>
                    </label>
                    <Button
                        type="submit"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg cursor-pointer min-w-[120px]"
                        disabled={loading}
                    >
                        {loading ? <Spinner /> : <><span>Upload</span><Upload size={18} /></>}
                    </Button>
                </form>
            </div>
        </div>
    );
};
