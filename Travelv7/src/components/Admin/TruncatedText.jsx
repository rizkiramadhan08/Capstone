const TruncatedText = ({ text, maxLength = 100 }) => {
  if (!text) return "";

  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  if (text.length <= maxLength) {
    return <>{text}</>;
  }

  return <>{truncatedText}</>;
};

export default TruncatedText;
