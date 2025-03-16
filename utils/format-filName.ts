export const formatFileNameToTitle = (fileName: string): string => {
  return fileName
    .replace(/\.pdf$/i, "") // Remove .pdf extension
    .split(" ") // Split words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
    .join(" "); // Join words back
};
