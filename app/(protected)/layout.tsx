import { UploadHeader } from "@/components/upload/upload-header";

export default function SummaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UploadHeader />
      {children}
    </>
  );
}
