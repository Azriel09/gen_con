import styles from "./Category.module.css";
import { Link } from "react-router-dom";

interface CategoryTypes {
  id: string;
  description: string;
  label: string;
  formats: string[];
}

export default function Category() {
  const categories: CategoryTypes[] = [
    {
      id: "audio_converter",
      description: "Convert audio to different formats",
      label: "Audio Converter",
      formats: [
        "AAC",
        "AIFF",
        "FLAC",
        "M4A",
        "M4R",
        "MMF",
        "MP3",
        "OGG",
        "OPUS",
        "WAV",
        "WMA",
      ],
    },
    {
      id: "video_converter",
      description: "Convert video to different formats",
      label: "Video Converter",
      formats: [
        "3G2",
        "3GP",
        "AVI",
        "FLV",
        "MKV",
        "MOV",
        "MP4",
        "MPG",
        "OGV",
        "WEBM",
        "WMV",
      ],
    },
    {
      id: "image_converter",
      description: "Convert image to different formats",
      label: "Image Converter",
      formats: [
        "BMP",
        "EPS",
        "HDR/EXR",
        "GIF",
        "ICO",
        "JPG",
        "PNG",
        "SVG",
        "TGA",
        "TIFF",
        "WBMP",
        "WebP",
      ],
    },
    {
      id: "document_converter",
      description: "Convert document to different formats",
      label: "Document Converter",
      formats: [
        "DOC",
        "ODT",
        "HTML",
        "ODT",
        "PDF",
        "PPT",
        "PPTX",
        "TXT",
        "XLSX",
      ],
    },
  ];

  const handleCategoryClick = () => {
    console.log("clicked");
  };
  return (
    <>
      {" "}
      <div className={styles.category}>
        <div className={styles.category_container}>
          {categories.map((category, i) => {
            return (
              <Link
                key={i}
                className={styles.category_wrapper}
                onClick={() => handleCategoryClick()}
                to="convert"
              >
                <div className={styles.category_name}>{category.label}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
