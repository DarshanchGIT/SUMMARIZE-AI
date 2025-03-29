export const summaryUtility = (summaryText: string) => ({
  parseSummaryText: () => {
    // Split sections using `# ` but keep the delimiter for extracting titles
    const sections = summaryText.split(/\n# /).map((s) => s.trim());

    return sections.map((section) => {
      // Extract title (first line)
      const [title, ...contentLines] = section.split("\n");
      const description = contentLines.join("\n").trim();

      // Regex to split descriptions at emoji-based points
      const points =
        description.match(/(\s*[🎯📌📃👥🚀⭐💫💡💪🔥💎✨📚🔎].+)/gu) || [];

      return {
        title: title.trim(),
        description: points.map((point) => point.trim()), // Store as array of split points
      };
    });
  },

  // Counts the number of words in the summary text
  summaryWordCount: () => {
    return summaryText
      .replace(/[#.]/g, "") // Remove # and . used as list markers
      .replace(/\n+/g, " ") // Replace new lines with a single space
      .replace(/\s+/g, " ") // Remove extra spaces
      .trim() // Trim leading/trailing spaces
      .split(/\s+/).length; // Correct word count calculation
  },
});
