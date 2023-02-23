import styles from "./index.module.css";
import { TimePoint } from "@/src/components";
import { TimeLineTemplateProps } from "../type"


export const TimelineTemplate: React.FC<TimeLineTemplateProps> = ({ datas }) => {
  return (
    <div className={styles.inner}>
      <h1 className={styles.title}>制作物・実績</h1>
      {datas.map((data) => (
        <TimePoint data={data} key={data.title} />
      ))}
    </div>
  );
};
