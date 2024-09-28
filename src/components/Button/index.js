import styles from "./styles.module.css"
import Link from '@docusaurus/Link';

const Button = ({linkTo, content})=>{
    return(
        <div className="styles.buttons">
          <Link
            className="button button--secondary button--lg"
            to={linkTo}>
            {content}
          </Link>
        </div>
    )
}

export default Button;