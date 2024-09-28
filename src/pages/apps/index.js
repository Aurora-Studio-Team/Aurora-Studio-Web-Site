import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Card from "../../components/Card";
import Button from "../../components/Button";

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.centerTitle}>产品</h1>
      <br />
      <div className={styles.appsCard}>
        <Card
          title="Aurora Star Launcher"
          description="Fluent 风格的 Minecraft 启动器！"
          imageUrl="/img/apps/asl.png"
          button_1_content="官网"
          button_1_linkTo="https://asl.thzstudent.top"
          button_2_content="文档"
          button_2_linkTo="/docs/asl/"
        />
      </div>
      <br/>
    </Layout>
  );
}
