import styles from "./Convert.module.css";
import DragNDrop from "./DragNDrop";
export default function ConvertWrapper() {
  return (
    <>
      <div className={styles.convert_container}>
        <DragNDrop />
      </div>
    </>
  );
}
