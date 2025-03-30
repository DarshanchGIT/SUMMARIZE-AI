export const formatSummmaryTitle = (title: string) => {
  const maxLength = 25;
  if (title.length <= maxLength) return title;

  // Split filename and extension for better truncation
  const lastDotIndex = title.lastIndexOf(".");

  if (lastDotIndex !== -1) {
    const name = title.substring(0, lastDotIndex);
    const extension = title.substring(lastDotIndex);

    if (name.length > maxLength - 3 - extension.length) {
      return `${name.substring(
        0,
        maxLength - 3 - extension.length
      )}...${extension}`;
    }
  }

  // Simple truncation if not a file with extension
  return `${title.substring(0, maxLength - 3)}...`;
};
