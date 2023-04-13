import classNames from "classnames/bind";
import styles from "./Moto.module.scss";
import { Link } from "react-router-dom";

import Button from "../Button";

const cx = classNames.bind(styles);
function Car(props) {
    return (
        <div className={cx("product-card")}>
            <Link to={`/moto/${props.slug}`}>
                <div className={cx("product-card__image")}>
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </div>
                <h3 className={cx("product-card__name")}>{props.name}</h3>
                <div className={cx("product-card__price")}>
                    {/* {numberWithCommas(props.price)} */}
                    <span className={cx("product-card__price__old")}>
                        {props.price}
                    </span>
                </div>
            </Link>
            <div className={cx("product-card__btn")}>
                <Button
                    size="sm"
                    icon="bx bx-cart"
                    // animate={true}
                    primary
                    // onClick={() => dispatch(set(props.slug))}
                >
                    Thuê
                </Button>
            </div>
        </div>
    );
}

export default Car;
