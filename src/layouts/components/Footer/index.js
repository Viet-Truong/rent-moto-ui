import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer
            className={cx("footerParent", "wrapper-footer")}
            id="wrapper-footer"
        >
            <footer className={cx("footer")} id="wrapper-footer">
                <div className={cx("title")}>
                    <div className={cx("logos")}>
                        <div className={cx("seraParent")}>
                            <b className={cx("sera")}>Travel with me</b>
                        </div>
                    </div>
                    <div className={cx("loremIpsumDolor")}>
                        Lorem ipsum dolor sit amet, consectetur adip
                        elit.Posuere dolor massa, pellentesque.
                    </div>
                </div>
                <div className={cx("socail")}>
                    <div className={cx("filllogosfacebookCircleFilWrapper")}>
                        <img
                            className={cx("filllogosfacebookCircleFilIcon")}
                            alt=""
                            src="/filllogosfacebookcirclefill.svg"
                        />
                    </div>
                    <div className={cx("filllogosfacebookCircleFilWrapper")}>
                        <img
                            className={cx("filllogosfacebookCircleFilIcon")}
                            alt=""
                            src="/filllogosinstagramfill.svg"
                        />
                    </div>
                    <div className={cx("filllogosfacebookCircleFilWrapper")}>
                        <img
                            className={cx("filllogosfacebookCircleFilIcon")}
                            alt=""
                            src="/filllogostwitterfill.svg"
                        />
                    </div>
                </div>
                <div className={cx("referencePage")}>
                    <div className={cx("referencePage1")}>Reference Page</div>
                    <div className={cx("styleGuide")}>Style Guide</div>
                    <div className={cx("styleGuide")}>Instructions</div>
                    <div className={cx("styleGuide")}>Licensing</div>
                    <div className={cx("styleGuide")}>Changelog</div>
                    <div className={cx("styleGuide")}>Style Guide</div>
                </div>
                <div className={cx("pages")}>
                    <div className={cx("referencePage1")}>Pages</div>
                    <div className={cx("styleGuide")}>Home Page</div>
                    <div className={cx("styleGuide")}>About us</div>
                    <div className={cx("styleGuide")}>Event</div>
                    <div className={cx("styleGuide")}>Contact</div>
                    <div className={cx("styleGuide")}>Contact</div>
                </div>
                <div className={cx("pages2")}>
                    <div className={cx("referencePage1")}>Pages</div>
                    <div className={cx("styleGuide")}>Home Page</div>
                    <div className={cx("styleGuide")}>About us</div>
                    <div className={cx("styleGuide")}>Event</div>
                    <div className={cx("styleGuide")}>Contact</div>
                    <div className={cx("styleGuide")}>About us</div>
                </div>
                <div className={cx("footerChild")} />
                <div className={cx("copyrightByVietContainer")}>
                    <span className={cx("copyright")}>© 2023 Copyright</span>
                    <span className={cx("byVietTruong")}> by Viet Truong</span>
                </div>
            </footer>
        </footer>
    );
}

export default Footer;
