export const formatSummaryTitle = (title: string) => {
  const maxLength = 25;
  // If the entire title is within the limit, return as-is
  if (title.length <= maxLength) return title;

  const lastDotIndex = title.lastIndexOf(".");

  // If there's a file extension
  if (lastDotIndex !== -1) {
    const name = title.substring(0, lastDotIndex);
    const extension = title.substring(lastDotIndex);

    // Check if truncation is actually needed
    if (name.length + extension.length <= maxLength) {
      return title;
    }
    const minNameLength = Math.max(1, maxLength - 3 - extension.length);

    // Truncate the name part, ensuring we don't go negative or truncate too much
    return `${name.substring(0, minNameLength)}...${extension}`;
  }

  // Default truncation if no file extension
  return `${title.substring(0, maxLength - 3)}...`;
};
