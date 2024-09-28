import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import { Button } from 'antd';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <div className={styles.heroBar}>
        <div className={styles.heroText}>
        <br />
        <br />
        <br />
        <h1>
          创意无界，
          <br />
          软件定义未来。
        </h1>
        <br />
        <p>
          使用由 Aurora Studio 提供的各种服务，帮助您高效地完成各种繁杂琐事。
          <br /> 我们涉及的领域包括 Web 开发、.NET 应用开发。
        </p>
        <br />
        </div>
        <Button type="primary" size="large">
          文档
        </Button>
        <br />
        <br />
        <br />
        <p>了解产品请继续浏览此页面</p>
        <br/>
        <br/>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
