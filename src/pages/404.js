import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './404.module.css';
import Button from '../components/Button'

export default function Home() {
  return (
    <Layout>
      <div className={styles.mainBox}>
        <br/>
        <Heading as="h1">
          Error 404 !
        </Heading>
        <p>
          在广阔的世界里, 你却迷失了方向。
        </p>
        <div className={styles.imgBox}>
          <img className={styles.imgBox} src="/img/website/01.png"/>
        </div>
        <br/>
        <Button 
        content='返回首页'
        linkTo='/'
        />
        <br/>
      </div>
    </Layout>
  );
}
